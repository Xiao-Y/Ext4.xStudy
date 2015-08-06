Ext.onReady(function() {
	// 初始化
	Ext.QuickTips.init();

	// //开启动态加载
	Ext.Loader.setConfig({
		enabled : true
	});

	Ext.application({
		name : 'AM',// 应用的名字
		appFolder : 'app',// 应用的目录
		// launch : function() {// 当前页面加载完成执行的函数
		// // Ext.create('Ext.container.Viewport', {
		// // layout : 'border',// 自动布局
		// // items : [ {
		// // xtype : 'homeViewport',// 使用的别名
		// // title : 'Tree',
		// // html : 'Tree'
		// // } ]
		//		// });
		//		},
		controllers : [ 'HomeController' ],
		// 自动加载和实例化Viewport文件
		autoCreateViewport : true
	});
})