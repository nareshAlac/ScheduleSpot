package com.alacriti.model;

import java.math.BigDecimal;

public class ScheduleRequest extends BaseMsg {
	private BigDecimal bidPrice;
	private int numOfInstances;
	private String instanceType;
	private String amiId;
	private String securityGroup;
	private long spinutRequestId;
	public long getSpinutRequestId() {
		return spinutRequestId;
	}
	public void setSpinutRequestId(long spinutRequestId) {
		this.spinutRequestId = spinutRequestId;
	}
	ScheduleRequestSpec requestSpec = new ScheduleRequestSpec();
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
	public ScheduleRequestSpec getRequestSpec() {
		return requestSpec;
	}
	public String getInstanceType() {
		return instanceType;
	}
	public void setInstanceType(String instanceType) {
		this.instanceType = instanceType;
	}
	public String getAmiId() {
		return amiId;
	}
	public void setAmiId(String amiId) {
		this.amiId = amiId;
	}
	public String getSecurityGroup() {
		return securityGroup;
	}
	public void setSecurityGroup(String securityGroup) {
		this.securityGroup = securityGroup;
	}
	 
	

}
