package com.xiaoy.control.tree;

import java.io.IOException;
import java.io.Writer;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JsonConfig;

import com.xiaoy.model.MenuModel;
import com.xiaoy.service.menu.MenuService;
import com.xiaoy.util.JsonDateValueProcessor;

/**
 * 同步加载树
 * 
 * @author XiaoY
 * @date 2015年8月6日下午3:00:41
 */
@WebServlet("/BuildTree")
public class BuildTree extends HttpServlet
{
	private static final long serialVersionUID = 1L;

	public BuildTree()
	{
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		this.doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		response.setContentType("text/html;charset=UTF-8");
		Writer writer = response.getWriter();
		MenuService menuService = new MenuService();
		// 获取父级菜单
		List<MenuModel> parentMenu = menuService.getParentMenuList();
		// 获取所有的子菜单
		List<MenuModel> childMenu = menuService.getChildMenuList();

		JSONArray jsonArray = new JSONArray();
		for (MenuModel parent : parentMenu)
		{
			Map<String, Object> map = new HashMap<>();
			map.put("id", parent.getId());
			map.put("expandabl", false);// 菜单折叠状态
			map.put("text", parent.getMenuName());// 菜单名称
			map.put("index", parent.getSeq());
			map.put("leaf", false);
			List<Object> list = new ArrayList<Object>();
			for (MenuModel child : childMenu)
			{
				if (parent.getId().equals(child.getParentId()))
				{
					Map<String, Object> childMap = new HashMap<>();
					childMap.put("id", child.getId());
					childMap.put("text", child.getMenuName());// 菜单名称
					childMap.put("index", child.getSeq());
					childMap.put("parentId", child.getParentId());
					childMap.put("url", "../" + child.getMenuUrl());
					childMap.put("leaf", true);
					list.add(childMap);
				}
			}
			map.put("children", list);
			jsonArray.add(map);
		}
		JsonConfig jsonConfig = new JsonConfig();
		jsonConfig.registerJsonValueProcessor(Date.class, new JsonDateValueProcessor());

		JSONArray root = JSONArray.fromObject(jsonArray, jsonConfig);
		writer.write(root.toString());
		writer.close();
	}
}
