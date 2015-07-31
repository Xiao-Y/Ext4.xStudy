package com.xiaoy.control.menu;

import java.io.IOException;
import java.io.Writer;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;

import org.apache.commons.lang.StringUtils;

import com.xiaoy.model.MenuModel;
import com.xiaoy.service.menu.MenuService;
import com.xiaoy.util.JsonDateValueProcessor;

@WebServlet("/MenuList")
public class MenuList extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public MenuList() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		this.doPost(request, response);
	}

	@SuppressWarnings("static-access")
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		Writer writer = response.getWriter();
		int limit = 10;
		int start = 0;

		if (!StringUtils.isEmpty(request.getParameter("limit")))
		{
			limit = Integer.parseInt(request.getParameter("limit"));
		}
		if (!StringUtils.isEmpty(request.getParameter("start")))
		{
			start = Integer.parseInt(request.getParameter("start"));
		}
		
		String parentId = request.getParameter("parentId");
		MenuModel menuModel = new MenuModel();
		menuModel.setParentId(parentId);
		
		MenuService menuService = new MenuService();
		List<MenuModel> list = menuService.getMenuList(limit, start,menuModel);
		
		int total = menuService.getTotal(menuModel);

		Map<String, Object> rootMap = new HashMap<String, Object>();
		rootMap.put("root", list);
		rootMap.put("total", total);

		JsonConfig jsonConfig = new JsonConfig();
		jsonConfig.registerJsonValueProcessor(Date.class, new JsonDateValueProcessor());

		JSONObject json = new JSONObject();
		JSONObject jsonObject = json.fromObject(rootMap, jsonConfig);
		writer.write(jsonObject.toString());
		writer.close();
	}
}
