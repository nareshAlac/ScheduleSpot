package com.alacriti.scheduleservice.scheduler;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import org.quartz.JobBuilder;
import org.quartz.JobDetail;
import org.quartz.Scheduler;
import org.quartz.SchedulerException;
import org.quartz.SimpleScheduleBuilder;
import org.quartz.Trigger;
import org.quartz.TriggerBuilder;
import org.quartz.ee.servlet.QuartzInitializerListener;
import org.quartz.impl.StdSchedulerFactory;

import com.alacriti.scheduleservice.job.SpInReqJob;

public class SpInScheduler implements ServletContextListener
{
	private Scheduler scheduler;

	@Override
	public void contextDestroyed(ServletContextEvent ctx)
	{
		// TODO Auto-generated method stub

	}

	@Override
	public void contextInitialized(ServletContextEvent ctx)
	{
/*		// define the job and tie it to our SpInReqJob class
		JobDetail job = JobBuilder.newJob(SpInReqJob.class).withIdentity("job1", "group1").build();

		// Trigger the job to run now, and then repeat every 1 hour
		Trigger trigger = TriggerBuilder.newTrigger().withIdentity("trigger1", "group1").startNow()
				.withSchedule(SimpleScheduleBuilder.simpleSchedule().withIntervalInMinutes(1).repeatForever()).build();

		try
		{
			scheduler = ((StdSchedulerFactory) ctx.getServletContext()
					.getAttribute(QuartzInitializerListener.QUARTZ_FACTORY_KEY)).getScheduler();
			scheduler.scheduleJob(job, trigger);
		}
		catch (SchedulerException e)
		{

		}
*/
	}
}
