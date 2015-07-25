//一、This 关键字的使用	this问题指向调用者，谁调用就指向谁。

//call 和 apply用于绑定函数的执行环境/使用域

var color = 'red';
var obj = {color:'yellow'};

function showColor(){
	alert(this.color);
};

//window.showColor(); 等同于 showColor();。this指的是window，所以this.color指的是全局color
showColor();


//二、call 和 apply绑定指定的作用域
function showColor2(x, y, z){
	alert(x + y + z);
	alert(this.color);
};

showColor2.call(window, 10, 20, 30);
showColor2.call(obj, 10, 20, 30);
//数组类型
showColor2.apply(obj, [1,2,3]);


//三、块的概念

//不用调用，可以直接执行
(function(){
	alert('zhixing...');
})();

//在js中for循环会继续执行，下面的alert会输出5
function testfor(){
	for(var i = 0; i < 5; i++){
		alert(i);
	}
	
	alert(i);
};
//调用
testfor();


//使用()();
function testfor2(){
	(function(){
		for(var i = 0; i < 5; i++){
			alert(i);
		}
	})();
//	alert(i);//i is not defined
}
//调用
testfor2();


//四、闭包：1.执行环境  2.作用域链  3.js垃圾回收
//遇到return就返回，没有return，返回结果unfined
function test4(){
	return function(){
		alert('闭包体...');
	}
};

alert(test4());	//function(){ alert('闭包体...');}
alert(typeof test4);	//function
var f = test4();
f();

function test5(){
	var temp = 10;
	return function(){
		alert(temp);
	}
};

test5()();//表示执行一次后再执行一次

//统计点击次数
var inp = (function(){
	var i = 0;
	return {
		getCount:function(){
			alert(++i);
		}
	};
})();

//调用：inp.getCount();