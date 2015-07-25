package com.xiaoy.control;

import java.io.IOException;
import java.io.Writer;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import com.xiaoy.service.UserService;

/**
 * Servlet implementation class UserDel
 */
@WebServlet("/userDel")
public class UserDel extends HttpServlet
{
	private static final long serialVersionUID = 1L;

	public UserDel()
	{
		super();
		// TODO Auto-generated constructor stub
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		this.doPost(request, response);
	}

	@SuppressWarnings("static-access")
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		String ids = request.getParameter("ids");

		JSONArray jsonArray = JSONArray.fromObject(ids);
		Object[] o = (Object[]) JSONArray.toArray(jsonArray);
		int[] in = new int[o.length];
		for (int i = 0; i < o.length; i++)
		{
			in[i] = (int) o[i];
		}
		UserService userService = new UserService();
		boolean flag = userService.userDel(in);
		Map<String, Object> map = new HashMap<>();
		map.put("flag", flag);
		JSONObject jsonObject = new JSONObject();
		JSONObject json = jsonObject.fromObject(map);
		Writer writer = response.getWriter();
		writer.write(json.toString());
		writer.close();
	}
}
