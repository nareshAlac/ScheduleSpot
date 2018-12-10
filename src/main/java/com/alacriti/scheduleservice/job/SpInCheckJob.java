package com.alacriti.scheduleservice.job;

import java.util.ArrayList;
import java.util.Date;

import org.quartz.Job;
import org.quartz.JobDataMap;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;

import com.alacriti.delegate.EC2Delegate;
import com.alacriti.model.SpIn;

public class SpInCheckJob implements Job
{

	@Override
	public void execute(JobExecutionContext context) throws JobExecutionException
	{
		String spInUtId = context.getJobDetail().getKey().getName();
		String awsSpInReqId = context.getJobDetail().getKey().getGroup();
		System.out.println("Hi There !! This is a spin check for " + awsSpInReqId + ":" + spInUtId);
		System.out.println(new Date().toString());
		JobDataMap dataMap = context.getJobDetail().getJobDataMap();
		ArrayList<String> requestIds = (ArrayList<String>) dataMap.get("AWS_REQ_IDS");
		EC2Delegate ec2Delegate = new EC2Delegate();
		SpIn spIn = new SpIn();
		spIn.setSpInUtReqId(Integer.parseInt(spInUtId));
		ec2Delegate.checkSpInStatus(requestIds, spIn);

	}

}
