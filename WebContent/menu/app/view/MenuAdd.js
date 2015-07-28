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
		fieldLabel : '父级菜单名称',
		xtype : 'combobox',
		displayField : 'menuName',
		valueField : 'id',
		queryMode : 'local',
		// store : 'MenuStore',
		name : 'menuName',
		allowBlank : false
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
			id : 'cancelMenu',
			text : '关闭',
			icon : '../js/extJs/icons/used/cancel.png',
		} ]
	} ]
});