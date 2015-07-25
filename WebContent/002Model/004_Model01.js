(function() {
	Ext.onReady(function() {
		// DB table pserson(name,age,sex,address)
		// 创建Model方法一:
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
			} ]
		});

		// 创建Model方法二:
		Ext.regModel('User', {
			fields : [ {
				name : 'name',
				tyep : 'auto'
			}, {
				name : 'age',
				tyep : 'int'
			}, {
				name : 'sex',
				tyep : 'auto'
			}, {
				name : 'address',
				tyep : 'auto'
			} ]
		});

		//实例化对象
		//1.new 方式
		var p = new Person({
			name:'XiaoY1',
			age:20,
			sex:'男',
			address:'hubei'
		});
		//调用
		console.info('name : ' + p.get('name') + '  age: ' + p.get('age') +'  sex: '+ p.get('sex') +'  address: '+ p.get('address'));
		
		//2.方法二
		var p2 = Ext.create('Person',{
			name:'XiaoY1',
			age:20,
			sex:'男',
			address:'hubei'
		});
		//调用
		console.info('name : ' + p2.get('name') + '  age: ' + p2.get('age') +'  sex: '+ p2.get('sex') +'  address: '+ p2.get('address'));
		
		//方法三
		var p3 = Ext.ModelMgr.create({
			name:'XiaoY1',
			age:20,
			sex:'男',
			address:'hubei'
		},'Person');
		//调用
		console.info('name : ' + p3.get('name') + '  age: ' + p3.get('age') +'  sex: '+ p3.get('sex') +'  address: '+ p3.get('address'));
		
	});
})();

























