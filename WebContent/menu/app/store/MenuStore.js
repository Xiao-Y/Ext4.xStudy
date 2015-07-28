Ext.define('AM.store.MenuStore', {
	extend : 'Ext.data.Store',
	model : 'AM.model.MenuModel',
	pageSize : 5,
	proxy : {
		url : '',
		type : 'ajax',// 写成了JSON
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