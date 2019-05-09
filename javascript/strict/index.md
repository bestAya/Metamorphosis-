# JavaScript严格模式(use strict)

## ES5的严格模式

>JavaScript 严格模式（strict mode）即在严格的条件下运行。支持严格模式的浏览器:Internet Explorer 10 +、 Firefox 4+ Chrome 13+、 Safari 5.1+、 Opera 12+。

## 严格模式的限制

* 不允许使用未声明的变量：

    实例：

    ```js
    "use strict";
     x = 3.14;
      //(报错)Uncaught ReferenceError: x is not defined  
    ```

    ```js
    "use strict";
    x = {p1:10, p2:20};
      //(报错)Uncaught ReferenceError: x is not defined  
    ```

* 不允许删除变量或者对象：

    实例：

    ```js
    "use strict";
    var x = 3.14;
    delete x;
    //Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.
    ```

* 不允许不允许删除函数：

    实例：

    ```js
    "use strict";
    function x(p1, p2) {}; 
    delete x
    //Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.
    ```

* 不允许变量重名

    实例：

    ```js
    "use strict";
    function x(p1, p1) {};
    //Uncaught SyntaxError: Duplicate parameter name not allowed in this context
    ```

* 不允许使用八进制:

    实例：

    ```js
    "use strict";
    var x = 010;
    //Uncaught SyntaxError: Octal literals are not allowed in strict mode.
    ```

* 不允许使用转义字符:

    实例：

    ```js
    "use strict";
    var x = \010;
    //Uncaught SyntaxError: Invalid or unexpected token
    ```

* 不允许对只读属性赋值:

    实例：

    ```js
    "use strict";
    var obj = {};
    Object.defineProperty(obj, "x", {value:0, writable:false});

    obj.x = 3.14;
    // TypeError: Cannot assign to read only property 'x' of object '#<Object>'
    ```

* 不允许对一个使用getter方法读取的属性进行赋值:

    实例：

    ```js
    "use strict";
    var obj = {get x() {return 0} };

    obj.x = 3.14;
    // TypeError: Cannot set property x of #<Object> which has only a getter
    ```

* 不允许删除一个不允许删除的属性：

    实例：

    ```js
    "use strict";
    delete Object.prototype;
    // TypeError: Cannot delete property 'prototype' of function Object() { [native code] }
    ```

* 变量名不能使用 "eval" 字符串:

    实例：

    ```js
    "use strict";
    var eval = 3.14;
    // SyntaxError: Unexpected eval or arguments in strict mode
    ```

* 变量名不能使用 "arguments" 字符串:

    实例：

    ```js
    "use strict";
    var arguments = 3.14;  
    // SyntaxError: Unexpected eval or arguments in strict mode
    ```

* 不允许使用with以下这种语句:

    实例：

    ```js
    "use strict";
    with (Math){x = cos(2)};
    // Uncaught SyntaxError: Strict mode code may not include a with statement
    ```

* 由于一些安全原因，在作用域 eval() 创建的变量不能被调用：

    实例：

    ```js
    "use strict";
    eval ("var x = 2");
    alert (x);
    // Uncaught ReferenceError: x is not defined
    ```

* 由于一些安全原因，在作用域 eval() 创建的变量不能被调用：

    实例：

    ```js
    "use strict";
    eval ("var x = 2");
    alert (x);
    // Uncaught ReferenceError: x is not defined
    ```

* 禁止this关键字指向全局对象。

    实例：

    ```js
    function f(){
        return !this;
    } ;
    // 返回false，因为"this"指向全局对象，"!this"就是false

    function f(){
        "use strict";
        return !this;
    } ;
    // 返回true，因为严格模式下，this的值为undefined，所以"!this"为true。
    ```

* 使用构造函数时，如果忘了加new，this不再指向全局对象：

    实例：

    ```js
    function f(){
        "use strict";
        this.a = 1;
     };
    f();// 报错，this未定义
    ```

## 保留关键字

为了向将来Javascript的新版本过渡，严格模式新增了一些保留关键字：

```js
    implements
    interface
    let
    package
    private
    protected
    public
    static
    yield
```