Ext.define('AM.controller.MenuController', {
	extend : 'Ext.app.Controller',
	views : [ 'MenuList', 'MenuAdd' ],
	stores : [ 'MenuStore', 'ParentMenuStore' ],
	models : [ 'MenuModel' ],
	init : function() {
		this.control({
			'menuList button[id=addMenu]' : {
				click : function() {
					Ext.create('Ext.window.Window', {
						title : '添加菜单',
						id : 'menuAddWin',
						height : 300,
						width : 420,
						layout : 'fit',
						items : [ {
							xtype : 'menuAdd',// 使用的别名
						} ]
					}).show();
				}
			},
			// 删除
			'menuList button[id=delMenu]' : {
				click : this.delMenu
			},
			// 取消
			'menuAdd button[id=cancelMenu]' : {
				click : function() {
					Ext.getCmp('menuAddWin').destroy();
				}
			},
			// 保存操作
			'menuAdd button[id=saveMenu]' : {
				click : this.saveMenu
			},
			'menuAdd button[id=resetMenu]' : {
				click : this.resetMenu
			}
		});
	},
	// 保存菜单
	saveMenu : function(btn) {
		var saveFormPanel = btn.up('form');
		var fv = saveFormPanel.getValues();
		Ext.Ajax.request({
			url : '../MenuSave',
			params : Ext.JSON.encode(fv),
			method : 'POST',
			async : false,
			submitEmptyText : false,
			headers : {
				"Content-Type" : "application/json; charset=utf-8"
			},
			success : function(response) {
				var jsonObj = Ext.JSON.decode(response.responseText);
				if (jsonObj.flag) {
					Ext.getCmp('menuAddWin').destroy();
					Ext.Msg.alert('提示', '保存成功');
				} else {
					Ext.Msg.alert('提示', '保存失败');
				}
			},
			failure : function(response) {
				Ext.Msg.alert('提示', '操作失败');
			}
		});
	},
	// 重置
	resetMenu : function(btn) {
		var saveFormPanel = btn.up('form');
		var baseForm = saveFormPanel.getForm();
		baseForm.reset();
	},
	// 删除
	delMenu : function() {
		var sm = Ext.getCmp('menuList').getSelectionModel();
		if (!sm.hasSelection()) {
			Ext.Msg.alert('提示', '请选择要删除的行');
			return;
		}

		Ext.Msg.confirm('提示', '确定要删除所选的行？', function(btn) {
			if (btn == 'yes') {
				var sel = sm.getSelection();
				var selectedId = sel[0].data.id;
				Ext.Ajax.request({
					url : '../MenuDel',
					method : 'POST',
					async : false,
					params : {
						id : selectedId
					},
					success : function(resopnse) {
						var jsonObj = Ext.JSON.decode(resopnse.responseText);
						Ext.Msg.alert('提示', jsonObj.message);
						if (jsonObj.success == true) {
							Ext.getCmp('menuList').getStore().reload();// 刷新表格
						}
					}
				});
			}
		});
	}
});