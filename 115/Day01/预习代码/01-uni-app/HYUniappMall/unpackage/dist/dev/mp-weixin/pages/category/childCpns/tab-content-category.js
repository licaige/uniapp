"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  props: {
    subcategories: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  setup() {
    const itemClick = (item) => {
      common_vendor.index.navigateTo({
        url: "/pages/webview/index?link=" + item.link,
        fail: (err) => {
          console.log(err);
        }
      });
    };
    return {
      itemClick
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.subcategories, (item, index, i0) => {
      return {
        a: item.image,
        b: common_vendor.t(item.title),
        c: common_vendor.o(($event) => $setup.itemClick(item)),
        d: item.miniWallkey
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/14-\u8DE8\u5E73\u53F0uni-app+Taro/Day01/\u9884\u4E60\u4EE3\u7801/01-uni-app/HYUniappMall/pages/category/childCpns/tab-content-category.vue"]]);
wx.createComponent(Component);
