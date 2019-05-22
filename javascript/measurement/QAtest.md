# JavaScript&QA工程师

* 为什么要测试

  * 正确性：测试可以检验代码的正确性，在线上做到心里有底
  * 自动化：当然手工也可以测试，通过console可以打印出内部信息，但是这是一次性的事情，下次测试还需要从头再来，效率不能得到保障。通过编写测试用例，可以做到一次编写，多次运行。
  * 解释性：测试用例用于测试接口、模块的重要性，那么在测试用例中就会涉及如何使用这些API。其他开发人员如果要使用这些api，那阅读测试用例是一种很好的途径，有时候比说明文档更清晰。
  * 驱动开发，指导设计：打哪被测试的前提是代码本身的可测试性，那么要保证代码的可测试性，就需要在开发中注意API的设计，TDD将测试前移就是起到这么一个作用。
  * 保证重构：互联网行业产品迭代速度很快，迭代后必然存在代码重构的过程，那怎么才能够保证重构后的代码的质量呢？有测试用例做后盾，就可以大胆的进行重构。

## 单元测试

* 目的：单元测试能够让开发者明确直到代码结果
* 原则：单一职责、接口抽象、层次分离
* 断言库：保证最小单元是否正常运行检测方法
* 测试风格：测试驱动(TDD)、(BDD)行为驱动开发均是明捷开发方法论
  * `TDD`：关注的是所有功能是否被实现（每一个功能都必须有对应的测试用例），`suite`配合`test`利用`assert('tobi' == user.name)`;
  * `BDD`关注整体行为是否符合整体预期，编写的每一行代码都有目的提供一个全面的测试用例集。`expect/should`,`describe`配合`it`利用自然语言`expect(1).toEqual(fn())`执行结果。

### 单元测试框架

* `better-asser`(TDD断言库)
* `should.js`(BDD断言库)
* `expect.js`(BDD断言库)
* `chai.js`(TDD、BDD双模)
* `Jasmine.js`(BDD断言库)
* `Node.js`本身集成`require("assert")`
* `Intern` 更大一个大而全的单元测试框架
* `QUnit`一个游离在`Jquery`左右的测试框架
* `Macaca`一套完整的自动化测试解决方案国产神器来自阿里巴巴

#### 测试范围

* 单元测试 小的函数
  * `karma`
  * `karma-coverage`
  * 实例

    ```js
    npm i karma
    npm install karma karma-coverage --save-dev
    npm install karma-jasmine karma-chrome-launcher jasmine-core --save-dev
    ```

    ```js
    describe('测试基本函数Api',function(){
    it("+1函数的应用",function(){
        expect(window.add(1)).toBe(1);
        expect(window.add(2)).toBe(3);
        })  
    })
    ```

    ```js
    // karma.conf.js
    module.exports = function(config) {
    config.set({
        files: [
        'src/**/*.js',
        'test/**/*.js'
        ],
        // coverage reporter generates the coverage
        reporters: ['progress', 'coverage'],
        preprocessors: {
        // source files, that you wanna generate coverage for
        // do not include tests or libraries
        // (these files will be instrumented by Istanbul)
        'src/**/*.js': ['coverage']
        },
        // optionally, configure the reporter
        coverageReporter: {
        type : 'html',
        dir : 'coverage/'
        }
    });
    };
    ```

* 单元测试 小的组件
  * react 组件测试
    * `jest.js`
    * 实例

      ```js
        npm install --save-dev jest-dom
        npm i react-scripts
      ```

      ```js
        //index.js
        import React from "react";

        export const App = () => {
        return (
            <div>
            <p data-testid="js-p">你很优秀</p>
            <ul data-testid="js-ul">
                <li>Javascirpt</li>
                <li>css</li>
            </ul>
            </div>
        );
        };
        //index.spec.js
        import React from 'react';
        import { render, cleanup, fireEvent } from 'react-testing-library';
        import { App } from "./index"

        afterEach(cleanup);

        describe('测试单个组件', function() {
            it("基本基本组件", function() {
                const { getByTestId } = render( < App / > );
                const [ul, nav] = [getByTestId('js-ul'), getByTestId('js-p')];
                expect(ul.children.length).toBe(2);
            })
        })
      ```

      ```js
      "react-unit": "react-scripts test --env=jsdom" //测试
      ```

* 接口测试 确保数据
  * `mocha`
  * `mochawesome`
  * 实例

    ```js
    npm i mocha
    npm install --save-dev mochawesome
    ```

    ```js
    const Mocha = require("mocha");
    const mocha = new Mocha({
        reporter: 'mochawesome',
        reporterOptions: {
        reportDir: './docs/mochawesome-reporter',
        }
    });
    mocha.addFile('./tests/service/router.spec.js');
    mocha.run(function(){
        console.log("done");
        process.exit();//退出
    })
    ```

    ```js
    //执行
        node ./[文件名]/[文件名].spec.js
    ```

* e2e测试 确保功能
  * `rize.js`
  * 实例

    ```js
    npm install --save-dev puppeteer rize
    ```

    ```js
    const Rize = require('rize');
    const rize = new Rize()
    rize
    .goto('https://github.com/')//测试地址
    .type('input.header-search-input', 'node')//搜索框的选择器是 input.header-search-input输入node
    .press('Enter')//用ENter来进行提交
    .waitForNavigation()//
    .assertSee('Node.js')//检查当前页面是否包含指定Node.js
    .end() // 别忘了调用 `end` 方法来退出浏览器！
    ```

* UI测试  确保样式

  * `backstopjs` 
  * 实例

    ```js
        npm install -g backstopjs
    ```

    ```js
        backstop init -> backstop.json ->'设置设备尺寸' -> '调整对比地址' -> backstop test
    ````

* f2etest 确保多浏览器测试文档

##### 测试实例

```js
    describe('测试基本函数',function(){
    it("函数的应用",function(){
        expect(window.add(1)).toBe(1);
        expect(window.add(2)).toBe(3);
    })
})
```

## 性能测试

## 安全测试

## 功能测试