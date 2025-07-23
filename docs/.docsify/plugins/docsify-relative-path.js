/** =====================================================
 * Copyright © hk. 2022-2025. All rights reserved.
 * File name  : docsify-relative-path.js
 * Author     : 苏木
 * Date       : 2025-07-23
 * Version    : VERSION
 * Description: 将Markdown中的相对路径链接转换为绝对路径
 * ======================================================
 */

// 默认配置选项
var defaultOptions = {
  enabled: true,      // 是否启用插件
  skipExternal: true  // 是否跳过外部链接
};

/**
 * @brief 主插件函数
 * @param {object} hook - Docsify钩子对象
 * @param {object} vm - Docsify虚拟机实例
 */
function docsifyRelativePath(hook, vm) {
  /**
   * @brief 获取当前配置
   * @return {object} 合并后的配置对象
   */
  function getConfig() {
    return Object.assign(
      {},
      defaultOptions,
      window.$docsify.relativePath,
      vm.config.relativePath
    );
  }

  /**
   * @brief 解析相对路径为绝对路径
   * @param {string} basePath - 当前文件所在目录路径
   * @param {string} relativePath - 要解析的相对路径
   * @return {string} 解析后的绝对路径
   */
  function resolvePath(basePath, relativePath) {
    // 统一转换为Unix风格路径
    basePath = basePath.replace(/\\/g, '/');
    relativePath = relativePath.replace(/\\/g, '/');

    // 分割路径为数组，并过滤空段
    const baseParts = basePath.split('/').filter(Boolean);
    const relativeParts = relativePath.split('/').filter(Boolean);

    // 处理每一级相对路径
    for (const part of relativeParts) {
      if (part === '..') {
        baseParts.pop();  // 上级目录
      } else if (part !== '.') {
        baseParts.push(part);  // 子目录或文件
      }
    }

    // 拼接路径并清理多余的/
    return '/' + baseParts.join('/').replace(/\/+/g, '/');
  }

  /**
   * @brief BeforeEach钩子处理函数
   * @param {string} content - 原始Markdown内容
   * @param {function} next - 下一步回调
   */
  hook.beforeEach(function (content, next) {
    const config = getConfig();
    if (!config.enabled) {
      next(content);
      return;
    }

    // 获取当前文件路径信息
    const currentPath = vm.route.file.replace(/\\/g, '/');
    const currentDir = currentPath.split('/').slice(0, -1).join('/');

    // 处理内容中的相对路径
    content = content
      .replace(/\\/g, '/')
      .replace(
        /(?<!\!)\[([^\]]+)\]\((\.?\.?\/[^)]+)\)/g,
        (match, text, path) => {
          if (config.skipExternal &&
            (path.startsWith('/') || /^https?:\/\//.test(path))) {
            return match;
          }
          return `[${text}](${resolvePath(currentDir, path)})`;
        }
      );

    next(content);
  });
}

/**
 * @brief 注册插件
 */
(function registerPlugin() {
  // 插件版本号
  const VERSION = '1.0.0';
  
  window.$docsify = window.$docsify || {};

  // 合并配置
  window.$docsify.relativePath = Object.assign(
    {},
    defaultOptions,
    window.$docsify.relativePath || {}
  );

  // 初始化插件数组
  if (!window.$docsify.plugins) {
    window.$docsify.plugins = [];
  }

  // 防止重复注册
  const isRegistered = window.$docsify.plugins.some(
    p => p.name === 'docsifyRelativePath'
  );

  if (!isRegistered) {
    docsifyRelativePath.name = 'docsifyRelativePath';
    window.$docsify.plugins.unshift(docsifyRelativePath);

    // 调试模式下打印版本信息
    if (window.$docsify.debug || localStorage.getItem('docsifyDebug')) {
      console.log(
        `%c docsify-relative-path %c v${VERSION} `,
        'background:#35495e; padding: 1px; border-radius: 3px 0 0 3px; color: #fff',
        'background:#41b883; padding: 1px; border-radius: 0 3px 3px 0; color: #fff'
      );
    }
  }
})();
