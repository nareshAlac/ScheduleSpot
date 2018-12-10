package com.alacriti.rest.request.handler;

import java.io.IOException;
import java.io.InputStreamReader;
import java.math.BigDecimal;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import org.apache.log4j.Logger;

import com.alacriti.model.Login;
import com.alacriti.rest.delegate.LoginDelegate;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.TypeAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonToken;
import com.google.gson.stream.JsonWriter;

@Path("user")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserHandler {
	private Logger log = Logger.getLogger(UserHandler.class);
	
	@POST
	@Path("/login")
	public Object login(@Context HttpServletRequest request, @Context HttpServletResponse response,
			InputStreamReader reader) throws Exception {
		Login requestMsg=null;
		log.debug("login(): Starts");
		try {
			 requestMsg = getMsgFromReader(reader, Login.class);
			 LoginDelegate loginDelegate=new LoginDelegate();
			 requestMsg=loginDelegate.isValidUserCheck(requestMsg);
			 System.out.println(requestMsg.toString());
			 return sendResponse(requestMsg,response);
			
		} catch (Exception e) {
		}
		 log.debug("login(): ends");
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
	 protected Object sendResponse(Login responseMsg, HttpServletResponse response) throws IOException
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
