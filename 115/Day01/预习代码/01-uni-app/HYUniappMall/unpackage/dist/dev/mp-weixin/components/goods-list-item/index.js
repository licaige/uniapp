"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    itemInfo: {
      type: Object,
      default: () => {
      }
    },
    abc: {
      type: String
    }
  },
  emits: ["itemClick"],
  setup(props, { emit }) {
    const itemClick = () => {
      emit("itemClick", props.itemInfo.iid);
    };
    return {
      itemClick
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.itemInfo.image || $props.itemInfo.img || $props.itemInfo.show.img,
    b: common_vendor.t($props.itemInfo.title),
    c: common_vendor.t($props.itemInfo.price),
    d: common_vendor.t($props.itemInfo.cfav),
    e: common_vendor.o((...args) => $setup.itemClick && $setup.itemClick(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/14-\u8DE8\u5E73\u53F0uni-app+Taro/Day01/\u9884\u4E60\u4EE3\u7801/01-uni-app/HYUniappMall/components/goods-list-item/index.vue"]]);
wx.createComponent(Component);
