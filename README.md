![](https://img.shields.io/badge/vue-2.5.2-4EDD96.svg) ![](https://img.shields.io/badge/vuex-3.0.1-69D3E3.svg)  ![](https://img.shields.io/badge/axios-0.17.1-56DD7F.svg) 

# vue_wumReader

因为学习vue，所以试着用其来做个了小说阅读webapp，主要使用了vue2.0+vuex+vue-router等。

本项目使用了追书神器api，仅用于学习和了解。

本人只是一个初学者，有什么建议欢迎提出，让我们共同进步，如果你也刚学vue，可以了解一下，喜欢可以给star
给我个小鼓励。

## 运行

``` bash

# 安装依赖
npm install

# 开发模式
npm run dev

```

## 页面效果展示

### 主页和阅读

![](https://github.com/windjourney/vue-wumReader/blob/master/pic/Animation1.gif) 

### 分类和排行

![](https://github.com/windjourney/vue-wumReader/blob/master/pic/Animation2.gif) 

### 收藏和删除

![](https://github.com/windjourney/vue-wumReader/blob/master/pic/Animation3.gif) 

## 已完成目标

- [x] 小说搜索
- [x] 小说书架
- [x] 小说排行
- [x] 小说分类
- [x] 小说详情
- [x] 阅读器背景更改
- [x] 小说换源
- [x] 章节跳转
- [x] 小说删除

## 未完成目标

- [ ] 小说书单
- [ ] 皮肤更换功能
- [ ] 书架显示模式更改
- [ ] 小说阅读位置记录(非章节)
- [ ] 排行周榜月榜

## 遇到的错误

- [x] api未设置跨域
		解决：使用vue-cli的话，可以再config/index,js 中找到dev里的proxyTable 写入
```javacript		
			'/api':{
				target:'http://api.xxxx.com',
				changeOrigin:true,//是否跨域
				pathRewrite:{
				'^/api':'http://api.xxxx.com'
				}
			} 
```
	<pre>注意：只在开发环境下有效</pre>
- [x] v-for中动态更改对应item的:class的真假无效<br>
		解决：使用$set(obj,index,value)来进行变更<br>
- [x] 使用 keep-alive 时 想让指定组件保存其他组件依然重新加载<br>
		解决：
```html
		<keep-alive include="组件的name">xxx</keep-alive>
```
<pre>注意:name不是router中定义的name，而是组件内定义的name。</pre>
- [x] 路由进出时想要做些事情怎么办<br>
		解决：使用beforeRouteEnter和beforeRouteLeave等钩子函数进行设置<br>
<pre>注意：里面必须要使用next()函数，否则不跳转路由</pre>	