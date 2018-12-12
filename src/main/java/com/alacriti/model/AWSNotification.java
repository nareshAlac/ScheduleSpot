package com.alacriti.model;

public class AWSNotification
{

	public AWSNotification()
	{
	}

	private String Type;

	private String MessageId;

	private String Token;

	private String TopicArn;

	private String Subject;

	private String Message;

	private String SubscribeURL;

	private String UnsubscribeURL;

	private String Timestamp;

	private String SignatureVersion;

	private String Signature;

	private String SigningCertURL;

	public String getType() {
		return Type;
	}

	public String getMessageId() {
		return MessageId;
	}

	public String getToken() {
		return Token;
	}

	public String getTopicArn() {
		return TopicArn;
	}

	public String getSubject() {
		return Subject;
	}

	public String getMessage() {
		return Message;
	}

	public String getSubscribeURL() {
		return SubscribeURL;
	}

	public String getUnsubscribeURL() {
		return UnsubscribeURL;
	}

	public String getTimestamp() {
		return Timestamp;
	}

	public String getSignatureVersion() {
		return SignatureVersion;
	}

	public String getSignature() {
		return Signature;
	}

	public String getSigningCertURL() {
		return SigningCertURL;
	}

	public void setType(String type) {
		Type = type;
	}

	public void setMessageId(String messageId) {
		MessageId = messageId;
	}

	public void setToken(String token) {
		Token = token;
	}

	public void setTopicArn(String topicArn) {
		TopicArn = topicArn;
	}

	public void setSubject(String subject) {
		Subject = subject;
	}

	public void setMessage(String message) {
		Message = message;
	}

	public void setSubscribeURL(String subscribeURL) {
		SubscribeURL = subscribeURL;
	}

	public void setUnsubscribeURL(String unsubscribeURL) {
		UnsubscribeURL = unsubscribeURL;
	}

	public void setTimestamp(String timestamp) {
		Timestamp = timestamp;
	}

	public void setSignatureVersion(String signatureVersion) {
		SignatureVersion = signatureVersion;
	}

	public void setSignature(String signature) {
		Signature = signature;
	}

	public void setSigningCertURL(String signingCertURL) {
		SigningCertURL = signingCertURL;
	}

	@Override
	public String toString() {
		return "AWSNotification [Type=" + Type + ", MessageId=" + MessageId + ", Token=" + Token + ", TopicArn="
				+ TopicArn + ", Subject=" + Subject + ", Message=" + Message + ", SubscribeURL=" + SubscribeURL
				+ ", UnsubscribeURL=" + UnsubscribeURL + ", Timestamp=" + Timestamp + ", SignatureVersion="
				+ SignatureVersion + ", Signature=" + Signature + ", SigningCertURL=" + SigningCertURL + "]";
	}

}
