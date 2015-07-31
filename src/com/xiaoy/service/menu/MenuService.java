package com.xiaoy.service.menu;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.apache.commons.lang.StringUtils;

import com.xiaoy.model.MenuModel;
import com.xiaoy.util.MySQLConnection;

public class MenuService {

	private PreparedStatement ps = null;
	private ResultSet rs = null;

	public List<MenuModel> getMenuList(int limit, int start, MenuModel menuModel) {
		MySQLConnection myConn = new MySQLConnection();
		List<MenuModel> root = new ArrayList<MenuModel>();
		String startSql = "select * from menu where 1=1 ";
		String centerSql = this.whereAppend(menuModel);
		if (!StringUtils.isEmpty(centerSql)) {
			startSql = startSql + centerSql;
		}
		String endSql = " order by updateTime desc limit " + start + ","
				+ limit;
		String sql = startSql + endSql;
		Connection conn = myConn.getMySQLConnection();
		try {
			ps = conn.prepareStatement(sql);
			rs = ps.executeQuery();
			while (rs.next()) {
				MenuModel u = new MenuModel(rs.getString(1), rs.getString(2),
						rs.getString(3), rs.getString(4), rs.getString(5),
						rs.getTimestamp(6), rs.getTimestamp(7),
						rs.getString(8), rs.getInt(9));
				root.add(u);
			}
			rs.close();
			ps.close();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if (conn != null) {
				try {
					conn.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
		return root;
	}

	public int getTotal( MenuModel menuModel) {
		MySQLConnection myConn = new MySQLConnection();
		String startSql = "select count(*) from menu ";
		String centerSql = this.whereAppend(menuModel);
		if (!StringUtils.isEmpty(centerSql)) {
			startSql = startSql + centerSql;
		}
		Connection conn = myConn.getMySQLConnection();
		int total = 0;
		try {
			ps = conn.prepareStatement(startSql);
			rs = ps.executeQuery();
			if (rs.next()) {
				total = rs.getInt(1);
			}
			rs.close();
			ps.close();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if (conn != null) {
				try {
					conn.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
		return total;
	}

	public boolean menuDel(String[] ids) {
		MySQLConnection myConn = new MySQLConnection();
		Connection conn = myConn.getMySQLConnection();
		String sql = "delete from menu where id = ?";
		boolean flag = false;
		try {
			ps = conn.prepareStatement(sql);
			for (String i : ids) {
				ps.setString(1, i);
				ps.addBatch();
			}

			ps.executeBatch();
			flag = true;
		} catch (SQLException e) {
			flag = false;
			e.printStackTrace();
		} finally {
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return flag;
	}

	public boolean menuSave(MenuModel menuModel) {
		MySQLConnection myConn = new MySQLConnection();
		Connection conn = myConn.getMySQLConnection();
		String sql = "insert into menu values (?,?,?,?,?,?,?,?,?)";
		boolean f = false;
		try {
			ps = conn.prepareStatement(sql);
			ps.setString(1, UUID.randomUUID().toString());
			ps.setString(2, menuModel.getMenuName());
			ps.setString(3, menuModel.getMenuUrl());
			String parentId = StringUtils.isEmpty(menuModel.getParentId()) ? "-1"
					: menuModel.getParentId();
			ps.setString(4, parentId);
			ps.setString(5, menuModel.getRemark());
			java.sql.Timestamp ti = new java.sql.Timestamp(
					new java.util.Date().getTime());
			ps.setTimestamp(6, ti);
			ps.setTimestamp(7, ti);
			ps.setString(8, menuModel.getMenuType());
			ps.setInt(9, menuModel.getSeq());
			ps.executeUpdate();
			return true;
		} catch (SQLException e) {
			f = false;
			e.printStackTrace();
		}
		return f;
	}

	private String whereAppend(MenuModel menuModel) {
		StringBuffer where = new StringBuffer();
		if (menuModel != null) {
			if (!StringUtils.isEmpty(menuModel.getParentId())) {
				where.append(" and parentId like " + menuModel.getParentId());
			}
		}
		return where.toString();
	}
}
