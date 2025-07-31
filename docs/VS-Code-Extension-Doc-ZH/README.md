---
title: VS-Code-Extension-Doc-ZH
index: false
icon: laptop-code
---

# [扩展 API](https://vscode.js.cn/api)

Visual Studio Code 在设计时就考虑到了可扩展性。从 UI 到编辑体验，VS Code 的几乎每个部分都可以通过扩展 API 进行自定义和增强。事实上，VS Code 的许多核心功能都是作为[扩展](https://github.com/microsoft/vscode/tree/main/extensions)构建的，并使用相同的扩展 API。

本文档介绍了

- 如何构建、运行、调试、测试和发布扩展
- 如何利用 VS Code 丰富的扩展 API
- 在哪里可以找到[指南](https://vscode.js.cn/api/extension-guides/overview)和[代码示例](https://github.com/microsoft/vscode-extension-samples)以帮助您入门
- 遵循我们的[UX 指南](https://vscode.js.cn/api/ux-guidelines/overview)以获取最佳实践

代码示例可在 [Microsoft/vscode-extension-samples](https://github.com/microsoft/vscode-extension-samples) 获取。

如果您正在寻找已发布的扩展，请前往 [VS Code 扩展市场](https://marketplace.visualstudio.com/vscode)。

## [扩展可以做什么？](https://vscode.js.cn/api#what-can-extensions-do)

以下是使用扩展 API 可以实现的一些示例

- 使用颜色或文件图标主题更改 VS Code 的外观 - [主题化](https://vscode.js.cn/api/extension-capabilities/theming)
- 在 UI 中添加自定义组件和视图 - [扩展工作台](https://vscode.js.cn/api/extension-capabilities/extending-workbench)
- 创建 Webview 以显示使用 HTML/CSS/JS 构建的自定义网页 - [Webview 指南](https://vscode.js.cn/api/extension-guides/webview)
- 支持一种新的编程语言 - [语言扩展概述](https://vscode.js.cn/api/language-extensions/overview)
- 支持调试特定运行时 - [调试器扩展指南](https://vscode.js.cn/api/extension-guides/debugger-extension)

如果您想更全面地了解扩展 API，请参阅[扩展功能概述](https://vscode.js.cn/api/extension-capabilities/overview)页面。[扩展指南概述](https://vscode.js.cn/api/extension-guides/overview)还包含一个代码示例和指南列表，这些示例和指南说明了各种扩展 API 的用法。

## [如何构建扩展？](https://vscode.js.cn/api#how-to-build-extensions)

构建一个好的扩展可能需要大量的时间和精力。以下是 API 文档的每个部分可以为您提供帮助的内容

- **入门**部分通过 [Hello World](https://github.com/microsoft/vscode-extension-samples/tree/main/helloworld-sample) 示例教授构建扩展的基本概念。
- **扩展功能**部分将 VS Code 庞大的 API 分解为更小的类别，并引导您了解更详细的主题。
- **扩展指南**部分包含说明 VS Code 扩展 API 特定用法的指南和代码示例。
- **UX 指南**部分展示了在扩展中提供出色用户体验的最佳实践。
- **语言扩展**部分通过指南和代码示例说明了如何添加对编程语言的支持。
- **测试和发布**部分包含有关各种扩展开发主题的深入指南，例如[测试](https://vscode.js.cn/api/working-with-extensions/testing-extension)和[发布](https://vscode.js.cn/api/working-with-extensions/publishing-extension)扩展。
- **高级主题**部分解释了高级概念，例如[扩展主机](https://vscode.js.cn/api/advanced-topics/extension-host)、[支持远程开发和 GitHub Codespaces](https://vscode.js.cn/api/advanced-topics/remote-extensions) 以及[提议的 API](https://vscode.js.cn/api/advanced-topics/using-proposed-api)。
- **参考资料**部分包含 [VS Code API](https://vscode.js.cn/api/references/vscode-api)、[贡献点](https://vscode.js.cn/api/references/contribution-points)和许多其他主题的详尽参考。

## [最新功能？](https://vscode.js.cn/api#whats-new)

VS Code 每月更新，这同样适用于扩展 API。新功能和 API 每月都会推出，以增强 VS Code 扩展的功能和范围。

要及时了解扩展 API，您可以查阅每月发布说明，其中包含以下专门部分

- [扩展创作](https://vscode.js.cn/updates#_extension-authoring) - 了解最新版本中有哪些新的扩展 API 可用。
- [提议的扩展 API](https://vscode.js.cn/updates#_proposed-extension-apis) - 查看即将推出的提议的 API 并提供反馈。

## [寻求帮助](https://vscode.js.cn/api#looking-for-help)

如果您有关于扩展开发的问题，可以尝试在以下平台提问

- [VS Code Discussions](https://github.com/microsoft/vscode-discussions)：GitHub 社区，用于讨论 VS Code 的扩展平台、提问、帮助社区其他成员以及获取答案。
- [Stack Overflow](https://stackoverflow.com/questions/tagged/vscode-extensions)：有[数千个](https://stackoverflow.com/questions/tagged/vscode-extensions)标记为 `vscode-extensions` 的问题，其中一半以上已经有了答案。搜索您的问题，提出问题，或者通过回答 VS Code 扩展开发问题来帮助您的同行开发者！
- [VS Code Dev Slack](https://vscode-dev-community.slack.com/)：面向扩展开发者的公共聊天室。VS Code 团队成员经常参与讨论。

要对文档提供反馈，请在 [Microsoft/vscode-docs](https://github.com/microsoft/vscode-docs/issues) 创建新问题。如果您有找不到答案的扩展问题，或遇到 VS Code 扩展 API 的问题，请在 [Microsoft/vscode](https://github.com/microsoft/vscode/issues) 创建新问题。

## 主要参考文档

- 中文：[https://vscode.js.cn/docs](https://vscode.js.cn/docs)

- 英文：[https://code.visualstudio.com/docs](https://code.visualstudio.com/docs)

<Catalog />
