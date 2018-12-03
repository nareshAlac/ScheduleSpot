package com.alacriti.model;

public class SpIn {

	public SpIn(String requestId) {
		this.requestId = requestId;
	}

	public SpIn() {
	}

	private String amiId;
	private String price;
	private String requestId;
	private String status;
	private String interruptionBehavior;

	private String instanceType;
	private Integer instanceCapacity;
	// Duration in minutes
	private Integer blockDuration;
	private String secGrpId;

	public String getAmiId() {
		return amiId;
	}

	public void setAmiId(String amiId) {
		this.amiId = amiId;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getRequestId() {
		return requestId;
	}

	public void setRequestId(String requestId) {
		this.requestId = requestId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getInterruptionBehavior() {
		return interruptionBehavior;
	}

	public void setInterruptionBehavior(String interruptionBehavior) {
		this.interruptionBehavior = interruptionBehavior;
	}

	public String getInstanceType() {
		return instanceType;
	}

	public void setInstanceType(String instanceType) {
		this.instanceType = instanceType;
	}

	public Integer getInstanceCapacity() {
		return instanceCapacity;
	}

	public void setInstanceCapacity(Integer instanceCapacity) {
		this.instanceCapacity = instanceCapacity;
	}

	public Integer getBlockDuration() {
		return blockDuration;
	}

	public void setBlockDuration(Integer blockDuration) {
		this.blockDuration = blockDuration;
	}

	public String getSecGrpId() {
		return secGrpId;
	}

	public void setSecGrpId(String secGrpId) {
		this.secGrpId = secGrpId;
	}

}
