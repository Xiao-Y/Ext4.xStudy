Ext.onReady(function(){

	//一、JSON的操作
	//var obj = new Object();
	//简写
	var obj = {name:'XiaoY',age:20};	//JSON类型
	//添加
	obj.sex = '男';
	//修改
	obj.age = 25;
	//删除一个属性或方法
	delete obj.name;	
	
	//枚举对象的方法:
	for(var attr in obj){
		alert(attr + " : " + obj[attr]);
	}
	
	//二、定义js类
	var Person = function(name, age){
		this.name = name;
		this.age = age;
		
		//定义私有方法
		var _sex = '男';
		
		//提供getter and setter
		this.getSex = function(){
			return _sex;
		};
		
		this.setSex = function(sex){
			_sex = sex;
		}		
	};
	
	//实例化对象
	var p = new Person('XX', 23);
	
	alert('name : ' + p.name);
	alert('age : ' + p.age);
	p.setSex('女');
	alert('sex : ' + p.getSex());

	//三、类的扩展
	
	//方法一：
	//1.属性的扩展
	Person.prototype.id =  10;
	//2.方法的扩展
	Person.prototype.getSex2 = function(){
		alert('prototype : ' + this.getSex());
	};
	
	alert('id : ' + p.id);
	p.getSex2();

	//方法二：一定要放到实例化之前
	Person.prototype = {
		//还原为原对象
		constructor : Person,
		num:'1234',
		getNum:function(){
			alert('num : ' + this.num);
		}
	};
	var p2 = new Person('YY', 18);
	//调用
	p2.getNum();


	//四、单体模式
	//1.简单单体模式
	var XiaoY = {};
	XiaoY.Array = {
		each:function(){
			alert('each...');
		},
		filter:function(){
			alert('filter...');
		}
	};
	//静态方法
	XiaoY.staticMethod = function(){
		alert('staticMethod...');
	};

	//调用
	XiaoY.Array.each();
	XiaoY.staticMethod();
	
	//2.闭包单体
	var Xiaoy =(function(){
		var Array = {
			each2:function(){
				alert('each2...');
			}
		};
		
		return {
			arrayEach:function(){
				Array.each2();
			}
		};
	})();
	
	//调用
	Xiaoy.arrayEach();
	

});

































