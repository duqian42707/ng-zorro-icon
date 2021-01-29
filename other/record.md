# 项目建立过程记录

创建空项目

```bash
ng new ng-zorro-icon --create-application=false
```

创建库

```bash
cd ng-zorro-icon
ng g library picker --prefix nzi
```

创建演示应用

```bash
ng g application demo
```

打包并发布库

```bash
ng build picker
cd dist/picker
npm publish
```
