---
title: plugins
date: 2025-07-18 22:44:36
icon: famicons:logo-markdown
index: true
tags:
categories:
---

<!-- more -->

## 一、图片链接处理

### 1. markdown格式图片

#### 1.1 不以`./`开头

```markdown
![sumu001](plugins/img/sumu001.jpg)
```

![sumu001](plugins/img/sumu001.jpg)

#### 1.2 以`./`开头

```markdown
![sumu001](./plugins/img/sumu001.jpg)
```

![sumu001](./plugins/img/sumu001.jpg)

### 2. html格式图片

#### 2.1 不以`./`开头

```markdown
<img src="plugins/img/sumu001.jpg" alt="sumu001" />
```

<img src="plugins/img/sumu001.jpg" alt="sumu001" />

#### 2.2 以`./`开头

```markdown
<img src="./plugins/img/sumu001.jpg" alt="sumu001" />
```

<img src="./plugins/img/sumu001.jpg" alt="sumu001" />

## 二、md文档相对路径

跳转到上级目录文件【[../examples/docsify-docs/插件开发.md](../examples/docsify-docs/插件开发.md)】

跳转到同级目录文件【 [./README.md](./README.md)】

绝对路径不处理【[Visual Studio Code - Code Editing. Redefined](https://code.visualstudio.com/)】
