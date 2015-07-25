Ext.onReady(function(){
	
	//Ext.create方法相当于创建实例化对象
	Ext.create('Ext.window.Window', {
		title:'我的第一个 window',
		width:400,
		height:200,
		layout:'fit',
		//constrain:true,				//限制窗口不能超出现浏览器边界
		constrainHeader:true,		//限制窗口标题不能超出现浏览器边界
		modal:true,							//设置模态窗口
		//plain:true,						//窗口背景色变深
		x:50,
		y:50,										//初始化的位置
		html:'<div style=width:200px;height:200px>我是第一个div</div><div style=width:200px;height:200px>我是第二个div</div>',	//向窗口中添加html
		autoScroll:true,				//添加滚动条
		//iconCls:'',							//设定一个CSS的样式类
		icon:'../js/extJs/icons/used/browser_window.png',								//设定一个图片的路径
		renderTo:Ext.getBody()	//新创建的组件，渲染到什么地方
	}).show();
});