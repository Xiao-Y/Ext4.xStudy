Ext.define('AM.view.MenuAdd', {
	extend : 'Ext.form.Panel',
	alias : "widget.menuAdd",
	buttonAlign : 'right',
	bodyPadding : 15,
	autoScroll : true,
	layout : 'anchor',
	defaults : {
		xtype : 'textfield',
		labelWidth : 130,
		labelAlign : 'right',
		anchor : '90%'
	},
	defaultType : 'textfield',
	items : [ {
		fieldLabel : '菜单名称',
		xtype : 'textfield',
		name : 'menuName',
		allowBlank : false
	}, {
		fieldLabel : '请求路径',
		xtype : 'textfield',
		name : 'menuUrl',
		allowBlank : false
	}, {
		xtype : 'radiogroup',
		fieldLabel : '节点类型',
		id : 'menuType',
		name : 'menuType',
		defaults : {
			flex : 1
		},
		layout : 'hbox',
		items : [ {
			boxLabel : '树枝节点',
			name : 'menuType',
			inputValue : '0'
		}, {
			boxLabel : '叶子节点',
			name : 'menuType',
			inputValue : '1',
			checked : true
		} ],
		listeners : {
			"change" : function() {
				if (Ext.getCmp("menuType").getValue().menuType == "0") {
					Ext.getCmp("parentId").hide();
				} else {
					Ext.getCmp("parentId").show();
				}
			}
		}
	}, {
		fieldLabel : '上级菜单',
		xtype : 'combobox',
		// hidden : true,// 隐藏
		displayField : 'menuName',
		valueField : 'id',
		value : '-1',
		queryMode : 'local',
		store : 'ParentMenuStore',
		name : 'parentId',
		id : 'parentId'
	}, {
		fieldLabel : '排序号',
		name : 'seq',
		maxLength : 4,
		xtype : 'numberfield',// 数值类型
		allowDecimals : false,// 是否允许小数
		// decimalPrecision: 2, // 小数位精度
		allowNegative : false, // 是否允许负数
		allowBlank : true,// 是否允许为空
		minValue : 0,
		maxValue : 9999
	}, {
		fieldLabel : '备注',
		xtype : 'textfield',
		name : 'remark'
	} ],
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'bottom',
		items : [ '->', {
			xtype : 'button',
			text : '保存',
			id : 'saveMenu',
			icon : '../js/extJs/icons/table/table_save.png'
		}, {
			xtype : 'button',
			text : '重置',
			id : 'resetMenu',
			icon : '../js/extJs/icons/table/table_refresh.png'
		}, {
			xtype : 'button',
			id : 'cancelMenu',
			text : '关闭',
			icon : '../js/extJs/icons/used/cancel.png',
		} ]
	} ]
});