"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "TableCheckbox",
  emits: ["checkboxSelected"],
  props: {
    indeterminate: {
      type: Boolean,
      default: false
    },
    checked: {
      type: [Boolean, String],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number,
      default: -1
    },
    cellData: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  watch: {
    checked(newVal) {
      if (typeof this.checked === "boolean") {
        this.isChecked = newVal;
      } else {
        this.isChecked = true;
      }
    },
    indeterminate(newVal) {
      this.isIndeterminate = newVal;
    }
  },
  data() {
    return {
      isChecked: false,
      isDisabled: false,
      isIndeterminate: false
    };
  },
  created() {
    if (typeof this.checked === "boolean") {
      this.isChecked = this.checked;
    }
    this.isDisabled = this.disabled;
  },
  methods: {
    selected() {
      if (this.isDisabled)
        return;
      this.isIndeterminate = false;
      this.isChecked = !this.isChecked;
      this.$emit("checkboxSelected", {
        checked: this.isChecked,
        data: this.cellData
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$props.indeterminate
  }, !$props.indeterminate ? {
    b: $data.isChecked ? 1 : "",
    c: $data.isDisabled ? 1 : ""
  } : {}, {
    d: common_vendor.o((...args) => $options.selected && $options.selected(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/14-\u8DE8\u5E73\u53F0uni-app+Taro/Day01/\u9884\u4E60\u4EE3\u7801/01-uni-app/HYUniappMall/uni_modules/uni-table/components/uni-tr/table-checkbox.vue"]]);
wx.createComponent(Component);
