package com.xiaoy.util;

import java.sql.Connection;
import java.sql.DriverManager;

public class MySQLConnection
{
	public Connection getMySQLConnection()
	{
		String driver = "com.mysql.jdbc.Driver";
		String url = "jdbc:mysql://localhost:3306/test?useUnicode=true&characterEncoding=UTF-8";

		Connection conn = null;
		try
		{
			Class.forName(driver);
			conn = DriverManager.getConnection(url, "root", "root");
		} catch (Exception e)
		{
			e.printStackTrace();
		}
		return conn;
	}
}
