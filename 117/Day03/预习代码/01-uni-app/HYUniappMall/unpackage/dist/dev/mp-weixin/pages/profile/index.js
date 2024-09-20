"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const UserInfo = () => "./childCpns/user-info.js";
const GridView = () => "./childCpns/grid-view.js";
const ListView = () => "./childCpns/list-view.js";
const _sfc_main = {
  components: {
    UserInfo,
    GridView,
    ListView
  },
  setup() {
    const gridItemDatas = common_vendor.ref([
      {
        price: 0,
        decimal: 2,
        unit: "\u5143",
        name: "\u6211\u7684\u4F59\u989D"
      },
      {
        price: 0,
        unit: "\u4E2A",
        name: "\u6211\u7684\u4F18\u60E0"
      },
      {
        price: 0,
        unit: "\u5206",
        name: "\u6211\u7684\u79EF\u5206"
      }
    ]);
    const orderList = [
      { icon: common_assets.messagePNG, iconColor: "#ff8198", info: "\u6211\u7684\u6D88\u606F" },
      { icon: common_assets.appPNG, iconColor: "#fc7b53", info: "\u79EF\u5206\u5546\u57CE" },
      { icon: common_assets.vipPNG, iconColor: "#ffc636", info: "\u4F1A\u5458\u5361" }
    ];
    const serviceList = [
      { icon: common_assets.cartPNG, iconColor: "#ff8198", info: "\u6211\u7684\u8D2D\u7269\u8F66" },
      { icon: common_assets.pointerPNG, iconColor: "#ff8198", info: "\u4E0B\u8F7D\u8D2D\u7269APP" }
    ];
    return {
      gridItemDatas,
      orderList,
      serviceList
    };
  }
};
if (!Array) {
  const _component_user_info = common_vendor.resolveComponent("user-info");
  const _component_grid_view = common_vendor.resolveComponent("grid-view");
  const _component_list_view = common_vendor.resolveComponent("list-view");
  (_component_user_info + _component_grid_view + _component_list_view)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      listItems: $setup.gridItemDatas
    }),
    b: common_vendor.p({
      listItems: $setup.orderList
    }),
    c: common_vendor.p({
      listItems: $setup.serviceList
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/Day03/\u9884\u4E60\u4EE3\u7801/01-uni-app/HYUniappMall/pages/profile/index.vue"]]);
wx.createPage(MiniProgramPage);
