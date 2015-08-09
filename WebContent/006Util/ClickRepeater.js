// Ext.util.ClickRepeater
// 一个封装类，可以被用于任何元素中。当鼠标按下时触发一个"click"事件。 触发时的时间间隔，可以在config中指定，默认是20毫秒。
// 可选地，一个CSS类可以被应用在元素被按下期间。
Ext.onReady(function(){
	//控制元素在指定的时间内被单击（元素没有失去焦点）
	var cl = new Ext.util.ClickRepeater(Ext.get("but4"),{
		delay : 3000,//触发重发(repeating)事件后原始的延迟时间间隔。 对于自动重复(autorepeat)的延迟也是一样。 Defaults to: 250
		interval : 100,//点击事件和触发间的时间间隔 (单位是毫秒). Defaults to: 20
		stopDefault : true, //设置为true时停止默认的click事件 Defaults to: false
		handler : function(){
			alert("点击我");
		}
	});
	//第一次单击马上会触发事件 如果不去点击其他元素那么3秒就会自动执行第二次。以后会以100毫秒执行一次
	//用途：类似挤房器，网络忙时请等待功能
});