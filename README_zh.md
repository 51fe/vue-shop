# Vue Shop [English Doc](https://github.com/51fe/vue-shop/blob/master/README.md)

> 使用MongoDB + Express + Vue.js + Node.js + Vuex + Vue Router开发的购物模块。如果您喜欢本项目, 欢迎点赞，谢谢！

- 截图

![vue-shop.jpg](https://www.riafan.com/uploads/1902/react-shop.jpg)

- 教程

[Vue shopping cart](https://www.riafan.com/vue-shop.html)


## 运行服务

下载[后端代码](https://github.com/51fe/shop-api.git)并运行服务

## 前端配置

打开.env文件，修改相应值

``` js
# just a flag
ENV = 'development'

# base api
VUE_APP_BASE_API = 'http://localhost:3000/v1'
```

## 运行前端

``` bash
# 安装依赖
npm install

# 在localhost:8080上运行热替换服务
npm start

# 构建精简的线上版本
npm run build

```

想进一步了解构建工作原理, 请查看[指南](http://vuejs-templates.github.io/webpack/)和[vue-loader文档](http://vuejs.github.io/vue-loader)。

## 相关项目
- [React Shop](https://github.com/51fe/react-shop)
- [RN Shop](https://github.com/51fe/rn-shop)
