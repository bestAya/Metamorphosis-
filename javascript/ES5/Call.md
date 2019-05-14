
# JavaScript深入之call和apply的模拟实现

## call

>可以将call看作是某个对象的方法，通过调用方法的形式来间接调用。

举个例子：

```js
    var obj = {
        a:1
    }
    function text(){
        console.log(this.a)
    }
    text.call(obj); //输出 1

```

注意了两点

  1. call改变了this的指针，指向到了obj;
  2. text函数执行了;

### 模拟实现第一步

把 `obj` 改造成如下

```js
    var obj = {
        a:1,
        text:function(){
        console.log(this.a)
        }
    }
```

* 分析

 1. 需要给`obj`添加一个`text`属性;
 2. 执行该函数
 3. 删除该函数

```js
    obj.fn = text;
    obj.fn();
    delete obj.fn;
```

#### `call`实现第一步

```js
    Function.prototype.call = function(centen){
        //当前this也指向text();
        centent.fn = this;
        centent.fn();
        delete centent.fn;
    }
```

### 模拟实现第二步

由于`call(this,argument)`参数是多参数的情况;

```js
    var obj = {
        a:1
    }
    function text(name,age){
        console.log(this.a);
        console.log(name);
        console.log(age);
    }
    text.call(obj,'张三',22); //输出 1 张三 22

```

如何进行多参数的模拟

* 分析

   1. 可以从argument中取参;
   2. 第一个是当前对象,第二个就是参数

* 模拟

    ```js
    //上个例子为例参数如下
    //argument = {
    //    0:obj,
    //    1:'张三',
    //    2:22
    //}
    var str = [];
    for(var i = 1 ; i < argument.length ; i++){
        str.push('argument['+i+']');
    }
    //执行结果为 ["arguments[1]", "arguments[2]"]
    ```

    需要把参数传入到`centent.fn()`中;

    ```js
    //利用eval()；
    eval('centent.fn('+str+')');
    ```

#### `call`实现第二步

```js
    Function.prototype.call = function(centen){
        //当前this也指向text();
        centent.fn = this;
        var str = [];
        for(var i = 1 ; i < argument.length ; i++){
            str.push('argument['+i+']');
        }
        eval('centent.fn('+str+')');
        delete centent.fn;
    }
```

### 模拟实现第三步

1. this参数可为null,当null的时候,视为指向Window;
2. 函数是有返回值的;

 实现

   ```js
        Function.prototype.call = function(centen){
        //当前this也指向text();
        var centent = centen || window
            centent.fn = this;
            var str = [];
            for(var i = 1 ; i < argument.length ; i++){
                str.push('argument['+i+']');
            }
            var result = eval('centent.fn('+str+')');
            delete centent.fn;
            return result;
        }
```

## apply

实现原理和`call`一样

```js
    Function.prototype.apply2 = function(centnt, arr) {
    var centnt = centnt || window;
    centnt.fn = this;
    var result;
    if (!arr) {
        centnt.fn();
    } else {
        var str = [];
        for (var i = 0; i < arr.length; i++) {
            str.push('arr[' + i + ']');
        }
        result = eval('centnt.fn(' + str + ')');
    }
    delete centnt.fn;
    return result;
};
```