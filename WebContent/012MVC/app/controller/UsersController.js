Ext.define('AM.controller.UsersController', {
	extend : 'Ext.app.Controller',
	views : [ 'UserList' ],
	stores : [ 'UsersStore' ],
	models : [ 'UserModel' ],
	init : function() {
		this.control({
			'userList button[id=delUser]' : {
				click : function(o) {
					deleteUser(o);
				}
			},
			'userList button[id=saveUser]' : {
				click : function(o) {
					saveUser(o);
				}
			},
			'userList actioncolumn[id=delete]' : {
				click : function(o, item, rowIndex, colIndex, e) {
					alert(rowIndex + " " + colIndex);
				}
			},
			'userList button[id=selection]' : {
				click : function(o) {
					var grid = o.findParentByType('gridpanel');// 得到grid
					var sm = grid.getSelectionModel();// 得到选择模式
					sm.deselect(0);// 取消指定选择
					var array = sm.getSelection();// 得到选择的id
					// Ext.Array.each(array, function(record) {
					// alert(record.get('id'));
					// });
					var lastSelect = sm.getLastSelected();// 得到最后选择的数据
					// alert(lastSelect.get('name'));
					var isSelected = sm.isSelected(2);// 确定是否选种指定的行
					// alert(isSelected);
					sm.selectRange(1, 3, true);// 指定选种行,false,表示原有的不会重新选择，ture表示重新选择
				}
			}
		});
	}
});

/**
 * 删除用户
 * 
 * @param o
 */
function deleteUser(o) {
	var grid = o.findParentByType('gridpanel');// 得到grid
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
			},
			method : 'POST',// 请求的类型
			timeout : 4000,// 请求的超时时间，单位毫秒。默认为30000。
			success : function(response) {// 请求成功
				var text = response.responseText;
				if (Ext.decode(text).flag == 'false') {
					Ext.Msg.alert("提示", "删除失败，请重试");
				} else {
					Ext.Msg.alert("提示", "删除成功！");
					st.load();
				}
			},
			failure : function(response, opts) {// 请求失败
				Ext.Msg.alert('警告', '服务器错误');
			}
		});
	}
}

/**
 * 保存用户信息
 * 
 * @param o
 */
function saveUser(o) {
	var grid = o.findParentByType('gridpanel');// 得到grid
	var st = grid.getStore();// 得到数据集
	st.sync();// 数据同步到后台，自动发送ajax
	var recordes = st.getUpdatedRecords()// 返回全部已经在Store中被更改但还未通过代理同步的数据实例.
	Ext.Array.each(recordes, function(model) {
		model.commit();
	});
}
