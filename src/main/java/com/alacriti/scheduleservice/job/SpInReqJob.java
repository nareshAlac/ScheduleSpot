package com.alacriti.scheduleservice.job;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;

import com.alacriti.delegate.EC2Delegate;
import com.alacriti.model.SpIn;

public class SpInReqJob implements Job
{
	public SpInReqJob()
	{
	}

	public void execute(JobExecutionContext jEC) throws JobExecutionException
	{
		Date date = new Date();
		System.out.println("Hello !  ReSpIning the request at " + date.toString());
		///getting the current week day #
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		int weekDay = calendar.get(Calendar.DAY_OF_WEEK);
		System.out.println("Today's week : no " + weekDay);
		///Getting the valid SpInReqs
		EC2Delegate ec2Delegate = new EC2Delegate();
		List<SpIn> spInReqs = ec2Delegate.getSpInReqs();
		for(SpIn spIn : spInReqs)
		{
			if (isNeededToBid(spIn, weekDay))
			{
				//ec2Delegate.requestSpIn(spIn);
			}
		}
	}

	private boolean isNeededToBid(SpIn spIn, int weekDay)
	{
		String[] optedDays = spIn.getScheduleDays().split(",");
		for(String s : optedDays)
		{
			int day=0;
			try
			{
				day=Integer.parseInt(s);
			}
			catch (NumberFormatException e) 
			{
				System.out.println("Invalid value for week "+s+" Neglecting this value");
				continue;
			}
			if (day == weekDay)
				return true;
		}
		return false;
	}

}
