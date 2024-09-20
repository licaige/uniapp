"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    handleBackClick() {
      common_vendor.index.navigateBack({
        delta: 1
      });
      common_vendor.index.$emit("acceptDataFromDetail02", {
        data: "data from detail02"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.handleBackClick && $options.handleBackClick(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/code/01-uni-app/06-page-uni-app/pages/detail02/detail02.vue"]]);
wx.createPage(MiniProgramPage);
