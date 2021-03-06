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
		int i =1;
		while (rs.next())
        {
		spIn.setSpInUtReqId(rs.getInt(i++));

		spIn.setAmiId(rs.getString(i++));

		spIn.setPrice(rs.getBigDecimal(i++)+"");

		spIn.setInstanceType(rs.getString(i++));

		spIn.setSecGrpId(rs.getString(i++));

		spIn.setKeyName(rs.getString(i++));

		spIn.setInstanceCapacity(rs.getInt(i++));

		spIn.setStartTime(rs.getDate(i++));

		spIn.setEndTime(rs.getDate(i++));

		spIn.setScheduleDays(rs.getString(i++));

		spIn.setStatus(rs.getInt(i++));
		
		spIn.setUserId(rs.getInt(i++));
		
		spIn.setReqestedTime(rs.getDate(i++));
        }


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
		ps.setString(++i, spIn.getAmiId());
		ps.setDouble(++i, new Double(spIn.getPrice()));
		ps.setString(++i, spIn.getInstanceType());
		ps.setString(++i, spIn.getSecGrpId());
		ps.setString(++i, spIn.getKeyName());
		ps.setInt(++i, spIn.getInstanceCapacity());
		ps.setTimestamp(++i, new Timestamp(spIn.getStartTime().getTime()));
		ps.setTimestamp(++i, new Timestamp(spIn.getEndTime().getTime()));
		ps.setString(++i, spIn.getScheduleDays());
		ps.setInt(++i, spIn.getStatus());
		//ps.setString(i++, session.getUserId);
		ps.setLong(++i, spIn.getUserId());
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

	public void insertSpinInstance(Instance spIn, Connection connection) throws SQLException
	{
		StringBuilder buff = new StringBuilder();
		buff.append("insert into SPINUT_INSTANCE_TBL(SPINUT_AWS_INSTANCE_ID, AWS_REQUEST_ID,");
		buff.append("SPINUT_REQUEST_ID,INSTANCE_STATUS) values(?,?,?,?);");
		PreparedStatement ps = connection.prepareStatement(buff.toString(), Statement.RETURN_GENERATED_KEYS);
		int i = 0;
		ps.setString(++i, spIn.getSpInId());
		ps.setString(++i, spIn.getSpInAWSReqId());
		ps.setLong(++i, spIn.getSpInUtReqId());
		ps.setInt(++i, spIn.getStatus());
		int val = ps.executeUpdate();
		System.out.println("EC2DAO count of insertSpinInstance created:"+ val);

	}

	public SpIn getSpInDetailsByInstanceId(String instanceId, Connection connection) throws SQLException
	{
		System.out.println("Tying to get SpIn Request Details!!!");
		StringBuilder buff = new StringBuilder();
		buff.append("SELECT a.SPINUT_REQUEST_ID, a.AMI_ID,a.PRICE,a.INSTANCE_TYPE,a.SECURITY_GROUP,a.KEY_PAIR,a.NO_OF_INSTANCES,");
		buff.append("a.SCHEDULE_START,a.SCHEDULE_END,a.SCHEDULE_DAYS,a.REQUEST_STATUS,a.REQUESTED_USER,a.REQUESTED_TIME ");
		buff.append(
				"FROM SPINUT_REQUEST_TBL a,SPINUT_INSTANCE_TBL b WHERE a.SPINUT_REQUEST_ID=b.SPINUT_REQUEST_ID and b.SPINUT_AWS_INSTANCE_ID='"
						+ instanceId + "'");
		System.out.println(buff.toString());
		PreparedStatement ps = connection.prepareStatement(buff.toString());
		ResultSet rs = ps.executeQuery();
		return getSpIn(rs);
	}

}
