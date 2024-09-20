"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  props: {
    banners: {
      type: Array,
      default: () => []
    },
    height: {
      type: String,
      default: "600rpx"
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.banners, (item, index, i0) => {
      return {
        a: item,
        b: item
      };
    }),
    b: $props.height
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/Day03/\u9884\u4E60\u4EE3\u7801/01-uni-app/HYUniappMall/pages/detail/childCpns/detail-swiper.vue"]]);
wx.createComponent(Component);
