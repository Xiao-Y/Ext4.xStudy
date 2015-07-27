Ext.define('AM.store.MenuStore', {
	extdent : 'Ext.data.Store',
	model : 'AM.model.MenuModel',
	pageSize : 15,
	proxy : {
		url : '',
		type : 'ajax',
		reader : {
			type : 'json',
			root : 'root',
			totalProperty : 'totle'
		},
		writer : {
			type : 'json'
		},
		autoLoad : true
	}
});