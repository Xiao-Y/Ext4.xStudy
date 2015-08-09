//Ext.util.Format
//此类是一个用于格式化函数集中的类。 它包括要格式化的各种不同类型数据的函数，如文本、日期和数值。
Ext.onReady(function(){
	//格式化字符串
	Ext.get("but6").on("click",function(){
		//ellipsis( String value, Number length, Boolean word ) : String	转换后的文本
		//Ext.String.ellipsis的别名。
		//对大于指定长度的字符串，进行裁剪，增加省略号('...')的显示
		//value : String 要裁剪的字符串
		//length : Number	要裁剪允许的最大长度。指的是裁剪后加上...的长度
		//word : Boolean	如果为 true，则试图找到一个共同的词符
		var str = Ext.get("str").getValue();
		var fm = Ext.util.Format.ellipsis(str,6);
		alert(fm);
	});
	
	//截取子串
	Ext.get("but7").on("click",function(){
		//substr( String value, Number start, Number length ) : String 返回原字符串中的一个子串
		//value : String	原始文本
		//start : Number	子串的起始索引位置(索引从0开始)
		//length : Number	子串的长度
		var str2 = Ext.get("str2").getValue();
		var sub = Ext.util.Format.substr(str2,1,3);
		alert(sub);
	});
	
	//首字母大写
	Ext.get("but8").on("click",function(){
		//capitalize( String string ) : String
		//Ext.String.capitalize的别名。
		//返回一个字符串，该字符串中第一个字母为大写字母
		var str3 = Ext.get("str3").getValue();
		var sub2 = Ext.util.Format.capitalize(str3);
		alert(sub2);
	});
	
	//字母都转小写
	Ext.get("but10").on("click",function(){
		//lowercase( String value ) : String
		//返回一个字符串，该字符串中的字母被转换为小写字母
		var str4 = Ext.get("str4").getValue();
		var sub6 = Ext.util.Format.lowercase(str4);
		alert(sub6);
	});
	
	//字母都转大写
	Ext.get("but11").on("click",function(){
		//uppercase( String value ) : String
		//返回一个字符串，该字符串中的字母被转换为大写字母
		var str5 = Ext.get("str5").getValue();
		var sub7 = Ext.util.Format.uppercase(str5);
		alert(sub7);
	});
	
	//字母都转小写
	Ext.get("but9").on("click",function(){
		//date( String/Date value, String format ) : String
		//将某个值解析成为一个特定格式的日期。
		//value : String/Date	需要格式化的值(字符串必须符合 javascript Date对象的parse()方法期望的格式)。
		//format : String	(可选)任何有效的日期格式字符串。默认为Ext.Date.defaultFormat.
		var sub3 = Ext.util.Format.date(new Date(),'Y-m-d');
		alert(sub3);
	});
	
	//数字格式化
	Ext.get("but12").on("click",function(){
		//number( Number v, String formatString ) : String
		//根据传入的格式字符串将传递的数字格式化。
		/**
		 * 例如 (123456.789):
			0 - (123456) 只显示整数，没有小数
			0.00 - (123456.78) 精确到两位小数
			0.0000 - (123456.7890) 精确到四位小数
			0,000 - (123,456) 显示逗号和整数，没有小数
			0,000.00 - (123,456.78) 显示逗号和两位小数
			0,0.00 - (123,456.78) 快捷方法，显示逗号和两位小数
			在一些国际化的场合需要反转分组（,）和小数位（.），那么就在后面加上/i. 例如: 0.000,00/i
		 */
		var str12 = Ext.get("str12").getValue();
		var sub12 = Ext.util.Format.number(str12,"0,000.00");
		alert(sub12);
	});
	
	//换行转换成html的<br>
	Ext.get("but13").on("click",function(){
		//nl2br( String v ) : String
		//将换行字符串格式化成HTML标签 <br/>
		var str13 = "2323\n45456";
		alert(str13);
		var sub13 = Ext.util.Format.nl2br(str13);
		alert(sub13);
	});
});