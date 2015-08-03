Ext.define('AM.store.ParentMenuStore', {
	extend : 'Ext.data.Store',
	model : 'AM.model.MenuModel',
	pageSize : 10,
	proxy : {
		url : '../MenuList',
		type : 'ajax',
		extraParams : {
			parentId : "-1"
		},
		reader : {
			type : 'json',
			root : 'root',
			totalProperty : 'total'
		},
		writer : {
			type : 'json'
		}
	},
	autoLoad : true,
	listeners : {// 向已有数据中插入一条新的数据
		load : function(store, records, options) {
			store.insert(0, {
				'id' : '0',
				'menuName' : '------------ 无 ------------'
			});
		}
	}
});