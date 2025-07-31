---
title: 03-扩展功能
index: false
icon: laptop-code
---

# [扩展能力概述](https://vscode.js.cn/api/extension-capabilities/overview)

Visual Studio Code 为扩展提供了许多方式来扩展其功能。有时可能很难找到正确的[贡献点](https://vscode.js.cn/api/references/contribution-points)和[VS Code API](https://vscode.js.cn/api/references/vscode-api)来使用。本主题将扩展功能分为几类。每个类别描述

- 你的扩展可能使用的一些功能
- 链接到使用这些功能的更详细主题
- 一些扩展思路

然而，我们也会对扩展施加[限制](https://vscode.js.cn/api/extension-capabilities/overview#restrictions)，以确保 VS Code 的稳定性和性能。例如，扩展不能访问 VS Code UI 的 DOM。

## [常用功能](https://vscode.js.cn/api/extension-capabilities/overview#common-capabilities)

[通用能力](https://vscode.js.cn/api/extension-capabilities/common-capabilities)是你可以用于任何扩展的核心功能。

其中一些能力包括

- 注册命令、配置、快捷键或上下文菜单项。
- 存储工作区或全局数据。
- 显示通知消息。
- 使用快速选择（Quick Pick）收集用户输入。
- 打开系统文件选择器，让用户选择文件或文件夹。
- 使用进度 API（Progress API）来指示长时间运行的操作。

## [主题](https://vscode.js.cn/api/extension-capabilities/overview#theming)

[主题化](https://vscode.js.cn/api/extension-capabilities/theming)控制 VS Code 的外观，包括编辑器中源代码的颜色和 VS Code UI 的颜色。如果你曾想通过将 VS Code 设为不同深浅的绿色来让它看起来像在编写《黑客帝国》的代码，或者只是想创建一个极致的极简主义灰度工作区，那么主题正是为你准备的。

**扩展思路**

- 更改源代码颜色。
- 更改 VS Code UI 颜色。
- 将现有 TextMate 主题移植到 VS Code。
- 添加自定义文件图标。

## [声明式语言特性](https://vscode.js.cn/api/extension-capabilities/overview#declarative-language-features)

[声明式语言特性](https://vscode.js.cn/api/language-extensions/overview#declarative-language-features)为编程语言添加了基本的文本编辑支持，如括号匹配、自动缩进和语法高亮。这是以声明方式完成的，无需编写任何代码。对于更高级的语言特性，如 IntelliSense 或调试，请参阅[编程语言特性](https://vscode.js.cn/api/extension-capabilities/overview#programmatic-language-features)。

**扩展思路**

- 将常用 JavaScript 片段打包到扩展中。
- 告知 VS Code 一种新的编程语言。
- 添加或替换编程语言的语法。
- 通过语法注入扩展现有语法。
- 将现有 TextMate 语法移植到 VS Code。

## [程序化语言功能](https://vscode.js.cn/api/extension-capabilities/overview#programmatic-language-features)

[编程语言特性](https://vscode.js.cn/api/language-extensions/overview#programmatic-language-features)添加了丰富的编程语言支持，例如悬停提示、转到定义、诊断错误、IntelliSense 和 CodeLens。这些语言特性通过[`vscode.languages.*`](https://vscode.js.cn/api/references/vscode-api#languages) API 公开。扩展可以直接使用这些 API，也可以编写语言服务器并通过 VS Code [语言服务器库](https://github.com/microsoft/vscode-languageserver-node)将其适配到 VS Code。

尽管我们提供了[语言特性](https://vscode.js.cn/api/language-extensions/programmatic-language-features)及其预期用法的列表，但没有什么能阻止你创造性地使用这些 API。例如，CodeLens 和悬停提示是内联显示附加信息的好方法，而诊断错误可用于突出显示拼写或代码风格错误。

**扩展思路**

- 添加显示 API 用法示例的悬停提示。
- 使用诊断功能报告源代码中的拼写或 Linter 错误。
- 为 HTML 注册新的代码格式化程序。
- 提供丰富、上下文感知的 IntelliSense。
- 为语言添加折叠、面包屑和大纲支持。

## [工作台扩展](https://vscode.js.cn/api/extension-capabilities/overview#workbench-extensions)

[工作台扩展](https://vscode.js.cn/api/extension-capabilities/extending-workbench)扩展了 VS Code 工作台 UI。你可以向文件资源管理器添加新的右键单击操作，甚至可以使用 VS Code 的[树视图（TreeView）](https://vscode.js.cn/api/extension-guides/tree-view) API 构建自定义资源管理器。如果你的扩展需要完全自定义的用户界面，可以使用[Webview API](https://vscode.js.cn/api/extension-guides/webview)，利用标准 HTML、CSS 和 JavaScript 构建自己的文档预览或 UI。

**扩展思路**

- 向文件资源管理器添加自定义上下文菜单操作。
- 在侧边栏中创建新的交互式树视图（TreeView）。
- 定义新的活动栏视图。
- 在状态栏中显示新信息。
- 使用 `WebView` API 渲染自定义内容。
- 贡献源代码管理提供程序。

## [调试](https://vscode.js.cn/api/extension-capabilities/overview#debugging)

你可以通过编写[调试器扩展](https://vscode.js.cn/api/extension-guides/debugger-extension)来利用 VS Code 的[调试](https://vscode.js.cn/docs/debugtest/debugging)功能，这些扩展将 VS Code 的调试 UI 连接到特定的调试器或运行时。

**扩展思路**

- 通过贡献[调试适配器实现](https://msdocs.cn/debug-adapter-protocol/implementors/adapters/)来将 VS Code 的调试 UI 连接到调试器或运行时。
- 指定调试器扩展支持的语言。
- 为调试器使用的调试配置属性提供丰富的 IntelliSense 和悬停信息。
- 提供调试配置片段。

另一方面，VS Code 还提供了一套[调试扩展 API](https://vscode.js.cn/api/references/vscode-api#debug)，你可以利用这些 API 在任何 VS Code 调试器之上实现与调试相关的功能，以自动化用户的调试体验。

**扩展思路**

- 根据动态创建的调试配置启动调试会话。
- 跟踪调试会话的生命周期。
- 以编程方式创建和管理断点。

## [用户体验指南](https://vscode.js.cn/api/extension-capabilities/overview#ux-guidelines)

为帮助你的扩展无缝融入 VS Code 用户界面，请参阅[UX 指南](https://vscode.js.cn/api/ux-guidelines/overview)，你将在其中学习创建扩展 UI 的最佳实践以及遵循 VS Code 首选工作流程的约定。

## [限制](https://vscode.js.cn/api/extension-capabilities/overview#restrictions)

我们对扩展施加了某些限制。以下是这些限制及其目的。

### [无 DOM 访问](https://vscode.js.cn/api/extension-capabilities/overview#no-dom-access)

扩展无权访问 VS Code UI 的 DOM。你**不能**编写一个将自定义 CSS 应用于 VS Code 或向 VS Code UI 添加 HTML 元素的扩展。

在 VS Code 中，我们不断尝试优化底层 Web 技术的利用，以提供一个始终可用、高度响应的编辑器，并且随着这些技术和我们产品的演进，我们将继续调整对 DOM 的使用。为了确保扩展不会干扰 VS Code 的稳定性与性能，并确保我们可以在不破坏现有扩展的情况下持续改进 VS Code 的 DOM，我们将扩展运行在[扩展宿主](https://vscode.js.cn/api/advanced-topics/extension-host)进程中，并阻止直接访问 DOM。

### [无自定义样式表](https://vscode.js.cn/api/extension-capabilities/overview#no-custom-style-sheets)

用户或扩展提供的自定义样式表会与 DOM 结构和类名冲突。这些内容并未公开，因为我们将其视为内部实现。为了演进、重构或改进 VS Code，我们需要自由地对用户界面进行更改。对 DOM 的任何更改都可能破坏现有的自定义样式表，从而给样式表提供者带来挫败感，并导致因损坏的样式表而引起的 UI 故障，从而造成糟糕的用户体验。

相反，VS Code 旨在提供设计精良的扩展 API，以支持 UI 定制。该 API 附有文档、工具和示例，并将在 VS Code 的所有未来版本中保持稳定。

<Catalog />

