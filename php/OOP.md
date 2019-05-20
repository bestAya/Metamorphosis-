# 面向对象的PHP

> ## Object Oriented Programming，简称OOP，是一种程序设计思想。OOP把对象作为程序的基本单元，一个对象包含了数据和操作数据的函数 ##

## 构造方法和析构方法

* 构造方法

  * 格式
    ```php
          class People {
        // 通过构造方法为成员变量赋初始值
        function __construct( $name, $age ) {
        $this->name = $name;
        $this->age = $age;
        }
        // 公有成员函数方法（$this代表自身的对象);
        public function sayName () {
        echo("my name is &nbsp;" .$this->name.",&nbspI`m&nbsp;" .$this->age ."&nbsp;years old");
        echo '</br>';
        }
    }
        // 通过new操作符创建zhangsan对象
        $zhangsan = new People('zhangsan', 28);
        $zhangsan->sayName();

        // 通过new操作符创建lisi对象
        $lisi = new People('lisi', 26);
        $lisi->sayName();
    ```

* 析构方法

  * 格式

        ```php
            class Person{
                $this -> age = $age;
            }
            public function data(){
                retrun $this -> age;
            }
            public function _destruct(){
                //用途 可以进行资源的释放 数据库的关闭
                //对象被销毁的时候没有嗲吗可执行了
            }
        ```

## 三大特性 ##

* 封装
* 继承
* 多态

### 继承性

>#### 封装性是面向对象编程中的三大特性之一，封装就是帮对象中的成员属性和方法加上修饰符，使其尽可能的隐藏对象的内部细节，以达到对成员的 访问控制(不是拒绝访问)。

#### PHP支持如下3中访问修饰符：

* `public` (共有的);

  * 设置实例

    ```php
            class person{
                public $name;
                public $age;
                public function info(){};
            }
    ```

* `private` (私有的);

  * 设置实例

    ```php
            class person{
                private $name;
                private $age;
                private function info(){};
            }
    ```

  * 注意

    封装后的成员在对象外部不能直接访问，只能在对象的内部方法中使用$this访问。

* `protected` (受保护的);

  * 设置实例

    ```php
            class person{
                private $name;
                private $age;
                private function info(){};
            }
    ```

#### 设置私有成员与私有成员访问

* 魔术方法`__set()` 在外部设置属性的时候自动调用
* 魔术方法`__get()` 在外部获取属性的时候自动调用
* 魔术方法`__isset()`
* 魔术方法`__unset()`

### 继承性 ###

> PHP只支持单继承不允许多重继承。一个之类只能有一个父类，不允许一个子类直接继承多个类，单一个类可以被多个类继承。

表头|private(私有的)|protected(受保护的)|public(默认的)
:--:|:--:|:--:|:--:
在同一类|可以|可以|可以
在子类|不可以|可以|可以
在类的外部|不可以|不可以|可以

#### 子类中重载父类方法

* 在子类中允许重写（覆盖）父类中的方法
* 在子类中，使用`parent`访问父类中被覆盖的属性和方法

实例

```php
    //在重载方法里加上parent::['要重载的方法名']
    parent::construct();
    parent::fun()
```

