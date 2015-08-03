Ext.define('AM.view.MenuQuery', {
	extend : 'Ext.form.Panel',
	alias : "widget.menuQuery",
	buttonAlign : 'right',
	bodyPadding : 15,
	autoScroll : true,
	layout : 'anchor',
	defaults : {
		xtype : 'textfield',
		labelWidth : 90,
		labelAlign : 'right',
		anchor : '90%'
	},
	defaultType : 'textfield',
	items : [ {
		fieldLabel : '菜单名称',
		xtype : 'textfield',
		name : 'menuName'
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
			boxLabel : '无',
			name : 'menuType',
			inputValue : '-1',
			checked : true
		}, {
			boxLabel : '树枝节点',
			name : 'menuType',
			inputValue : '0'
		}, {
			boxLabel : '叶子节点',
			name : 'menuType',
			inputValue : '1'
		} ],
		listeners : {
			"change" : function() {
				if (Ext.getCmp("menuType").getValue().menuType == "1") {
					Ext.getCmp("parentId").show();
				} else {
					Ext.getCmp("parentId").hide();
				}
			}
		}
	}, {
		fieldLabel : '上级菜单',
		xtype : 'combobox',
		hidden : true,// 隐藏
		displayField : 'menuName',
		valueField : 'id',
		value : '0',
		queryMode : 'local',
		store : 'ParentMenuStore',
		name : 'parentId',
		id : 'parentId'
	} ],
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'bottom',
		items : [ '->', {
			xtype : 'button',
			text : '查询',
			id : 'queryMenu',
			icon : '../js/extJs/icons/used/zoom_in.png'
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