Ext.define('AM.model.MenuModel', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'id',
		type : 'string',
		sortable : true
	}, {
		name : 'menuName',
		type : 'string',
		sortable : true
	}, {
		name : 'menuUrl',
		type : 'string',
		sortable : true
	}, {
		name : 'parentId',
		type : 'string',
		sortable : true
	}, {
		name : 'remark',
		type : 'string',
		sortable : true
	}, {
		name : 'createTime',
		type : 'string',
		sortable : true
	}, {
		name : 'updateTime',
		type : 'string',
		sortable : true
	} ]
});