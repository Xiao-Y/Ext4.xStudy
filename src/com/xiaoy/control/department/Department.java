package com.xiaoy.control.department;

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

import org.apache.commons.lang.StringUtils;

import com.xiaoy.model.DepartmentModel;
import com.xiaoy.service.department.DepartmentService;

@WebServlet("/Department")
public class Department extends HttpServlet
{
	private static final long serialVersionUID = 1L;

	public Department()
	{
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		this.doPost(request, response);
	}

	@SuppressWarnings("static-access")
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=UTF-8");

		int limit = 4;
		int start = 0;

		if (!StringUtils.isEmpty(request.getParameter("limit")))
		{
			limit = Integer.parseInt(request.getParameter("limit"));
		}
		if (!StringUtils.isEmpty(request.getParameter("start")))
		{
			start = Integer.parseInt(request.getParameter("start"));
		}

		String whereSQL = request.getParameter("whereSQL");
		DepartmentService departmentService = new DepartmentService();
		List<DepartmentModel> list = departmentService.getDepartments(start, limit, whereSQL);
		int total = departmentService.getTotal(whereSQL);

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("root", list);
		map.put("total", total);
		JSONObject jsonObject = new JSONObject();
		JSONObject json = jsonObject.fromObject(map);
		Writer writer = response.getWriter();
		writer.write(json.toString());
		writer.close();
	}

}
