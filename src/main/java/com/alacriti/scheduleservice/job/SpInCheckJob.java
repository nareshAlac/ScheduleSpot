package com.alacriti.scheduleservice.job;

import java.util.Date;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;

public class SpInCheckJob implements Job
{

	@Override
	public void execute(JobExecutionContext context) throws JobExecutionException
	{
		System.out.println("Hi There !! This is a spin check for " + context.getJobDetail().getKey().getName() + ":"
				+ context.getJobDetail().getKey().getGroup());
		System.out.println(new Date().toString());
	}

}
