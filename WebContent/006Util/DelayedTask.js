Ext.onReady(function(){
	//Ext.util.DelayedTask
	//DelayedTask 类提供了对"缓冲区"简便执行的一种方法， 执行setTimeout时，新的超时时限会取消旧的超时时限。
	//调用时， 该任务将在执行之前等待指定的一段时间。如果在等待的时间中， 再调用此任务时，原始调用将会被取消。 这样继续下去，对于每次迭代该函数只是被调用一次。
	//此方法对于类似检测用户是否已完成在文本框中键入完值尤其有用。 例如验证表单的时候，键盘按下(keypress)那一瞬， 就可用上该类（不会立即验证表单，稍作延时）。
	//keypress事件会稍作停顿之后（某个时间）才继续执行。
	
	//new Ext.util.DelayedTask( Function fn, Object scope, Array args ) : Object	此构造函数的参数作为默认值，并不是必需的。
	//fn : Function（可选的） 要调用的默认函数。如果不在此处指定，他必须指定在 delay 调用的过程中。
	//scope : Object（可选的） 调用该函数时的默认范围（this引用）， 如果没有指定，this 将引用window全局作用域。
	//args : Array（可选的） 默认参数数组。
	
	//可以用于表单的验证
	var dt = new Ext.util.DelayedTask(function(){
		alert("----------");
	});
	
	Ext.get("but5").on("click",function(){
		//delay( Number delay, Function newFn, [Object newScope], Array newArgs ) 取消所有待定的超时，并重新排列。
		//delay : Number	延迟的毫秒数
		//newFn : Function	（可选的） 重写传入到构建器的函数
		//newScope : Object (optional)（可选的） 重写传入到构建器的作用域。 请记住如果没有指定scope, this 将引用window全局作用域。
		//newArgs : Array	（可选的） 重写传入到构建器的参数
		dt.delay(2000);
	});
});