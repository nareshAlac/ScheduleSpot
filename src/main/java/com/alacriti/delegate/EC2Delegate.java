package com.alacriti.delegate;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.quartz.JobBuilder;
import org.quartz.JobDataMap;
import org.quartz.JobDetail;
import org.quartz.Scheduler;
import org.quartz.SchedulerException;
import org.quartz.SimpleTrigger;
import org.quartz.TriggerBuilder;

import com.alacriti.constants.AppConstants;
import com.alacriti.model.Instance;
import com.alacriti.model.SpIn;
import com.alacriti.rest.bo.EC2BO;
import com.alacriti.scheduleservice.job.SpInCheckTwoMinsJob;
import com.alacriti.scheduleservice.scheduler.SpInScheduler;
import com.alacriti.utils.AWSClientFactory;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.ec2.AmazonEC2;
import com.amazonaws.services.ec2.model.DescribeSpotInstanceRequestsRequest;
import com.amazonaws.services.ec2.model.DescribeSpotInstanceRequestsResult;
import com.amazonaws.services.ec2.model.LaunchSpecification;
import com.amazonaws.services.ec2.model.RequestSpotInstancesRequest;
import com.amazonaws.services.ec2.model.RequestSpotInstancesResult;
import com.amazonaws.services.ec2.model.SpotInstanceRequest;
import com.amazonaws.services.ec2.model.SpotInstanceStatus;

public class EC2Delegate extends BaseDelegate
{
	private static final long ONE_MINUTE_IN_MILLIS = 60000;

	public SpIn processSpInRequest(SpIn spIn)
	{
		spIn = insertSpInUtReq(spIn);
		if (spIn == null || spIn.getSpInUtReqId() == 0)
		{
			System.out.println("Failed to request SpIn");
			return spIn;
		}
		requestAwsToSpIn(spIn);
		return spIn;
	}

	public SpIn requestAwsToSpIn(SpIn spIn)
	{

		/*AWS request Object Preparation*/
		// Create the AmazonEC2 client so we can call various APIs.
		AmazonEC2 ec2 = AWSClientFactory.getEC2Client();

		// Initializes a Spot Instance Request
		RequestSpotInstancesRequest requestRequest = new RequestSpotInstancesRequest();

		// Request 1 x t1.micro instance with a bid price of $0.03.
		requestRequest.setSpotPrice(spIn.getPrice());
		requestRequest.setInstanceCount(spIn.getInstanceCapacity());

		// Setup the specifications of the launch. This includes the
		// instance type (e.g. t1.micro) and the latest Amazon Linux
		// AMI id available. Note, you should always use the latest
		// Amazon Linux AMI id or another of your choosing.
		LaunchSpecification launchSpecification = new LaunchSpecification();
		launchSpecification.setImageId(spIn.getAmiId());
		launchSpecification.setInstanceType(spIn.getInstanceType());
		launchSpecification.setKeyName(spIn.getKeyName());

		// Add the security group to the request.
		ArrayList<String> securityGroups = new ArrayList<String>();
		securityGroups.add(spIn.getSecGrpId());
		launchSpecification.setSecurityGroups(securityGroups);

		// Add the launch specifications to the request.
		requestRequest.setLaunchSpecification(launchSpecification);

		// Call the RequestSpotInstance API.
		RequestSpotInstancesResult requestResult = ec2.requestSpotInstances(requestRequest);

		//Fetching AWS response details
		List<SpotInstanceRequest> requestResponses = requestResult.getSpotInstanceRequests();

		// Setup an arraylist to collect all of the request ids we want to
		// watch hit the running state.
		ArrayList<String> spotInstanceRequestIds = new ArrayList<String>();

		// Add all of the request ids to the hashset, so we can determine when they hit the
		// active state.
		for(SpotInstanceRequest requestResponse : requestResponses)
		{
			System.out.println("Created Spot Request: " + requestResponse.getSpotInstanceRequestId());
			spotInstanceRequestIds.add(requestResponse.getSpotInstanceRequestId());
		}

		try
		{
			scheduleSpInCheck(spotInstanceRequestIds, spIn);
		}
		catch (SchedulerException e)
		{
			e.printStackTrace();
		}

		return spIn;
	}

