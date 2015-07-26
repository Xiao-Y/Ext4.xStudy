//User的数据集合类
Ext.define('AM.store.UsersStore', {
	extend : 'Ext.data.Store',
	storeId : 'Users',
	model : 'AM.model.UserModel',
	pageSize : 5,
	proxy : {
		type : 'ajax',
		url : '../userList',
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