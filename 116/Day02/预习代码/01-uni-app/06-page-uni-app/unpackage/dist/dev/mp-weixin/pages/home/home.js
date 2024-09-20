"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      params: ""
    };
  },
  onLoad(options) {
    console.log("home onLoad", options);
    common_vendor.index.$on("acceptDataFromDetail02", this.acceptDataFromDetail02);
  },
  onShow() {
    console.log("home onShow");
  },
  onReady() {
    console.log("home onReady");
  },
  onHide() {
    console.log("home onHide");
  },
  onUnload() {
    console.log("home onUnload");
    common_vendor.index.off("acceptDataFromDetail02", this.acceptDataFromDetail02);
  },
  onPullDownRefresh() {
    console.log("home onPullDownRefresh");
  },
  onReachBottom() {
    console.log("home onReachBottom");
  },
  beforeCreate() {
    console.log("home beforeCreate");
  },
  created() {
    console.log("home created");
  },
  beforeMount() {
    console.log("home beforeMount");
  },
  mounted() {
    console.log("home mounted");
  },
  methods: {
    handleClick1() {
      common_vendor.index.navigateTo({
        url: "/pages/detail01/detail01"
      });
    },
    handleClick2() {
      common_vendor.index.redirectTo({
        url: "/pages/detail01/detail01"
      });
    },
    handleClick3() {
      common_vendor.index.switchTab({
        url: "/pages/category/category"
      });
    },
    handleClick4() {
      common_vendor.index.navigateTo({
        url: "/pages/detail01/detail01?name=liujun&id=200",
        events: {
          acceptDataFromOpenedPage: (data) => {
            console.log(data);
            this.params = data.data;
          }
        },
        success: function(res) {
          res.eventChannel.emit("acceptDataFromOpenerPage", {
            data: "data from home page"
          });
        }
      });
    },
    handleClick5() {
      common_vendor.index.navigateTo({
        url: "/pages/detail02/detail02?name=liujun&id=300"
      });
    },
    handleClick6() {
      common_vendor.index.navigateTo({
        url: "/pages/detail-hooks/detail-hooks?name=liujun&id=500",
        success: function(res) {
          res.eventChannel.emit("acceptDataFromOpenerPage", {
            data: "data from home page"
          });
        },
        events: {
          acceptDataFromDetailHooks: (data) => {
            console.log(data);
          }
        }
      });
    },
    acceptDataFromDetail02(data) {
      console.log("acceptDataFromDetail02=>", data);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.handleClick1 && $options.handleClick1(...args)),
    b: common_vendor.o((...args) => $options.handleClick2 && $options.handleClick2(...args)),
    c: common_vendor.o((...args) => $options.handleClick3 && $options.handleClick3(...args)),
    d: common_vendor.o((...args) => $options.handleClick4 && $options.handleClick4(...args)),
    e: common_vendor.o((...args) => $options.handleClick5 && $options.handleClick5(...args)),
    f: common_vendor.o((...args) => $options.handleClick6 && $options.handleClick6(...args)),
    g: common_vendor.t($data.params)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/code/01-uni-app/06-page-uni-app/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
