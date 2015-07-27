Ext.define('AM.view.MenuList', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.menuList',
	title : '菜单列表',// 标题
	width : 1000,
	height : 300,
	frame : true,// 面板渲染
	store : 'MenuStore',// 加载数据
	renderTo : 'GridDemo', // 渲染到一个div上
	selType : 'checkboxmodel',// 复选框选择模式
	multiSelect : true,// 允许多选

	columns : [ {
		xtype : 'rownumberer',
		header : '序号',
		width : 50
	}, {
		header : 'ID',
		dataIndex : 'id',
		width : 50
	}, {
		header : '菜单名称',
		dataIndex : 'menuName',
		locked : true
	}, {
		header : '请求路径',
		dataIndex : 'menuUrl',
		width : 50
	}, {
		header : '父级ID',
		dataIndex : 'parentId',
		width : 50
	}, {
		xtype : 'datecolumn',
		header : '创建时间',
		format : 'Y-m-d H:i:s',// 格式化
		width : 50,
		dataIndex : 'createTime'
	}, {
		xtype : 'datecolumn',
		header : '更新时间',
		width : 50,
		dataIndex : 'updateTime',
		format : 'Y-m-d H:i:s'// 格式化
	}, {
		header : '备注',
		dataIndex : 'remark',
		width : 150
	} ],
	tbar : [ {
		xtype : 'button',
		text : '添加',
		icon : '../js/extJs/icons/table/table_add.png'
	}, {
		xtype : 'button',
		id : 'delUser',
		text : '删除',
		icon : '../js/extJs/icons/table/table_delete.png',
	}, {
		xtype : 'button',
		text : '修改',
		icon : '../js/extJs/icons/table/table_edit.png',
	}, {
		xtype : 'button',
		text : '查看',
		icon : '../js/extJs/icons/used/zoom_in.png'
	} ],
	// 一个或者一系列组件作为挂靠组件被添加到panel中
	dockedItems : [ {
		xtype : 'pagingtoolbar',// 分页组件
		store : 'MenuStore',// 数据
		dock : 'bottom',// 指定位置top,bottom
		// 展示信息
		displayInfo : true
	} ]
});