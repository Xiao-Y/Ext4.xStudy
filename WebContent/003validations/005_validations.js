(function() {
	
	//修改错误信息
	Ext.data.validations.lengthMessage = '错误的长度';
	
	Ext.onReady(function() {
		//自定义验证
		Ext.apply(Ext.data.validations,{
			age:function(config,value){
				var min = config.min;
				var max = config.max;
				if(value < min || max < value){
					this.ageMessage = this.ageMessage + '年龄范围应该在[' + min +'~'+max+']';
					return false;
				}else{
					return true;
				}
			},
			ageMessage:'数据不正确！'
		});
		
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
			} ],
			//验证器
			validations:[
			   {type:'length',field:'name',min:2,max:6},
			   {type:'age',field:'age',min:15,max:150}
			]
		});
		
		//2.方法二
		var p2 = Ext.create('Person',{
			name:'X',
			age:12,
			sex:'男',
			address:'hubei'
		});
		//调用
		console.info('name : ' + p2.get('name') + '  age: ' + p2.get('age') +'  sex: '+ p2.get('sex') +'  address: '+ p2.get('address'));
		var errores = p2.validate();
		var erroresInfo = [];
		errores.each(function(v){
			erroresInfo.push(v.field +" "+v.message);
		});
		alert(erroresInfo.join('\n'));
	});
})();

























