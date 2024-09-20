"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      params: ""
    };
  },
  onLoad(options) {
    this.params = options;
    console.log("detail01 onLoad", options);
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on("acceptDataFromOpenerPage", (data) => {
      console.log("acceptDataFromOpenerPage=>", data);
      this.params = data.data;
    });
  },
  onShow() {
    console.log("detail01 onShow");
  },
  onReady() {
    console.log("detail01 onReady");
  },
  onHide() {
    console.log("detail01 onHide");
  },
  onUnload() {
    console.log("detail01 onUnload");
  },
  onPullDownRefresh() {
    console.log("detail01 onPullDownRefresh");
  },
  onReachBottom() {
    console.log("detail01 onReachBottom");
  },
  beforeCreate() {
    console.log("detail01 beforeCreate");
  },
  created() {
    console.log("detail01 created");
  },
  beforeMount() {
    console.log("detail01 beforeMount");
  },
  mounted() {
    console.log("detail01 mounted");
  },
  methods: {
    handleBackClick() {
      common_vendor.index.navigateBack({
        delta: 1
      });
      const eventChannel = this.getOpenerEventChannel();
      eventChannel.emit("acceptDataFromOpenedPage", {
        data: "data from detail01 page"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.handleBackClick && $options.handleBackClick(...args)),
    b: common_vendor.t($data.params)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/code/01-uni-app/06-page-uni-app/pages/detail01/detail01.vue"]]);
wx.createPage(MiniProgramPage);
