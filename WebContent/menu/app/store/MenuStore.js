Ext.define('AM.store.MenuStore', {
	extend : 'Ext.data.Store',
	model : 'AM.model.MenuModel',
	pageSize : 15,
	proxy : {
		url : '../MenuList',
		type : 'ajax',
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