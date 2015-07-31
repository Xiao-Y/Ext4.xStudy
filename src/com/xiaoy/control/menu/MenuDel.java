package com.xiaoy.control.menu;

import java.io.IOException;
import java.io.Writer;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import com.xiaoy.model.MenuModel;
import com.xiaoy.service.menu.MenuService;

/**
 * 菜单删除 <br>
 * 判断它是否为树枝<br>
 * 1.是：判断是否有叶子<br>
 * 1.1有：删除叶子后再删除树枝<br>
 * 1.2否：直接删除树枝<br>
 * 2.否：直接删除树枝<br>
 * 
 * @author XiaoY
 * @date 2015年7月31日下午5:20:24
 */
@WebServlet("/MenuDel")
public class MenuDel extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public MenuDel() {
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
		String id = request.getParameter("id");
		MenuService menuService = new MenuService();
		MenuModel menuModel = menuService.getMenuById(id);
		if (menuModel != null) {
			// 树枝
			if ("0".equals(menuModel.getMenuType())) {
				List<MenuModel> list = menuService.getListMenuById(id);
				if (!list.isEmpty()) {// 有叶子
					String[] ids = new String[list.size()];
					for (int i = 0; i < list.size(); i++) {
						// 删除叶子
						ids[i] = list.get(i).getId();
					}
					// 删除叶子
					menuService.menuDel(ids);
				}
				// 删除树枝
				menuService.menuDel(new String[] { id });
			} else {// 叶子，直接删除
				menuService.menuDel(new String[] { id });
			}
		}
		Map<String, Object> root = new HashMap<String, Object>();
		root.put("success", true);
		root.put("message", "删除成功");
		JSONObject jsonObject = new JSONObject();
		JSONObject json = jsonObject.fromObject(root);
		Writer writer = response.getWriter();
		writer.write(json.toString());
		writer.close();
	}
}
