package com.alacriti.rest.dao;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.apache.log4j.Logger;

import com.alacriti.model.Login;

public class LoginDAO {
	

	
	public Login isValidUser(Login vo,Connection connection) throws Exception {
		System.out.println("In LoginDao isValidUser() start");
		System.out.println("In LoginDao isValidUser() start");

        PreparedStatement ps = null;
        ResultSet rs = null;
        MessageDigest sha256 = null;
        try
        {
            sha256 = MessageDigest.getInstance("SHA-256");
        }
        catch (NoSuchAlgorithmException e)
        {
        	System.out.println("In LoginDao MessageDigest not found");
            System.out.println("Error in isValidUser: "+ e);
        }
        try
        {
            int i = 1;
            ps = verifyUserLogin(connection);
            System.out.println("got prepared statement");
            if (ps != null)
            {
                String loginId = vo.getUserName().toUpperCase();
                ps.setString(i++, loginId);
                //ps.setBytes(i++, sha256.digest(vo.getPassword().getBytes()));
                ps.setString(i++, vo.getPassword());
               
               System.out.println("Parameters passing : 1 -> " +vo.getUserName().toUpperCase());
               System.out.println("Parameters passing : 2 -> "+sha256.digest(vo.getPassword().getBytes()));

				rs = ps.executeQuery();
				while (rs.next()) {
					 System.out.println("got result");
					vo.setUserId(rs.getLong(1));
					vo.setValidUser(true);
				}
			}
		} catch (SQLException sqe) {
			System.out.println("@BMC ERROR: LoginDAO.isValidUser() : SQLException" + sqe.getMessage()+ sqe);
			sqe.printStackTrace();
			throw new Exception("LoginDAO.isValidUser() : System Exception  :", sqe);
		} catch (Exception e) {
			System.out.println("@BMC ERROR: LoginDAO.isValidUser() : Exception" + e.getMessage()+ e);
			e.printStackTrace();
			throw new Exception("LoginDAO.isValidUser() : System Exception  :", e);
		} finally {
			close(ps, rs);
		}
		System.out.println("In LoginDao isValidUser() end");
		System.out.println("In LoginDao isValidUser() end");
		return vo;
	}

