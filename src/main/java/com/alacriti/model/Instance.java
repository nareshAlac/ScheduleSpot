package com.alacriti.model;

public class Instance
{
	public Instance()
	{
	}

	private String type;
	private String price;

	public String getType()
	{
		return type;
	}

	public void setType(String type)
	{
		this.type = type;
	}

	public String getPrice()
	{
		return price;
	}

	public void setPrice(String price)
	{
		this.price = price;
	}

	@Override
	public String toString()
	{
		return "{type=\"" + type + "\", price=\"" + price + "}";
	}

}
