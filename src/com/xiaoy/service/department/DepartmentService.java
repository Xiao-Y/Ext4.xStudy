package com.xiaoy.service.department;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;

import com.xiaoy.model.DepartmentModel;
import com.xiaoy.util.MySQLConnection;

public class DepartmentService
{

	private PreparedStatement ps = null;
	private ResultSet rs = null;

	public List<DepartmentModel> getDepartments(int start, int limit, String whereSQL)
	{
		MySQLConnection myConn = new MySQLConnection();
		List<DepartmentModel> root = new ArrayList<DepartmentModel>();
		String sql = "select * from department where 1=1 ";
		if (!StringUtils.isEmpty(whereSQL))
		{
			sql = sql + "and name like '" + whereSQL + "%' ";
		}

		sql = sql + " limit " + start + "," + limit;

		Connection conn = myConn.getMySQLConnection();
		try
		{
			ps = conn.prepareStatement(sql);
			rs = ps.executeQuery();
			while (rs.next())
			{
				DepartmentModel u = new DepartmentModel(rs.getInt(1), rs.getString(2));
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

	public int getTotal(String whereSQL)
	{
		MySQLConnection myConn = new MySQLConnection();
		String sql = "select count(*) from department where 1=1 ";
		if (!StringUtils.isEmpty(whereSQL))
		{
			sql = sql + "and name like '" + whereSQL + "%' ";
		}
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
}
