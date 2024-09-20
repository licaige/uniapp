"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "hy-button",
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "default"
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  onLoad() {
    console.log("hy-button onLoad");
  },
  onShow() {
    console.log("hy-button onShow");
  },
  onReady() {
    console.log("hy-button onReady");
  },
  onHide() {
    console.log("hy-button onHide");
  },
  beforeCreate() {
    console.log("hy-button beforeCreate");
  },
  created() {
    console.log("hy-button created");
  },
  beforeMount() {
    console.log("hy-button beforeMount");
  },
  mounted() {
    console.log("hy-button mounted");
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/code/01-uni-app/07-api-uni-app/components/hy-button/hy-button.vue"]]);
wx.createComponent(Component);
