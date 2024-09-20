"use strict";
const common_vendor = require("../../../common/vendor.js");
const GoodsListItem = () => "../../../components/goods-list-item/index.js";
const _sfc_main = {
  props: {
    recommendList: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  components: {
    GoodsListItem
  },
  setup() {
    const handleGoodItemClick = (item) => {
      console.log(item);
    };
    return {
      handleGoodItemClick
    };
  }
};
if (!Array) {
  const _component_goods_list_item = common_vendor.resolveComponent("goods-list-item");
  _component_goods_list_item();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.recommendList, (item, index, i0) => {
      return {
        a: "1ddfc840-0-" + i0,
        b: common_vendor.p({
          itemInfo: item
        }),
        c: item.cfav + "_" + item.iid
      };
    }),
    b: common_vendor.o($setup.handleGoodItemClick)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/14-\u8DE8\u5E73\u53F0uni-app+Taro/Day01/\u9884\u4E60\u4EE3\u7801/01-uni-app/HYUniappMall/pages/detail/childCpns/detail-recommend-info.vue"]]);
wx.createComponent(Component);
