# NgZorroIcon

[![](https://img.shields.io/npm/v/ng-zorro-icon.svg)](https://www.npmjs.com/package/ng-zorro-icon)

Icon Picker of [NG-ZORRO](https://github.com/NG-ZORRO/ng-zorro-antd) (version 8.x).

[NG-ZORRO](https://github.com/NG-ZORRO/ng-zorro-antd) (version 8.x) 的图标选择器。

## 使用方法(Usage)

见[文档](./projects/picker/README.md)

## 项目建立过程记录

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