	public PreparedStatement verifyUserLogin(Connection connection) throws SQLException {
		StringBuilder buff = new StringBuilder();
		buff.append("SELECT USER_ID FROM USER_PROFILE_TBL "
				+ " WHERE UPPER(USER_LOGIN_ID) = ? AND USER_LOGIN_PWD = ?");
		System.out.println(buff);
		System.out.println("Prepraring statement");
		PreparedStatement ps = connection.prepareStatement(buff.toString());
		System.out.println("done");
		return ps;
	}

//	public void updateRetryAttempts(LoginInfo vo) throws Exception {
//		System.out.println("In LoginDao updateRetryAttempts() start");
//
//        PreparedStatement ps = null;
//        ResultSet rs = null;
//        try
//        {
//            int i = 1;
//            ps = updateLoginRetryAttempts();
//            if (ps != null)
//            {
//                ps.setString(i++, vo.getLoginId());
//                ps.setString(i++, StringConstants.APPLICATION_ID_FXPU);
//                ps.setString(i++, vo.getLoginId());
//                ps.setInt(i++, Constants.USER_STATUS_ACTIVE);
//                ps.setString(i++, StringConstants.APPLICATION_ID_FXPU);
//                log.logDebug("Parameters passing : 1 -> " + vo.getLoginId());
//                log.logDebug("Parameters passing : 2 -> " + StringConstants.APPLICATION_ID_FXPU);
//                log.logDebug("Parameters passing : 3 -> " + vo.getLoginId());
//                log.logDebug("Parameters passing : 4 -> " + StringConstants.APPLICATION_ID_FXPU);
//                ps.executeUpdate();
//            }
//
//			i = 1;
//			ps = updateUserAcctStatus();
//			ps.setInt(i++, Constants.USER_STATUS_LOCKED);
//			ps.setInt(i++, Constants.MAX_LOGIN_RETRY_ATTEMPTS);
//			ps.setString(i++, vo.getLoginId());
//			ps.setInt(i++, Constants.USER_STATUS_ACTIVE);
//			ps.setString(i++, StringConstants.APPLICATION_ID_FXPU);
//			log.logDebug("Parameters passing : 1 -> " + Constants.USER_STATUS_LOCKED);
//			log.logDebug("Parameters passing : 2 -> " + Constants.MAX_LOGIN_RETRY_ATTEMPTS);
//			log.logDebug("Parameters passing : 3 -> " + vo.getLoginId());
//			log.logDebug("Parameters passing : 4 -> " + StringConstants.APPLICATION_ID_FXPU);
//			ps.executeUpdate();
//
//		} catch (SQLException sqe) {
//			log.logError("@BMC ERROR: LoginDAO.updateRetryAttempts() : SQLException" + sqe.getMessage(), sqe);
//			throw new Exception("LoginDAO.updateRetryAttempts() : System Exception  :", sqe);
//		} catch (Exception e) {
//			log.logError("@BMC ERROR: LoginDAO.updateRetryAttempts() : Exception" + e.getMessage(), e);
//			throw new Exception("LoginDAO.updateRetryAttempts() : System Exception  :", e);
//		} finally {
//			close(ps, rs);
//		}
//		log.logDebug("In LoginDao updateRetryAttempts() end");
//	}
//
//	public PreparedStatement updateLoginRetryAttempts() throws SQLException {
//		StringBuilder buff = new StringBuilder();
//
//        buff.append("UPDATE " + DBObjects.USER_PROFILE_TBL + " SET LOGIN_RETRY_CNTR=((SELECT LOGIN_RETRY_CNTR FROM "
//                + DBObjects.USER_PROFILE_TBL);
//        buff.append(
//                " WHERE USER_LOGIN_ID = ? AND APPLICATION_ID = ?)+1) WHERE USER_LOGIN_ID = ? AND USER_ACCT_STATUS=? AND APPLICATION_ID = ? ");
//        log.logDebug(buff);
//        PreparedStatement pr = getConnection().prepareStatement(buff.toString());
//        return pr;
//    }
//
//	public PreparedStatement updateUserAcctStatus() throws SQLException {
//		StringBuilder buff = new StringBuilder();
//
//		buff.append("UPDATE "
//				+ DBObjects.USER_PROFILE_TBL
//				+ " SET USER_ACCT_STATUS=? WHERE LOGIN_RETRY_CNTR >=? AND USER_LOGIN_ID=? AND USER_ACCT_STATUS=? AND APPLICATION_ID = ? ");
//
//		log.logDebug(buff);
//		PreparedStatement pr = getConnection().prepareStatement(buff.toString());
//		return pr;
//	}
//
//	public UserSessionInfo getUserDetails(UserSessionInfo usdi) throws Exception {
//		log.logDebug("In LoginDao getUserDetails() start");
//
//		PreparedStatement ps = null;
//		ResultSet rs = null;
//		try {
//			int i = 1;
//			ps = getValidUserDetails();
//			if (ps != null) {
//				ps.setLong(1, usdi.getUserAcctId());
//				ps.setString(2, StringConstants.APPLICATION_ID_FXPU);
//				log.logDebug("Parameters passing : 1 -> " + usdi.getUserAcctId() + " 2 -> "
//						+ StringConstants.APPLICATION_ID_FXPU);
//				rs = ps.executeQuery();
//				while (rs.next()) {
//					usdi.setUserAcctId(rs.getLong(i++));
//					usdi.setPartnerId(rs.getInt(i++));
//					usdi.setLoginTime(rs.getDate(i++));
//					usdi.setLoginIp(rs.getString(i++));
//					usdi.setUserTypeId(rs.getInt(i++));
//					usdi.setLoginId(rs.getString(i++));
//					usdi.setChangePasswordFlag(rs.getString(i++));
//					usdi.setAccountStatus(rs.getInt(i++));
//					usdi.setUserName(rs.getString(i++) + " " + rs.getString(i++));
//					usdi.setLocale(rs.getString(i++));
//					long level = rs.getLong(i++);
//                    if (level > 0)
//                        usdi.setUserApprovalLevel(level);
//                    else
//                        usdi.setUserApprovalLevel(-1);
//				}
//			}
//			i = 1;
//			ps = updateUserLoginRetry();
//			ps.setInt(i++, 0);
//			ps.setString(i++, usdi.getLoginId());
//			ps.setString(i++, StringConstants.APPLICATION_ID_FXPU);
//			log.logDebug("Parameters passing : 1-> " + "0");
//			log.logDebug("Parameters passing : 2-> " + usdi.getLoginId());
//			log.logDebug("Parameters passing : 3-> " + StringConstants.APPLICATION_ID_FXPU);
//			ps.executeUpdate();
//
//		} catch (SQLException sqe) {
//			log.logError("@Dao ERROR: LoginDAO.getUserDetails() : SQLException" + sqe.getMessage(), sqe);
//			throw new Exception("LoginDAO.isValidUser() : System Exception  :", sqe);
//		} catch (Exception e) {
//			log.logError("@Dao ERROR: LoginDAO.getUserDetails() : Exception" + e.getMessage(), e);
//			throw new Exception("LoginDAO.getUserDetails() : System Exception  :", e);
//		} finally {
//			close(ps, rs);
//		}
//		log.logDebug("In LoginDao getUserDetails() end");
//		return usdi;
//	}
//
//	public PreparedStatement getValidUserDetails() throws SQLException {
//		StringBuilder buff = new StringBuilder();
//		buff.append("SELECT up.USER_ACCT_ID,up.PARTNER_ID,up.LAST_LOGIN_TIME,up.LAST_LOGIN_IP,up.USER_TYPE_ID,");
//		buff.append(" up.USER_LOGIN_ID ,up.CHANGE_PWD_FLAG,up.USER_ACCT_STATUS, ui.FNAME, ui.LNAME,ui.LOCALE,up.USER_APPROVAL_LEVEL ");
//		buff.append("FROM " + DBObjects.USER_PROFILE_TBL + " up, "
//				+ DBObjects.USER_INFO_TBL + " ui ");
//		buff.append("WHERE up.USER_ACCT_ID = ? and ui.USER_ACCT_ID = up.USER_ACCT_ID and up.application_id = ? ");
//		log.logDebug("Query-->" + buff);
//		PreparedStatement ps = getConnection().prepareStatement(buff.toString());
//		return ps;
//	}
//
//	public PreparedStatement updateUserLoginRetry() throws SQLException {
//		StringBuilder buff = new StringBuilder();
//
//		buff.append("UPDATE "
//				+ DBObjects.USER_PROFILE_TBL
//				+ " SET LOGIN_RETRY_CNTR = ? WHERE USER_LOGIN_ID = ? AND APPLICATION_ID = ? ");
//		log.logDebug(buff);
//		PreparedStatement pr = getConnection().prepareStatement(buff.toString());
//		return pr;
//	}
//
//	public void insertSessionDetails(UserSessionInfo usdi) throws Exception {
//		log.logDebug("In LoginDao inserting Session Details start ()");
//
//		PreparedStatement ps = null;
//		ResultSet rs = null;
//
//		int i=1;
//		try {
//			ps = updateProfileInfo();
//			ps.setString(i++, usdi.getLoginIp());
//			ps.setLong(i++, usdi.getUserAcctId());
//			ps.setString(i++, StringConstants.APPLICATION_ID_FXPU);
//			log.logDebug("Parameters passing : 1-> " + usdi.getLoginIp());
//			log.logDebug("Parameters passing : 2-> " + usdi.getUserAcctId());
//			log.logDebug("Parameters passing : 3-> " + StringConstants.APPLICATION_ID_FXPU);
//			ps.executeUpdate();
//
//			ps = checkUserSessionExist();
//			ps.setLong(1, usdi.getUserAcctId());
//			ps.setString(2, StringConstants.APPLICATION_ID_FXPU);
//			log.logDebug("Parameters passing : 1-> " + usdi.getUserAcctId());
//			log.logDebug("Parameters passing : 2-> " + StringConstants.APPLICATION_ID_FXPU);
//			rs = ps.executeQuery();
//			while (rs.next()) {
//				removeUserSession(rs.getLong(1));
//			}
//
//			String privileges = getUserPrivileges(usdi.getUserAcctId());
//
//			ps = inserUserSessionDetails();
//			if (ps != null) {
//				i = 1;
//				ps.setString(i++, usdi.getSessionId());
//				ps.setLong(i++, usdi.getUserAcctId());
//				ps.setLong(i++, usdi.getPartnerId());
//				ps.setString(i++, usdi.getJsessionId());
//				ps.setString(i++, usdi.getLoginIp());
//				ps.setInt(i++, usdi.getUserTypeId());
//				ps.setString(i++, privileges);
//				ps.setString(i++, usdi.getLoginId());
//				ps.setString(i++, usdi.getChangePasswordFlag());
//				ps.setInt(i++, usdi.getAccountStatus());
//				ps.setString(i++, usdi.getUserName());
//				ps.setString(i++, usdi.getLocale());
//				ps.setString(i++, StringConstants.APPLICATION_ID_FXPU);
//				ps.executeUpdate();
//			}
//		} catch (SQLException sqe) {
//			log.logError("@BMC ERROR: LoginDAO.insertSessionDetails() : SQLException" + sqe.getMessage(), sqe);
//			throw new Exception("LoginDAO.insertSessionDetails() : System Exception  :", sqe);
//		} catch (Exception e) {
//			log.logError("@BMC ERROR: LoginDAO.insertSessionDetails() : Exception" + e.getMessage(), e);
//			throw new Exception("LoginDAO.insertSessionDetails() : System Exception  :", e);
//		} finally {
//			close(ps, rs);
//		}
//		log.logDebug("In LoginDao insertingSessionDetails() end");
//	}
//
//	public String getUserPrivileges(Long accountId) throws Exception {
//
//		log.logDebug("In LoginDao getUserPrivileges() start");
//		PreparedStatement ps = null;
//		ResultSet rs = null;
//		ps = getUserPrivileges();
//		ps.setLong(1, accountId);
//
//		log.logDebug("Parameters passing : 1-> " + accountId);
//		rs = ps.executeQuery();
//
//		String privileges = "";
//		while (rs.next()) {
//			privileges = privileges + rs.getInt("PRIV_TYPE_ID") + "-";
//		}
//
//		log.logInfo("User Privileges Id: " + privileges);
//		log.logDebug("In LoginDao getUserPrivileges() end");
//		return privileges;
//	}
//
//	public PreparedStatement updateProfileInfo() throws SQLException {
//		StringBuilder buff = new StringBuilder();
//		buff.append("UPDATE "
//				+ DBObjects.USER_PROFILE_TBL
//				+ " SET LAST_LOGIN_TIME=(select CURRENT_DATE from dual),LAST_LOGIN_IP=? where USER_ACCT_ID=? AND APPLICATION_ID = ? ");
//		PreparedStatement ps = getConnection().prepareStatement(buff.toString());
//		log.logDebug(buff);
//		return ps;
//	}
//
//	public PreparedStatement checkUserSessionExist() throws SQLException {
//		StringBuilder buff = new StringBuilder();
//		buff.append("SELECT USER_ACCT_ID from " + DBObjects.SESSION_TBL
//				+ " WHERE USER_ACCT_ID = ? AND APPLICATION_ID = ? ");
//		PreparedStatement ps = getConnection()
//				.prepareStatement(buff.toString());
//		log.logDebug(buff);
//		return ps;
//	}

//	public PreparedStatement getUserPrivileges() throws SQLException {
//		StringBuilder buff = new StringBuilder();
//		buff.append("SELECT PRIV_TYPE_ID FROM " + DBObjects.USER_PRIV_TBL
//				+ " WHERE USER_ACCT_ID=?");
//		PreparedStatement ps = getConnection()
//				.prepareStatement(buff.toString());
//		log.logDebug(buff);
//		return ps;
//	}

//	public PreparedStatement inserUserSessionDetails() throws SQLException {
//		StringBuilder buff = new StringBuilder();
//		buff.append("INSERT INTO "
//				+ DBObjects.SESSION_TBL
//				+ " (USER_SESSION_REF_ID,USER_SESSION_ID, USER_ACCT_ID, PARTNER_ID,JSESSION_ID,LOGIN_TIME,LOGIN_IP,USER_TYPE_ID,PRIVILEGE_IDS,USER_LOGIN_ID,CHANGE_PASSWORD, ");
//		buff.append("ACCOUNT_STATUS,USER_NAME,LOCALE,");
//		buff.append(
//				" LAST_MODIFIED_TIME, CREATION_TIME,APPLICATION_ID) VALUES (USERSESSIONREFID_SEQ.NEXTVAL,?,?,?,?,(select CURRENT_DATE from dual),?,?,?,?,?,?,?,?,SYSTIMESTAMP,SYSTIMESTAMP,?)");
//
//		log.logDebug(buff);
//		PreparedStatement ps = getConnection().prepareStatement(buff.toString());
//		return ps;
//	}
//
//	public void removeUserSession(Long accountId) throws Exception {
//		log.logDebug("in loginDao removeUserSession() start");
//
//		PreparedStatement ps = null;
//		ResultSet rs = null;
//
//		ps=removeUserSessionDetails();
//		try {
//			ps.setLong(1, accountId);
//			ps.setString(2, StringConstants.APPLICATION_ID_FXPU);
//			log.logDebug("Parameters passing : 1-" + accountId);
//			log.logDebug("Parameters passing : 2-" + StringConstants.APPLICATION_ID_FXPU);
//			ps.executeUpdate();
//			log.logDebug("removed session for userAcctId: " + accountId);
//		} catch (SQLException sqe) {
//			log.logError("@BMC ERROR: LoginDAO.removeUserSession() : SQLException" + sqe.getMessage(), sqe);
//			throw new Exception("LoginDAO.removeUserSession() : System Exception  :", sqe);
//		} catch (Exception e) {
//			log.logError("@BMC ERROR: LoginDAO.removeUserSession() : Exception" + e.getMessage(), e);
//			throw new Exception("LoginDAO.removeUserSession() : System Exception  :", e);
//		} finally {
//			close(ps, rs);
//		}
//		log.logDebug("in loginDao removeUserSession() end");
//	}
//
//    public PreparedStatement removeUserSessionDetails() throws SQLException
//    {
//        StringBuilder buff = new StringBuilder();
//        buff.append("DELETE From " + DBObjects.SESSION_TBL + " WHERE USER_ACCT_ID = ? AND APPLICATION_ID = ? ");
//        PreparedStatement ps = getConnection().prepareStatement(buff.toString());
//        log.logDebug(buff);
//        return ps;
//    }

    

     
    /**
     * Closes PreparedStatment
     * 
     * @param ps
     */
    protected void close(PreparedStatement ps)
    {
        try
        {
            if(ps != null)
            {
                ps.close();
            }
        }catch(SQLException sqe)
        {
            System.out.println("ERROR " + sqe.getMessage());
        }
    }

