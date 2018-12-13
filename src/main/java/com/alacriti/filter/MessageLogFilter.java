package com.alacriti.filter;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.StringWriter;
import java.io.Writer;
import java.net.URLDecoder;
import java.nio.charset.Charset;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.NotAllowedException;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.container.PreMatching;
import javax.ws.rs.container.ResourceInfo;
import javax.ws.rs.core.Context;
import javax.ws.rs.ext.Provider;

import org.apache.commons.io.IOUtils;
import org.apache.log4j.Logger;

@PreMatching
@Provider
public class MessageLogFilter implements ContainerRequestFilter, ContainerResponseFilter {

	@Context
	private ResourceInfo resourceInfo;

	@Context
	private HttpServletRequest httpServletRequest;

	public static final Logger log = Logger.getLogger(MessageLogFilter.class);
	
	public static final String CHARSET_UTF_8 = "UTF-8";
	public static final String JSON_MIME_REGX = "(?i)application\\/json(;.*)?";

	@Override
	public void filter(ContainerRequestContext requestContext) throws IOException {

		log.info("====== Request Logging START =====");
		
		
		
		//printRequestData(requestContext, httpServletRequest);

		log.info("====== Request Logging END =====");

	}

	private static String getRequestBody(ContainerRequestContext requestContext, HttpServletRequest request) {
		String body = "";
		try {
			log.info("We are getting here in getRequestBody method  ");

			if (requestContext.getEntityStream() != null && !isEmpty(requestContext.getEntityStream().toString())) {
				Writer writer = new StringWriter();

				//IOUtils.copy(requestContext.getEntityStream(), writer);
				IOUtils.copy(requestContext.getEntityStream(), writer, Charset.forName(CHARSET_UTF_8));
				if (writer.toString().length() <= 0) {
					log.info("Body is not received for this request");
				}
				byte[] jsonBytes = writer.toString().getBytes();
				requestContext.setEntityStream(new ByteArrayInputStream(jsonBytes));
				// TO-DO Need to Revisit the below logic Need to add for only
				// supported cases and
				// Throw Error if we receive other than supported content-type ,
				// Discuss with
				// Praveen and meke change
				if (isJsonMime(request.getContentType())) {
					body = new String(jsonBytes);
				} else {
					body = new String(jsonBytes);
					body = URLDecoder.decode(body, CHARSET_UTF_8);
				}
			} else
				log.info("Entity stream is null for this request ");
		} catch (Exception e) {
			log.error(e);
			throw new NotAllowedException("Unable to extract body");
		}

		return body;

	}

	protected static boolean isJsonMime(String mime) {
		return mime != null && mime.matches(JSON_MIME_REGX);
	}

	protected static void printRequestData(ContainerRequestContext requestContext, HttpServletRequest request) {

		String headers = requestContext.getHeaders().toString();
		String url = requestContext.getUriInfo().getAbsolutePath().toString();
		String method = requestContext.getMethod();

		String queryParams = request.getQueryString();

		String messageBody = getRequestBody(requestContext, request);

		log.info("URL : " + url);
		log.info("METHOD : " + method);
		log.info("HEADERS : " + headers);
		log.info("QUERYPARAMS : " + queryParams);
		log.info("BODY : " + messageBody);

	}

	@Override
	public void filter(ContainerRequestContext arg0, ContainerResponseContext arg1) throws IOException {

		log.info("Sending Response : " + arg1.getStatus() + " Body  " + arg1.getEntity());

	}

	protected static boolean isEmpty(String data) {
		if (data == null || data.trim().length() == 0) {
			return true;
		}

		return false;
	}

}
