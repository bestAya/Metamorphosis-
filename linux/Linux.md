# 操作系统与后端语言核心知识

## 命令

* shh
* ipconfig
* route
* net
* `ss -an | grep 80` 查看端口占用
* `kill` 停掉XXX端口;(那个pid小有可能是主进程)

```js

    $ pwd     //查看当前目录位置
    $ ls      //查看当前目录下所有文件
    $ dir      //查看当前目录下所有文件
    $ ls -l   //查看所有文件包括隐藏文件
    $ ls -a   //查看所有文件包括隐藏文件
    $ mkdir [文件名] //创建文件
    $ cp -R [要拷贝的文件] [拷贝文件的文件夹]/[重命名拷贝文件]  //拷贝文件
    $ rm -r [文件] // 删除文件

```

### Linux配置

* 网卡配置 `/etc/sysconfig/network-script/`

### 命令行的下载

#### 指令

* `wget`

    ```linux
    wget http:www.baidu.com
    //下载百度首页
    ```

   下载下来的是服务器的时间戳

* `curl`

    ```linux
    curl www.baidu.com -o
    ```

   下载的文件时间是本地时间戳

### 查看Linux命令

>`man setsid` 查看命令

```cmd
ctrl + c //强行关闭当前任务
ctrl + s //锁定终端
ctrl + q //解除锁定
ctrl + l //清空终端
ctrl + a //终端移动到最前面
ctrl + e //终端移动到最后
```

### Linux 进程相关命令

* `top`

    任务管理器

* `ps`查看进程

  * `ps aux` 查看进程

* `kill`,`pkill` 杀掉进程;

  * `kill [名称]`

* `w` 查看服务登录

* `last` 查看服务器登录历史

  * `last -n 10`查看10条

* `lastb`查看服务器登录失败的账户
  
## 理解面向对象

### 计算机编程的的两个方法

* 面向对象
* 面向过程

### 面向过程
