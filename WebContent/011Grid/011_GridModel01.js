// user类
Ext.define('user', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'id',
		type : 'int',
		sortable : true
	},{
		name : 'name',
		type : 'string',
		sortable : true
	}, {
		name : 'age',
		type : 'int',
		sortable : true
	}, {
		name : 'sex',
		type : 'string',
		sortable : true
	} ]
});

// 创建store。var s_user = 
var userStore = Ext.create('Ext.data.Store', {
	model : 'user',
	storeId : 'userStoreId',
	pageSize : 5,
	proxy : {
		type : 'ajax',
		url : '../userList',
		reader : {
			type : 'json',
			root : 'root',
			totalProperty: 'total'
		},
		writer : {
			type : 'json'
		}
	},
	autoLoad : true
});