    /**
     * Closes Statement
     * 
     * @param ps
     */
    protected void close(Statement ps)
    {
        try
        {
            if(ps != null)
            {
                ps.close();
            }
        }catch(SQLException sqe)
        {
            System.out.println("ERROR " + sqe.getMessage());
        }
    }

    /**
     * Closes ResultSet
     * 
     * @param rs
     */
    protected void close(ResultSet rs)
    {
        try
        {
            if(rs != null)
            {
                rs.close();
            }
        }catch(SQLException sqe)
        {
           System.out.println("ERROR " + sqe.getMessage());
        }
    }

    public void close(PreparedStatement pr, ResultSet rs)
    {
        try
        {
            if(pr != null)
                pr.close();
        }catch(Exception exp)
        {
            System.out.println("Error in prepared statement"+ exp);
        }

        try
        {
            if(rs != null)
                rs.close();
        }catch(Exception exp)
        {
            System.out.println("Error in result set"+ exp);
        }
    }

}
// //////////////////////////////////////////////////////////////////////////////////////
/*
 * ArrayList<UserSessionInfo> userInfoList = new ArrayList<>();
 * 
 * public List<UserSessionInfo> verifyLogin(LoginInfo vo) { log.logInfo(
 * "getVerifyLogin() start");
 * 
 * UserSessionInfo usdi = new UserSessionInfo(); PreparedStatement pr = null;
 * ResultSet rs = null;
 * 
 * MessageDigest sha256 = null; try { sha256 =
 * MessageDigest.getInstance("SHA-256"); } catch (NoSuchAlgorithmException e) {
 * // TODO Auto-generated catch block e.printStackTrace(); } try { int i = 1; pr
 * = getVerifyLoginStmt(); pr.setString(i++, vo.getLoginId()); pr.setBytes(i++,
 * sha256.digest(vo.getPasswd().getBytes()));
 * 
 * rs = pr.executeQuery();
 * 
 * if (rs.next()) { log.logInfo("result set next"); i = 1;
 * 
 * usdi.setUserAcctId(rs.getLong(i++)); usdi.setPartnerId(rs.getInt(i++));
 * usdi.setLoginTime(rs.getDate(i++)); usdi.setLoginIp(rs.getString(i++));
 * usdi.setUserTypeId(rs.getInt(i++)); usdi.setLoginId(rs.getString(i++));
 * usdi.setChangePassword(rs.getString(i++));
 * 
 * 
 * if (rs.getString(i++).equalsIgnoreCase("Y")) { usdi.setChangePassword(true);
 * } else { usdi.setChangePassword(false); }
 * 
 * usdi.setAccountStatus(rs.getInt(i++)); usdi.setRetryAttempts(rs.getInt(i++));
 * usdi.setUserName(rs.getString(i++) + " " + rs.getString(i++));
 * usdi.setLocale(rs.getString(i++));
 * 
 * usdi.setLogged(true);
 * 
 * userInfoList.add(usdi);
 * 
 * // usdi.setErrorCode(ErrorCode.getErrorCode(ErrorCodes.LoginSuccess, //
 * "Login is successful"));
 * 
 * i = 1; pr = updateLoginRetry();
 * 
 * pr.setInt(i++, 0); // setting retry-attempts to zero pr.setString(i++,
 * vo.getLoginId());
 * 
 * pr.executeUpdate(); } else { i = 1; int retryAttempts = -1; int userStatus =
 * 0; pr = getVerifyAttempts(); pr.setString(i++, vo.getLoginId());
 * 
 * rs = pr.executeQuery(); if (rs.next()) { log.logInfo(
 * "retrying login starts here: ");
 * 
 * i = 1; retryAttempts = rs.getInt(i++); userStatus = rs.getInt(i++);
 * 
 * if (retryAttempts < 4) { i = 1; pr = updateLoginRetry(); pr.setInt(i++,
 * ++retryAttempts); pr.setString(i++, vo.getLoginId());
 * 
 * pr.executeUpdate();
 * 
 * log.logInfo("Username and Password do not match.");
 * 
 * usdi.setErrorCode(ErrorCode.getErrorCode(Constants.
 * USER_STATUS_WRONG_PASSWORD, "Username and Password do not match. " + (5 -
 * reteyAttempts) + " attempts remaining", com.hsbc.fxpu.
 * user.constants.KeyCodes.UserPassMismatch));
 * 
 * usdi.setAccountStatus(userStatus); usdi.setRetryAttempts(retryAttempts);
 * userInfoList.add(usdi); } else { i = 1; pr = updateAcctStatus();
 * pr.setInt(i++, Constants.USER_STATUS_LOCKED); pr.setString(i++,
 * vo.getLoginId());
 * 
 * pr.executeUpdate();
 * 
 * pr = getVerifyAttempts(); i = 1; pr.setString(i++, vo.getLoginId());
 * 
 * rs = pr.executeQuery(); if (rs.next()) { i = 1; retryAttempts =
 * rs.getInt(i++); userStatus = rs.getInt(i++); log.logInfo("retrying login : "
 * ); }
 * 
 * usdi.setErrorCode(ErrorCode .getErrorCode( Constants.USER_STATUS_LOCKED,
 * "Your account is Locked, contact Admin",
 * com.hsbc.fxpu.user.constants.KeyCodes.UserLocked));
 * 
 * 
 * log.logInfo(userStatus); usdi.setAccountStatus(userStatus);
 * userInfoList.add(usdi); } } else { usdi.setAccountStatus(userStatus);
 * userInfoList.add(usdi);
 * 
 * usdi.setErrorCode(ErrorCode.getErrorCode(Constants. USER_STATUS_INVALID,
 * "Invalid username and password ",
 * com.hsbc.fxpu.user.constants.KeyCodes.UserInvalid));
 * 
 * 
 * }
 * 
 * } } catch (Exception exp) {
 * usdi.setErrorCode(ErrorCode.getErrorCode(ErrorCodes.ServerError, "DB Error",
 * KeyCodes.DBServerError)); log.logInfo("Error in verifying login" + exp);
 * userInfoList.add(usdi); } finally { close(pr, rs); }
 * 
 * log.logInfo("getVerifyLogin() end");
 * 
 * return userInfoList; }
 * 
 * public void loginDetails(LoginInfo vo, String ip) { log.logInfo(
 * "loginDetails() start"); UserSessionInfo usdi = new UserSessionInfo();
 * PreparedStatement pr = null; ResultSet rs = null;
 * 
 * try { pr = updateLoginDetails();
 * 
 * int i = 1; pr.setString(i++, ip); pr.setString(i++, vo.getLoginId());
 * 
 * pr.executeUpdate(); } catch (Exception exp) {
 * usdi.setErrorCode(ErrorCode.getErrorCode(ErrorCodes.ServerError, "DB Error",
 * KeyCodes.DBServerError)); log.logInfo("Error in verifying login" + exp); }
 * finally { close(pr, rs); } }
 *//**
 * 
 * @return
 * @throws SQLException
 */
