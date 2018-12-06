package com.alacriti.model;

import java.sql.Date;

public class Instance
{
	public Instance()
	{
	}

	private String spInId;
	private String spInAWSReqId;
	private long spInUtReqId;
	private int status;
	private int isInterrupted;
	private Date startTime;
	private Date endTime;
	private Date createdTime;
	private String type;
	private String price;

	public String getType()
	{
		return type;
	}

	public void setType(String type)
	{
		this.type = type;
	}

	public String getPrice()
	{
		return price;
	}

	public void setPrice(String price)
	{
		this.price = price;
	}

	public String getSpInId()
	{
		return spInId;
	}

	public void setSpInId(String spInId)
	{
		this.spInId = spInId;
	}

	public String getSpInAWSReqId()
	{
		return spInAWSReqId;
	}

	public void setSpInAWSReqId(String spInAWSReqId)
	{
		this.spInAWSReqId = spInAWSReqId;
	}

	public long getSpInUtReqId()
	{
		return spInUtReqId;
	}

	public void setSpInUtReqId(long spInUtReqId)
	{
		this.spInUtReqId = spInUtReqId;
	}

	public int getStatus()
	{
		return status;
	}

	public void setStatus(int status)
	{
		this.status = status;
	}

	public int getIsInterrupted()
	{
		return isInterrupted;
	}

	public void setIsInterrupted(int isInterrupted)
	{
		this.isInterrupted = isInterrupted;
	}

	public Date getStartTime()
	{
		return startTime;
	}

	public void setStartTime(Date startTime)
	{
		this.startTime = startTime;
	}

	public Date getEndTime()
	{
		return endTime;
	}

	public void setEndTime(Date endTime)
	{
		this.endTime = endTime;
	}

	public Date getCreatedTime()
	{
		return createdTime;
	}

	public void setCreatedTime(Date createdTime)
	{
		this.createdTime = createdTime;
	}

	@Override
	public String toString()
	{
		return "{type=\"" + type + "\", price=\"" + price + "}";
	}

}
