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

		// 创建store,当数据量大时可以采用分页的方式
		var st = Ext.create("Ext.data.Store", {
			model : "department",
			pageSize : 4,
			proxy : {
				url : "../Department",
				type : "ajax",
				reader : {
					type : 'json',
					root : 'root',
					totalProperty : 'total'
				},
				writer : {
					type : 'json'
				}
			},
			autoLoad : true
		});

		Ext.create('Ext.form.Panel', {
			title : 'combobox的使用',
			bodyPadding : 5,
			width : 400,
			frame : true,// 底色渲染
			layout : 'anchor',
			defaults : {
				pageSize : 4,// 用于下拉时显示每页的数据量
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
				// 自动搜索---start
				minChars : 1,// 输入一个字符时开始搜索
				typeAheadDelay : 400,// 搜索延迟
				queryParam : "whereSQL",// 查询参数的名称。store传递键入字符串使用的参数名
				multiSelect : true,
				// 自动搜索---end
				// typeAhead : true,// 自动补全。默认为false
				// value : 1,// 默认选项
				queryMode : 'remote',// 选择模式，本地的，可以提高加载速度。默认：remote，CmoboBox动态加载其Store基于用户交互
				listConfig : {// 下拉列表的样式
					emptyText : "没有找到匹配项",
					maxWidth : 400,// 最大宽度
					getInnerTpl : function() {// 返回显示列表中的项目模板
						return "<div>{id}{name}<div>";
					}
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
