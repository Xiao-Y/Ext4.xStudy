(function() {
	Ext.onReady(function() {
		// Ext.Msg.alert('11');
		// 1.创建Model
		Ext.regModel('User', {
			Fields : [ {
				name : 'name',
				type : 'string'
			}, {
				name : 'age',
				type : 'int'
			} ]
		});

		// 2.数据集
		var userData = [ {
			name : 'XiaoY',
			age : 23
		}, {
			name : 'Tao',
			age : 19
		} ];

		// 3.创建Model代理proxy
		var memoryProxy = Ext.create('Ext.data.proxy.Memory', {
			data : userData,
			model : 'User'
		});

		// CRUD操作
		// 2.更新
		userData.push({
			name : 'new xiaoy',
			age : 24
		});

		memoryProxy.update(new Ext.data.Operation({
			action : 'update',
			data : userData
		}), function(result) {
		}, this);

		// 1.查询
		memoryProxy.read(new Ext.data.Operation, function(result) {
			var datas = result.resultSet.records;
			Ext.Array.each(datas, function(name, index, countriesItSelf) {
				alert(name.raw.name);
			});
		});

	});
})();
