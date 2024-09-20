"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello",
      name: ""
    };
  },
  onLoad() {
    const app = getApp();
    console.log(app.globalData);
    this.name = app.globalData.name;
    const pages = getCurrentPages();
    console.log(pages[0]);
    console.log(pages[pages.length - 1].route);
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.name)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/14-\u8DE8\u5E73\u53F0uni-app+Taro/newcode/01-learn-uni-app/02-config-uni-app/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
