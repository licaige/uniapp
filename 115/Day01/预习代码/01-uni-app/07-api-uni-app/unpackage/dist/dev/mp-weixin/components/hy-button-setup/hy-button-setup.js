"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "hy-button-setup",
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  emits: ["onBtnClick"],
  setup(__props, { emit }) {
    const props = __props;
    common_vendor.onBeforeMount(() => {
      console.log("hy-button-setup  onBeforeMount");
    });
    common_vendor.onMounted(() => {
      console.log("hy-button-setup  onMounted");
    });
    common_vendor.onBeforeUnmount(() => {
      console.log("hy-button-setup  onBeforeUnmount");
    });
    common_vendor.onUnmounted(() => {
      console.log("hy-button-setup  onUnmounted");
    });
    common_vendor.onLoad(() => {
      console.log("hy-button-setup  onLoad");
    });
    common_vendor.onShow(() => {
      console.log("hy-button-setup  onShow");
    });
    common_vendor.onReady(() => {
      console.log("hy-button-setup  onReady");
    });
    common_vendor.onHide(() => {
      console.log("hy-button-setup  onHide");
    });
    function handleClick() {
      emit("onBtnClick", props.type);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.n(__props.type),
        b: common_vendor.o(handleClick)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/code/01-uni-app/07-api-uni-app/components/hy-button-setup/hy-button-setup.vue"]]);
wx.createComponent(Component);
