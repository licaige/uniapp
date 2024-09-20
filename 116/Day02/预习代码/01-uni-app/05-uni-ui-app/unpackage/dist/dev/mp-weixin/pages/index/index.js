"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello",
      options: [{
        icon: "chat",
        text: "\u5BA2\u670D"
      }, {
        icon: "shop",
        text: "\u5E97\u94FA",
        info: 2,
        infoBackgroundColor: "#007aff",
        infoColor: "#f5f5f5"
      }, {
        icon: "cart",
        text: "\u8D2D\u7269\u8F66",
        info: 2
      }],
      buttonGroup: [
        {
          text: "\u52A0\u5165\u8D2D\u7269\u8F66",
          backgroundColor: "linear-gradient(90deg, #FFCD1E, #FF8A18)",
          color: "#fff"
        },
        {
          text: "\u7ACB\u5373\u8D2D\u4E70",
          backgroundColor: "linear-gradient(90deg, #FE6035, #EF1224)",
          color: "#fff"
        }
      ]
    };
  },
  onLoad() {
  },
  methods: {
    onClick(e) {
      common_vendor.index.showToast({
        title: `\u70B9\u51FB${e.content.text}`,
        icon: "none"
      });
    },
    buttonClick(e) {
      common_vendor.index.showToast({
        title: `\u70B9\u51FB${e.content.text}`,
        icon: "none"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_badge2 = common_vendor.resolveComponent("uni-badge");
  const _easycom_uni_countdown2 = common_vendor.resolveComponent("uni-countdown");
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  (_easycom_uni_badge2 + _easycom_uni_countdown2 + _easycom_uni_goods_nav2)();
}
const _easycom_uni_badge = () => "../../uni_modules/uni-badge/components/uni-badge/uni-badge.js";
const _easycom_uni_countdown = () => "../../uni_modules/uni-countdown/components/uni-countdown/uni-countdown.js";
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  (_easycom_uni_badge + _easycom_uni_countdown + _easycom_uni_goods_nav)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      text: "1",
      type: "info"
    }),
    b: common_vendor.p({
      text: "10",
      type: "primary"
    }),
    c: common_vendor.p({
      text: "1000",
      type: "success",
      absolute: "rightTop"
    }),
    d: common_vendor.p({
      showDay: false,
      hour: 2,
      minute: 3,
      second: 23
    }),
    e: common_vendor.o($options.onClick),
    f: common_vendor.o($options.buttonClick),
    g: common_vendor.p({
      options: $data.options,
      fill: true,
      ["button-group"]: $data.buttonGroup
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/code/01-uni-app/05-uni-ui-app/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
