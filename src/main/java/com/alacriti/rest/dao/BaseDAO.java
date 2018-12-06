package com.alacriti.rest.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class BaseDAO
{
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
