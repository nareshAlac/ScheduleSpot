package com.alacriti.rest.bo;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

import com.alacriti.model.Instance;
import com.alacriti.model.SpIn;
import com.alacriti.rest.dao.EC2DAO;

public class EC2BO
{

	public List<SpIn> getSpInReqs(Connection connection)
	{
		EC2DAO dao= new EC2DAO();
		
		try
		{
			return dao.getSpInReqs(connection);
		}
		catch (SQLException e)
		{
			e.printStackTrace();
		}
		return null;
	}

	public SpIn insertSpInUtReq(SpIn spIn, Connection connection)
	{
		EC2DAO dao = new EC2DAO();

		try
		{
			return dao.insertSpInUtReq(spIn, connection);
		}
		catch (SQLException e)
		{
			e.printStackTrace();
		}
		return null;
	}

	public void insertSpIn(Instance spIn, Connection connection)
	{
		EC2DAO dao = new EC2DAO();

		try
		{
			dao.insertSpIn(spIn, connection);
		}
		catch (SQLException e)
		{
			e.printStackTrace();
		}
	}

}
