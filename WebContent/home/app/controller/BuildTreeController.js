Ext.define('AM.controller.BuildTreeController', {
	extend : 'Ext.app.Controller',
	views : [ 'Viewport' ],
	stores : [ 'BuildTreeStore' ],
	models : [ 'BuildTreeModel' ],
	init : function() {
		this.control({});
	}
});