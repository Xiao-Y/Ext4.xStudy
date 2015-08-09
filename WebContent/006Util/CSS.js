Ext.onReady(function() {
	//Ext.util.CSS的使用用
	
	//1. createStyleSheet( String cssText, String id ) : CSSStyleSheet
	// 从一个符合规则的文本块创建样式表 这些规则将被包装到一个STYLE标签中，然后追加到document的HEAD中。
	Ext.util.CSS.createStyleSheet(".c{color:red}", "red");
	
	// 在Ext.dom.Element下有addClsOnOver( String className, [Function testFn], [Object scope] ) : Ext.dom.Element
	// 设置鼠标悬停(over)在此元素上时的事件处理器,用来添加和删除相应的 css 类.
	Ext.get("dl").addClsOnOver("c");
	
	//2. getRule( String/String[] selector, Boolean refreshCache ) : CSSStyleRule
	//尝试从CSS选择子项或者一个选择子数组。 第一个被找到的选择子将被返回。参数为true将会刷新内部缓存
	var cssobj = Ext.util.CSS.getRule(".c",true);
	console.info(cssobj);
	console.info(cssobj.style.color);
	
	//3.swapStyleSheet( String id, String url ) 动态将一个现存的样式表索引替换为一个新的样式表。
	// id:需要删除的现有link标签的id
	// url:需要包含的新的样式表的href
	var i = 1;
	Ext.get("but").on("click",function(){
		if(i % 2 == 0){
			Ext.util.CSS.swapStyleSheet("one","one.css");
			Ext.get("dd").addClsOnOver("cll");
		}else{
			Ext.util.CSS.swapStyleSheet("two","two.css");
			Ext.get("dd").addClsOnOver("cll");
		}
		i++;
	});

	//4.removeStyleSheet( String id )	根据id删除一个样式或者link标签 
	Ext.util.CSS.createStyleSheet(".d{color:blue}", "blue");
	Ext.get("but3").on("click",function(){
		Ext.util.CSS.removeStyleSheet("blue");
	});
});



























