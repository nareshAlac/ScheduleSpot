package com.alacriti.rest.request.handler;

import java.io.IOException;
import java.io.InputStreamReader;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import org.apache.log4j.Logger;

import com.alacriti.constants.AppConstants;
import com.alacriti.delegate.EC2Delegate;
import com.alacriti.delegate.ScheduleRequestDelegate;
import com.alacriti.model.ScheduleRequest;
import com.alacriti.model.ScheduleRequestSpec;
import com.alacriti.model.ScheduleResponse;
import com.alacriti.model.SpIn;
import com.alacriti.rest.delegate.SpotRequestDelegate;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.TypeAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonToken;
import com.google.gson.stream.JsonWriter;

@Path("spot")
public class ScheduleRequestHandler {
	private Logger log = Logger.getLogger(ScheduleRequestHandler.class);
	
	@POST
	@Path("/schedule")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public boolean schedule(@Context HttpServletRequest request, @Context HttpServletResponse response,
			InputStreamReader reader) throws Exception {
		ScheduleRequest requestMsg=null;
//		ScheduleResponse responseMsg = new ScheduleResponse();
		boolean result=false;
		System.out.println("Schedule(): Starts");
		try {
			
			 requestMsg = getMsgFromReader(reader, ScheduleRequest.class);
			 System.out.println("requestMsg: "+requestMsg.toString());
			 ScheduleRequestDelegate spotDelegate=new ScheduleRequestDelegate();
			 
					EC2Delegate spInDelegate = new EC2Delegate();
					SpIn spin=new SpIn();
					populateSpInUtRequest(requestMsg,spin);
					  spInDelegate.processSpInRequest(spin);
			 //result=spotDelegate.saveScheduler(requestMsg);
			 
			
			 System.out.println("Schedule(): Ends");
			 System.out.println("Returning result: "+result);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}
	
	private void populateSpInUtRequest(ScheduleRequest requestMsg, SpIn spin) {
	spin.setAmiId(requestMsg.getAmiId());
	spin.setPrice(requestMsg.getBidPrice());
	spin.setInstanceType(requestMsg.getInstanceType());
	spin.setSecGrpId(requestMsg.getSecurityGroup());
	spin.setKeyName(requestMsg.getSshKeyPair());
	spin.setInstanceCapacity(requestMsg.getNumOfInstances());
	spin.setStartTime((Date) requestMsg.getScheduleStartDate());
	spin.setEndTime((Date) requestMsg.getScheduleEndDate());
	StringBuilder scheduleDays = new StringBuilder();
	for(String day: requestMsg.getScheduleDays()){
		scheduleDays.append(day+", ");
	}
	
	spin.setScheduleDays(scheduleDays.toString());
	spin.setStatus(AppConstants.SCHEDULAR_STATUS_OPEN);
	spin.setUserId(requestMsg.getUserId());
		
	}

	@GET
	@Path("/createschedule")
	@Produces(MediaType.APPLICATION_JSON)
	public Object createschedule(@Context HttpServletRequest request, @Context HttpServletResponse response) throws Exception {
		//ScheduleRequest requestMsg=null;
		System.out.println("createschedule(): Starts");
		 ScheduleRequestSpec scheduleRequestSpec = new ScheduleRequestSpec();
		try {
			 //requestMsg = getMsgFromReader(reader, ScheduleRequest.class);
			 
			 ScheduleRequestDelegate scheduleRequest = new ScheduleRequestDelegate();
			  scheduleRequestSpec = scheduleRequest.createschedule();
			return scheduleRequestSpec;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return scheduleRequestSpec;
	}
	@POST
	@Path("/getrequestlist")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Object getRequestList(@Context HttpServletRequest request, @Context HttpServletResponse response,
			InputStreamReader reader) throws Exception {
		ScheduleRequest requestMsg=null;
		ArrayList<ScheduleRequest> responseMsg=new ArrayList();
		System.out.println("getRequestList(): Starts");
		try {
			 requestMsg = getMsgFromReader(reader, ScheduleRequest.class);
			 SpotRequestDelegate loginDelegate=new SpotRequestDelegate();
			 responseMsg=loginDelegate.getSpotRequestList(requestMsg);
			 return responseMsg;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	 protected <T> T getMsgFromReader(InputStreamReader reader, Class<T> requestMsg)
	    {
	        Object msg = null;
	        try
	        {
	            Gson gson = getGSONBuilder();
	            msg = gson.fromJson(reader, requestMsg);
	            return (T) msg;
	        }
	        catch (Exception exp)
	        {
	            log.error("Error in reading requestMsg******* " + requestMsg + " Expception: " + exp);
	            exp.printStackTrace();
	            String errorMsg = "Error Parsing Request Message";
	        }
	        finally
	        {
	            try
	            {
	                reader.close();
	            }
	            catch (Exception io)
	            {
	            }
	        }
	        return null;
	    }
	 private Gson getGSONBuilder()
	    {
	        return new GsonBuilder().registerTypeAdapter(BigDecimal.class, new TypeAdapter<BigDecimal>()
	        {

	            public BigDecimal read(JsonReader reader) throws IOException
	            {

	                if (reader.peek() == JsonToken.STRING)
	                {
	                    String amt = reader.nextString();
	                    if (amt == null)// if (amt == null || StringUtil.isEmpty(amt))
	                    {
	                        return BigDecimal.ZERO;
	                    }
	                    else
	                    {
	                        return new BigDecimal(amt);
	                    }
	                }
	                else
	                {
	                    return new BigDecimal(reader.nextString());
	                }
	            }

	            public void write(JsonWriter writer, BigDecimal num) throws IOException
	            {
	            }
	        }).create();
	    }
	 protected Object sendResponse(ArrayList<ScheduleRequest> responseMsg, HttpServletResponse response) throws IOException
	    {
	        try
	        {
	            Gson gson = new Gson();
	            String msg = gson.toJson(responseMsg);
	            response.getOutputStream().write(msg.getBytes());
	            response.getOutputStream().flush();
	        }
	        finally
	        {
	            response.getOutputStream().close();
	        }
			return response;
	    }

}
