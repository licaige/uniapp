"use strict";
const common_vendor = require("../../common/vendor.js");
const service_home = require("../../service/home.js");
require("../../service/index.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
  },
  methods: {
    handleGetHomeData() {
      service_home.getHomeData().then((res) => {
        console.log(res);
      });
      service_home.getJuanpiHomeData().then((res) => {
        console.log(res);
      });
    },
    setStorage() {
      common_vendor.index.setStorage({
        key: "useInfo",
        data: {
          name: "liujun",
          age: 18,
          token: "asdfsfdsaf"
        },
        success() {
          console.log("\u5B58\u50A8\u6210\u529F");
        }
      });
      common_vendor.index.setStorageSync("info", {
        name: "coderwhy",
        age: 12
      });
    },
    getStorage() {
      common_vendor.index.getStorage({
        key: "useInfo",
        success(res) {
          console.log(res.data);
        }
      });
      const info = common_vendor.index.getStorageSync("info");
      console.log(info);
    },
    handleClick() {
      console.log("click");
    },
    handleBtnClick(params) {
      console.log(params);
    }
  }
};
if (!Array) {
  const _easycom_hy_button2 = common_vendor.resolveComponent("hy-button");
  const _easycom_hy_button_setup2 = common_vendor.resolveComponent("hy-button-setup");
  (_easycom_hy_button2 + _easycom_hy_button_setup2)();
}
const _easycom_hy_button = () => "../../components/hy-button/hy-button.js";
const _easycom_hy_button_setup = () => "../../components/hy-button-setup/hy-button-setup.js";
if (!Math) {
  (_easycom_hy_button + _easycom_hy_button_setup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.handleGetHomeData && $options.handleGetHomeData(...args)),
    b: common_vendor.o((...args) => $options.setStorage && $options.setStorage(...args)),
    c: common_vendor.o((...args) => $options.getStorage && $options.getStorage(...args)),
    d: common_vendor.o($options.handleClick),
    e: common_vendor.o($options.handleBtnClick),
    f: common_vendor.p({
      type: "info"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/code/01-uni-app/07-api-uni-app/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
