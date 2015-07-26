package com.xiaoy.model;

import java.util.Date;

public class UserModel
{
	private int id;
	private String name;
	private int age;
	private String sex;
	// 添加
	private Date birthday;
	private double salary;
	private boolean iT;

	public UserModel(int id, String name, int age, String sex, Date birthday, double salary)
	{
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.sex = sex;
		this.birthday = birthday;
		this.salary = salary;
	}

	public int getId()
	{
		return id;
	}

	public void setId(int id)
	{
		this.id = id;
	}

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public int getAge()
	{
		return age;
	}

	public void setAge(int age)
	{
		this.age = age;
	}

	public String getSex()
	{
		return sex;
	}

	public void setSex(String sex)
	{
		this.sex = sex;
	}

	public Date getBirthday()
	{
		return birthday;
	}

	public void setBirthday(Date birthday)
	{
		this.birthday = birthday;
	}

	public double getSalary()
	{
		return salary;
	}

	public void setSalary(double salary)
	{
		this.salary = salary;
	}

	public boolean isiT()
	{
		return iT;
	}

	public void setiT(boolean iT)
	{
		this.iT = iT;
	}
}
