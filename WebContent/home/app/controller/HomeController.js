Ext.define('AM.controller.HomeController', {
	extend : 'Ext.app.Controller',
	// 将Viewport.js添加到控制器
	views : [ 'Viewport', 'MenuTreeView' ],
	stores : [ 'MenuTreeStore' ],
	model : [ 'MenuTreeModel' ]
});