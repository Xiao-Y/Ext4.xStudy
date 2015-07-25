Ext.onReady(function(){
	var btn = Ext.get('btn');
	//避免创建多个相同的窗口：
	btn.on('click',function(){
		
		//方法1.modal:true,	//设置模态窗口
//		Ext.create('Ext.window.Window',{
//			title:'我的第一个 window',
//			width:400,
//			height:200,
//			layout:'fit',
//			constrainHeader:true,		//限制窗口标题不能超出现浏览器边界
//			modal:true,					//设置模态窗口
//			x:50,
//			y:50,						//初始化的位置
//			autoScroll:true,			//添加滚动条
//			icon:'../js/extJs/icons/used/browser_window.png'
//		}).show();
		
		//方法2.判断id是否存在(getCmp是否存在)
		if(!Ext.getCmp("myWind")){
			Ext.create('Ext.window.Window',{
				id:'myWind',
				title:'我的第一个 window',
				width:400,
				height:200,
				layout:'fit',
				constrainHeader:true,		//限制窗口标题不能超出现浏览器边界
				x:50,
				y:50,						//初始化的位置
				autoScroll:true,			//添加滚动条
				icon:'../js/extJs/icons/used/browser_window.png'
			}).show();
		}
	});
	
	//方法3：外部创建
	var win = Ext.create('Ext.window.Window',{
		title:'我的第一个 window',
		width:400,
		height:200,
		layout:'fit',
		constrainHeader:true,		//限制窗口标题不能超出现浏览器边界
		x:50,
		y:50,						//初始化的位置
		autoScroll:true,			//添加滚动条
		icon:'../js/extJs/icons/used/browser_window.png',
		closeAction:'hide'	//默认为destroy
	});
	
	Ext.get('btn2').on('click',function(){
		win.show();
	});
	
});