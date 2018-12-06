package com.alacriti.model;

public class ScheduleRequest {
	private int bidPrice;
	private int numOfInstances;
	ScheduleRequestSpec requestSpec = new ScheduleRequestSpec();
	public int getBidPrice() {
		return bidPrice;
	}
	public void setBidPrice(int bidPrice) {
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
	public void setRequestSpec(ScheduleRequestSpec requestSpec) {
		this.requestSpec = requestSpec;
	}
	

}
