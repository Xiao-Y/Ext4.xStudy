(function() {
	Ext.onReady(function() {

		Ext.create('Ext.form.Panel', {
			title : 'DateTime的使用',
			bodyPadding : 5,
			width : 400,
			frame : true,// 底色渲染
			layout : 'anchor',
			defaults : {
				anchor : '100%'
			},
			items : [ {
				xtype : "timefield",// 时间类型
				fieldLabel : '上班时间',
				minValue : "9:00",
				minText : "时间大于 {0}",
				maxValue : "18:00",// 最大时间
				maxText : "时间小于 {0}",// 超过最大时间的提示信息
				format : "H:i",// 格式化时间
				increment : 60,// 下拉列表中时间选项使用的时间间隔,以分钟为单位
				invalidText : "{0}不是一个正确的时间格式，如13:00",// 时间格式不正确时的提示信息
				pickerMaxHeight : 200,// Ext.picker.Time下拉框最大的高度默认为300
				name : "time"

			}, {
				xtype : "datefield",// 时间类型
				fieldLabel : '工作日',
				// minValue : "9:00",
				// minText : "时间大于 {0}",
				maxValue : new Date(),// 最大时间
				maxText : "时间小于 {0}",// 超过最大时间的提示信息
				format : "Y-m-d",// 格式化时间
				value : new Date(),// 默认为今天
				disabledDays : [ 0, 6 ],// 禁用周天和周六
				disabledDates : [ "2015-08-01", "..-07-02", "2014-03-.." ],// 禁用指定的日期,禁用每年中指定的日期,禁用2014年3月的所有日期
				disabledDatesText : "这个日期是不可选择的",
				invalidText : "{0}不是一个正确的日期格式，如YYYY-MM-DD",// 时间格式不正确时的提示信息
				name : "date"

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
