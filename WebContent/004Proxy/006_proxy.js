(function() {
	Ext.onReady(function() {
		
		// DB table pserson(name,age,sex,address)
		Ext.define('Person', {
			extend : 'Ext.data.Model',
			fields : [ {
				name : 'name',
				type : 'auto'
			}, {
				name : 'age',
				type : 'int'
			}, {
				name : 'sex',
				type : 'auto'
			}, {
				name : 'address',
				type : 'auto'
			} ],
			proxy:{
				type:'ajax',
				url:'../base/006_proxy.jsp'
			}
		});
		
		var p = Ext.ModelManager.getModel('Person');
		
		p.load(1, {
		    scope: this,
		    failure: function(record, operation) {
		        //do something if the load failed
		    },
		    success: function(record, operation) {
		        alert(record.data.name);
		    },
		    callback: function(record, operation) {
		        //do something whether the load succeeded or failed
		    }
		});
		
		
	});
})();

























