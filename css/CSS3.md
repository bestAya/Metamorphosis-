# 你不知道的CSS

## 1. BFC IFC GFC FFC

### BFC

* BOX:css布局的基本单位
* BOX是css布局的对象和基本单位，直观点来说，就是一个页面是有由很多个Box组成的。元素的类型和`display`属性，觉得了这个Box的类型。不同类型的Box,会参与不同的`Formatting Context()`(一个决定如何渲染文档的容器)，因为Box内的元素会以不同的方式渲染。
* `block-level box:display`属性为`block,list-item,table`的元素，回生成`inline-level box`.便参与`block fomatting context`
* `inline-level box:display`属性为`inline,inline-block,inline-table`的袁术，会成为`inline-level box`.并参与`inline formatting context`
* `Formatting context` 是 W3C CSS2.1 规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。最常见的 `Formatting context` 有 `Block fomatting context` (简称BFC)和 `Inline formatting context` (简称IFC)

#### 那些元素会生成BFC
* 根元素
* `float`属性部位`none`
* `position`为`absolute`或`fixed`
* `display`为`inline-block,table-cell,table-caption,flex,inline-flex`
* `overflow`不为`visible`

