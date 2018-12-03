package com.alacriti.utils;

import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.ec2.AmazonEC2;
import com.amazonaws.services.ec2.AmazonEC2ClientBuilder;

public class AWSClientFactory {
	
	private static final String accessKeyId=" AKIAJ6DKIBCXXOONSYKQ";
	private static final String secreateAccessKey="x9wFCno1qqgFVqpwsuBg9LIfeI51R62sTcfNp8AP";
	private static final String region="";
	
	public static AmazonEC2 getEC2Client(){
		AmazonEC2 ec2 = AmazonEC2ClientBuilder.standard()
				.withRegion(Regions.US_EAST_1)
				.withCredentials((AWSCredentialsProvider) new AWSStaticCredentialsProvider(new BasicAWSCredentials(accessKeyId, secreateAccessKey)))
				.build();
		
		return ec2;
	}

}
