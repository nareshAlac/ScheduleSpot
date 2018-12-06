package com.alacriti.rest.delegate;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import org.apache.log4j.Logger;


public class UserBaseService
{
	private Logger log = Logger.getLogger(LoginService.class);
    private Connection connection;
    public void setConnection(Connection connection)
    {
        this.connection = connection;
    }

    public Connection getConnection()
    {
        return connection;
    }

    /**
     * Commit the transaction on a connection object and close the connection
     *
     * @param connection
     */
    public void commit()
    {
        log.info("commit(): Start");
        try
        {
            if (connection != null)
            {
                connection.commit();
            }
        }
        catch (Exception e)
        {
            log.warn("Failed to commit the connection object : " + e.getMessage(), e);
        }
        try
        {
            if (connection != null)
            {
                connection.close();
                connection = null;
            }
        }
        catch (Exception e)
        {
            log.warn("Failed to close the connection object : " + e.getMessage(), e);
        }
        log.info("commit(): End");
    }

    /**
     * Roll back the transaction on a connection object and close the connection
     *
     * @param connection
     */
    public void rollBack()
    {
        log.info("rollBack() : Start");
        try
        {
            if (connection != null)
            {
                connection.rollback();
            }
        }
        catch (Exception e)
        {
            log.warn("Failed to rollback the connection object : " + e.getMessage(), e);
        }
        try
        {
            if (connection != null)
            {
                connection.close();
                connection = null;
            }
        }
        catch (Exception e)
        {
            log.warn("Failed to close the connection object : " + e.getMessage(), e);
        }
        log.info("rollBack() : End");
    }

    public Connection createConnection() throws ClassNotFoundException
    {
        try
        {
            if (connection == null || (connection != null && connection.isClosed()))
            {
            	Class.forName("com.mysql.jdbc.Driver");
            	Connection connection= DriverManager.getConnection(  
            			"jdbc:mysql://192.168.35.103:3315/spinut_dev","spinut_dev","spinut_dev");
                connection.setAutoCommit(false);
            	System.out.println("Connection "+connection);
            }
        }
        catch (Exception e)
        {
        	System.out.println("Error "+e);
            log.error("Exception in getting Connection", e);
        }
        return connection;

    }

    /**
     * Method to populate Audit information in BaseVO
     *
     * @param msg
     * @return BaseVO
     */
//    public AuditInfo getAuditVO() throws IllegalStateException
//    {
//        log.info("getAuditVO() start()");
//        AuditInfo auditVO = new AuditInfo();
//        log.info("getAuditVO() end");
//        return auditVO;
//    }
//
//    public void addResponseCodeToResponseMessage(ServerError serverError, Msg respMsg)
//    {
//        ErrorCode errorCode = new ErrorCode(Integer.parseInt(serverError.getErrorCode()), serverError.getErrorMsg(),
//                serverError.getErrorLevel());
//        respMsg.setErrorCode(errorCode);
//    }
//
//    public void addErrorResponseCodesToResponseMessage(Collection<ServerError> serverErrors, Msg respMsg)
//    {
//
//        List<ErrorCode> errorCodes = new ArrayList<ErrorCode>();
//        Iterator<ServerError> itr = serverErrors.iterator();
//        while (itr.hasNext())
//        {
//            ServerError serverError = itr.next();
//            ErrorCode errorCode = new ErrorCode(Integer.parseInt(serverError.getErrorCode()), serverError.getErrorMsg(),
//                    serverError.getErrorLevel());
//            errorCodes.add(errorCode);
//        }
//        respMsg.setErrorCodes(errorCodes);
//    }
//
//    public void setSessionErrorCode(Msg responseMsg)
//    {
//        ServerError error = new ServerError(ErrorCodes.ValidSession + "", "Your session is valid.");
//        ErrorCode errorCode = new ErrorCode(Integer.parseInt(error.getErrorCode()), error.getErrorMsg(),
//                error.getErrorLevel());
//        responseMsg.setErrorCode(errorCode);
//    }

     

   

    
}
