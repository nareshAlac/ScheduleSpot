package com.alacriti.rest.request.handler;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.StringWriter;
import java.io.Writer;
import java.math.BigDecimal;
import java.net.URLDecoder;
import java.nio.charset.Charset;
import java.util.Enumeration;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.NotAllowedException;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import org.apache.commons.io.IOUtils;
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

@Path("/aws")
public class NotificationReqHandler {
	private Logger log = Logger.getLogger(NotificationReqHandler.class);

	public static final String CHARSET_UTF_8 = "UTF-8";
	public static final String JSON_MIME_REGX = "(?i)application\\/json(;.*)?";

	@Path("/sns")
	@POST
	@Consumes(MediaType.TEXT_PLAIN)
	public Object handleNotification(@Context HttpServletRequest request, @Context HttpServletResponse response)
			throws Exception {
		log.info("handleNotification: Starts");
		AWSNotification token = null;
		try {

			String wholeStr = getPayloadFromRequest(request);
			token = getMsgFromReader(wholeStr, AWSNotification.class);
			log.info("Token : "+token);
			if ("Notification".equalsIgnoreCase(token.getType())) {
				System.out.println(NotificationProxy.INTANCE_TERMINATION_NOTIFICATION);
				if (NotificationProxy.INTANCE_TERMINATION_NOTIFICATION.equals(token.getSubject())) {
					NotificationProxy.reSpIn(token.getMessage());
				}
			} else if (NotificationProxy.SUBSCRIPTION_CONFIRMATION.equalsIgnoreCase(token.getType())) {
				System.out.println(NotificationProxy.SUBSCRIPTION_CONFIRMATION);
				try {
					NotificationProxy.confirmSubscriptionReq(token.getSubscribeURL());
					response.setStatus(HttpStatus.SC_OK);
				} catch (Exception e) {
					log.error(" SNS Msg " + token.toString());
					response.setStatus(HttpStatus.SC_INTERNAL_SERVER_ERROR);
				}
			} else if ("UnsubscribeConfirmation".equalsIgnoreCase(token.getType())) {
				log.debug("SNS Unsubscription Message Recieved");
				response.setStatus(HttpStatus.SC_OK);
			}
		} catch (Exception e) {

			e.printStackTrace();
		}
		return null;
	}

	private String getPayloadFromRequest(HttpServletRequest request) throws IOException {
		String str,wholeStr="";
		BufferedReader br = request.getReader();
		while ((str = br.readLine()) != null) {
			wholeStr += str;
		}
		log.info("wholeStr : "+wholeStr);
		return wholeStr;
	}

	@Path("/getsns")
	@GET
	public Object handleGetNotification(@Context HttpServletRequest request, @Context HttpServletResponse response)
			throws Exception {
		log.debug("handleNotification: Starts");
		AWSNotification token = null;
		try {
			Enumeration keys = request.getHeaderNames();
			while (keys.hasMoreElements()) {
				String key = (String) keys.nextElement();
				System.out.println(key + ":" + request.getHeader(key));
			}
			// token = getMsgFromReader(reader, AWSNotification.class);
			// if(token!=null)
			// System.out.println("**********************************token.getType()"+
			// token.getType());
			// if ("Notification".equalsIgnoreCase(token.getType()))
			// {
			// System.out.println(NotificationProxy.INTANCE_TERMINATION_NOTIFICATION);
			// if
			// (NotificationProxy.INTANCE_TERMINATION_NOTIFICATION.equals(token.getSubject()))
			// {
			// NotificationProxy.reSpIn(token.getMessage());
			// }
			// }
			// else if
			// (NotificationProxy.SUBSCRIPTION_CONFIRMATION.equalsIgnoreCase(token.getType()))
			// {
			// System.out.println(NotificationProxy.SUBSCRIPTION_CONFIRMATION);
			// try
			// {
			// NotificationProxy.confirmSubscriptionReq(token.getSubscribeURL());
			// response.setStatus(HttpStatus.SC_OK);
			// }
			// catch (Exception e)
			// {
			// log.error(" SNS Msg " + token.toString());
			// response.setStatus(HttpStatus.SC_INTERNAL_SERVER_ERROR);
			// }
			// }
			// else if
			// ("UnsubscribeConfirmation".equalsIgnoreCase(token.getType()))
			// {
			// log.debug("SNS Unsubscription Message Recieved");
			// response.setStatus(HttpStatus.SC_OK);
			// }
		} catch (Exception e) {

		}
		return null;
	}

	protected <T> T getMsgFromReader(String payload, Class<T> requestMsg) {
		Object msg = null;
		try {
			Gson gson = getGSONBuilder();
			msg = gson.fromJson(payload, requestMsg);
			return (T) msg;
		} catch (Exception exp) {
			log.error("Error in reading requestMsg******* " + requestMsg + " Expception: " + exp);
			exp.printStackTrace();
			String errorMsg = "Error Parsing Request Message";
		}

		return null;
	}

	private Gson getGSONBuilder() {
		return new GsonBuilder().registerTypeAdapter(BigDecimal.class, new TypeAdapter<BigDecimal>() {

			public BigDecimal read(JsonReader reader) throws IOException {

				if (reader.peek() == JsonToken.STRING) {
					String amt = reader.nextString();
					if (amt == null) // if (amt == null ||
										// StringUtil.isEmpty(amt))
					{
						return BigDecimal.ZERO;
					} else {
						return new BigDecimal(amt);
					}
				} else {
					return new BigDecimal(reader.nextString());
				}
			}

			public void write(JsonWriter writer, BigDecimal num) throws IOException {
			}
		}).create();
	}

	private String getRequestBody(HttpServletRequest request) {
		String body = "";
		try {
			log.info("We are getting here in getRequestBody method  ");

			Writer writer = new StringWriter();

			// IOUtils.copy(requestContext.getEntityStream(), writer);
			IOUtils.copy(request.getInputStream(), writer, Charset.forName(CHARSET_UTF_8));
			if (writer.toString().length() <= 0) {
				log.info("Body is not received for this request");
			}
			byte[] jsonBytes = writer.toString().getBytes();

			if (isJsonMime(request.getContentType())) {
				body = new String(jsonBytes);
			} else {
				body = new String(jsonBytes);
				body = URLDecoder.decode(body, CHARSET_UTF_8);
			}

		} catch (Exception e) {
			log.error(e);
			throw new NotAllowedException("Unable to extract body");
		}

		return body;

	}

	protected static boolean isJsonMime(String mime) {
		return mime != null && mime.matches(JSON_MIME_REGX);
	}

	protected static boolean isEmpty(String data) {
		if (data == null || data.trim().length() == 0) {
			return true;
		}

		return false;
	}

}