	public SpIn checkSpInStatus(List<String> requestIds, SpIn spIn)
	{

		// Create the AmazonEC2 client so we can call various APIs.
		AmazonEC2 ec2 = AWSClientFactory.getEC2Client();
		// Create the describeRequest object with all of the request ids
		// to monitor (e.g. that we started).
		DescribeSpotInstanceRequestsRequest describeRequest = new DescribeSpotInstanceRequestsRequest();
		describeRequest.setSpotInstanceRequestIds(requestIds);

		List<String> pendingReqs = new ArrayList();

		try
		{
			// Retrieve all of the requests we want to monitor.
			DescribeSpotInstanceRequestsResult describeResult = ec2.describeSpotInstanceRequests(describeRequest);
			List<SpotInstanceRequest> describeResponses = describeResult.getSpotInstanceRequests();

			// Look through each request and determine if they are all in
			// the active state.
			for(SpotInstanceRequest describeResponse : describeResponses)
			{
				String state = describeResponse.getState();
				SpotInstanceStatus status = describeResponse.getStatus();
				if (state.equals("open"))
				{

					System.out.println("**************INSTANCE OPEN STATUS******************id"+describeResponse.getSpotInstanceRequestId());
					pendingReqs.add(describeResponse.getSpotInstanceRequestId());

				}
				else
				{
					System.out.println("**************INSTANCE (ACTTIVE/EXPIRED) STATUS******************id"+describeResponse.getSpotInstanceRequestId());
					Instance ins = new Instance();
					ins.setSpInAWSReqId(describeResponse.getSpotInstanceRequestId());
					//ins.setSpInId(describeResponse.getInstanceId());
					ins.setSpInUtReqId(spIn.getSpInUtReqId());
					if (state.equals("active"))
						ins.setStatus(AppConstants.INSTANCE_STATUS_ACTIVE);
					else
						ins.setStatus(AppConstants.INSTANCE_STATUS_EXPIRED);
					ins.setType(describeResponse.getType());
					ins.setPrice(describeResponse.getSpotPrice());
					insertIntoSpinInstance(ins);
				}
			}
		}
		catch (AmazonServiceException e)
		{
			System.out.println("SpIn Check Failed at AWS with exception " + e.getCause());
		}

		try
		{
			if (pendingReqs.size() > 0)
			{
				System.out.println("**************Scheduling 2 mins job as instances are not initalized by AWS********** ");
				scheduleSpInCheck(pendingReqs, spIn);
			}
		}
		catch (SchedulerException e)
		{
			e.printStackTrace();
		}

		return spIn;
	}

	public void scheduleSpInCheck(List<String> requestIds, SpIn spIn) throws SchedulerException
	{
		System.out.println("Started scheduling SpinCheck");
		// define the job and tie it to our SpInReqJob class
		Calendar date = Calendar.getInstance();
		long t = date.getTimeInMillis();
		System.out.println(new Date().toString());
		Date twoMinsSchedule = new Date(t + (2 * ONE_MINUTE_IN_MILLIS));
		// Build a trigger for a specific moment in time, with no repeats
		System.out.println("Scheduled 2minGroup Job At " + twoMinsSchedule.toString());
		Scheduler scheduler = SpInScheduler.getScheduler();
		JobDataMap newJobDataMap = new JobDataMap();
		newJobDataMap.put("AWS_REQ_IDS", requestIds);
		JobDetail job = JobBuilder.newJob(SpInCheckTwoMinsJob.class).setJobData(newJobDataMap)
				.withIdentity(spIn.getSpInUtReqId() + "", "2minGroup").build();
		SimpleTrigger trigger = (SimpleTrigger) TriggerBuilder.newTrigger()
				.withIdentity(spIn.getSpInUtReqId() + "trigger", spIn.getSpInUtReqId() + "").startAt(twoMinsSchedule)
				.build();
		scheduler.scheduleJob(job, trigger);

		//Trigger trigger = TriggerBuilder.newTrigger().withIdentity("trigger1", "group1").startAt(twoMinsSchedule)
		//		.build();

	}

	public List<SpIn> getSpInReqs()
	{
		List<SpIn> spIns = new ArrayList<SpIn>();
		Connection connection = null;
		try
		{
			connection = startDBTransaction();
			EC2BO ec2BO = new EC2BO();
			spIns = ec2BO.getSpInReqs(connection);
			System.out.println("Got " + spIns.size() + " Reqs");
		}
		catch (Exception exp)
		{
			System.out.println("Error in Checking SpIns" + exp);
		}
		finally
		{
			if(connection!=null)
				endDBTransaction(connection);
		}
		return spIns;
	}

	public SpIn insertSpInUtReq(SpIn spIn)
	{
		Connection connection = null;
		try
		{
			 connection = startDBTransaction();
			EC2BO ec2BO = new EC2BO();
			return ec2BO.insertSpInUtReq(spIn, connection);
		}
		catch (Exception e)
		{
			System.out.println("Error in Inserting SpInUtReq " + e);
		}
		finally
		{
			if(connection!=null)
				endDBTransaction(connection);
		}
		return null;
	}

	public void insertIntoSpinInstance(Instance spIn)
	{
		
		Connection connection = null;

		try
		{
			connection = startDBTransaction();
			EC2BO ec2BO = new EC2BO();
			ec2BO.insertSpinInstance(spIn, connection);
		}
		catch (Exception e)
		{
			System.out.println("Error in Inserting SpIn " + e);
		}
		finally
		{
			if(connection!=null)
				endDBTransaction(connection);
		}
	}
}
