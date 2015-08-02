(function() {
	Ext.onReady(function() {
		Ext.create('Ext.form.Panel', {
			title : 'Simple Form',
			bodyPadding : 5,
			width : 350,
			// 表单域 Fields 将被竖直排列, 占满整个宽度
			layout : 'anchor',
			defaults : {
				anchor : '100%'
			},
			defaultType : 'textfield',
			items : [ {
				fieldLabel : 'UserName',
				emptyText : '用户名输入',// 当为空时显示的内容
				name : 'userName',
				allowBlank : false
			}, {
				fieldLabel : 'PassWord',// 密码
				inputType : 'password',// radio,text,password,file
				emptyText : '密码输入',// 当为空时显示的内容
				name : 'passWord',
				allowBlank : false
			}, {
				fieldLabel : 'File',// 文件上传
				inputType : 'file',// radio,text,password,file
				name : 'file'
			}, {
				fieldLabel : 'Email',// 邮箱验证
				name : 'email',
				regex : /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,// 正则表达式
				emptyText : '请填写正确邮箱',// 当为空时显示的内容
				regexText : '邮箱格式错误',// 错误信息提示
				allowBlank : false
			}, {
				fieldLabel : '文本域',// 文本域
				xtype : 'textareafield',
				emptyText : '请输入内容',// 当为空时显示的内容
				name : 'textareafield',
				selectOnFocus : true,// 获得输入焦点时，自动选中文本
				allowBlank : false
			}, {
				fieldLabel : '整数',// 整数
				xtype : 'numberfield',
				name : 'numberfield',
				maxText : '输入的太大了',
				maxValue : 9999,// 输入的最大数
				minText : '输入的大小了',
				minValue : 100,// 输入最小数
				maxLength : 8,// 最大长度
				maxLengthText : '太长了哦',
				allowDecimals : false,// 允许小数？否，默认为true
				minLength : 4,// 最小长度
				minLengthText : '太短了哦',
				emptyText : '在100-9999之间，长度在4-8位的整数',// 当为空时显示的内容
				allowBlank : false
			}, {
				fieldLabel : '小数',// 整数
				xtype : 'numberfield',
				name : 'numberfield2',
				decimalPrecision : 3,// 小数点后允许的最大精度,会4舍5入默认为2
				emptyText : '小数点后保留3位',// 当为空时显示的内容
				hideTrigger : true,// 隐藏微调按钮
				allowBlank : false
			}, {
				fieldLabel : '输入限定',// 整数
				xtype : 'numberfield',
				name : 'numberfield3',
				hideTrigger : true,// 隐藏微调按钮
				emptyText : '只能输入0或1',// 当为空时显示的内容
				baseChars : '01',// 可以用来表示成数值的字符集。默认为0123456789
				allowBlank : false
			}, {
				fieldLabel : '限定步长',// 整数
				xtype : 'numberfield',
				name : 'numberfield4',
				emptyText : '步长跳动为0.8',// 当为空时显示的内容
				step : 0.8,// 限定步长
				allowBlank : false
			}, {
				fieldLabel : '只读字段',// 整数
				name : 'rfield4',
				value : '我是只读的',
				readOnly : true,// 只读
				allowBlank : false
			}, {
				xtype : 'fieldcontainer',// 第一种radio
				fieldLabel : '性别',
				defaultType : 'radiofield',
				defaults : {
					flex : 1
				// 设定间隔
				},
				layout : 'hbox',// 横排显示
				items : [ {
					boxLabel : '单选',
					name : 'R',
					inputValue : 'M',
					checked : true,// 默认选中
					id : 'M'
				}, {
					boxLabel : '女性',
					name : 'R',
					inputValue : 'W',
					id : 'W'
				}, {
					boxLabel : '中性',
					name : 'R',
					inputValue : 'C',
					id : 'C'
				} ]
			}, {
				xtype : 'radiogroup',// 第二种radio
				fieldLabel : '最高学历',
				columns : 3,// 使用的列数
				// vertical : true,// 自动填满一行，再换行
				defaultType : 'radiofield',
				defaults : {
					flex : 1,// 设定间隔
					name : 'x'
				},
				items : [ {
					boxLabel : '小学',
					inputValue : 'xx',
					checked : true,// 默认选中
					id : 'xx'
				}, {
					boxLabel : '初中',
					inputValue : 'cz',
					id : 'cz'
				}, {
					boxLabel : '高中',
					inputValue : 'gz',
					id : 'gz'
				}, {
					boxLabel : '大学',
					inputValue : 'dx',
					id : 'dx'
				}, {
					boxLabel : '硕士',
					inputValue : 'ss',
					id : 'ss'
				}, {
					boxLabel : '博士',
					inputValue : 'bs',
					id : 'bs'
				} ]
			}, {
				xtype : 'fieldcontainer',// 还可以使用checkboxgroup
				fieldLabel : '多选',
				defaultType : 'checkboxfield',
				layout : 'hbox',// 横排显示
				defaults : {
					flex : 1,// 设定间隔
					name : 'topping'
				},
				items : [ {
					boxLabel : '管理员',
					inputValue : '1',
					checked : true,
					id : 'checkbox1'
				}, {
					boxLabel : '会员用户',
					inputValue : '2',
					id : 'checkbox2'
				}, {
					boxLabel : '普通用户',
					inputValue : '3',
					id : 'checkbox3'
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
