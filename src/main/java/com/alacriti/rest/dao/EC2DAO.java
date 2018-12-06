package com.alacriti.rest.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.alacriti.model.SpIn;

public class EC2DAO extends BaseDAO
{

	public List<SpIn> getSpInReqs(Connection connection) throws SQLException
	{
		System.out.println("Tying to get SpIn Requests!!!");
		StringBuilder buff = new StringBuilder();
		buff.append("SELECT SPINUT_REQUEST_ID, AMI_ID,PRICE,INSTANCE_TYPE,SECURITY_GROUP,KEY_PAIR,NO_OF_INSTANCES,");
		buff.append("SCHEDULE_START,SCHEDULE_END,SCHEDULE_DAYS,REQUEST_STATUS,REQUESTED_USER,REQUESTED_TIME ");
		buff.append("FROM SPINUT_REQUEST_TBL WHERE CURRENT_TIMESTAMP BETWEEN SCHEDULE_START AND SCHEDULE_END ;");
		PreparedStatement ps = connection.prepareStatement(buff.toString());
		ResultSet rs = ps.executeQuery();
		return getSpInList(rs);
	}

	private List<SpIn> getSpInList(ResultSet rs) throws SQLException
	{
		List<SpIn> spIns = new ArrayList<>();
		rs.first();
		while (rs.next())
			spIns.add(getSpIn(rs));
		return spIns;
	}

	private SpIn getSpIn(ResultSet rs) throws SQLException
	{
		SpIn spIn = new SpIn();
		spIn.setRequestId(rs.getString("SPINUT_REQUEST_ID"));

		spIn.setAmiId(rs.getString("AMI_ID"));

		spIn.setPrice(rs.getString("PRICE"));

		spIn.setInstanceType(rs.getString("INSTANCE_TYPE"));

		spIn.setSecGrpId(rs.getString("SECURITY_GROUP"));

		spIn.setKeyName(rs.getString("KEY_PAIR"));

		spIn.setInstanceCapacity(rs.getInt("NO_OF_INSTANCES"));

		spIn.setStartTime(rs.getDate("SCHEDULE_START"));

		spIn.setEndTime(rs.getDate("SCHEDULE_END"));

		spIn.setScheduleDays(rs.getString("SCHEDULE_DAYS"));

		spIn.setReqestedTime(rs.getDate("REQUESTED_TIME"));

		spIn.setStatus(rs.getInt("REQUEST_STATUS"));

		return spIn;
	}

}
