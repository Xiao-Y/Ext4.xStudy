Ext.onReady(function() {
	// 初始化
	Ext.QuickTips.init();

	Ext.Loader.setConfig({
		enabled : true
	});

	Ext.application({
		name : 'AM',// 应用的名字
		appFolder : 'app',// 应用的目录
		launch : function() {// 当前页面加载完成执行的函数
			Ext.create('Ext.container.Viewport', {
				layout : 'auto',// 自动布局
				items : [ {
					xtype : 'userList',//使用的别名
					title : 'Users',
					html : 'List of users will go here'
				} ]
			});
		},
		controllers:['UsersController']
	});
})