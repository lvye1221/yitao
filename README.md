# yitao
采用vue来写的项目


# 新建项目 #

```
// 初始化项目
vue init webpack vuex-demo

// 进入项目目录
cd vuex-demo

// 安装依赖
cnpm i

// 安装项目依赖
cnpm i -S vuex

```

## 测试 ##

```
cnpm run dev
```

将会自动打开这个地址，如果看到网页，说明安装成功！
http://localhost:8080/#/


# 临时代码 #

```
cnpm i -S escape-string-regexp


```



# 分支信息 #

## step1-init-project ##

项目初始化


## step2-nav ##

导航栏的书写




# 问题解决 #

```
Error in created hook: "TypeError: Cannot read property 'dispatch' of undefined"

```

没有在 main.js 中 引入的 store.js

import store from './store'


---------




```
npm WARN invalid config loglevel="notice"
> Starting dev server...


 ERROR  Failed to compile with 2 errors                                 14:22:23


These dependencies were not found:

* axios in ./src/store/index.js
* vue-axios in ./src/store/index.js
```

```

cnpm i -S axios
cnpm i -S vue-axios
```
