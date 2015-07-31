package com.xiaoy.control.menu;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.Writer;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import com.xiaoy.model.MenuModel;
import com.xiaoy.service.menu.MenuService;

@WebServlet("/MenuSave")
public class MenuSave extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public MenuSave() {
		super();
	}

	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		this.doPost(request, response);
	}

	@SuppressWarnings("static-access")
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		String jsonStr = readJSONString(request);
		JSONObject jsonObject = new JSONObject();

		JSONObject menuModelJson = jsonObject.fromObject(jsonStr);
		String menuName = (String) menuModelJson.get("menuName");
		String menuUrl = (String) menuModelJson.get("menuUrl");
		String seq = (String) menuModelJson.get("seq");
		String menuType = (String) menuModelJson.get("menuType");
		String parentId = (String) menuModelJson.get("parentId");
		if("0".equals(menuType)){
			parentId = "-1";
		}
		String remark = (String) menuModelJson.get("remark");

		MenuModel menuModel = new MenuModel(menuName, menuUrl, parentId,
				remark, menuType, Integer.parseInt(seq));

		MenuService menuService = new MenuService();
		boolean flag = menuService.menuSave(menuModel);
		Map<String, Object> map = new HashMap<>();
		map.put("flag", flag);
		JSONObject json = jsonObject.fromObject(map);
		Writer writer = response.getWriter();
		writer.write(json.toString());
		writer.close();
	}

	private String readJSONString(HttpServletRequest request) {
		StringBuffer json = new StringBuffer();
		String line = null;
		try {
			BufferedReader reader = request.getReader();
			while ((line = reader.readLine()) != null) {
				json.append(line);
			}
		} catch (Exception e) {
			System.out.println(e.toString());
		}
		return json.toString();
	}
}
