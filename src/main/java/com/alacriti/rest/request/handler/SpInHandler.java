package com.alacriti.rest.request.handler;

import java.io.InputStreamReader;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import org.apache.log4j.Logger;

import com.alacriti.model.SpIn;
import com.alacriti.proxy.EC2Proxy;

@Path("/aws/spin")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class SpInHandler {
	private Logger log = Logger.getLogger(SpInHandler.class);

	@POST
	public Object bidSpIn(@Context HttpServletRequest request, @Context HttpServletResponse response,
			InputStreamReader reader) throws Exception {
		log.debug("getAmis: Starts");
		try {
			SpIn spIn = EC2Proxy.requestSpot(new SpIn());
		} catch (Exception e) {
		}
		return null;
	}
}
