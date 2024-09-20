"use strict";
const common_vendor = require("../../common/vendor.js");
const store_counter = require("../../store/counter.js");
const store_home = require("../../store/home.js");
require("../../service/home.js");
require("../../service/index.js");
const _sfc_main = {
  __name: "detail",
  setup(__props) {
    const counterStore = store_counter.useCounterStore();
    const homeStore = store_home.useHomeStore();
    const { counter } = common_vendor.storeToRefs(counterStore);
    const { homeData } = common_vendor.storeToRefs(homeStore);
    function subNumber() {
      counterStore.decrement();
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(subNumber),
        b: common_vendor.t(common_vendor.unref(counter)),
        c: common_vendor.t(common_vendor.unref(homeData))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/code/01-uni-app/08-pinia-uni-app/pages/detail/detail.vue"]]);
wx.createPage(MiniProgramPage);
