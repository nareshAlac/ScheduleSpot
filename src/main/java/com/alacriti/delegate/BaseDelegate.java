package com.alacriti.delegate;

import java.lang.reflect.InvocationTargetException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;


public class BaseDelegate
{

	private Logger log = Logger.getLogger(BaseDelegate.class);
    private Connection connection;

    public void setConnection(Connection _connection)
    {
        this.connection = _connection;
    }

    public Connection getConnection()
    {
        return connection;
    }

    protected void endDBTransaction(Connection connection)
    {
        try
        {
            // now commit transaction
            connection.commit();

        }
        catch (SQLException e)
        {
            e.printStackTrace();
            try
            {
                connection.rollback();
            }
            catch (SQLException e1)
            {
                log.error("SQLException in rollback", e);
            }
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
        finally
        {
            try
            {
                if (connection != null)
                    connection.close();
            }
            catch (SQLException e)
            {
                log.error(null, e);
            }
        }

    }

    protected void endDBTransaction(Connection connection, boolean isRollback)
    {

        if (isRollback)
        {
            try
            {
                connection.rollback();
                log.info("Rolled Back on some exception....!!!");
            }
            catch (SQLException e1)
            {
                log.error("SQLException in rollback", e1);
            }

            finally
            {
                try
                {
                    if (connection != null)
                        connection.close();
                }
                catch (SQLException e)
                {
                    log.error(null, e);
                }
            }
        }
        else
        {
            endDBTransaction(connection);
        }

    }

    protected Connection startDBTransaction() throws Exception
    {
        Connection conn = null;
        try
        {
            
            String DB_CONN_STRING = "jdbc:mysql://192.168.35.160:3306/spinut_dev";
            String DRIVER_CLASS_NAME = "com.mysql.jdbc.Driver";
            String USER_NAME = "spinut_dev";
            String PASSWORD = "spinut_dev";
            Class.forName(DRIVER_CLASS_NAME);
            conn = DriverManager.getConnection(DB_CONN_STRING, USER_NAME, PASSWORD);
            conn.setAutoCommit(false);
        }
        catch (SQLException e)
        {
            log.error("Exception in getting Connection", e);
        }
        return conn;

    }
}
