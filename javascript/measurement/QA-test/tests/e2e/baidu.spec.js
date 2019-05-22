const Rize = require('rize');
const rize = new Rize()
rize
    .goto('https://github.com/')//测试地址
    .type('input.header-search-input', 'node')//搜索框的选择器是 input.header-search-input输入node
    .press('Enter')//用ENter来进行提交
    .waitForNavigation()//
    .assertSee('Node.js')//检查当前页面是否包含指定Node.js
    .end() // 别忘了调用 `end` 方法来退出浏览器！