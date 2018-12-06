package com.alacriti.runnerclass;

import com.alacriti.model.SpIn;
import com.alacriti.proxy.EC2Proxy;

public class SpInReqTester {
	public static void main(String[] args) {
		//Spot instance Object
		SpIn spIn=new SpIn();
		spIn.setPrice("0.02");
		spIn.setInstanceCapacity(1);
		spIn.setAmiId("ami-97785bed");
		spIn.setInstanceType("t3.medium");
		spIn.setSecGrpId("default");
		//Request Delegate Obj
		EC2Proxy.requestSpot(spIn);
		
	}
}
