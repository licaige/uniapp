"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    titles: {
      type: Array,
      default: () => []
    }
  },
  emits: ["tabClick"],
  setup(props, { emit }) {
    const currentIndex = common_vendor.ref(0);
    const tabControlClick = (index) => {
      currentIndex.value = index;
      emit("tabClick", currentIndex.value);
    };
    return {
      currentIndex,
      tabControlClick
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.titles, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: common_vendor.n($setup.currentIndex === index ? "active" : ""),
        c: common_vendor.o(($event) => $setup.tabControlClick(index)),
        d: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/14-\u8DE8\u5E73\u53F0uni-app+Taro/Day01/\u9884\u4E60\u4EE3\u7801/01-uni-app/HYUniappMall/components/tab-control/index.vue"]]);
wx.createComponent(Component);
