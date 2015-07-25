package com.xiaoy.service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.xiaoy.model.UserModel;
import com.xiaoy.util.MySQLConnection;

public class UserService
{
	private PreparedStatement ps = null;
	private ResultSet rs = null;

	public List<UserModel> getUserList(int limit, int start)
	{
		MySQLConnection myConn = new MySQLConnection();
		List<UserModel> root = new ArrayList<UserModel>();
		String sql = "select * from employee limit " + start + "," + limit;
		Connection conn = myConn.getMySQLConnection();
		try
		{
			ps = conn.prepareStatement(sql);
			rs = ps.executeQuery();
			while (rs.next())
			{
				UserModel u = new UserModel(rs.getInt(1), rs.getString(2), rs.getInt(3), rs.getString(4));
				root.add(u);
			}
			rs.close();
			ps.close();
		} catch (SQLException e)
		{
			e.printStackTrace();
		} finally
		{
			if (conn != null)
			{
				try
				{
					conn.close();
				} catch (SQLException e)
				{
					e.printStackTrace();
				}
			}
		}
		return root;
	}

	public int getTotal()
	{
		MySQLConnection myConn = new MySQLConnection();
		String sql = "select count(*) from employee ";
		Connection conn = myConn.getMySQLConnection();
		int total = 0;
		try
		{
			ps = conn.prepareStatement(sql);
			rs = ps.executeQuery();
			if (rs.next())
			{
				total = rs.getInt(1);
			}
			rs.close();
			ps.close();
		} catch (SQLException e)
		{
			e.printStackTrace();
		} finally
		{
			if (conn != null)
			{
				try
				{
					conn.close();
				} catch (SQLException e)
				{
					e.printStackTrace();
				}
			}
		}
		return total;
	}

	public boolean userDel(int[] ids)
	{
		MySQLConnection myConn = new MySQLConnection();
		Connection conn = myConn.getMySQLConnection();
		String sql = "delete from employee where id = ?";
		boolean flag = false;
		try
		{
			ps = conn.prepareStatement(sql);
			for (int i : ids)
			{
				ps.setInt(1, i);
				ps.addBatch();
			}

			ps.executeBatch();
			flag = true;
		} catch (SQLException e)
		{
			flag = false;
			e.printStackTrace();
		} finally
		{
			try
			{
				conn.close();
			} catch (SQLException e)
			{
				e.printStackTrace();
			}
		}
		return flag;
	}
}
