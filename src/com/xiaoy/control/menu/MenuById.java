package com.xiaoy.control.menu;

import java.io.IOException;
import java.io.Writer;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;

import com.xiaoy.model.MenuModel;
import com.xiaoy.service.menu.MenuService;
import com.xiaoy.util.JsonDateValueProcessor;

@WebServlet("/MenuById")
public class MenuById extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public MenuById() {
		super();
	}

	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		this.doPost(request, response);
	}

	@SuppressWarnings("static-access")
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		Writer writer = response.getWriter();
		
		String id = request.getParameter("id");

		MenuService menuService = new MenuService();
		MenuModel menu = menuService.getMenuById(id);
		
		Map<String, Object> rootMap = new HashMap<String, Object>();
		rootMap.put("root", menu);

		JsonConfig jsonConfig = new JsonConfig();
		jsonConfig.registerJsonValueProcessor(Date.class, new JsonDateValueProcessor());

		JSONObject json = new JSONObject();
		JSONObject jsonObject = json.fromObject(rootMap, jsonConfig);
		writer.write(jsonObject.toString());
		writer.close();
	}
}
