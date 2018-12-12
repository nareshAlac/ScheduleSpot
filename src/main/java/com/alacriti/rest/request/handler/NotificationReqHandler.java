package com.alacriti.rest.request.handler;

import java.io.IOException;
import java.io.InputStreamReader;
import java.math.BigDecimal;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import org.apache.http.HttpStatus;
import org.apache.log4j.Logger;

import com.alacriti.model.AWSNotification;
import com.alacriti.proxy.NotificationProxy;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.TypeAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonToken;
import com.google.gson.stream.JsonWriter;

@Path("aws/ami")
@Consumes(MediaType.APPLICATION_JSON)
public class NotificationReqHandler
{
	private Logger log = Logger.getLogger(AMIHandler.class);

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Object handleNotification(@Context HttpServletRequest request, @Context HttpServletResponse response,
			InputStreamReader reader) throws Exception
	{
		log.debug("handleNotification: Starts");
		AWSNotification token = null;
		try
		{
			token = getMsgFromReader(reader, AWSNotification.class);
			if ("Notification".equalsIgnoreCase(token.getType()))
			{
				if (NotificationProxy.INTANCE_TERMINATION_NOTIFICATION.equals(token.getSubject()))
				{
					NotificationProxy.reSpIn(token.getMessage());
				}
			}
			else if ("SubscriptionConfirmation".equalsIgnoreCase(token.getType()))
			{
				try
				{
					NotificationProxy.confirmSubscriptionReq(token.getSubscriptionUrl());
					response.setStatus(HttpStatus.SC_OK);
				}
				catch (Exception e)
				{
					log.error(" SNS Msg " + token.toString());
					response.setStatus(HttpStatus.SC_INTERNAL_SERVER_ERROR);
				}
			}
			else if ("UnsubscribeConfirmation".equalsIgnoreCase(token.getType()))
			{
				log.debug("SNS Unsubscription Message Recieved");
				response.setStatus(HttpStatus.SC_OK);
			}
		}
		catch (Exception e)
		{
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
		}finally
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
}
