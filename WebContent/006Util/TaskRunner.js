// Ext.util.TaskRunner
// 提供以异步方式执行一个或多个任意任务的功能。 通常情况下, 您可以使用单例Ext.TaskManager代替，
// 但如果需要， 您可以创建单独的TaskRunner实例。 任意数量的单独的任务可以在任何时间开始，并且将彼此独立地运行。
Ext.onReady(function() {
	var runner = new Ext.util.TaskRunner();
	
	//方式一：
//	var task = runner.start({
//		interval : 1000,//执行间隔时间
//		run : function(){
//			Ext.getDom("str13").value = Ext.util.Format.date(new Date(),"Y-m-d-s");
//		}
//	});
	
	//方式二：
	var task = {
		interval : 1000,//执行间隔时间
		run : function(){
			Ext.getDom("str13").value = Ext.util.Format.date(new Date(),"Y-m-d-s");
		}
	};
	//开始线程
	Ext.get("but15").on("click",function(){
		runner.start(task);
	});
	//停止线程
	Ext.get("but14").on("click",function(){
		runner.stop(task);
	});
});