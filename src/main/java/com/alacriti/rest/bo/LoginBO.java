package com.alacriti.rest.bo;

import java.rmi.ServerError;
import java.sql.Connection;

import org.apache.log4j.Logger;

import com.alacriti.model.Login;
import com.alacriti.rest.dao.LoginDAO;

public class LoginBO 
{
    private Logger log = Logger.getLogger(LoginBO.class);
    public LoginBO()
    {
    }

	// //Checking login data
	public Login isValidUser(Login login,Connection connection) throws Exception {
		log.debug("in LoginBO isValidUser() start");
		System.out.println("in LoginBO isValidUser() start");
		LoginDAO dao = new LoginDAO();
		try {
			login = dao.isValidUser(login, connection);
		} catch (Exception e) {
			log.error("Error in isValidUser " + e);
//			valueContext.setError(new ServerError(ErrorCodes.UserLoginError
//					+ "",  dao.getErrorCodeDesc(ErrorCodes.UserLoginError)));
			throw e;
		}
		//valueContext.putObject(usdi);
		log.debug("in LoginBO isValidUser() end");
		System.out.println("in LoginBO isValidUser() end");
		return login;
	}

	

//	public ValueContext getUserDetails(ValueContext valueContext)
//			throws Exception {
//		log.logDebug("in LoginBO getUserDetails() start");
//
//		LoginDAO dao = new LoginDAO();
//		dao.setConnection(getConnection());
//		UserSessionInfo usdi = valueContext.getObject(UserSessionInfo.class);
//		try {
//			usdi = dao.getUserDetails(usdi);
//			valueContext.putObject(usdi);
//		} catch (Exception e) {
//			log.logError("Error in getUserDetails " + e);
//			valueContext.setError(new ServerError(ErrorCodes.UserLoginError
//					+ "", dao.getErrorCodeDesc(ErrorCodes.UserLoginError)));
//			throw e;
//		}
//		log.logDebug("in LoginBO getUserDetails() end");
//		return valueContext;
//	}

//	public ValueContext insertSessionDetails(ValueContext valueContext)
//			throws Exception {
//		log.logDebug("in LoginBO insertSessionDetails() start");
//		LoginDAO dao = new LoginDAO();
//		dao.setConnection(getConnection());
//		UserSessionInfo usdi = valueContext.getObject(UserSessionInfo.class);
//		try {
//			dao.insertSessionDetails(usdi);
//			valueContext.putObject(usdi);
//		} catch (Exception e) {
//			log.logError("Error in insertSessionDetails " + e);
//			valueContext.setError(new ServerError(ErrorCodes.UserLoginError
//					+ "", dao.getErrorCodeDesc(ErrorCodes.UserLoginError)));
//			throw e;
//		}
//		log.logDebug("in LoginBO insertSessionDetails() end");
//		return valueContext;
//	}
//
//	public void removeUserSession(Long accountId) throws Exception {
//		LoginDAO dao = new LoginDAO();
//		dao.setConnection(getConnection());
//		dao.removeUserSession(accountId);
//	}
}
