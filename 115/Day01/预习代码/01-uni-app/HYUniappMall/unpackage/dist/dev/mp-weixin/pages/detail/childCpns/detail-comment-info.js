"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_common = require("../../../utils/common.js");
const _sfc_main = {
  props: {
    commentInfo: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  setup() {
    const showDate = common_vendor.computed$1(() => {
      return (value) => {
        let date = new Date(value * 1e3);
        return utils_common.formatDate(date, "yyyy-MM-dd");
      };
    });
    return {
      showDate
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: Object.keys($props.commentInfo).length !== 0
  }, Object.keys($props.commentInfo).length !== 0 ? common_vendor.e({
    b: $props.commentInfo.user
  }, $props.commentInfo.user ? {
    c: $props.commentInfo.user.avatar,
    d: common_vendor.t($props.commentInfo.user.uname)
  } : {}, {
    e: common_vendor.t($props.commentInfo.content),
    f: common_vendor.t($setup.showDate($props.commentInfo.created)),
    g: common_vendor.t($props.commentInfo.style),
    h: common_vendor.f($props.commentInfo.images, (item, index, i0) => {
      return {
        a: item
      };
    })
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/14-\u8DE8\u5E73\u53F0uni-app+Taro/Day01/\u9884\u4E60\u4EE3\u7801/01-uni-app/HYUniappMall/pages/detail/childCpns/detail-comment-info.vue"]]);
wx.createComponent(Component);
