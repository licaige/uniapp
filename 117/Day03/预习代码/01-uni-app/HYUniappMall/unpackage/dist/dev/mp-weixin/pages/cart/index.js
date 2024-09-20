"use strict";
const common_vendor = require("../../common/vendor.js");
const store_index = require("../../store/index.js");
require("../../store/modules/cart.js");
const CartListItem = () => "./childCpns/cart-list-item.js";
const BottomBar = () => "./childCpns/bottom-bar.js";
const _sfc_main = {
  props: {},
  components: {
    CartListItem,
    BottomBar
  },
  setup() {
    const cartList = common_vendor.computed$1(() => {
      return store_index.store.getters.cartList || [];
    });
    const handleCheckedChange = (itemInfo) => {
    };
    const handlecCheckedAllChange = (checked) => {
      console.log("checked=>", checked);
    };
    return {
      cartList,
      handleCheckedChange,
      handlecCheckedAllChange
    };
  }
};
if (!Array) {
  const _component_cart_list_item = common_vendor.resolveComponent("cart-list-item");
  const _component_bottom_bar = common_vendor.resolveComponent("bottom-bar");
  (_component_cart_list_item + _component_bottom_bar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($setup.cartList, (item, k0, i0) => {
      return {
        a: "0b02cce2-0-" + i0,
        b: common_vendor.p({
          ["item-info"]: item
        }),
        c: item.iid
      };
    }),
    b: common_vendor.o($setup.handleCheckedChange),
    c: common_vendor.o($setup.handlecCheckedAllChange)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/Day03/\u9884\u4E60\u4EE3\u7801/01-uni-app/HYUniappMall/pages/cart/index.vue"]]);
wx.createPage(MiniProgramPage);
