package com.alacriti.scheduleservice.job;

import java.util.Date;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;


public class SpInReqJob implements Job
{
	public SpInReqJob()																																																				
	{
	}
	public void execute(JobExecutionContext arg0) throws JobExecutionException
	{
		Date date = new Date();
		System.out.println("Hello !  ReSpIning the request at " + date.toString());
	}
																																																																																											
}
