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
			'userList actioncolumn[id=delete]' : {
				click : function(o, item, rowIndex, colIndex, e) {
					alert(rowIndex +" "  + colIndex);
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