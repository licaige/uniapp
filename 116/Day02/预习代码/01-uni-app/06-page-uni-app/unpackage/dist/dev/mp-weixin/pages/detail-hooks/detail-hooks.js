"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "detail-hooks",
  props: {
    name: String,
    id: String
  },
  setup(__props) {
    const props = __props;
    console.log(props.name, props.id);
    console.log("getCurrentInstance=>", common_vendor.getCurrentInstance().proxy);
    const $instance = common_vendor.ref(common_vendor.getCurrentInstance().proxy);
    common_vendor.onLoad((options) => {
      console.log("detail-hooks onLoad 123", options);
      const eventChannel = $instance.value.getOpenerEventChannel();
      eventChannel.on("acceptDataFromOpenerPage", (data) => {
        console.log("acceptDataFromOpenerPage: ", data);
      });
    });
    common_vendor.onShow(() => {
      console.log("detail-hooks onShow");
    });
    common_vendor.onReady(() => {
      console.log("detail-hooks onReady");
    });
    common_vendor.onHide(() => {
      console.log("detail-hooks onHide");
    });
    common_vendor.onUnload(() => {
      console.log("detail-hooks onUnload");
    });
    common_vendor.onPullDownRefresh(() => {
      console.log("detail-hooks onPullDownRefresh");
      setTimeout(() => {
        common_vendor.index.stopPullDownRefresh();
      }, 1e3);
    });
    common_vendor.onReachBottom(() => {
      console.log("detail-hooks onReachBottom");
    });
    common_vendor.onBeforeMount(() => {
      console.log("detail-hooks Vue onBeforeMount");
    });
    common_vendor.onMounted(() => {
      console.log("detail-hooks Vue onMounted");
    });
    common_vendor.onBeforeUnmount(() => {
      console.log("detail-hooks Vue onBeforeUnmount");
    });
    common_vendor.onUnmounted(() => {
      console.log("detail-hooks Vue onUnmounted");
    });
    function handleBackClick() {
      const eventChannel = $instance.value.getOpenerEventChannel();
      eventChannel.emit("acceptDataFromDetailHooks", {
        data: "data from detail01 page"
      });
      common_vendor.index.navigateBack({
        delta: 1
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleBackClick)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/code/01-uni-app/06-page-uni-app/pages/detail-hooks/detail-hooks.vue"]]);
wx.createPage(MiniProgramPage);
