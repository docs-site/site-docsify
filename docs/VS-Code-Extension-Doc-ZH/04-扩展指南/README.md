---
title: 04-扩展指南
index: false
icon: laptop-code
---

# [扩展指南](https://vscode.js.cn/api/extension-guides/overview)

在[Hello World](https://vscode.js.cn/api/get-started/your-first-extension)示例中学习了 Visual Studio Code 扩展 API 的基础知识后，是时候构建一些真实的扩展了。虽然[扩展功能](https://vscode.js.cn/api/extension-capabilities/overview)部分提供了扩展**能**做什么的高级概述，但本节包含详细的代码指南和示例列表，解释**如何**使用特定的 VS Code API。

在每个指南或示例中，您都可以找到

- 注释详尽的源代码。
- 显示示例扩展用法的一个 GIF 或图像。
- 运行示例扩展的说明。
- 正在使用的 VS Code API 列表。
- 正在使用的贡献点列表。
- 与示例相似的真实扩展。
- API 概念解释。

## [指南和示例](https://vscode.js.cn/api/extension-guides/overview#guides-samples)

以下是 VS Code 网站上的指南，包括它们对[VS Code API](https://vscode.js.cn/api/references/vscode-api)和[贡献点](https://vscode.js.cn/api/references/contribution-points)的使用。不要忘记参考[UX 指南](https://vscode.js.cn/api/ux-guidelines/overview)，了解创建扩展的用户界面最佳实践。

| VS Code 网站上的指南                                         | API 和贡献点                                                 |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [命令](https://vscode.js.cn/api/extension-guides/command)    | [命令](https://vscode.js.cn/api/references/vscode-api#commands) [contributes.commands](https://vscode.js.cn/api/references/contribution-points#contributes.commands) |
| [颜色主题](https://vscode.js.cn/api/extension-guides/color-theme) | [contributes.themes](https://vscode.js.cn/api/references/contribution-points#contributes.themes) |
| [文件图标主题](https://vscode.js.cn/api/extension-guides/file-icon-theme) | [contributes.iconThemes](https://vscode.js.cn/api/references/contribution-points#contributes.iconThemes) |
| [产品图标主题](https://vscode.js.cn/api/extension-guides/product-icon-theme) | [contributes.productIconThemes](https://vscode.js.cn/api/references/contribution-points#contributes.productIconThemes) |
| [树视图](https://vscode.js.cn/api/extension-guides/tree-view) | [window.createTreeView](https://vscode.js.cn/api/references/vscode-api#window.createTreeView) [window.registerTreeDataProvider](https://vscode.js.cn/api/references/vscode-api#window.registerTreeDataProvider) [TreeView](https://vscode.js.cn/api/references/vscode-api#TreeView) [TreeDataProvider](https://vscode.js.cn/api/references/vscode-api#TreeDataProvider) [contributes.views](https://vscode.js.cn/api/references/contribution-points#contributes.views) [contributes.viewsContainers](https://vscode.js.cn/api/references/contribution-points#contributes.viewsContainers) |
| [Webview](https://vscode.js.cn/api/extension-guides/webview) | [window.createWebviewPanel](https://vscode.js.cn/api/references/vscode-api#window.createWebviewPanel) [window.registerWebviewPanelSerializer](https://vscode.js.cn/api/references/vscode-api#window.registerWebviewPanelSerializer) |
| [自定义编辑器](https://vscode.js.cn/api/extension-guides/custom-editors) | [window.registerCustomEditorProvider](https://vscode.js.cn/api/references/vscode-api#window.registerCustomEditorProvider) [CustomTextEditorProvider](https://vscode.js.cn/api/references/vscode-api#CustomTextEditorProvider) [contributes.customEditors](https://vscode.js.cn/api/references/contribution-points#contributes.customEditors) |
| [虚拟文档](https://vscode.js.cn/api/extension-guides/virtual-documents) | [workspace.registerTextDocumentContentProvider](https://vscode.js.cn/api/references/vscode-api#workspace.registerTextDocumentContentProvider) [commands.registerCommand](https://vscode.js.cn/api/references/vscode-api#commands.registerCommand) [window.showInputBox](https://vscode.js.cn/api/references/vscode-api#window.showInputBox) |
| [虚拟工作区](https://vscode.js.cn/api/extension-guides/virtual-workspaces) | [workspace.fs](https://vscode.js.cn/api/references/vscode-api#workspace.fs) capabilities.virtualWorkspaces |
| [工作区信任](https://vscode.js.cn/api/extension-guides/workspace-trust) | [workspace.isTrusted](https://vscode.js.cn/api/references/vscode-api#workspace.isTrusted) [workspace.onDidGrantWorkspaceTrust](https://vscode.js.cn/api/references/vscode-api#workspace.onDidGrantWorkspaceTrust) capabilities.untrustedWorkspaces |
| [任务提供程序](https://vscode.js.cn/api/extension-guides/task-provider) | [tasks.registerTaskProvider](https://vscode.js.cn/api/references/vscode-api#tasks.registerTaskProvider) [Task](https://vscode.js.cn/api/references/vscode-api#Task) [ShellExecution](https://vscode.js.cn/api/references/vscode-api#ShellExecution) [contributes.taskDefinitions](https://vscode.js.cn/api/references/contribution-points#contributes.taskDefinitions) |
| [源代码管理](https://vscode.js.cn/api/extension-guides/scm-provider) | [workspace.workspaceFolders](https://vscode.js.cn/api/references/vscode-api#workspace.workspaceFolders) [SourceControl](https://vscode.js.cn/api/references/vscode-api#SourceControl) [SourceControlResourceGroup](https://vscode.js.cn/api/references/vscode-api#SourceControlResourceGroup) [scm.createSourceControl](https://vscode.js.cn/api/references/vscode-api#scm.createSourceControl) [TextDocumentContentProvider](https://vscode.js.cn/api/references/vscode-api#TextDocumentContentProvider) [contributes.menus](https://vscode.js.cn/api/references/contribution-points#contributes.menus) |
| [调试器扩展](https://vscode.js.cn/api/extension-guides/debugger-extension) | [contributes.breakpoints](https://vscode.js.cn/api/references/contribution-points#contributes.breakpoints) [contributes.debuggers](https://vscode.js.cn/api/references/contribution-points#contributes.debuggers) [debug](https://vscode.js.cn/api/references/vscode-api#debug) |
| [Markdown 扩展](https://vscode.js.cn/api/extension-guides/markdown-extension) | markdown.previewStyles markdown.markdownItPlugins markdown.previewScripts |
| [测试扩展](https://vscode.js.cn/api/extension-guides/testing) | [TestController](https://vscode.js.cn/api/references/vscode-api#TestController) [TestItem](https://vscode.js.cn/api/references/vscode-api#TestItem) |
| [自定义数据扩展](https://vscode.js.cn/api/extension-guides/custom-data-extension) | contributes.html.customData contributes.css.customData       |
|                                                              |                                                              |

以下是来自[VS Code 扩展示例仓库](https://github.com/microsoft/vscode-extension-samples)的其他示例列表。

| GitHub 仓库上的示例                                          | API 和贡献点                                                 |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [Webview 示例](https://github.com/microsoft/vscode-extension-samples/tree/main/webview-sample) | [window.createWebviewPanel](https://vscode.js.cn/api/references/vscode-api#window.createWebviewPanel) [window.registerWebviewPanelSerializer](https://vscode.js.cn/api/references/vscode-api#window.registerWebviewPanelSerializer) |
| [状态栏示例](https://github.com/microsoft/vscode-extension-samples/tree/main/statusbar-sample) | [window.createStatusBarItem](https://vscode.js.cn/api/references/vscode-api#window.createStatusBarItem) [StatusBarItem](https://vscode.js.cn/api/references/vscode-api#StatusBarItem) |
| [树视图示例](https://github.com/microsoft/vscode-extension-samples/tree/main/tree-view-sample) | [window.createTreeView](https://vscode.js.cn/api/references/vscode-api#window.createTreeView) [window.registerTreeDataProvider](https://vscode.js.cn/api/references/vscode-api#window.registerTreeDataProvider) [TreeView](https://vscode.js.cn/api/references/vscode-api#TreeView) [TreeDataProvider](https://vscode.js.cn/api/references/vscode-api#TreeDataProvider) [contributes.views](https://vscode.js.cn/api/references/contribution-points#contributes.views) [contributes.viewsContainers](https://vscode.js.cn/api/references/contribution-points#contributes.viewsContainers) |
| [任务提供程序示例](https://github.com/microsoft/vscode-extension-samples/tree/main/task-provider-sample) | [tasks.registerTaskProvider](https://vscode.js.cn/api/references/vscode-api#tasks.registerTaskProvider) [Task](https://vscode.js.cn/api/references/vscode-api#Task) [ShellExecution](https://vscode.js.cn/api/references/vscode-api#ShellExecution) [contributes.taskDefinitions](https://vscode.js.cn/api/references/contribution-points#contributes.taskDefinitions) |
| [多根目录示例](https://github.com/microsoft/vscode-extension-samples/tree/main/basic-multi-root-sample) | [workspace.getWorkspaceFolder](https://vscode.js.cn/api/references/vscode-api#workspace.getWorkspaceFolder) [workspace.onDidChangeWorkspaceFolders](https://vscode.js.cn/api/references/vscode-api#workspace.onDidChangeWorkspaceFolders) |
| [补全提供程序示例](https://github.com/microsoft/vscode-extension-samples/tree/main/completions-sample) | [languages.registerCompletionItemProvider](https://vscode.js.cn/api/references/vscode-api#languages.registerCompletionItemProvider) [CompletionItem](https://vscode.js.cn/api/references/vscode-api#CompletionItem) [SnippetString](https://vscode.js.cn/api/references/vscode-api#SnippetString) |
| [文件系统提供程序示例](https://github.com/microsoft/vscode-extension-samples/tree/main/fsprovider-sample) | [workspace.registerFileSystemProvider](https://vscode.js.cn/api/references/vscode-api#workspace.registerFileSystemProvider) |
| [编辑器装饰器示例](https://github.com/microsoft/vscode-extension-samples/tree/main/decorator-sample) | [TextEditor.setDecorations](https://vscode.js.cn/api/references/vscode-api#TextEditor.setDecorations) [DecorationOptions](https://vscode.js.cn/api/references/vscode-api#DecorationOptions) [DecorationInstanceRenderOptions](https://vscode.js.cn/api/references/vscode-api#DecorationInstanceRenderOptions) [ThemableDecorationInstanceRenderOptions](https://vscode.js.cn/api/references/vscode-api#ThemableDecorationInstanceRenderOptions) [window.createTextEditorDecorationType](https://vscode.js.cn/api/references/vscode-api#window.createTextEditorDecorationType) [TextEditorDecorationType](https://vscode.js.cn/api/references/vscode-api#TextEditorDecorationType) [contributes.colors](https://vscode.js.cn/api/references/contribution-points#contributes.colors) |
| [L10N 示例](https://github.com/microsoft/vscode-extension-samples/tree/main/l10n-sample) |                                                              |
| [终端示例](https://github.com/microsoft/vscode-extension-samples/tree/main/terminal-sample) | [window.createTerminal](https://vscode.js.cn/api/references/vscode-api#window.createTerminal) [window.onDidChangeActiveTerminal](https://vscode.js.cn/api/references/vscode-api#window.onDidChangeActiveTerminal) [window.onDidCloseTerminal](https://vscode.js.cn/api/references/vscode-api#window.onDidCloseTerminal) [window.onDidOpenTerminal](https://vscode.js.cn/api/references/vscode-api#window.onDidOpenTerminal) [window.Terminal](https://vscode.js.cn/api/references/vscode-api#window.Terminal) [window.terminals](https://vscode.js.cn/api/references/vscode-api#window.terminals) |
| [Vim 示例](https://github.com/microsoft/vscode-extension-samples/tree/main/vim-sample) | [命令](https://vscode.js.cn/api/references/vscode-api#commands) [StatusBarItem](https://vscode.js.cn/api/references/vscode-api#StatusBarItem) [window.createStatusBarItem](https://vscode.js.cn/api/references/vscode-api#window.createStatusBarItem) [TextEditorCursorStyle](https://vscode.js.cn/api/references/vscode-api#TextEditorCursorStyle) [window.activeTextEditor](https://vscode.js.cn/api/references/vscode-api#window.activeTextEditor) [Position](https://vscode.js.cn/api/references/vscode-api#Position) [Range](https://vscode.js.cn/api/references/vscode-api#Range) [Selection](https://vscode.js.cn/api/references/vscode-api#Selection) [TextEditor](https://vscode.js.cn/api/references/vscode-api#TextEditor) [TextEditorRevealType](https://vscode.js.cn/api/references/vscode-api#TextEditorRevealType) [TextDocument](https://vscode.js.cn/api/references/vscode-api#TextDocument) |
| [源代码管理示例](https://github.com/microsoft/vscode-extension-samples/tree/main/source-control-sample) | [workspace.workspaceFolders](https://vscode.js.cn/api/references/vscode-api#workspace.workspaceFolders) [SourceControl](https://vscode.js.cn/api/references/vscode-api#SourceControl) [SourceControlResourceGroup](https://vscode.js.cn/api/references/vscode-api#SourceControlResourceGroup) [scm.createSourceControl](https://vscode.js.cn/api/references/vscode-api#scm.createSourceControl) [TextDocumentContentProvider](https://vscode.js.cn/api/references/vscode-api#TextDocumentContentProvider) [contributes.menus](https://vscode.js.cn/api/references/contribution-points#contributes.menus) |
| [评论 API 示例](https://github.com/microsoft/vscode-extension-samples/tree/main/comment-sample) |                                                              |
| [文档编辑示例](https://github.com/microsoft/vscode-extension-samples/tree/main/document-editing-sample) | [命令](https://vscode.js.cn/api/references/vscode-api#commands) [contributes.commands](https://vscode.js.cn/api/references/contribution-points#contributes.commands) |
| [入门示例](https://github.com/microsoft/vscode-extension-samples/tree/main/getting-started-sample) | [contributes.walkthroughs](https://vscode.js.cn/api/references/contribution-points#contributes.walkthroughs) |
| [测试扩展](https://github.com/microsoft/vscode-extension-samples/tree/main/test-provider-sample) | [TestController](https://vscode.js.cn/api/references/vscode-api#TestController) [TestItem](https://vscode.js.cn.azurewebsites.net/api/references/vscode-api#TestItem) |

## [语言扩展示例](https://vscode.js.cn/api/extension-guides/overview#language-extension-samples)

这些示例是[语言扩展](https://vscode.js.cn/api/language-extensions/overview)示例

| 示例                                                         | VS Code 网站上的指南                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [代码片段示例](https://github.com/microsoft/vscode-extension-samples/tree/main/snippet-sample) | [/api/language-extensions/snippet-guide](https://vscode.js.cn/api/language-extensions/snippet-guide) |
| [语言配置示例](https://github.com/microsoft/vscode-extension-samples/tree/main/language-configuration-sample) | [/api/language-extensions/language-configuration-guide](https://vscode.js.cn/api/language-extensions/language-configuration-guide) |
| [LSP 示例](https://github.com/microsoft/vscode-extension-samples/tree/main/lsp-sample) | [/api/language-extensions/language-server-extension-guide](https://vscode.js.cn/api/language-extensions/language-server-extension-guide) |
| [LSP 日志流示例](https://github.com/microsoft/vscode-extension-samples/tree/main/lsp-log-streaming-sample) | 不适用                                                       |
| [LSP 多根服务器示例](https://github.com/microsoft/vscode-extension-samples/tree/main/lsp-multi-server-sample) | https://github.com/microsoft/vscode/wiki/Adopting-Multi-Root-Workspace-APIs#language-client--language-server (GitHub 仓库 wiki) |
| [LSP Web 扩展示例](https://github.com/Microsoft/vscode-extension-samples/tree/main/lsp-web-extension-sample) | [/api/language-extensions/language-server-extension-guide](https://vscode.js.cn/api/language-extensions/language-server-extension-guide) |



<Catalog />

