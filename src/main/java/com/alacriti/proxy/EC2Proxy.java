package com.alacriti.proxy;

import java.util.ArrayList;
import java.util.List;

import com.alacriti.delegate.EC2Delegate;
import com.alacriti.model.AMI;
import com.alacriti.model.SecGrp;
import com.alacriti.model.SpIn;
import com.alacriti.utils.AWSClientFactory;
import com.amazonaws.services.ec2.AmazonEC2;
import com.amazonaws.services.ec2.model.DescribeImagesRequest;
import com.amazonaws.services.ec2.model.DescribeImagesResult;
import com.amazonaws.services.ec2.model.DescribeKeyPairsResult;
import com.amazonaws.services.ec2.model.DescribeSecurityGroupsResult;
import com.amazonaws.services.ec2.model.Filter;
import com.amazonaws.services.ec2.model.KeyPairInfo;
import com.amazonaws.services.ec2.model.SecurityGroup;


public class EC2Proxy {

	public static SpIn requestSpot(SpIn spIn) {
		EC2Delegate spInDelegate=new EC2Delegate();
		return spInDelegate.requestSpIn(spIn);
	}
	
	public static List<SecGrp> getSecGrps() {
		AmazonEC2 ec2 = AWSClientFactory.getEC2Client();
		DescribeSecurityGroupsResult res = ec2.describeSecurityGroups();
		List<SecurityGroup> awsgrps=res.getSecurityGroups();
		List<SecGrp> grps = new ArrayList<SecGrp>();
		for (int i = 0; i < awsgrps.size(); i++) {
			SecurityGroup grp=awsgrps.get(i);
			grps.add(new SecGrp(grp.getGroupName(),grp.getGroupId(),grp.getDescription()));
		}
		return grps;
	}

	public static ArrayList<AMI> getAMIs() {
		System.out.println("Working");
		AmazonEC2 ec2 =AWSClientFactory.getEC2Client();
		DescribeImagesRequest req=new DescribeImagesRequest();
		List<String> platforms=new ArrayList<String>();
		//platforms.add("windows");
		//platforms.add("linux");
		platforms.add("linux/unix");

		req.withFilters( new Filter("platform",platforms));
		DescribeImagesResult res=ec2.describeImages(req);
		System.out.println(res.getImages().size());
		//for(int i=0; i<res.getImages().size();i++){
			System.out.println(res.getImages().get(0).toString());
			//}
		System.out.println("*********************");
		return null;
	}

	public static List<String> getAvailableKeyPairs()
	{
		System.out.println("Getting Available Key Pairs");
		List<String> keyList = new ArrayList<String>();
		AmazonEC2 ec2 = AWSClientFactory.getEC2Client();

		DescribeKeyPairsResult keys=ec2.describeKeyPairs();
		List<KeyPairInfo> info=keys.getKeyPairs();
		System.out.println(info.size());
		for(int i = 0; i < info.size(); i++)
		{
			System.out.println(info.get(i).toString());
			keyList.add(info.get(i).getKeyName());
		}
		System.out.println("*********************");
		return null;
	}
}
