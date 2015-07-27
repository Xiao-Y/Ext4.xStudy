Ext.define('AM.view.UserList', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.userList',
	title : '用户信息列表',// 标题
	width : 500,
	height : 300,
	frame : true,// 面板渲染
	store : 'UsersStore',// 加载数据
	selType : 'checkboxmodel',// 复选框选择模式
	// selType : 'rowmodel',// 行选择模式
	multiSelect : true,// 允许多选
	// selType : 'cellmodel',// 单元格择模式

	columns : [ {
		xtype : 'rownumberer',
		header : '序号',
		width : 50
	}, {
		header : 'ID',
		dataIndex : 'id',
		width : 50
	}, {
		header : 'Name',
		dataIndex : 'name'// ,
		// 列锁定,在单元格编辑模式下不能使用
		// locked : true
	}, {
		header : 'Age',
		dataIndex : 'age',
		width : 50// ,
		field : {// 双击编辑
			xtype : 'textfield',
			allowBlank : false
		}
	}, {
		header : 'Sex',
		dataIndex : 'sex',
		width : 50,
		renderer : function(value) {
			if (value) {
				if (value == '女') {
					return "<font color='green'>" + value + "</font>";
				} else if (value == '男') {
					return "<font color='red'>" + value + "</font>";
				}
			}
		}
	}, {
		header : 'IsIT',
		xtype : 'booleancolumn',
		width : 50,
		dataIndex : 'iT',
		trueText : '是',
		falseText : '否'
	}, {
		header : '出生日期',
		xtype : 'datecolumn',
		width : 100,
		dataIndex : 'birthday',
		format : 'Y-m-d'// 格式化
	}, {
		header : '年收入',
		xtype : 'numbercolumn',
		dataIndex : 'salary',
		width : 150,
		format : '0,000'
	}, {
		id : 'delete',
		header : 'Action',
		icon : '../js/extJs/icons/table/table_delete.png',
		xtype : 'actioncolumn'
	}, {
		text : '描述',
		xtype : 'templatecolumn',
		width : 240,
		tpl : '姓名是{name},年龄是{age},性别是{sex}'
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
	}, {
		xtype : 'button',
		text : '保存',
		id : 'saveUser',
		icon : '../js/extJs/icons/table/table_save.png'
	}, {
		xtype : 'button',
		text : 'selection',
		id : 'selection',
		icon : '../js/extJs/icons/table/table.png'
	} ],
	// 一个或者一系列组件作为挂靠组件被添加到panel中
	dockedItems : [ {
		xtype : 'pagingtoolbar',// 分页组件
		store : 'UsersStore',// 数据
		dock : 'bottom',// 指定位置top,bottom
		displayInfo : true
	// 展示信息
	} ],
	// 一个对象或者对象数组, 组件将提供自定义功能
	plugins : [ Ext.create('Ext.grid.plugin.CellEditing', {// 单元格编辑
		clicksToEdit : 2
	// 双击进行编辑，默认双击
	}) ],
	initComponent : function() {
		this.callParent(arguments);
	}
});