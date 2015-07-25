
//javaScript中的数据类型：Number/String/Boolean/Object/Undefined/Function

//Number
var num1 = 10;
var num2 = 19.9;
var num3 = .6;	//0.6
var num4 = 070;	//表示八进制	十进制为56
var num5 = 1/0;	//正无穷
var num6 = window.parseInt('10afefe');	//10
var num7 = window.parseInt('sflaa');	//NaN  not a number

//Object 
var date = new Date();
var array = new Array();
var obj = {name:'xiaoy', age:19};
alert(obj.hasOwnProperty('name'));	//判断是否是自己的属性

//Undfined 声明了但是没有赋值 其实也等同于null
var a;
alert(a);
alert(typeof null);	//得到数据类型

//Function 函数类型
function fun(){
	console.info('function....');
}
alert(typeof fun);	//fun表示引用名字，fun()表示执行函数


//Array 数组
//数组的迭代
var arr = [1,2,3,4,5];
arr.forEach(function(item){
	alert(item);
});
//数组的过滤
var arr2 = [20,22,54,36];
var newarr = arr2.filter(function(item){
	if(item > 22){
		return true;
	}else{
		return false;	
	}	
});
alert(newarr);




































