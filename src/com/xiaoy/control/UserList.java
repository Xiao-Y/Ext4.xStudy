package com.xiaoy.control;

import java.io.IOException;
import java.io.Writer;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import com.xiaoy.model.UserModel;
import com.xiaoy.service.UserService;

@WebServlet("/userList")
public class UserList extends HttpServlet
{
	private static final long serialVersionUID = 1L;

	public UserList()
	{
		super();
	}

	public void init(ServletConfig config) throws ServletException
	{
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		this.doPost(request, response);
	}

	@SuppressWarnings("static-access")
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		response.setContentType("text/html;charset=UTF-8");
		Writer writer = response.getWriter();

		UserService userService = new UserService();
		int limit = Integer.parseInt(request.getParameter("limit"));
		int start = Integer.parseInt(request.getParameter("start"));
		List<UserModel> list = userService.getUserList(limit, start);
		int total = userService.getTotal();

		Map<String, Object> rootMap = new HashMap<String, Object>();
		rootMap.put("root", list);
		rootMap.put("total", total);

		JSONObject json = new JSONObject();
		JSONObject jsonObject = json.fromObject(rootMap);
		writer.write(jsonObject.toString());
		writer.close();
	}
}
