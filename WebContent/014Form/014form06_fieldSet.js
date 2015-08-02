(function() {
	Ext.onReady(function() {

		Ext.create('Ext.form.Panel', {
			title : 'fieldset的使用',
			bodyPadding : 5,
			width : 400,
			height : 300,
			frame : true,// 底色渲染
			// layout : 'anchor',
			items : [ {
				xtype : "fieldset",
				title : "组合",
				collapsible : true,// 显示折叠按钮形式
				collapsed : true,// 设置为 true 则将 fieldset 初始化为收缩状态。默认为false
				layout : 'anchor',
				defaults : {
					anchor : '100%'
				},
				items : [ {
					xtype : "timefield",// 时间类型
					fieldLabel : '上班时间',
					format : "H:i",// 格式化时间
					name : "time"

				}, {
					xtype : "datefield",// 时间类型
					fieldLabel : '工作日',
					format : "Y-m-d",// 格式化时间
					name : "date"
				} ]
			}, {
				xtype : "fieldset",
				title : "组合2",
				checkboxToggle : true,// 显示复选框形式
				layout : 'anchor',
				defaults : {
					anchor : '100%'
				},
				items : [ {
					xtype : "timefield",// 时间类型
					fieldLabel : '上班时间',
					format : "H:i",// 格式化时间
					name : "time"

				}, {
					xtype : "datefield",// 时间类型
					fieldLabel : '工作日',
					format : "Y-m-d",// 格式化时间
					name : "date"
				} ]
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
