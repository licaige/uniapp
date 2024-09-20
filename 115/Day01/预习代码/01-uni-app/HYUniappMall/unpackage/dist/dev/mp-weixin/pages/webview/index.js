"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup() {
    const webviewStyles = {
      progress: {
        color: "#ff5777"
      }
    };
    const link = common_vendor.ref("");
    common_vendor.onLoad((options) => {
      link.value = options.link;
    });
    return {
      webviewStyles,
      link
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $setup.webviewStyles,
    b: $setup.link
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/14-\u8DE8\u5E73\u53F0uni-app+Taro/Day01/\u9884\u4E60\u4EE3\u7801/01-uni-app/HYUniappMall/pages/webview/index.vue"]]);
wx.createPage(MiniProgramPage);
