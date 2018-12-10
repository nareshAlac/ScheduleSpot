package com.alacriti.runnerclass;

import java.util.ArrayList;

import org.quartz.SchedulerException;

import com.alacriti.delegate.EC2Delegate;
import com.alacriti.model.SpIn;

public class ScheduleTester
{
	public static void main(String[] args)
	{
		SpIn spIn = new SpIn();
		spIn.setSpInUtReqId(100);
		ArrayList<String> requestIds = new ArrayList<String>();
		requestIds.add("Req1");
		requestIds.add("Req2");
		EC2Delegate ec2Delegate = new EC2Delegate();
		try
		{
			ec2Delegate.scheduleSpInCheck(requestIds, spIn);
		}
		catch (SchedulerException e)
		{
			e.printStackTrace();
		}
	}
}
