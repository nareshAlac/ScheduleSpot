package com.alacriti.runnerclass;

import com.alacriti.model.SpIn;
import com.alacriti.proxy.EC2Proxy;

public class SpInReqTester {
	public static void main(String[] args) {
		//Spot instance Object
		SpIn spIn=new SpIn();
		spIn.setPrice("0.2");
		spIn.setInstanceCapacity(1);
		spIn.setAmiId("");
		spIn.setInstanceType("");
		spIn.setSecGrpId("");
		//Request Delegate Obj
		EC2Proxy.requestSpot(spIn);
		
	}
}
