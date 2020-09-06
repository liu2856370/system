# system
## 工程简介
山东市场监管行政许可管理系统，分为信息公示查询，业务办理平台两大功能


## 技术栈
vue, vantUI, axios, webpack, es6,less

## 工程拉取下载之后
```
npm install  //下载依赖
npm run serve  //运行项目
npm run build  //编译打包
```

## 知识库

#### 图片的使用
1、static中的文件，是不会经过编译的，打包后会生成dist文件夹，static中的文件只是复制边。因此，static中建议放一些外部第三方，自己的文件放在assets，别人的放在static中
2、若把图片放在assets和static中，html页面中都可以使用；但是在动态绑定中，assets路径的图片会加载失败，因为webpack使用的是 ` commenJS ` 规范，必须使用require才可以

#### git使用-常用命令
##### 常用命令
git add -A
git commit -m ""
git push origin dev
git pull origin dev

git checkout -b  dev
git checkout dev
git merge dev
##### 查看提交信息
git log --graph --decorate --oneline --simplify-by-decoration --all

