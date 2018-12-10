package com.alacriti.rest.delegate;

import java.sql.Connection;
import java.util.ArrayList;

import org.apache.log4j.Logger;

import com.alacriti.delegate.BaseDelegate;
import com.alacriti.model.Login;
import com.alacriti.model.ScheduleRequest;
import com.alacriti.rest.bo.LoginBO;
import com.alacriti.rest.bo.ScheduleBO;
import com.alacriti.rest.dao.ScheduleDAO;

public class SpotRequestDelegate extends BaseDelegate {
	private Logger log = Logger.getLogger(SpotRequestDelegate.class);
	 public ArrayList<ScheduleRequest> getSpotRequestList(ScheduleRequest scheduleRequest)
	    {

	        log.debug("getSpotRequestList starts() : ");
	        System.out.println("SpotRequestDelegate getSpotRequestList() start");
	        Connection connection = null;
	        ArrayList<ScheduleRequest> scheduleRequests=new ArrayList();
	        try
	        {
	        	 connection=startDBTransaction();
	            ScheduleBO bo = new ScheduleBO();
	            scheduleRequests= bo.getSpotRequestList(scheduleRequest,connection);
	            System.out.println("SpotRequestDelegate getSpotRequestList() end");        
	           return scheduleRequests;
	        }
	        catch (Exception exp)
	        {
	            System.out.println("Error in Checking getSpotRequestList"+ exp);
	            log.error("Error in Checking getSpotRequestList", exp);
	        }
	        finally{
	        	if(connection !=null)
	        		endDBTransaction(connection);
	        }
	        //valueContext.putObject(usdi);
	        log.debug("getSpotRequestList end()");
	        System.out.println("SpotRequestDelegate getSpotRequestList() ends");
	        return scheduleRequests;
	    }
}
