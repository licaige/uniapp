"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  props: {
    shop: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  setup() {
    const formateNumber = common_vendor.computed$1(() => {
      return (number) => {
        if (number < 1e4)
          return number;
        return (number / 1e4).toFixed(1) + "\u4E07";
      };
    });
    return {
      formateNumber
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.shop.logo,
    b: common_vendor.t($props.shop.name),
    c: common_vendor.t($setup.formateNumber($props.shop.sells)),
    d: common_vendor.t($props.shop.goodsCount),
    e: common_vendor.f($props.shop.score, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.score),
        c: item.isBetter ? 1 : "",
        d: common_vendor.t(item.isBetter ? "\u9AD8" : "\u4F4E"),
        e: item.isBetter ? 1 : "",
        f: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/14-\u8DE8\u5E73\u53F0uni-app+Taro/Day01/\u9884\u4E60\u4EE3\u7801/01-uni-app/HYUniappMall/pages/detail/childCpns/detail-shop-info.vue"]]);
wx.createComponent(Component);
