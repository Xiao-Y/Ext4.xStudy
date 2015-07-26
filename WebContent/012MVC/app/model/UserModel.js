// User类
Ext.define('AM.model.UserModel', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'id',
		type : 'int',
		sortable : true
	}, {
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
	}, {
		name : 'birthday',
		type : 'string',
		sortable : true
	}, {
		name : 'salary',
		type : 'int',
		sortable : true
	}, {
		name : 'iT',
		type : 'string',
		sortable : true
	} ]
});