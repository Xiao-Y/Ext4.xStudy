(function() {
	Ext.onReady(function() {

		Ext.create('Ext.form.Panel', {
			title : 'htmleditor的使用',
			bodyPadding : 5,
			width : 700,
			height : 400,
			frame : true,// 底色渲染
			layout : 'anchor',
			defaults : {
				anchor : '100%'
			},
			items : [ {
				xtype : "htmleditor",// 时间类型
				width : 700,
				height : 400,
				fontFamilies : [ "宋体", "黑体", "楷书", "隶书", "行书" ],// 修改编辑用的字体
				fieldLabel : '内容',
				defaultLinkValue : "http://www.",// 修改编辑器中link的默认值，默认值为：http://
				name : "notice"

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
