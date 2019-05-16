# PHP语法 #

>PHP 脚本在服务器上执行，然后将纯 HTML 结果发送回浏览器。

## 基本语法 ##

PHP 脚本可以放在文档中的任何位置。

PHP 脚本以 <?php 开始，以 ?> 结束：

```php
    <?php
    // PHP 代码
    ?>
```

## PHP变量 ##

与代数类似，可以给 PHP 变量赋予某个值（x=5）或者表达式（z=x+y）。

变量可以是很短的名称（如 x 和 y）或者更具描述性的名称（如 age、carname、totalvolume）。

PHP 变量规则：

* 变量以 $ 符号开始，后面跟着变量的名称
* 变量名必须以字母或者下划线字符开始
* 变量名只能包含字母数字字符以及下划线（A-z、0-9 和 _ ）
* 变量名不能包含空格
* 变量名是区分大小写的（$y 和 $Y 是两个不同的变量）

>PHP 语句和 PHP 变量都是区分大小写的。

### 1. 创建（声明）PHP 变量 ###

```php
    <?php
        $txt="Hello world!";
        $x=5;
        $y=10.5;
    ?>
```

### 2. PHP 变量作用域 ###

变量的作用域是脚本中变量可被引用/使用的部分。

PHP 有四种不同的变量作用域：

* local
* global
* static
* parameter

### 3. 局部和全局作用域 ###

在所有函数外部定义的变量，拥有全局作用域。除了函数外，全局变量可以被脚本中的任何部分访问，要在一个函数中访问一个全局变量，需要使用 global 关键字。

在 PHP 函数内部声明的变量是局部变量，仅能在函数内部访问：

```php
    <?php
        $x=5; // 全局变量

        function myTest()
        {
            $y=10; // 局部变量
            echo "<p>测试函数内变量:<p>";
            echo "变量 x 为: $x";//空
            echo "<br>";
            echo "变量 y 为: $y";//10
        }  

        myTest();

        echo "<p>测试函数外变量:<p>";
        echo "变量 x 为: $x"; //5
        echo "<br>";
        echo "变量 y 为: $y";//空
    ?>
```

#### PHP global 关键字 ####

global 关键字用于函数内访问全局变量。

在函数内调用函数外定义的全局变量，我们需要在函数中的变量前加上 global 关键字：

```php
    <?php
        $x=5;
        $y=10;
        function myTest(){
            global $x,$y;
            $y=$x+$y;
        }
        myTest();
        echo $y; // 输出 15
    ?>
```

#### Static 作用域 ####

当一个函数完成时，它的所有变量通常都会被删除。然而，有时候您希望某个局部变量不要被删除。

要做到这一点，请在您第一次声明变量时使用 static 关键字：

```php
<?php
    function myTest()
    {
        static $x=0;
        echo $x;
        $x++;
        echo PHP_EOL;    // 换行符
    };
    myTest(); //0
    myTest();//1
    myTest();//2
?>
```

#### 参数作用域 ####

参数是通过调用代码将值传递给函数的局部变量。

参数是在参数列表中声明的，作为函数声明的一部分：

```php
    <?php
        function myTest($x)
        {
            echo $x;
        }
        myTest(5);
    ?>
```

## 数据类型 ##

`String`（字符串）, `Integer`（整型）, `Float`（浮点型）, `Boolean`（布尔型）, `Array`（数组）, `Object`（对象）, `NULL`（空值）。

### PHP 字符串 ###

一个字符串是一串字符的序列，就像 "Hello world!"。

你可以将任何文本放在单引号和双引号中：

```php
    <?php
        $x = "Hello world!";
        echo $x;
        echo "<br>";
        $x = 'Hello world!';
        echo $x;
    ?>
```

### PHP 整型 ###

>整数是一个没有小数的数字。

整数规则:

* 整数必须至少有一个数字 (0-9)
* 整数不能包含逗号或空格
* 整数是没有小数点的
* 整数可以是正数或负数
* 整型可以用三种格式来指定：十进制， 十六进制（ 以 0x 为前缀）或八进制（前缀为 0）。

PHP `var_dump()` 函数返回变量的数据类型和值：

```PHP
<?php 
        $x = 5985;
        var_dump($x);
        echo "<br>"; 
        $x = -345; // 负数 
        var_dump($x);
        echo "<br>"; 
        $x = 0x8C; // 十六进制数
        var_dump($x);
        echo "<br>";
        $x = 047; // 八进制数
        var_dump($x);
?>
```

### PHP浮点型 ###

浮点数是带小数部分的数字，或是指数形式。

在以下实例中我们将测试不同的数字。 PHP var_dump() 函数返回变量的数据类型和值：

```php
<?php 
    $x = 10.365;
    var_dump($x);
    echo "<br>"; 
    $x = 2.4e3;
    var_dump($x);
    echo "<br>"; 
    $x = 8E-5;
    var_dump($x);
?>
```

### PHP 布尔型 ###

布尔型可以是 TRUE 或 FALSE。

```php
    $x = true;
    $y = fasle;
```

### PHP 数组 ###

数组可以在一个变量中存储多个值。

在以下实例中创建了一个数组， 然后使用 PHP var_dump() 函数返回数组的数据类型和值：

```php
<?php 
$cars=array("Volvo","BMW","Toyota");
var_dump($cars);
?>
```

### PHP 对象 ###

对象数据类型也可以用于存储数据。

在 PHP 中，对象必须声明。

首先，你必须使用class关键字声明类对象。类是可以包含属性和方法的结构。

然后我们在类中定义数据类型，然后在实例化的类中使用数据类型：

```php
<?php
    class Car
    {
    var $color;
    function __construct($color="green") {
        $this->color = $color;
    }
    function what_color() {
        return $this->color;
    }
    }
?>

```

### PHP NULL 值 ###

NULL 值表示变量没有值。NULL 是数据类型为 NULL 的值。

NULL 值指明一个变量是否为空值。 同样可用于数据空值和NULL值的区别。

可以通过设置变量值为 NULL 来清空变量数据：

```php
<?php
    $x="Hello world!";
    $x=null;
    var_dump($x);
?>
```