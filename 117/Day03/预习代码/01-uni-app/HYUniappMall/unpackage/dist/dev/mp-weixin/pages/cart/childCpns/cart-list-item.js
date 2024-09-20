"use strict";
const store_index = require("../../../store/index.js");
const common_vendor = require("../../../common/vendor.js");
require("../../../store/modules/cart.js");
const _sfc_main = {
  props: {
    itemInfo: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  emit: ["checkedChange"],
  setup(props, { emit }) {
    const onChange = (itemInfo) => {
      store_index.store.commit("toggleChecked", itemInfo);
      emit("checkedChange", itemInfo);
    };
    return {
      onChange
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.itemInfo.checked,
    b: common_vendor.o(($event) => $setup.onChange($props.itemInfo)),
    c: $props.itemInfo.imgURL,
    d: common_vendor.t($props.itemInfo.title),
    e: common_vendor.t($props.itemInfo.desc),
    f: common_vendor.t($props.itemInfo.newPrice),
    g: common_vendor.t($props.itemInfo.count)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/Day03/\u9884\u4E60\u4EE3\u7801/01-uni-app/HYUniappMall/pages/cart/childCpns/cart-list-item.vue"]]);
wx.createComponent(Component);
