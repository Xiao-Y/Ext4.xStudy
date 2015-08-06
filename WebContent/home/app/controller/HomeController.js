Ext.define('AM.controller.HomeController', {
	extend : 'Ext.app.Controller',
	// 将Viewport.js添加到控制器
	views : ['Viewport', 'MenuTreeView', 'ContextMenu'],
	stores : ['MenuTreeStore'],
	model : ['MenuTreeModel'],
	// 通过init函数来监听视图事件，控制视图与控制器的交互
	init : function() {
		// init函数通过this.control来负责监听
		this.control({
			// 被监听的组件的别名
			'menutree' : {
				// 监听鼠标点击事件，点击后调用changePage方法
				itemclick : this.changePage,
				// 监听鼠标右键事件，点击后调用contextMenu方法
				itemcontextmenu : this.contextMenu

			}
		});
	},
	changePage : function(view, rec, item, index, e) {
		// 获取url地址
		var url = rec.get('url');
		// 获取当前节点信息
		var title = rec.get('text');
		// 将主体内容部分的url地址指定为我们获取到的url
		Ext.getDom('contentIframe').src = url;
		// 将主体内容框的标题设置为我们获取的节点信息
		Ext.getCmp('mainContent').setTitle(title);
	},
	contextMenu : function(tree, record, item, index, e, eOpts){
		 //阻止浏览器默认右键事件
        e.preventDefault();
        e.stopEvent();
        //显示右键菜单
        var view = Ext.widget('contextmenu');
        view.showAt(e.getXY());
	}
});