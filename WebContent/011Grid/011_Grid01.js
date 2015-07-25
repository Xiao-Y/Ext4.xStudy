(function() {
	Ext.onReady(function() {
		// 初始化
		Ext.QuickTips.init();

		// 创建表格
		var grid = Ext.create('Ext.grid.Panel', {
			title : '用户信息列表',// 标题
			width : 600,
			height : 280,
			frame : true,// 面板渲染
			forceFit : true,// 自动调整宽度
			selType : 'checkboxmodel',// 选择模式
			multiSelect : true,// 允许多选
			renderTo : 'GridDemo', // 渲染到一个div上
			store : 'userStoreId',// 加载数据,也可以使用类名 store : userStore
			columns : [ {
				header : 'ID',
				dataIndex : 'id',
			}, {
				header : 'Name',
				dataIndex : 'name',
			}, {
				header : 'Age',
				dataIndex : 'age',
				// flex : 1
				//双击编辑
				field : {
					xtype : 'textfield',
					allowBlank : false
				}
			}, {
				header : 'Sex',
				dataIndex : 'sex'
			} ],
			tbar : [ {
				xtype : 'button',
				text : '添加',
				icon : '../js/extJs/icons/table/table_add.png'
			}, {
				xtype : 'button',
				text : '删除',
				icon : '../js/extJs/icons/table/table_delete.png',
				handler : function(o) {// 单击事件
					// 方法一：findParentByType 根据类型找到父级
					// var grid =
					// o.findParentByType('gridpanel');//得到grid,其实外面已经定义了名称，可以直接使用
					// 方法二：ownerCt找到父级
					// alert(grid.getStore().getCount());
					var data = grid.getSelectionModel();// 得到选择模式
					var array = data.getSelection();// 得到选种删除的数组
					if (array.length == 0) {
						Ext.Msg.alert('提示', '请选择需要删除的数据！！');
					} else {
						// 1.收集需要删除的id数据
						var st = grid.getStore();
						var ids = [];
						Ext.Array.each(array, function(record) {
							ids.push(record.get('id'));
						});
						// 2.数据传回后台，执行删除操作
						Ext.Ajax.request({
							url : '../userDel',// 请求的url
							params : {// 传输的参数
								ids : Ext.encode(ids)
							// ids : ids.join(",")//拼接成串
							},
							method : 'POST',// 请求的类型
							timeout : 4000,// 请求的超时时间，单位毫秒。默认为30000。
							success : function(response) {// 请求成功
								var text = response.responseText;
								// alert(Ext.decode(text).flag);
								if (Ext.decode(text).flag == 'false') {
									Ext.Msg.alert("提示", "删除失败，请重试");
								} else {
									Ext.Msg.alert("提示", "删除成功！");
									st.load();
									// 3.移除页面删除的列
									// Ext.Array.each(array, function(record) {
									// st.remove(record);
									// });
								}
							},
							failure : function(response, opts) {// 请求失败
								Ext.Msg.alert('警告', '服务器错误');
							}
						});
					}
				}
			}, {
				xtype : 'button',
				text : '修改',
				icon : '../js/extJs/icons/table/table_edit.png',
			}, {
				xtype : 'button',
				text : '查看',
				icon : '../js/extJs/icons/table/table.png'
			} ],
			// 一个或者一系列组件作为挂靠组件被添加到panel中
			dockedItems : [ {
				xtype : 'pagingtoolbar',// 分页组件
				store : 'userStoreId',// 数据。也可以使用类名 store :userStore
				dock : 'bottom',// 指定位置top,bottom
				displayInfo : true
			// 展示信息
			} ],
			// 一个对象或者对象数组, 组件将提供自定义功能
			plugins : [ Ext.create('Ext.grid.plugin.CellEditing', {// 单元格编辑
				clicksToEdit : 2
			// 双击进行编辑，默认双击
			}) ]
		});
	});
})();
