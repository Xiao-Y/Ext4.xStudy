版本：ExtJS4.1

引入：
<!-- 引入ext的样式 -->
<link rel="styleSheet" type="text/css" href="${pageContext.request.contextPath}/js/extJs/resources/css/ext-all.css" >

<!-- 引入核心ext文件 ：可以引入bootstrap.js，这样就可以自动选择是使用ext-all-dev.js或ext-all-debug.js-->
<script type="text/javascript" src="${pageContext.request.contextPath}/js/extJs/ext-all-debug.js"></script>

<!-- 引入国际化文件 -->
<script type="text/javascript" src="${pageContext.request.contextPath}/js/extJs/ext-lang-zh_CN.js"></script>

Ext.onReady是ExtJS的一个准备函数，据有的ExtJS都要是里面写。DOM元素加载完成后立即执行。

1.数据代理proxy目录结构
Ext.data.proxy.Proxy 代理类的根类（分为客户端（Client）代理和服务器（Server）代理）
	Ext.data.proxy.Client 客户端代理
		Ext.data.proxy.Memory 普通的内存代理------（重）
		Ext.data.proxy.WebStoragte 浏览器客户端存储代理
			Ext.data.proxy.SessionStorage 浏览器级别代理-----（重）
			Ext.data.proxy.LocalStorage 本地化的级别代理（不能夸浏览器）-----（重）
	Ext.data.proxy.Server 服务器端代理
		Ext.data.proxy.Ajax 异步加载的方式------（重）
			Ext.data.proxy.Rest 一种特别的Ajax---(知道)
		Ext.data.proxy.JsonP 跨域交互的代理------（重）跨域是有严重的安全隐患的extjs的跨域也是需要服务器端作相应的配合
		Ext.data.proxy.Direct 命令
		3+方式的代理

































