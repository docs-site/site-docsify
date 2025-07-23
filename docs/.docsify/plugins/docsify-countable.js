/** =====================================================
 * Copyright © hk. 2022-2025. All rights reserved.
 * File name  : docsify-countable.js
 * Author     : 苏木
 * Date       : 2025-07-18
 * Version    : VERSION
 * Description: Display word count and estimated reading time
 *              https://github.com/827652549/docsify-count
 *              @V0.0.0 无初始版本号 https://github.com/827652549/docsify-count/commit/fc504a7f1705d855890005388f63e43cc375347c
 * ======================================================
 */

// 默认配置选项
var defaultOptions = {
  countable: true,        // 是否启用计数功能
  position: "top",        // 显示位置(top/bottom)
  margin: "10px",         // 外边距
  float: "right",         // 浮动方向(left/right)
  fontsize: "0.9em",      // 字体大小
  color: "rgb(90,90,90)", // 文字颜色
  language: "english",    // 默认语言
  localization: {         // 本地化文本
    words: "",
    minute: ""
  },
  isExpected: true        // 是否显示预计阅读时间
};

/**
 * @brief 统计文本中的字数
 * @param {string} content - 要统计的文本内容
 * @return {number} 字数统计结果
 * 
 * 统计规则：
 * 1. 匹配三种类型的字符序列：
 *    - [\u0800-\u4e00]+?：扩展汉字区A的字符(如古汉字、部首等)
 *    - [\u4e00-\u9fa5]+?：常用汉字区(覆盖大部分简体/繁体中文)
 *    - [a-zA-Z0-9]+：英文字母和数字组合(视为一个单词)
 * 2. 每个匹配项计为1个词：
 *    - 中文每个字单独计数
 *    - 英文单词和数字组合整体计数
 * 3. 忽略标点符号、空格等特殊字符
 */
var countWords = function(content) {
  // 使用正则表达式匹配所有符合要求的字符序列
  var matches = content.match(/([\u0800-\u4e00]+?|[\u4e00-\u9fa5]+?|[a-zA-Z0-9]+)/g);
  // 返回匹配到的数量(如果没有匹配则返回0)
  return matches ? matches.length : 0;
};

/**
 * @brief 获取本地化文本
 * @param {number} wordsCount - 字数
 * @param {object} options - 配置选项
 * @return {object} 包含格式化字符串的对象
 */
var getLocalizedText = function(wordsCount, options) {
  var str = wordsCount + " words";
  var readTime = Math.ceil(wordsCount / 400) + " min";

  if (options.language === "chinese") {
    str = wordsCount + " 字";
    readTime = Math.ceil(wordsCount / 400) + " 分钟";
  } else if (options.localization.words && options.localization.minute) {
    str = wordsCount + options.localization.words;
    readTime = Math.ceil(wordsCount / 400) + options.localization.minute;
  }

  return {
    words: str,
    time: readTime
  };
};

/**
 * @brief 生成统计信息HTML
 * @param {object} text - 本地化文本对象
 * @param {object} options - 配置选项
 * @param {string} html - 原始HTML内容
 * @return {string} 包含统计信息的完整HTML
 */
var generateStatsHtml = function(text, options, html) {
  var marginProp = options.position === "bottom" ? "bottom" : "top";
  var floatDir = options.float === "right" ? "right" : "left";
  var timeHtml = options.isExpected ? `&nbsp; | &nbsp;${text.time}` : "";

  return `
    ${options.position === "bottom" ? html : ""}
    <div style="margin-${marginProp}: ${options.margin};">
      <span style="
        float: ${floatDir};
        font-size: ${options.fontsize};
        color: ${options.color};">
        ${text.words}${timeHtml}
      </span>
      <div style="clear: both"></div>
    </div>
    ${options.position !== "bottom" ? html : ""}
  `;
};

/**
 * @brief 主插件函数
 * @param {object} hook - Docsify钩子对象
 * @param {object} vm - Docsify虚拟机实例
 */
function docsifyCountable(hook, vm) {
  var userOptions = Object.assign({}, defaultOptions, window.$docsify.count);

  if (!userOptions.countable) {
    return;
  }

  var wordsCount = 0;

  hook.beforeEach(function(content) {
    wordsCount = countWords(content);
    return content;
  });

  hook.afterEach(function(html, next) {
    var text = getLocalizedText(wordsCount, userOptions);
    var statsHtml = generateStatsHtml(text, userOptions, html);
    next(statsHtml);
  });
}

/**
 * @brief 注册插件
 * @description 安全地注册插件并合并配置
 */
(function registerPlugin() {

  // 插件版本号
  const VERSION = '1.0.0';
  
  // 初始化docsify全局对象
  window.$docsify = window.$docsify || {};
  
  // 深度合并配置
  window.$docsify.count = Object.assign(
    {}, 
    defaultOptions,
    window.$docsify.count || {}
  );

  // 防止重复注册
  if (!window.$docsify.plugins) {
    window.$docsify.plugins = [];
  }
  
  // 检查是否已注册
  const isRegistered = window.$docsify.plugins.some(
    plugin => plugin.name === 'docsifyCountable'
  );
  
  if (!isRegistered) {
    // 为插件函数添加标识
    docsifyCountable.name = 'docsifyCountable';
    window.$docsify.plugins.unshift(docsifyCountable);

    // 调试模式下打印版本信息
    if (window.$docsify.debug || localStorage.getItem('docsifyDebug')) {
      console.log(
        `%c docsify-countable %c v${VERSION} `,
        'background:#35495e; padding: 1px; border-radius: 3px 0 0 3px; color: #fff',
        'background:#41b883; padding: 1px; border-radius: 0 3px 3px 0; color: #fff'
      );
    }
  }
})();
