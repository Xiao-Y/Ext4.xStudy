Ext.define('AM.view.Viewport',{
	extend : 'Ext.container.Viewport',
	alias : 'widget.homeViewport',
	// 布局方式：border
	layout : 'border',
	items : [{
		title : 'ExtJS案例',
		collapisble : true,
		region : 'north',
		height : 100,
		html : '<br><center><font size=5>MVC模式实现的ExtJS案例</font><br><font size=2>by XiaoY</font></center>'
	}, {
		title : '功能菜单',
		region : 'west',
		width : 180,
		split : true,
		collapisble : true,
		items:[{
			xtype : 'menutree'
		}]
	}, {
		id : 'mainContent',
		title : '主题内容显示',
		//layout : 'fit',
		region : 'center',
		collapisble : true,
		contentEl : 'contentIframe'
	},{
        xtype:'toolbar',
        region:'south',
        ui: 'footer',
        margin: '7 0 0 0',
        items: ['就绪', '->', '&copy; 2015 By XiaoY制作']
    } ]
});
