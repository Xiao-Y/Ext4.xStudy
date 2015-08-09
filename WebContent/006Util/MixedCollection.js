//Ext.util.MixedCollection
//代表一系列键值对集合。MixedCollection中的每个键 必须唯一, 同一个键不能出现两次。
//这个集合是有序的， 集合中的每个项能通过索引或者键访问。新增的项 在集合的尾部。
//本类类似于Ext.util.HashMap， 但是它是重量级的，提供了更多的功能。
Ext.onReady(function(){
	var item1 = new Ext.util.MixedCollection();
	var a = {name:"a"};
	var b = {name:"b"};
	
	//1.add 添加元素
	item1.add("01",a);
	item1.add("02",b);
	console.info(item1);
	
	var item2 = new Ext.util.MixedCollection();
	var c = {name:"c"};
	var d = {name:"d"};
	//添加元素
	item2.add(c);
	item2.add(d);
	var array = [];
	array.push(a);
	array.push(b);
	
	//2.addAll 添加一个集合
	item2.addAll(array);	
	console.info(item2);
	
	//3.clear()清除所有的项
	item2.clear();
	console.info(item2);
	
	//4.clone() : Ext.util.MixedCollection	创建此集合的一个浅拷贝
	var item3 = item1.clone();
	console.info(item3);
	
	//5.contains( Object o ) : Boolean根据一个对象判断对象是否存在于集合中
	console.info("contains : " + item1.contains(b));
	
	//6.containsKey( String key ) : Boolean : Boolean根据一个对象判断对象是否存在于集合中
	console.info("containsKey : " + item1.containsKey("01"));
	
	//7.each 遍历集合
	//each( Function fn, [Object scope] )
	//遍历集合,并用每一个item作为参数,执行指定的函数,
	//item : Mixed
	//index : Number
	//length : Number
	item1.each(function(item,index){
		console.info(index + ": " + item.name);
	});
	console.info("length 长度： " + item1.length);
	
	//8.get( String/Number key ) 根据key得到value
	console.info("key为“01”的value" + item1.get("01").name);
	
	//9.first() : Object	等到第一个
	console.info("第一个" + item1.first().name);
	
	//10.last( ) : Object	等到最后一个
	console.info("最后一个" + item1.last().name);
	
	//11.getCount( ) : Object	得到长度
	console.info("getCount() 长度：" + item1.getCount());
	
	//12. add 事件 add( Number index, Object o, String key, Object eOpts )
	item1.on("add",function(index,o,key,eOpts){
		console.info(" 有一个新成员加入进来 --->" + key);
	});
	
	item1.add("03",{name:"cc"});
});



















