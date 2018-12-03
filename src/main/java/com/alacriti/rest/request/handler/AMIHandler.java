package com.alacriti.rest.request.handler;

import java.io.InputStreamReader;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import org.apache.log4j.Logger;

@Path("/aws/ami")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AMIHandler {
	private Logger log = Logger.getLogger(AMIHandler.class);
	
	@GET
	public Object getAmis(@Context HttpServletRequest request, @Context HttpServletResponse response,
			InputStreamReader reader) throws Exception {
		log.debug("getAmis: Starts");
		try {
			//List<AMI> amis=AMIProxy.getAMIs();
		} catch (Exception e) {
		}
		return null;
	}
	 
}
