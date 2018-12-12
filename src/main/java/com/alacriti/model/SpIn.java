package com.alacriti.model;

import java.util.Date;

public class SpIn extends BaseMsg {

	public SpIn(int requestId)
	{
		this.spInUtReqId = requestId;
	}

	public SpIn() {
	}
	
	private String region;
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
	private boolean isRequestSuccess;

	
	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

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

	public String getAwsRequestId() {
		return awsRequestId;
	}

	public void setAwsRequestId(String awsRequestId) {
		this.awsRequestId = awsRequestId;
	}

	public boolean isRequestSuccess() {
		return isRequestSuccess;
	}

	public void setRequestSuccess(boolean isRequestSuccess) {
		this.isRequestSuccess = isRequestSuccess;
	}

	@Override
	public String toString() {
		return "SpIn [region=" + region + ", spInUtReqId=" + spInUtReqId + ", awsRequestId=" + awsRequestId + ", amiId="
				+ amiId + ", price=" + price + ", instanceType=" + instanceType + ", secGrpId=" + secGrpId
				+ ", keyName=" + keyName + ", instanceCapacity=" + instanceCapacity + ", startTime=" + startTime
				+ ", endTime=" + endTime + ", scheduleDays=" + scheduleDays + ", reqestedTime=" + reqestedTime
				+ ", status=" + status + ", interruptionBehavior=" + interruptionBehavior + ", isRequestSuccess="
				+ isRequestSuccess + ", blockDuration=" + blockDuration + "]";
	}


}
