package com.alacriti.rest.bo;

import java.rmi.ServerError;
import java.sql.Connection;
import java.util.ArrayList;

import org.apache.log4j.Logger;

import com.alacriti.model.Login;
import com.alacriti.model.ScheduleRequest;
import com.alacriti.rest.dao.LoginDAO;
import com.alacriti.rest.dao.ScheduleDAO;

public class ScheduleBO 
{
    private Logger log = Logger.getLogger(ScheduleBO.class);
    public ScheduleBO()
    {
    }
    public ArrayList<ScheduleRequest> getSpotRequestList(ScheduleRequest scheduleRequest,Connection connection) throws Exception {
		log.debug("in ScheduleBO getSpotRequestList() start");
		System.out.println("in ScheduleBO getSpotRequestList() start");
		ScheduleDAO dao = new ScheduleDAO();
		ArrayList<ScheduleRequest> scheduleRequests=new ArrayList();
		try {
			scheduleRequests = dao.getRequestList(scheduleRequest, connection);
		} catch (Exception e) {
			log.error("Error in isValidUser " + e);
//			valueContext.setError(new ServerError(ErrorCodes.UserLoginError
//					+ "",  dao.getErrorCodeDesc(ErrorCodes.UserLoginError)));
			throw e;
		}
		//valueContext.putObject(usdi);
		log.debug("in ScheduleBO getSpotRequestList() end");
		System.out.println("in ScheduleBO getSpotRequestList() end");
		return scheduleRequests;
	}
}
