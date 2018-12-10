package com.alacriti.delegate;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

import com.alacriti.model.AMI;
import com.alacriti.model.Login;
import com.alacriti.model.ScheduleRequest;
import com.alacriti.model.ScheduleRequestSpec;
import com.alacriti.model.SecGrp;
import com.alacriti.proxy.EC2Proxy;
import com.alacriti.rest.bo.LoginBO;
import com.alacriti.rest.bo.ScheduleBO;
import com.alacriti.rest.dao.SchedularDAO;
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
        	List<String> keyPairs = EC2Proxy.getAvailableKeyPairs();
        	List<SecGrp> secGroups = EC2Proxy.getSecGrps();
        	List<String> instanceTypes = EC2Proxy.getInstanceTypes();
        	
        	scheduleRequestSpec.setAmiIds(amiIds);
        	scheduleRequestSpec.setKeypairs(keyPairs);
        	scheduleRequestSpec.setSecurityGroups(secGroups);
        	scheduleRequestSpec.setInstanceTypes(instanceTypes);
        	//ScheduleBO bo = new ScheduleBO();
        	
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
    
    public boolean saveScheduler(ScheduleRequest request){
    	System.out.println("ScheduleRequestDelegate saveScheduler() start");
    	Connection connection = null;
        try
        {
        	connection=startDBTransaction();
        	SchedularDAO dao = new SchedularDAO();
        	int val = dao.saveSchedular(request, connection);
        	if (val == 0){
        		System.out.println("inserted "+val +" records"); 
        		return true;
        	}
        	else{
        		System.out.println("inserted "+ val +" records. There is a problem in saving the schedular");
        	}
        	
        }
        catch (Exception exp)
        {
            System.out.println("Error in Checking createschedule"+ exp);
            log.error("Error in Checking createschedule", exp);
        }finally{
        	if(connection !=null)
        		endDBTransaction(connection);
        }
    	
    	System.out.println("ScheduleRequestDelegate saveScheduler() end");  
    	return false;
    	
    }
	
}
