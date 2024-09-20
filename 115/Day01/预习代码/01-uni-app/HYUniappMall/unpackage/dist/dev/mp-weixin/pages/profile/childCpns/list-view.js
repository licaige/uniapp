"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  props: {
    listItems: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  setup() {
    return {
      url: "http://localhost:8080/img/home.7210ddcb.svg"
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.listItems, (item, index, i0) => {
      return {
        a: item.icon,
        b: common_vendor.t(item.info),
        c: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/14-\u8DE8\u5E73\u53F0uni-app+Taro/Day01/\u9884\u4E60\u4EE3\u7801/01-uni-app/HYUniappMall/pages/profile/childCpns/list-view.vue"]]);
wx.createComponent(Component);
