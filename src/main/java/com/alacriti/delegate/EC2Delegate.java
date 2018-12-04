package com.alacriti.delegate;

import java.util.ArrayList;
import java.util.List;

import com.alacriti.model.SpIn;
import com.alacriti.utils.AWSClientFactory;
import com.amazonaws.services.ec2.AmazonEC2;
import com.amazonaws.services.ec2.model.LaunchSpecification;
import com.amazonaws.services.ec2.model.RequestSpotInstancesRequest;
import com.amazonaws.services.ec2.model.RequestSpotInstancesResult;
import com.amazonaws.services.ec2.model.SpotInstanceRequest;

public class EC2Delegate {

	public SpIn requestSpIn(SpIn spIn) {
		
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

		// Add the security group to the request.
		ArrayList<String> securityGroups = new ArrayList<String>();
		securityGroups.add(spIn.getSecGrpId());
		launchSpecification.setSecurityGroups(securityGroups);

		// Add the launch specifications to the request.
		requestRequest.setLaunchSpecification(launchSpecification);

		// Call the RequestSpotInstance API.
		RequestSpotInstancesResult requestResult = ec2.requestSpotInstances(requestRequest);
		
		List<SpotInstanceRequest> requestResponses = requestResult.getSpotInstanceRequests();

		// Setup an arraylist to collect all of the request ids we want to
		// watch hit the running state.
		ArrayList<String> spotInstanceRequestIds = new ArrayList<String>();

		// Add all of the request ids to the hashset, so we can determine when they hit the
		// active state.
		for (SpotInstanceRequest requestResponse : requestResponses) {
		    System.out.println("Created Spot Request: "+requestResponse.getSpotInstanceRequestId());
		    spotInstanceRequestIds.add(requestResponse.getSpotInstanceRequestId());
		}
		
		return spIn;
	}

}
