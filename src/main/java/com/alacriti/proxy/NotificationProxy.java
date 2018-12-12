package com.alacriti.proxy;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.http.HttpStatus;

import com.alacriti.delegate.EC2Delegate;

public class NotificationProxy
{
	public final static String INTANCE_TERMINATION_NOTIFICATION = "Intance-Termination-Notification";
	public final static String  SUBSCRIPTION_CONFIRMATION = "SubscriptionConfirmation";
	public static void confirmSubscriptionReq(String subscriptionUrl) throws Exception
	{
		Client client = ClientBuilder.newClient();
		WebTarget target = client.target(subscriptionUrl);
		Response response = target.request(MediaType.APPLICATION_JSON).buildGet().invoke();
		if (response.getStatus() != HttpStatus.SC_OK)
			throw new Exception("SNS Subscription Confirmation Failed" + response.getStatus());
	}

	public static void reSpIn(String instanceId)
	{
		EC2Delegate ec2Delegate = new EC2Delegate();
		ec2Delegate.reSpInInstance(instanceId);
	}

}
