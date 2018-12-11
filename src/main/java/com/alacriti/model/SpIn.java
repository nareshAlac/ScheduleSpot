package com.alacriti.model;

import java.util.Date;

public class SpIn extends BaseMsg {

	public SpIn(int requestId)
	{
		this.spInUtReqId = requestId;
	}

	public SpIn() {
	}

	private int spInUtReqId;
	private String awsRequestId;
	private String amiId;
	private String price;
	private String instanceType;
	private String secGrpId;
	private String keyName;
	private Integer instanceCapacity;
	private Date startTime;
	private Date endTime;
	private String scheduleDays;
	private Date reqestedTime;
	private int status;
	private String interruptionBehavior;

	// Duration in minutes
	private Integer blockDuration;

	public int getSpInUtReqId()
	{
		return spInUtReqId;
	}

	public void setSpInUtReqId(int spInUtReqId)
	{
		this.spInUtReqId = spInUtReqId;
	}

	public String getAWSRequestId()
	{
		return awsRequestId;
	}

	public String getAmiId()
	{
		return amiId;
	}

	public String getPrice()
	{
		return price;
	}

	public String getInstanceType()
	{
		return instanceType;
	}

	public String getSecGrpId()
	{
		return secGrpId;
	}

	public String getKeyName()
	{
		return keyName;
	}

	public Integer getInstanceCapacity()
	{
		return instanceCapacity;
	}

	public Date getStartTime()
	{
		return startTime;
	}

	public Date getEndTime()
	{
		return endTime;
	}

	public String getScheduleDays()
	{
		return scheduleDays;
	}

	public Date getReqestedTime()
	{
		return reqestedTime;
	}

	public int getStatus()
	{
		return status;
	}

	public String getInterruptionBehavior()
	{
		return interruptionBehavior;
	}

	public Integer getBlockDuration()
	{
		return blockDuration;
	}

	public void setAWSRequestId(String requestId)
	{
		this.awsRequestId = requestId;
	}

	public void setAmiId(String amiId)
	{
		this.amiId = amiId;
	}

	public void setPrice(String price)
	{
		this.price = price;
	}

	public void setInstanceType(String instanceType)
	{
		this.instanceType = instanceType;
	}

	public void setSecGrpId(String secGrpId)
	{
		this.secGrpId = secGrpId;
	}

	public void setKeyName(String keyName)
	{
		this.keyName = keyName;
	}

	public void setInstanceCapacity(Integer instanceCapacity)
	{
		this.instanceCapacity = instanceCapacity;
	}

	public void setStartTime(Date startTime)
	{
		this.startTime = startTime;
	}

	public void setEndTime(Date endTime)
	{
		this.endTime = endTime;
	}

	public void setScheduleDays(String scheduleDays)
	{
		this.scheduleDays = scheduleDays;
	}

	public void setReqestedTime(Date reqestedTime)
	{
		this.reqestedTime = reqestedTime;
	}

	public void setStatus(int status)
	{
		this.status = status;
	}

	public void setInterruptionBehavior(String interruptionBehavior)
	{
		this.interruptionBehavior = interruptionBehavior;
	}

	public void setBlockDuration(Integer blockDuration)
	{
		this.blockDuration = blockDuration;
	}


}
