"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  props: {
    detailInfo: {
      type: Object
    }
  },
  setup() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: Object.keys($props.detailInfo).length !== 0
  }, Object.keys($props.detailInfo).length !== 0 ? common_vendor.e({
    b: common_vendor.t($props.detailInfo.desc),
    c: $props.detailInfo.detailImage
  }, $props.detailInfo.detailImage ? {
    d: common_vendor.t($props.detailInfo.detailImage[0].key)
  } : {}, {
    e: $props.detailInfo.detailImage
  }, $props.detailInfo.detailImage ? {
    f: common_vendor.f($props.detailInfo.detailImage[0].list, (item, index, i0) => {
      return {
        a: index,
        b: item
      };
    })
  } : {}) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/14-\u8DE8\u5E73\u53F0uni-app+Taro/Day01/\u9884\u4E60\u4EE3\u7801/01-uni-app/HYUniappMall/pages/detail/childCpns/detail-goods-info.vue"]]);
wx.createComponent(Component);
