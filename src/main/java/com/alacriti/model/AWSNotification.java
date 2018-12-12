package com.alacriti.model;

public class AWSNotification
{

	public AWSNotification()
	{
	}

	private String type;

	private String messageId;

	private String token;

	private String topicArn;

	private String subject;

	private String message;

	private String subscriptionUrl;

	private String unsubscribeURL;

	private String timestamp;

	private String signatureVersion;

	private String signature;

	private String signingCertURL;

	public String getType()
	{
		return type;
	}

	public void setType(String type)
	{
		this.type = type;
	}

	public String getMessageId()
	{
		return messageId;
	}

	public void setMessageId(String messageId)
	{
		this.messageId = messageId;
	}

	public String getToken()
	{
		return token;
	}

	public void setToken(String token)
	{
		this.token = token;
	}

	public String getTopicArn()
	{
		return topicArn;
	}

	public void setTopicArn(String topicArn)
	{
		this.topicArn = topicArn;
	}

	public String getSubject()
	{
		return subject;
	}

	public void setSubject(String subject)
	{
		this.subject = subject;
	}

	public String getMessage()
	{
		return message;
	}

	public void setMessage(String message)
	{
		this.message = message;
	}

	public String getSubscriptionUrl()
	{
		return subscriptionUrl;
	}

	public void setSubscriptionUrl(String subscriptionUrl)
	{
		this.subscriptionUrl = subscriptionUrl;
	}

	public String getUnsubscribeURL()
	{
		return unsubscribeURL;
	}

	public void setUnsubscribeURL(String unsubscribeURL)
	{
		this.unsubscribeURL = unsubscribeURL;
	}

	public String getTimestamp()
	{
		return timestamp;
	}

	public void setTimestamp(String timestamp)
	{
		this.timestamp = timestamp;
	}

	public String getSignatureVersion()
	{
		return signatureVersion;
	}

	public void setSignatureVersion(String signatureVersion)
	{
		this.signatureVersion = signatureVersion;
	}

	public String getSignature()
	{
		return signature;
	}

	public void setSignature(String signature)
	{

		this.signature = signature;
	}

	public String getSigningCertURL()
	{
		return signingCertURL;
	}

	public void setSigningCertURL(String signingCertURL)
	{
		this.signingCertURL = signingCertURL;
	}

	@Override
	public String toString()
	{
		return "{\"type\":\"" + type + "\", messageId\":\"" + messageId + "\", token\":\"" + token + "\", topicArn\":\""
				+ topicArn + "\", subject\":\"" + subject + "\", message\":\"" + message + "\", subscriptionUrl\":\""
				+ subscriptionUrl + "\", unsubscribeURL\":\"" + unsubscribeURL + "\", timestamp\":\"" + timestamp
				+ "\", signatureVersion\":\"" + signatureVersion + "\", signature\":\"" + signature
				+ "\", signingCertURL\":\"" + signingCertURL + "\"}";
	}

}
