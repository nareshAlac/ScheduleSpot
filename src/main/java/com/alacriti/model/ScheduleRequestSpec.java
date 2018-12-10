package com.alacriti.model;

import java.util.ArrayList;
import java.util.List;

public class ScheduleRequestSpec {
	ArrayList<String> instanceTypes = new ArrayList<String>();
	List<AMI> amiIds = new ArrayList<AMI>();
	ArrayList<String> securityGroups = new ArrayList<String>();

	
	public ArrayList<String> getInstanceTypes() {
		return instanceTypes;
	}
	public void setInstanceTypes(ArrayList<String> instanceTypes) {
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
	public ArrayList<String> getSecurityGroups() {
		return securityGroups;
	}
	public void setSecurityGroups(ArrayList<String> securityGroups) {
		this.securityGroups = securityGroups;
	}
}
