package com.alacriti.rest.delegate;

import java.sql.Connection;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;

import com.alacriti.delegate.BaseDelegate;
import com.alacriti.model.Login;
import com.alacriti.rest.bo.LoginBO;


public class LoginService extends BaseDelegate
{
	private Logger log = Logger.getLogger(LoginService.class);

    // //login Service
    public Login isValidUserCheck(Login loginMsg)
    {

        log.debug("isValidUser starts() : ");
        System.out.println("LoginService isValidUserCheck() start");
        try
        {
        	Connection connection=startDBTransaction();
            LoginBO bo = new LoginBO();
            loginMsg = bo.isValidUser(loginMsg,connection);
            System.out.println("LoginService isValidUserCheck() end");        
           
        }
        catch (Exception exp)
        {
            System.out.println("Error in Checking userLogin"+ exp);
            log.error("Error in Checking userLogin", exp);
        }
        //valueContext.putObject(usdi);
        log.debug("isValidUser end()");
        return loginMsg;
    }


//    public ValueContext validateLoginFields(ValueContext valueContext)
//    {
//        log.logDebug("validateLoginFields() start");
//
//        LoginMsg msg = valueContext.getObject(LoginMsg.class);
//
//        if (Validations.isEmpty(msg.getLoginId()))
//            valueContext.setError(new ServerError(ErrorCodes.ValidationsFailed + "", "LoginId is mandatory."));
//
//        if (Validations.isEmpty(msg.getPasswd()))
//            valueContext.setError(new ServerError(ErrorCodes.ValidationsFailed + "", "Password is mandatory."));
//
//        log.logDebug("validateLoginFields() end");
//
//        return valueContext;
//    }

    public String getClientIpAddr(HttpServletRequest request)
    {
        String ip = request.getHeader("X-Forwarded-For");
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip))
        {
            ip = request.getHeader("Proxy-Client-IP");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip))
        {
            ip = request.getHeader("WL-Proxy-Client-IP");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip))
        {
            ip = request.getHeader("HTTP_CLIENT_IP");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip))
        {
            ip = request.getHeader("HTTP_X_FORWARDED_FOR");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip))
        {
            ip = request.getRemoteAddr();
        }
        return ip;
    }
}
