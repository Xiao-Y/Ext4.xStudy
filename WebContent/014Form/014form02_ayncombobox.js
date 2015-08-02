(function() {
	Ext.onReady(function() {
		// 定义model
		Ext.define("department", {
			extend : "Ext.data.Model",
			fields : [ {
				name : "id"
			}, {
				name : "name"
			} ]
		});

		// 创建store
		var st = Ext.create("Ext.data.Store", {
			model : "department",
			data : [ {
				name : "开发部",
				id : "001"
			}, {
				name : "市场部",
				id : "002"
			}, {
				name : "财务部",
				id : "003"
			}, {
				name : "人事部",
				id : "004"
			}, {
				name : "产品部",
				id : "005"
			} ]
		});

		Ext.create('Ext.form.Panel', {
			title : 'combobox的使用',
			bodyPadding : 5,
			width : 350,
			frame : true,// 底色渲染
			layout : 'anchor',
			defaults : {
				anchor : '100%'
			},
			defaultType : 'textfield',
			items : [ {
				xtype : "combobox",
				fieldLabel : '部门',
				name : "post",
				store : st,
				forceSelection : true,// 所选择的值必须是列表中的值，false时，允许用户设置任意的文本字段，默认为false
				displayField : 'name',
				valueField : 'id',
				value : "001",// 默认选项
				typeAhead : true,// 自动补全。默认为false
				queryMode : 'local',// 选择模式，本地的，可以提高加载速度。默认：remote，CmoboBox动态加载其Store基于用户交互
				listConfig : {// 下拉列表的样式
					emptyText : "没有找到匹配项",
					maxWidth : 200
				// 最大宽度
				}
			} ],
			// 重置 和 保存 按钮.
			buttons : [ {
				text : '重置',
				handler : function() {
					this.up('form').getForm().reset();
				}
			}, {
				text : '保存',
				formBind : true, // 只启用一次是有效的
				disabled : true,
				handler : function() {
					var form = this.up('form').getForm();
					if (form.isValid()) {
						form.submit({
							success : function(form, action) {
								Ext.Msg.alert('保存成功', action.result.msg);
							},
							failure : function(form, action) {
								Ext.Msg.alert('操作失败', action.result.msg);
							}
						});
					}
				}
			} ],
			renderTo : 'GridDemo'
		});
	});
})();
