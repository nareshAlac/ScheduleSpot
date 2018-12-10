package com.alacriti.model;

import java.math.BigDecimal;
import java.util.Date;

public class ScheduleRequest extends BaseMsg {
	private BigDecimal bidPrice;
	private int numOfInstances;
	private String instanceType;
	private String amiId;
	private String securityGroup;
	private String sshKeyPair;
	private Date startTime;
	private Date endTime;
	private String days;
	private long spinutRequestId;
	
	public long getSpinutRequestId() {
		return spinutRequestId;
	}
	public void setSpinutRequestId(long spinutRequestId) {
		this.spinutRequestId = spinutRequestId;
	}
	public BigDecimal getBidPrice() {
		return bidPrice;
	}
	public void setBidPrice(BigDecimal bidPrice) {
		this.bidPrice = bidPrice;
	}
	public int getNumOfInstances() {
		return numOfInstances;
	}
	public void setNumOfInstances(int numOfInstances) {
		this.numOfInstances = numOfInstances;
	}
	public String getSshKeyPair() {
		return sshKeyPair;
	}
	public void setSshKeyPair(String sshKeyPair) {
		this.sshKeyPair = sshKeyPair;
	}
	public String getAmiId() {
		return amiId;
	}
	public void setAmiId(String amiId) {
		this.amiId = amiId;
	}
	public String getInstanceType() {
		return instanceType;
	}
	public void setInstanceType(String instanceType) {
		this.instanceType = instanceType;
	}
	
	public String getDays() {
		return days;
	}
	public void setDays(String days) {
		this.days = days;
	}
	public String getSecurityGroup() {
		return securityGroup;
	}
	public void setSecurityGroup(String securityGroup) {
		this.securityGroup = securityGroup;
	}
	public Date getStartTime() {
		return startTime;
	}
	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}
	public Date getEndTime() {
		return endTime;
	}
	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}
	

}
