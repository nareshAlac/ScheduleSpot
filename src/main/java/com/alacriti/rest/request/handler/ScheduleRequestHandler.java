package com.alacriti.rest.request.handler;

import java.io.IOException;
import java.io.InputStreamReader;
import java.math.BigDecimal;
import java.util.ArrayList;

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

import com.alacriti.delegate.ScheduleRequestDelegate;
import com.alacriti.model.ScheduleRequest;
import com.alacriti.model.ScheduleRequestSpec;
import com.alacriti.model.ScheduleResponse;
import com.alacriti.rest.delegate.LoginDelegate;
import com.alacriti.rest.delegate.SpotRequestDelegate;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.TypeAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonToken;
import com.google.gson.stream.JsonWriter;

@Path("/spot")
public class ScheduleRequestHandler {
	private Logger log = Logger.getLogger(ScheduleRequestHandler.class);
	
	@POST
	@Path("/schedule")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Object schedule(@Context HttpServletRequest request, @Context HttpServletResponse response,
			InputStreamReader reader) throws Exception {
		ScheduleRequest requestMsg=null;
		ScheduleResponse responseMsg = new ScheduleResponse();
		System.out.println("Schedule(): Starts");
		try {
			 requestMsg = getMsgFromReader(reader, ScheduleRequest.class);
			
			// return sendResponse(responseMsg,response);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	@GET
	@Path("/createschedule")
	@Produces(MediaType.APPLICATION_JSON)
	public Object createschedule(@Context HttpServletRequest request, @Context HttpServletResponse response) throws Exception {
		//ScheduleRequest requestMsg=null;
		ScheduleResponse responseMsg = new ScheduleResponse();
		System.out.println("createschedule(): Starts");
		try {
			 //requestMsg = getMsgFromReader(reader, ScheduleRequest.class);
			 
			 ScheduleRequestDelegate scheduleRequest = new ScheduleRequestDelegate();
			 ScheduleRequestSpec scheduleRequestSpec = scheduleRequest.createschedule();
			 responseMsg.setScheduleRequestSpec(scheduleRequestSpec);
			 
			 //return sendResponse(responseMsg,response);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	@POST
	@Path("/getrequestlist")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Object getRequestList(@Context HttpServletRequest request, @Context HttpServletResponse response,
			InputStreamReader reader) throws Exception {
		ScheduleRequest requestMsg=null;
		ArrayList<ScheduleRequest> responseMsg=new ArrayList();
		System.out.println("Schedule(): Starts");
		try {
			 requestMsg = getMsgFromReader(reader, ScheduleRequest.class);
			 SpotRequestDelegate loginDelegate=new SpotRequestDelegate();
			 responseMsg=loginDelegate.getSpotRequestList(requestMsg);
			 return sendResponse(responseMsg,response);
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
	           // ExceptionUtil.printBMCALertStackTrace(exp, MsgErrorConstants.ERR_WHILE_READING_JSON_MSG, errorMsg);
	            //valueContext.setError(new ServerError(MsgErrorConstants.ERR_WHILE_READING_JSON_MSG + "",
	              //      "Error Occurred while parsing request msg ", ErrorConstants.ERR_LEVEL_FATAL));
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
