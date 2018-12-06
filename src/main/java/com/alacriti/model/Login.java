package com.alacriti.model;

public class Login {
	 private String userName;
	 private String password;
	 private long userId;
	 private boolean isValidUser;
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		this.userId = userId;
	}
	public boolean isValidUser() {
		return isValidUser;
	}
	public void setValidUser(boolean isValidUser) {
		this.isValidUser = isValidUser;
	}
	@Override
	public String toString() {
		return "Login [userName=" + userName + ", password=" + password + ", userId=" + userId + ", isValidUser="
				+ isValidUser + "]";
	}
	 
	
}
