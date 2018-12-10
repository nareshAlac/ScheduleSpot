package com.alacriti.delegate;

import java.sql.Connection;
import java.util.List;

import org.apache.log4j.Logger;

import com.alacriti.model.AMI;
import com.alacriti.model.ScheduleRequestSpec;
import com.alacriti.proxy.EC2Proxy;
import com.alacriti.rest.bo.ScheduleBO;
import com.alacriti.rest.request.handler.ScheduleRequestHandler;

public class ScheduleRequestDelegate extends BaseDelegate
{
	private Logger log = Logger.getLogger(ScheduleRequestHandler.class);
	
	
    public ScheduleRequestSpec createschedule()
    {

        log.debug("isValidUser starts() : ");
        System.out.println("ScheduleRequestDelegate createschedule() start");
        ScheduleRequestSpec scheduleRequestSpec = new ScheduleRequestSpec();
        Connection connection = null;
        try
        {
        	connection=startDBTransaction();
			List<AMI> amiIds = EC2Proxy.getAMIs();
        	scheduleRequestSpec.setAmiIds(amiIds);
        	ScheduleBO bo = new ScheduleBO();
            System.out.println("ScheduleRequestDelegate createschedule() end");        
           
        }
        catch (Exception exp)
        {
            System.out.println("Error in Checking createschedule"+ exp);
            log.error("Error in Checking createschedule", exp);
        }finally{
        	if(connection !=null)
        		endDBTransaction(connection);
        }
        log.debug("createschedule end()");
        return scheduleRequestSpec;
    }
	
}