/*
 * public PreparedStatement getVerifyLoginStmt() throws SQLException {
 * StringBuilder buff = new StringBuilder(); buff.append(
 * "SELECT up.USER_ACCT_ID,up.PARTNER_ID,up.LAST_LOGIN_TIME,up.LAST_LOGIN_IP,up.USER_TYPE_ID,"
 * ); buff.append(
 * " up.USER_LOGIN_ID ,up.CHANGE_PWD_FLAG,up.USER_ACCT_STATUS,up.LOGIN_RETRY_CNTR, ui.FNAME, ui.LNAME,ui.LOCALE "
 * ); buff.append("FROM " + DBObjects.UserProfileTbl + " up, " +
 * DBObjects.UserInfoTbl + " ui "); buff.append(
 * "WHERE up.USER_LOGIN_ID = ? and up.USER_LOGIN_PWD = ? and ui.USER_ACCT_ID = up.USER_ACCT_ID "
 * ); PreparedStatement pr = getConnection() .prepareStatement(buff.toString());
 * log.logInfo(buff); return pr; }
 * 
 * public PreparedStatement getVerifyAttempts() throws SQLException {
 * StringBuilder buff = new StringBuilder();
 * 
 * buff.append("SELECT LOGIN_RETRY_CNTR, USER_ACCT_STATUS "); buff.append(
 * "FROM " + DBObjects.UserProfileTbl + " WHERE USER_LOGIN_ID = ? ");
 * PreparedStatement pr = getConnection() .prepareStatement(buff.toString());
 * log.logInfo(buff); return pr; }
 * 
 * public PreparedStatement updateLoginRetry() throws SQLException {
 * StringBuilder buff = new StringBuilder();
 * 
 * buff.append("UPDATE " + DBObjects.UserProfileTbl +
 * " SET LOGIN_RETRY_CNTR = ? WHERE USER_LOGIN_ID = ? "); log.logInfo(buff);
 * PreparedStatement pr = getConnection() .prepareStatement(buff.toString());
 * return pr; }
 * 
 * public PreparedStatement updateAcctStatus() throws SQLException {
 * StringBuilder buff = new StringBuilder();
 * 
 * buff.append("UPDATE " + DBObjects.UserProfileTbl +
 * " SET USER_ACCT_STATUS = ? WHERE USER_LOGIN_ID = ? ");
 * 
 * log.logInfo(buff); PreparedStatement pr = getConnection()
 * .prepareStatement(buff.toString()); return pr; }
 * 
 * public PreparedStatement updateLoginDetails() throws SQLException {
 * StringBuilder buff = new StringBuilder();
 * 
 * buff.append("UPDATE " + DBObjects.UserProfileTbl +
 * " SET LAST_LOGIN_TIME=(select CURRENT_DATE from dual),"); buff.append(
 * "LAST_LOGIN_IP=? WHERE USER_LOGIN_ID=?");
 * 
 * PreparedStatement pr = getConnection() .prepareStatement(buff.toString());
 * log.logInfo(buff); return pr; }
 * 
 * // /session insertion public void getSessionInfo(UserSessionInfo usdi, String
 * ip, AuditInfo auditVo) { log.logInfo("getSessionInfo() Insertion start");
 * 
 * PreparedStatement pr = null; ResultSet rs = null; int i = 1; try {
 * 
 * pr = selectAccountId(); pr.setLong(i, usdi.getUserAcctId()); rs =
 * pr.executeQuery(); if (rs.next()) { removeSession(rs.getLong(i)); }
 * 
 * pr = selectPrivileges(); pr.setLong(i, usdi.getUserAcctId());
 * 
 * rs = pr.executeQuery(); String privileges = ""; while (rs.next()) {
 * 
 * privileges = privileges + rs.getInt("PRIV_TYPE_ID") + "-"; } log.logDebug(
 * "PRIVELEGES Id: " + privileges);
 * 
 * pr = insertSession(); i = 1; pr.setString(i++, usdi.getSessionId());
 * pr.setLong(i++, usdi.getUserAcctId()); pr.setLong(i++, usdi.getPartnerId());
 * // pr.setDate(i++, (java.sql.Date) usdi.getLoginTime()); pr.setString(i++,
 * ip); pr.setInt(i++, usdi.getUserTypeId()); pr.setString(i++, privileges);
 * pr.setString(i++, usdi.getLoginId()); pr.setString(i++,
 * usdi.getChangePassword()); pr.setInt(i++, usdi.getAccountStatus());
 * pr.setString(i++, usdi.getUserName()); pr.setString(i++, usdi.getLocale());
 * 
 * pr.executeUpdate(); log.logInfo("Session insertion Success ends()");
 * 
 * } catch (SQLException e) { // TODO Auto-generated catch block
 * 
 *  log.logInfo("In catch block" + e); } finally {
 * close(pr); } }
 * 
 * public PreparedStatement selectAccountId() throws SQLException {
 * StringBuilder buff = new StringBuilder(); buff.append(
 * "SELECT USER_ACCT_ID from " + DBObjects.SessionTbl +
 * " WHERE USER_ACCT_ID = ?"); PreparedStatement pr = getConnection()
 * .prepareStatement(buff.toString()); log.logInfo(buff); return pr; }
 * 
 * public PreparedStatement selectPrivileges() throws SQLException {
 * StringBuilder buff = new StringBuilder(); buff.append(
 * "SELECT PRIV_TYPE_ID FROM USER_PRIV_TBL WHERE USER_ACCT_ID=?");
 * PreparedStatement pr = getConnection() .prepareStatement(buff.toString());
 * log.logInfo(buff); return pr; }
 * 
 * public PreparedStatement insertSession() throws SQLException { StringBuilder
 * buff = new StringBuilder(); buff.append("INSERT INTO " + DBObjects.SessionTbl
 * +
 * " (USER_SESSION_REF_ID,USER_SESSION_ID, USER_ACCT_ID, PARTNER_ID,JSESSION_ID,LOGIN_TIME,LOGIN_IP,USER_TYPE_ID,PRIVILEGE_IDS,USER_LOGIN_ID,CHANGE_PASSWORD, "
 * ); buff.append("ACCOUNT_STATUS,USER_NAME,LOCALE,"); buff.append(
 * " LAST_MODIFIED_TIME, CREATION_TIME) VALUES (USERSESSIONREFID_SEQ.NEXTVAL,?,?,?,null,(select CURRENT_DATE from dual),?,?,?,?,?,?,?,?,null,null)"
 * );
 * 
 * PreparedStatement pr = getConnection() .prepareStatement(buff.toString());
 * log.logInfo(buff); return pr; }
 * 
 * public void removeSession(Long accountId) { log.logDebug(
 * "removeSession() start");
 * 
 * PreparedStatement pr = null; ResultSet rs = null;
 * 
 * StringBuilder buff = new StringBuilder(); buff.append("DELETE From " +
 * DBObjects.SessionTbl + " WHERE USER_ACCT_ID = ?");
 * 
 * log.logInfo(buff); try { pr =
 * getConnection().prepareStatement(buff.toString()); log.logDebug(
 * "removeSession() start continuing...."); pr.setLong(1, accountId);
 * pr.executeUpdate();
 * 
 * log.logDebug("remove session id for userAcctId: " + accountId);
 * 
 * } catch (Exception e) { log.logError("Error", e); } finally { close(pr, rs);
 * } }
 * 
 * //
 * ///////////////////////////////////////////////////////////////////////////
 * /////////////////// public void generateSessionInfo(UserSessionInfo usdi,
 * AuditInfo auditVo) { log.logInfo("generateSessionInfo() start");
 * 
 * PreparedStatement pr = null; ResultSet rs = null; int val = -1;
 * 
 * StringBuilder buff = new StringBuilder(); buff.append("INSERT INTO " +
 * DBObjects.SessionTbl +
 * " (SESSION_ID, USER_ACCT_ID, PARTNER_ID, USER_LOGIN_ID, "); buff.append(
 * " LAST_MODIFIED_TIME, CREATION_TIME) VALUES (?,?,?,?,null,null)" );
 * 
 * String sql = buff.toString();
 * 
 * sql = modifySqlForAuditInfo(sql); try { pr =
 * getConnection().prepareStatement(sql); int i = 1;
 * 
 * if (pr != null) { i = setAuditParams(pr, auditVo) + 1; pr.setString(i++,
 * usdi.getSessionId()); pr.setLong(i++, usdi.getUserAcctId()); pr.setLong(i++,
 * usdi.getPartnerId()); pr.setString(i++, usdi.getLoginId()); val =
 * pr.executeUpdate(); }
 * 
 * if (val == 1) { usdi.setErrorCode(ErrorCode.getErrorCode(
 * ErrorCodes.LoginSuccess, "Login is successful")); } else {
 * usdi.setErrorCode(ErrorCode.getErrorCode( ErrorCodes.LoginFailed,
 * "Login failed", KeyCodes.LoginFailure)); } } catch (Exception exp) {
 * usdi.setErrorCode(ErrorCode.getErrorCode(ErrorCodes.ServerError, "DB Error"
 * )); log.logError("Error in generating session info" + exp); } finally {
 * close(pr, rs); }
 * 
 * log.logInfo("generateSessionInfo() end"); }
 * 
 * public String modifySqlForAuditInfo(String sql) throws IllegalStateException
 * {
 * 
 * log.logDebug(" modifySqlForAuditInfo() start");
 * 
 * String dummySql = sql.toLowerCase().trim();
 * 
 * StringBuffer buffer = new StringBuffer(); String finalSql = sql; // to return
 * same sql if no processing is done.
 * 
 * String insOrUpd = dummySql.substring(0, 6);
 * 
 * if (insOrUpd.contains("insert")) { int val = dummySql.indexOf("("); String
 * sql1 = dummySql.substring(0, val + 1); String sql2 = dummySql.substring(val +
 * 1);
 * 
 * val = sql2.indexOf("(", sql2.indexOf("values")); String sql3 =
 * sql2.substring(0, val + 1); String sql4 = sql2.substring(val + 1);
 * 
 * buffer.append(sql1); buffer.append(
 * "created_by, last_modified_by, audit_event_type_id, audit_event_txn_id, ");
 * // TODO // temporary // used // column // last_modified_by // in // place //
 * of // AUDIT_OPER_USER_TYPE buffer.append(sql3); buffer.append("?, ?, ?, ?, "
 * ); buffer.append(sql4);
 * 
 * } else if (insOrUpd.contains("update")) { int val = dummySql.indexOf("set");
 * String sql1 = dummySql.substring(0, val + 3); String sql2 =
 * dummySql.substring(val + 3);
 * 
 * buffer.append(sql1); buffer.append(
 * " last_modified_by = ?, last_modified_time = NOW(), audit_oper_user_type = ?, audit_event_type_id = ?, audit_event_txn_id = ?,"
 * ); buffer.append(sql2); } else { throw new IllegalStateException(
 * "Bad SQL no Insert or Update clause in : " + sql); }
 * 
 * finalSql = buffer.toString(); log.logInfo("Appended Final SQL:" + finalSql);
 * 
 * log.logDebug(" modifySqlForAuditInfo() end");
 * 
 * return finalSql;
 * 
 * }
 *//**
 * Sets the Audit Parameters to the prepared statement <br>
 * (if setting ++i, use this i, else if setting i++, use i + 1 )
 * 
 * @param pr
 * @param vo
 * @return 4
 * @throws SQLException
 */
/*
 * public int setAuditParams(PreparedStatement pr, AuditInfo vo) throws
 * SQLException { int i = 0;
 *//** If the Account id is not populated, insert null */
/*
 * if (vo.getUserAcctId() == 0) pr.setNull(++i, Types.NUMERIC); else
 * pr.setLong(++i, vo.getUserAcctId());
 * 
 * pr.setLong(++i, vo.getAuditUserAcctType()); pr.setLong(++i,
 * vo.getAuditTxnType()); pr.setLong(++i, vo.getAuditTxnId()); return i; }
 * 
 * }
 */