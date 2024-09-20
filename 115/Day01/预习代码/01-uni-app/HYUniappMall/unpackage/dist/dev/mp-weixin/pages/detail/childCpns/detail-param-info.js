"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  props: {
    paramInfo: {
      type: Object
    }
  },
  setup(props) {
    const getTableData = common_vendor.computed$1(() => {
      return props.paramInfo.sizes[0] || [];
    });
    return {
      getTableData
    };
  }
};
if (!Array) {
  const _easycom_uni_td2 = common_vendor.resolveComponent("uni-td");
  const _easycom_uni_tr2 = common_vendor.resolveComponent("uni-tr");
  const _easycom_uni_table2 = common_vendor.resolveComponent("uni-table");
  (_easycom_uni_td2 + _easycom_uni_tr2 + _easycom_uni_table2)();
}
const _easycom_uni_td = () => "../../../uni_modules/uni-table/components/uni-td/uni-td.js";
const _easycom_uni_tr = () => "../../../uni_modules/uni-table/components/uni-tr/uni-tr.js";
const _easycom_uni_table = () => "../../../uni_modules/uni-table/components/uni-table/uni-table.js";
if (!Math) {
  (_easycom_uni_td + _easycom_uni_tr + _easycom_uni_table)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: Object.keys($props.paramInfo).length !== 0
  }, Object.keys($props.paramInfo).length !== 0 ? {
    b: common_vendor.f($setup.getTableData, (table, index, i0) => {
      return {
        a: common_vendor.t(table[0]),
        b: "922ae8a2-2-" + i0 + "," + ("922ae8a2-1-" + i0),
        c: common_vendor.t(table[1]),
        d: "922ae8a2-3-" + i0 + "," + ("922ae8a2-1-" + i0),
        e: common_vendor.t(table[2]),
        f: "922ae8a2-4-" + i0 + "," + ("922ae8a2-1-" + i0),
        g: common_vendor.t(table[3]),
        h: "922ae8a2-5-" + i0 + "," + ("922ae8a2-1-" + i0),
        i: "922ae8a2-1-" + i0 + ",922ae8a2-0",
        j: index
      };
    }),
    c: common_vendor.p({
      emptyText: "\u6682\u65E0\u66F4\u591A\u6570\u636E"
    })
  } : {}, {
    d: Object.keys($props.paramInfo).length !== 0
  }, Object.keys($props.paramInfo).length !== 0 ? {
    e: common_vendor.f($props.paramInfo.infos, (info, index, i0) => {
      return {
        a: common_vendor.t(info.key),
        b: "922ae8a2-8-" + i0 + "," + ("922ae8a2-7-" + i0),
        c: common_vendor.t(info.value),
        d: "922ae8a2-9-" + i0 + "," + ("922ae8a2-7-" + i0),
        e: "922ae8a2-7-" + i0 + ",922ae8a2-6",
        f: index
      };
    }),
    f: common_vendor.p({
      width: 76
    }),
    g: common_vendor.p({
      emptyText: "\u6682\u65E0\u66F4\u591A\u6570\u636E"
    })
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/14-\u8DE8\u5E73\u53F0uni-app+Taro/Day01/\u9884\u4E60\u4EE3\u7801/01-uni-app/HYUniappMall/pages/detail/childCpns/detail-param-info.vue"]]);
wx.createComponent(Component);
