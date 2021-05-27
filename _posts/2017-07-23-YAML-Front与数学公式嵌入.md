---
layout: post
title: "Note: 博客的YAML编写，图片与数学公式嵌入"
tag: note
categories: blog
---

在博客中编辑格式，以及图片方式嵌入latex数学公式的方法

{% include toc %}

## YAML Front

YAML作为.md文件开头的页面设置脚本，一般格式为：
- 输入---后回车，自动进入YAML编辑
- layout:post 页面使用post格式
- tltle: " " 标题
- tags: - ... tag标注
- categories: 定义这篇博客的类型

当需要加入table of content时，插入以下语句：
```
{% include toc %}
```

还有其他设置，目前实用的是如上几个，其中tags后面跟着tag列表.  
需要注意的是，每个冒号后面最好跟上一个TAB符，否则容易遇到识别错误。  
当然，省去YAML并不影响以post格式正常上传博客.

所有博客都可以根据categories类型进行分类，本博客目前分blog、works，将来根据需求可能会细分diary等门类。实现单独分类页面的方法是创建文件夹/works/index.html，然后修改_data/navigation.yml即可。

## Image图片嵌入
在jekyll中，.md格式文件可以嵌入网页图片，格式如下：
```html
![1](http://latex.codecogs.com/gif.latex?\theta = (X^TX)^{-1} X^{-1}\vec Y)
```
其中括号内为网址，可以自由替换。

如果对图片的左对齐、居中等格式有要求，可以添加align后缀：
```html
！[2](/images/witch3.jpg){: align-left}
！[3](/images/witch3.jpg){: align-right}
！[4](/images/witch3.jpg){: align-center}
```

下面以居中格式嵌入一张图片：
![pic](/img/Profile.png){: align-center}

源代码：
```html
![pic](/img/Profile.png){: align-center}
```
注意感叹号不要使用中文输入法，以及网上扒图的时候选择copy location，以及网上找图仍然可能load failed，所以保存到本地Repository再嵌入也是可以的，在Typora中需要输入绝对目录才能读取，但在jekyll网页中，网址就是repository根目录下的相对地址。我的根目录下图片一般保存在images文件夹中，因此是代码中所示的地址.



## 数学公式的嵌入

**update(2021/05/27): 由于mathjax的引入，数学公式已经可以直接编写和显示。**

.md是支持Latex格式数学公式的（至少在我上使用的Typora中），但jekyll页面无法读取Latex语言。比如如下公式：  
$ (X^TX)^{-1} X^{-1}\vec Y$  
在Typora编辑的时候，它直接显示为数学公式，但jekyll页面中会显示为源代码。  
解决方案是使用latex.codecogs.com，这个网站能直接在网址中添加LaTex公式并输出gif格式的网页，比如上述公式，可以通过如下脚本在jekyll网页中居中显示：

```html
![math1](http://latex.codecogs.com/gif.latex?(X^TX)^{-1} X^{-1}\vec Y){: align-center}
```
![math1](http://latex.codecogs.com/gif.latex?(X^TX)^{-1} X^{-1}\vec Y){: align-center}
在typora中会显示成乱码一样的图片，不过无伤大雅。
由于这种数学公式转网页的方式还是有些麻烦，因此过多数学公式的笔记还是不便上传jekyll的。

对于一些易造成bug的因素，贴在这里：
- 间隔符号，或绝对值符号，在键盘上直接输入会被识别成表格符号，因而应该以\mid形式出现
- 希腊字母不需要在文字中额外以数学公式形式表示，html自带，比如&theta;，直接输入& theta;(去掉空格)即可