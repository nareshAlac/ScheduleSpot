package com.alacriti.model;

import java.util.ArrayList;
import java.util.List;

public class ScheduleRequestSpec {
	private List<String> instanceTypes = new ArrayList<String>();
	private List<AMI> amiIds = new ArrayList<AMI>();
	private List<SecGrp> securityGroups = new ArrayList<SecGrp>();
	private List<String> keypairs = new ArrayList<String>();
	private List<String> regions = new ArrayList<String>();
	
	public List<String> getInstanceTypes() {
		return instanceTypes;
	}
	public void setInstanceTypes(List<String> instanceTypes) {
		this.instanceTypes = instanceTypes;
	}

	public List<AMI> getAmiIds()
	{
		return amiIds;
	}

	public void setAmiIds(List<AMI> amiIds)
	{
		this.amiIds = amiIds;
	}
	public List<SecGrp> getSecurityGroups() {
		return securityGroups;
	}
	public void setSecurityGroups(List<SecGrp> securityGroups) {
		this.securityGroups = securityGroups;
	}
	public List<String> getKeypairs() {
		return keypairs;
	}
	public void setKeypairs(List<String> keypairs) {
		this.keypairs = keypairs;
	}
	public List<String> getRegions() {
		return regions;
	}
	public void setRegions(List<String> regions) {
		this.regions = regions;
	}
}
