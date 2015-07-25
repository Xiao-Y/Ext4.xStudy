//Function 构建形式
//1.function形式构建
function fun(){
	alert('111');
};

//2.直接量形式构建
var fun2 = function(){
	alert('111');
};

//3.构建函数形式
var fun3 = new Function('x', 'y', 'return x + y;');
alert(fun3(3,4));



//三种作用域是不同的
var k = 1;
function test(){
	var k = 2;
	//方式1
	function fun(){
		return k;
	};
	alert(fun());
	
	//方式2
	var fun2 = function(){
		return k;
	};
	alert(fun2());
	
	//方式3
	var fun3 = new Function('return k;');
	alert(fun3());
};
//调用
test();


//arguments对象，每个函数内部都有一个arguments对象。arguments的作用：1、接受实际参数。2、递归
//1、接受实际参数。
function test2(x, y){
	alert('arguments : ' + arguments.length);	//3
	alert(arguments[1]);		//2
};
//调用
test2(1, 2, 3);


//2、递归 arguments.callee表示引用当前函数本身

//function fac(number){
//	if(number <= 1){
//		return 1;
//	}else{
//		return number * fac(number - 1);
//	}
//};

//arguments.callee表示引用当前函数本身
function fac(number){
	if(number <= 1){
		return 1;
	}else{
		return number * arguments.callee(number - 1);
	}
};
//调用
alert(fac(5));






















