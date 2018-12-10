package com.alacriti.rest.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.alacriti.constants.AppConstants;
import com.alacriti.model.ScheduleRequest;

public class SchedularDAO {

	public int saveSchedular(ScheduleRequest request, Connection conn){
		PreparedStatement ps = null;
        ResultSet rs = null;
        int result = 0;
        int i=0;
		StringBuilder saveSql = new StringBuilder();
		saveSql.append("INSERT INTO spinut_request_tbl(spinut_request_id, ami_id, price, instance_type, "
				+ "security_group, key_pair, no_of_instances, schedule_start, schedule_end, schedule_days, "
				+ "request_status) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

		try
        {
			ps =  conn.prepareStatement(saveSql.toString());
			ps.setLong(++i, request.getRequestId());
			ps.setString(++i, request.getAmiId());
			ps.setDouble(++i, request.getBidPrice());
			ps.setString(++i, request.getInstanceType());
			ps.setString(++i, request.getSecurityGrp());
			ps.setString(++i, request.getSshKeyPair());
			ps.setInt(++i, request.getNumOfInstances());
			ps.setDate(++i, request.getStartTime());
			ps.setDate(++i, request.getEndTime());
			ps.setString(++i, request.getDays());
			ps.setInt(++i, AppConstants.SCHEDULAR_STATUS_OPEN);
			
			result = ps.executeUpdate();
        }
		catch(SQLException e) {
			System.out.println("SQLException" + e.getMessage()+ e);
			e.printStackTrace();
		}
		catch (Exception e) {
			System.out.println("Exception" + e.getMessage()+ e);
			e.printStackTrace();
		} finally {
			close(ps, rs);
		}
		return result;
	}
		
	public void close(PreparedStatement pr, ResultSet rs)
	{
		try
	    {
			if(pr != null)
				pr.close();
        }catch(Exception exp){
    	   	System.out.println("Error in prepared statement"+ exp);
	    }

		try
		{
			if(rs != null)
				rs.close();
	    }catch(Exception exp){
	    	System.out.println("Error in result set"+ exp);
	    }
	}
}
