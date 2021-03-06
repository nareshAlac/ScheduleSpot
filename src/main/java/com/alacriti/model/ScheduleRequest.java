package com.alacriti.model;

import java.util.Arrays;
	

public class ScheduleRequest extends BaseMsg {
	private String region;
	private String bidPrice;
	private int numOfInstances;
	private String instanceType;
	private String amiId;
	private String securityGroup;
	private String sshKeyPair;
	private String scheduleStartDate;
	private String scheduleEndDate;
	private String[] scheduleDays;
	private long spinutRequestId;
	private Time startTimeSchedule;
	private Time endTimeSchedule;
	
	
	public Time getStartTimeSchedule() {
		return startTimeSchedule;
	}
	public void setStartTimeSchedule(Time startTimeSchedule) {
		this.startTimeSchedule = startTimeSchedule;
	}
	public Time getEndTimeSchedule() {
		return endTimeSchedule;
	}
	public void setEndTimeSchedule(Time endTimeSchedule) {
		this.endTimeSchedule = endTimeSchedule;
	}
	public String getRegion() {
		return region;
	}
	public void setRegion(String region) {
		this.region = region;
	}
	public long getSpinutRequestId() {
		return spinutRequestId;
	}
	public void setSpinutRequestId(long spinutRequestId) {
		this.spinutRequestId = spinutRequestId;
	}
	public String getBidPrice() {
		return bidPrice;
	}
	public void setBidPrice(String bidPrice) {
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
	public String getSecurityGroup() {
		return securityGroup;
	}
	public void setSecurityGroup(String securityGroup) {
		this.securityGroup = securityGroup;
	}
	public String getScheduleStartDate() {
		return scheduleStartDate;
	}
	public void setScheduleStartDate(String scheduleStartDate) {
		this.scheduleStartDate = scheduleStartDate;
	}
	public String getScheduleEndDate() {
		return scheduleEndDate;
	}
	public void setScheduleEndDate(String scheduleEndDate) {
		this.scheduleEndDate = scheduleEndDate;
	}
	public String[] getScheduleDays() {
		return scheduleDays;
	}
	public void setScheduleDays(String[] scheduleDays) {
		this.scheduleDays = scheduleDays;
	}
	@Override
	public String toString() {
		return "ScheduleRequest [region=" + region + ", bidPrice=" + bidPrice + ", numOfInstances=" + numOfInstances
				+ ", instanceType=" + instanceType + ", amiId=" + amiId + ", securityGroup=" + securityGroup
				+ ", sshKeyPair=" + sshKeyPair + ", scheduleStartDate=" + scheduleStartDate + ", scheduleEndDate="
				+ scheduleEndDate + ", scheduleDays=" + Arrays.toString(scheduleDays) + ", spinutRequestId="
				+ spinutRequestId + ", startTimeSchedule=" + startTimeSchedule + ", endTimeSchedule=" + endTimeSchedule
				+ "]";
	}
	 
	
	

}
