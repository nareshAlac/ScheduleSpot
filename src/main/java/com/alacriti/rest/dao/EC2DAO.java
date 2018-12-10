package com.alacriti.rest.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import com.alacriti.model.Instance;
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
		List<SpIn> spIns = new ArrayList<SpIn>();
		rs.first();
		while (rs.next())
			spIns.add(getSpIn(rs));
		return spIns;
	}

	private SpIn getSpIn(ResultSet rs) throws SQLException
	{
		SpIn spIn = new SpIn();
		spIn.setSpInUtReqId(rs.getInt("SPINUT_REQUEST_ID"));

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

	public SpIn insertSpInUtReq(SpIn spIn, Connection connection) throws SQLException
	{
		StringBuilder buff = new StringBuilder();
		buff.append("INSERT INTO SPINUT_REQUEST_TBL( AMI_ID, PRICE, INSTANCE_TYPE, SECURITY_GROUP, KEY_PAIR, ");
		buff.append("NO_OF_INSTANCES,SCHEDULE_START, SCHEDULE_END, SCHEDULE_DAYS, REQUEST_STATUS, REQUESTED_USER, ");
		buff.append("REQUESTED_TIME)  VALUES (?,?,?,?,?,?,?,?,?,?,?,CURRENT_TIMESTAMP);");
		PreparedStatement ps = connection.prepareStatement(buff.toString(),Statement.RETURN_GENERATED_KEYS);
		int i = 0;
		ps.setString(i++, spIn.getAmiId());
		ps.setDouble(i++, new Double(spIn.getPrice()));
		ps.setString(i++, spIn.getInstanceType());
		ps.setString(i++, spIn.getSecGrpId());
		ps.setString(i++, spIn.getKeyName());
		ps.setInt(i++, spIn.getInstanceCapacity());
		ps.setTimestamp(i++, new Timestamp(spIn.getStartTime().getTime()));
		ps.setTimestamp(i++, new Timestamp(spIn.getEndTime().getTime()));
		ps.setString(i++, spIn.getScheduleDays());
		ps.setInt(i++, spIn.getStatus());
		//ps.setString(i++, session.getUserId);
		ps.setInt(i++, 1);
		int val = ps.executeUpdate();

		if (val != 1)
		{
			spIn.setSpInUtReqId(0);
			return spIn;
		}

		ResultSet rs = ps.getGeneratedKeys();
		if (rs.next())
		{
			spIn.setSpInUtReqId(rs.getInt(1));
		}
		return spIn;
	}

	public void insertSpIn(Instance spIn, Connection connection) throws SQLException
	{
		StringBuilder buff = new StringBuilder();
		buff.append("insert into SPINUT_INSTANCE_TBL(SPINUT_INSTANCE_ID,AWS_REQUEST_ID,");
		buff.append("SPINUT_REQUEST_ID,INSTANCE_STATUS) values(?,?,?,?);");
		PreparedStatement ps = connection.prepareStatement(buff.toString(), Statement.RETURN_GENERATED_KEYS);
		int i = 0;
		ps.setString(i++, spIn.getSpInId());
		ps.setString(i++, spIn.getSpInAWSReqId());
		ps.setLong(i++, spIn.getSpInUtReqId());
		ps.setInt(i++, spIn.getStatus());
		int val = ps.executeUpdate();

	}

}
