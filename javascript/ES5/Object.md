# Object 新增方法

## 1. `Object.create()`

>创建一个具有指定原型且可选择性地包含指定属性的对象

```js
    Object.create(proto, [ propertiesObject ])
```

* ### 参数

  * `propo` : 一个对象，作为新创建对象的原型。或者为 null。
  * `propertiesObject` : 可选。该参数对象是一组属性与值，该对象的属性名称将是新创建的对象的属性名称，值是属性描述符。注意：该参数对象不能是 undefined，另外只有该对象中自身拥有的可枚举的属性才有效，也就是说该对象的原型链上属性是无效的。

* ### 返回值

    >一个新对象，带着指定的原型对象和属性。

* ### 注意

    >如果propertiesObject参数是 null 或非原始包装对象，则抛出一个 TypeError 异常。

    ```js
    Object.create({},null)
    //VM1410:1 Uncaught TypeError: Cannot convert undefined or null to object
    ```

* ### 继承

    

## 