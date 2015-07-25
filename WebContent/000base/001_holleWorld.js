Ext.onReady(function() {
	// Ext.MessageBox.alert('提示信息','HolleWorld!',function(){
	// console.info(this);
	// alert("回调函数！");
	// },this);

	// 简写
	// Ext.Msg.alert('提示信息','HolleWorld!');

	// 询问框confirm
	// Ext.Msg.confirm('meswsage','ary you delete?',function(op){
	// if(op == 'yes'){
	// alert('yes');
	// }else{
	// alert('no');
	// }
	// });

	// 输入框
	// prompt( String title, String msg, [Function fn], [Object scope],
	// [Boolean/Number multiline], [String value] ) :
	// 显示一个带有“确定”和“取消”按钮，提供用户输入一些文本的消息盒子(类似于JavaScript的提示)。 提示可以是一个单行或者多行的文本框。
	// 如果传了一个回调函数，它将会在用户点击其中一个按钮后被调用， 被点击的按钮的id(也可能是右上角的关闭按钮，
	// 这将始终报告为“取消”)和输入的文本将会作为回调函数的两个参数被传递。

	// Ext.Msg.prompt('title','msg',function(op,value){
	// //op:ok cancel
	// console.info(op);
	// console.info(value);
	// },this,true,'zhangsa');

	// 等待
	// wait( String msg, [String title], [Object config] )
	// 显示一个带一个无线自动更新进度条的消息盒子。 这可以用来阻止用户交互，同时等待一个长期运行不定义的时间间隔的过程完成。
	// 响应当进程完成时，关闭消息盒子。

	// Ext.Msg.wait('msg','title',{
	// interval: 500, //循环定时的时间
	// duration: 50000, //循环的时间
	// increment: 20, //执行进度条的次数
	// text: 'Updating...', //进度条件中的内容
	// scope: this, //作用域
	// fn: function(){ //回调函数
	// alert('update success...');
	// },
	// animate:true //进度条渲染效果
	// });

	// show( Object config )
	// 显示一个新的消息盒子，或者重新初始化一个已经存在的消息盒子，基于传入的配置选项。消息盒子的所有显示函数内部 呼叫这个函数，
	// 尽管这些呼叫是基本操作，并且这不能支持所有的被允许的配置选项。
	Ext.Msg.show({
		title : 'Address',
		msg : 'Please enter your address:',
		width : 300,
		height:300,
		multiline: true,
		buttons : Ext.Msg.YESNOCANCEL,
		icon : Ext.MessageBox.INFO	//INDO ERROR WARNING  QUESTION
	});
});
