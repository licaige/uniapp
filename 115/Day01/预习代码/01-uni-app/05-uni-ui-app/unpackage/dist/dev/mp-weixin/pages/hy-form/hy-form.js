"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      formData: {
        password: null,
        username: null
      },
      rules: {
        username: {
          rules: [
            {
              required: true,
              errorMessage: "\u8BF7\u8F93\u5165\u59D3\u540D"
            }
          ]
        },
        password: {
          rules: [
            {
              required: true,
              errorMessage: "\u8BF7\u8F93\u5165\u5BC6\u7801"
            },
            {
              minLength: 6,
              maxLength: 8,
              errorMessage: "\u8BF7\u8F93\u5165\u5BC6\u7801(6-8\u4F4D)"
            }
          ]
        }
      }
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate().then((res) => {
        console.log("\u8868\u5355\u6570\u636E\u4FE1\u606F\uFF1A", res);
      }).catch((err) => {
        console.error("\u8868\u5355\u9519\u8BEF\u4FE1\u606F\uFF1A", err);
      });
    },
    reset() {
      this.$refs.form.clearValidate();
      Object.keys(this.formData).forEach((key, index) => {
        this.formData[key] = null;
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.formData.username = $event),
    b: common_vendor.p({
      type: "text",
      placeholder: "\u8BF7\u8F93\u5165\u59D3\u540D",
      modelValue: $data.formData.username
    }),
    c: common_vendor.p({
      label: "\u59D3\u540D",
      name: "username",
      required: true
    }),
    d: common_vendor.o(($event) => $data.formData.password = $event),
    e: common_vendor.p({
      type: "password",
      placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
      modelValue: $data.formData.password
    }),
    f: common_vendor.p({
      label: "\u5BC6\u7801",
      name: "password",
      required: true
    }),
    g: common_vendor.sr("form", "6a1c3330-0"),
    h: common_vendor.p({
      modelValue: $data.formData,
      rules: $data.rules
    }),
    i: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    j: common_vendor.o((...args) => $options.reset && $options.reset(...args)),
    k: common_vendor.t($data.formData)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/code/01-uni-app/05-uni-ui-app/pages/hy-form/hy-form.vue"]]);
wx.createPage(MiniProgramPage);
