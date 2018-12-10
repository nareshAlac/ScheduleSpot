package com.alacriti.rest.request.handler;

import java.io.InputStreamReader;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import org.quartz.SchedulerException;

import com.alacriti.delegate.EC2Delegate;
import com.alacriti.model.SpIn;

@Path("/test")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TestReqHandler
{
	@GET
	@Path("/schedulespincheck")
	public Object scheduleSpinCheck(@Context HttpServletRequest request, @Context HttpServletResponse response,
			InputStreamReader reader) throws Exception
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
		return null;
	}
}
