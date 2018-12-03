package com.alacriti.rest.request.handler;

import java.io.InputStreamReader;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import org.apache.log4j.Logger;

import com.alacriti.model.SecGrp;
import com.alacriti.proxy.EC2Proxy;

@Path("/aws/secgrps")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class SecGroupsHandler {
	private Logger log = Logger.getLogger(SecGroupsHandler.class);
	@GET
	public Object getAmis(@Context HttpServletRequest request, @Context HttpServletResponse response,
			InputStreamReader reader) throws Exception {
		log.debug("getAmis: Starts");
		try {
			List<SecGrp> amis=EC2Proxy.getSecGrps();
		} catch (Exception e) {
		}
		return null;
	}
}
