# 你不知道HTML #

## 1. 什么是Html ##

超文本标记语言（HyperText Markup Language），是“网页浏览器中看到展示信息的”设计的一种标记语言

## 2. 什么是Html ##

1. 声明位于位于HTML文档中的第一行，告诉浏览器的解释器用什么文档标准来解析这个文档。
2. DOCTYPE书写错误或者不存在会导致文档已兼容模式呈现。

## 3. 标准模式和混杂模式 ##

1. 标准模式：html排版和js渲染工作模式都是以该浏览器支持的最高标准运行。
2. 兼容模式：页面已宽松的向后兼容的方式显示，模拟老浏览器的行为。

## 4.HTML5 为什么只有 `<!DOCTYPE HTML>` ##

 html5不是基于**SGML**(标准通用标记语言),所以不需要对**DTD**(文档类型定义)进行引用，但是它需要对文档类型声明，需要doctype来规范浏览器行为。
>SGML是指“标准通用标记语言”(Standard Generalized Markup Language), 是1986年出版发布的一个信息管理方面的国际标准(ISO 8879)，它是国际上定义电子文件结构和内容描述的标准，是一种非常复杂的文档的结构，主要用于大量高度结构化数据的防卫区和其他各种工业领域，利于分类和索引。
>
>DTD文档类型定义(Document Type Definition)是一套为了进行程序间的数据交换而建立的关于标记符的语法规则。

## 5.盒子模型、行内元素、块级元素 ##

### 盒子模型 ###

 1. 标准盒模型

    >标准盒模型：元素的width和height = content

     ![标准盒模型](https://img-blog.csdn.net/20160108181549345?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center)

 2. IE盒模型

    >IE盒模型：元素的width和height =( content+border+padding )

    ![标准盒模型](https://img-blog.csdn.net/20160108181650013?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center)

### 行内元素 ###

  1. 和其他元素都在一行

  2. 高度、宽度以及内边距都是不可控的

  3. 宽高就是内容的高度，不可以改变

  4. 行内元素只能行内元素，不能包含块级元素

### 块级元素 ###

  1. 总是从新的一行开始

  2. 高度、宽度都是可控的

  3. 宽度没有设置时，默认为100%

  4. 块级元素中可以包含块级元素和行内元素

## 6.H5语义化 ##

 1. 定义：正确的标签做正确的事情
 2. 为什么要做语义化
    * 有利于SEO，有利于搜索引擎爬虫更好的理解我们的网页，从而获取更多的有效信息，提升网页的权重。
    * 在没有CSS的时候能够清晰的看出网页的结构，增强可读性，便于团队开发和维护。
    * 支持多终端设备的浏览器渲染。
 3. SEO
    * 汉译为搜索引擎优化。是一种方式：利用搜索引擎的规则提高网站在有关搜索引擎内的自然排名。
    * 目的： 为网站提供生态式的自我营销解决方案，让其在行业内占据领先地位，获得品牌收益；SEO包含站外SEO和站内SEO两方面；为了从搜索引擎中获得更多的免费流量，从网站结构、内容建设方案、用户互动传播、页面等角度进行合理规划，还会使搜索引擎中显示的网站相关信息对用户来说更具有吸引力。
    * 优化方式：
       * 内部优化：
          * META标签优化：例如：TITLE，KEYWORDS，DESCRIPTION等的优化。
          * 内部链接的优化，包括相关性链接（Tag标签），锚文本链接，各导航链接，及图片链接。
          * 网站内容更新：每天保持站内的更新(主要是文章的更新等)。
       * 外部优化：
          * 外部链接类别：友情链接、博客、论坛、B2B、新闻、分类信息、贴吧、知道、百科、站群、相关信息网等尽量保持链接的多样性。
          * 外链运营：每天添加一定数量的外部链接，使关键词排名稳定提升。
          * 外链选择：与一些和你网站相关性比较高,整体质量比较好的网站交换友情链接,巩固稳定关键词排名。

## 7.前端跨域 ##

### 同源策略 ##

1. 概念：如果两个页面的协议，端口（如果有指定）和域名都相同，则两个页面具有相同的源。

    >同源策略（Same origin policy）是一种约定，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，则浏览器的正常功能可能都会受到影响。可以说Web是构建在同源策略基础之上的，浏览器只是针对同源策略的一种实现。

2. 保证用户信息安全，防止恶意网站窃取数据，防止cookie共享
3. 限制范围 **(跨域)**

   * cookie、localStorage、indexedDB无法读取
   * dom 无法获取、ajax不能发送、form表单没有限制
4. 设置同源 `(host)：document.domain`
5. 页面中的链接，重定向以及表单提交是不会受到同源策略限制的跨域资源的引入是可以的。但是js不能读写加载的内容。如嵌入到页面中的`<script src="..."></script>，<img>，<link>，<iframe>`等

### 跨域解决方案 ###

 1.JSONP:网页添加一个`<script>`元素，向服务器请求jsON数据。服务器收到请求后，将数据放在一个指定名字的回调函数里传回来。
* 缺点只支持get请求;
* 优点简单方便，易理解，兼容性良好;
* 如下示例代码;

```js

   //动态创建script，用于跨越操作
  function creatScriptTag(src) {
    var script = document.createElement('script');
    script.setAttribute("type","text/javascript");
    script.src = src;
    document.body.appendChild(script);
  }
  // 调用creatScriptTag函数
  window.onload = function () {
    var url = '/index.php?jsoncallback=result';
    creatScriptTag(url);
  }
  // 定义回调函数
  function result (data) {
    console.log(data);
  }
```

```php
  // index.php 
  <?php
  header('Content-type: application/json');
  //获取回调函数名
  $jsoncallback = htmlspecialchars($_REQUEST ['jsoncallback']);
  //取数据
  $data = [
    'data'=>'123',
  ];
  $json_data = json_encode(array('code'=>'200','msg'=>'请求成功','data' => $data),jsON_UNESCAPED_UNICODE);
  //输出jsonp格式的数据
  echo $jsoncallback ."(" . $json_data . ")";
  ?>
```
2. WebSocket:是一种通信协议，使用ws://（非加密）和wss://（加密）作为协议前缀。该协议不实行同源政策，只要服务器设置利用origin字段设置白名单，就可以通过它进行跨源通信。
3. CORS（Cross-Origin Resource Sharing）

   *  在请求头信息中增加Origin字段，用来说明此次请求来自那个源（协议+域名+端口），此字段可以设置相应白名单
   * 必须设置`Access-Control-Allow-Origin`字段，值要求是Origin字段的值或者是*，*的意思是接受任意域名的请求
   * CORS请求默认不发送cookie和http认证信息，如果要发送，要在服务器端指Access-Control-Allow-Credentials: true,并且ajax请求必须打开withCredentials属性
   * 如果选择发送cookie,Access-Control-Allow-Origin字段不能设为*，必须指定明确的，与当前网页一致的域名

```js
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
```


  
