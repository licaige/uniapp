if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const ON_SHOW = "onShow";
  const ON_HIDE = "onHide";
  const ON_LOAD = "onLoad";
  const ON_READY = "onReady";
  const ON_UNLOAD = "onUnload";
  const ON_REACH_BOTTOM = "onReachBottom";
  const ON_PULL_DOWN_REFRESH = "onPullDownRefresh";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onShow = /* @__PURE__ */ createHook(ON_SHOW);
  const onHide = /* @__PURE__ */ createHook(ON_HIDE);
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  const onReady = /* @__PURE__ */ createHook(ON_READY);
  const onUnload = /* @__PURE__ */ createHook(ON_UNLOAD);
  const onReachBottom = /* @__PURE__ */ createHook(ON_REACH_BOTTOM);
  const onPullDownRefresh = /* @__PURE__ */ createHook(ON_PULL_DOWN_REFRESH);
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$8 = {
    data() {
      return {
        params: ""
      };
    },
    onLoad(options) {
      formatAppLog("log", "at pages/home/home.vue:42", "home onLoad", options);
      uni.$on("acceptDataFromDetail02", this.acceptDataFromDetail02);
    },
    onShow() {
      formatAppLog("log", "at pages/home/home.vue:46", "home onShow");
    },
    onReady() {
      formatAppLog("log", "at pages/home/home.vue:49", "home onReady");
    },
    onHide() {
      formatAppLog("log", "at pages/home/home.vue:52", "home onHide");
    },
    onUnload() {
      formatAppLog("log", "at pages/home/home.vue:55", "home onUnload");
      uni.off("acceptDataFromDetail02", this.acceptDataFromDetail02);
    },
    onPullDownRefresh() {
      formatAppLog("log", "at pages/home/home.vue:59", "home onPullDownRefresh");
    },
    onReachBottom() {
      formatAppLog("log", "at pages/home/home.vue:62", "home onReachBottom");
    },
    beforeCreate() {
      formatAppLog("log", "at pages/home/home.vue:67", "home beforeCreate");
    },
    created() {
      formatAppLog("log", "at pages/home/home.vue:70", "home created");
    },
    beforeMount() {
      formatAppLog("log", "at pages/home/home.vue:73", "home beforeMount");
    },
    mounted() {
      formatAppLog("log", "at pages/home/home.vue:76", "home mounted");
    },
    methods: {
      handleClick1() {
        uni.navigateTo({
          url: "/pages/detail01/detail01"
        });
      },
      handleClick2() {
        uni.redirectTo({
          url: "/pages/detail01/detail01"
        });
      },
      handleClick3() {
        uni.switchTab({
          url: "/pages/category/category"
        });
      },
      handleClick4() {
        uni.navigateTo({
          url: "/pages/detail01/detail01?name=liujun&id=200",
          events: {
            acceptDataFromOpenedPage: (data) => {
              formatAppLog("log", "at pages/home/home.vue:100", data);
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
        uni.navigateTo({
          url: "/pages/detail02/detail02?name=liujun&id=300"
        });
      },
      handleClick6() {
        uni.navigateTo({
          url: "/pages/detail-hooks/detail-hooks?name=liujun&id=500",
          success: function(res) {
            res.eventChannel.emit("acceptDataFromOpenerPage", {
              data: "data from home page"
            });
          },
          events: {
            acceptDataFromDetailHooks: (data) => {
              formatAppLog("log", "at pages/home/home.vue:131", data);
            }
          }
        });
      },
      acceptDataFromDetail02(data) {
        formatAppLog("log", "at pages/home/home.vue:141", "acceptDataFromDetail02=>", data);
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", null, "1.\u8DEF\u7531\uFF08\u7EC4\u4EF6\uFF09"),
      vue.createElementVNode("navigator", {
        url: "/pages/detail01/detail01",
        "open-type": "navigate"
      }, [
        vue.createElementVNode("button", { type: "default" }, "Detail01 navigate")
      ]),
      vue.createElementVNode("navigator", {
        url: "/pages/detail01/detail01",
        "open-type": "redirect"
      }, [
        vue.createElementVNode("button", { type: "default" }, "Detail01 redirect")
      ]),
      vue.createElementVNode("navigator", {
        url: "/pages/category/category",
        "open-type": "switchTab"
      }, [
        vue.createElementVNode("button", { type: "default" }, "Detail01")
      ]),
      vue.createElementVNode("view", null, "2.\u8DEF\u7531\uFF08API\uFF09"),
      vue.createElementVNode("button", {
        type: "default",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick1 && $options.handleClick1(...args))
      }, "Detail01 navigate"),
      vue.createElementVNode("button", {
        type: "default",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.handleClick2 && $options.handleClick2(...args))
      }, "Detail01 redirect"),
      vue.createElementVNode("button", {
        type: "default",
        onClick: _cache[2] || (_cache[2] = (...args) => $options.handleClick3 && $options.handleClick3(...args))
      }, "Detail01 category"),
      vue.createElementVNode("view", null, "2.\u9875\u9762\u4F20\u53C2"),
      vue.createElementVNode("navigator", {
        url: "/pages/detail01/detail01?name=liujun&id=100",
        "open-type": "navigate"
      }, [
        vue.createElementVNode("button", { type: "default" }, "Detail01 navigate")
      ]),
      vue.createElementVNode("button", {
        type: "default",
        onClick: _cache[3] || (_cache[3] = (...args) => $options.handleClick4 && $options.handleClick4(...args))
      }, "Detail01 navigate"),
      vue.createElementVNode("button", {
        type: "default",
        onClick: _cache[4] || (_cache[4] = (...args) => $options.handleClick5 && $options.handleClick5(...args))
      }, "Detail02 navigate"),
      vue.createElementVNode("view", null, "3.\u9875\u9762\u751F\u547D\u5468\u671F"),
      vue.createElementVNode("button", {
        type: "default",
        onClick: _cache[5] || (_cache[5] = (...args) => $options.handleClick6 && $options.handleClick6(...args))
      }, "detail-hooks navigate"),
      vue.createElementVNode("view", { class: "params" }, vue.toDisplayString($data.params), 1)
    ]);
  }
  const PagesHomeHome = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$6], ["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/code/01-uni-app/06-page-uni-app/pages/home/home.vue"]]);
  const _sfc_main$7 = {
    data() {
      return {};
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesCategoryCategory = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$5], ["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/code/01-uni-app/06-page-uni-app/pages/category/category.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {};
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesCartCart = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$4], ["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/code/01-uni-app/06-page-uni-app/pages/cart/cart.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {};
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesProfileProfile = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$3], ["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/code/01-uni-app/06-page-uni-app/pages/profile/profile.vue"]]);
  const _sfc_main$4 = {
    data() {
      return {
        title: "Hello"
      };
    },
    onLoad() {
    },
    methods: {}
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("image", {
        class: "logo",
        src: "/static/logo.png"
      }),
      vue.createElementVNode("view", { class: "text-area" }, [
        vue.createElementVNode("text", { class: "title" }, vue.toDisplayString($data.title), 1)
      ])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$2], ["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/code/01-uni-app/06-page-uni-app/pages/index/index.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {
        params: ""
      };
    },
    onLoad(options) {
      this.params = options;
      formatAppLog("log", "at pages/detail01/detail01.vue:21", "detail01 onLoad", options);
      const eventChannel = this.getOpenerEventChannel();
      eventChannel.on("acceptDataFromOpenerPage", (data) => {
        formatAppLog("log", "at pages/detail01/detail01.vue:25", "acceptDataFromOpenerPage=>", data);
        this.params = data.data;
      });
    },
    onShow() {
      formatAppLog("log", "at pages/detail01/detail01.vue:30", "detail01 onShow");
    },
    onReady() {
      formatAppLog("log", "at pages/detail01/detail01.vue:33", "detail01 onReady");
    },
    onHide() {
      formatAppLog("log", "at pages/detail01/detail01.vue:36", "detail01 onHide");
    },
    onUnload() {
      formatAppLog("log", "at pages/detail01/detail01.vue:39", "detail01 onUnload");
    },
    onPullDownRefresh() {
      formatAppLog("log", "at pages/detail01/detail01.vue:42", "detail01 onPullDownRefresh");
    },
    onReachBottom() {
      formatAppLog("log", "at pages/detail01/detail01.vue:45", "detail01 onReachBottom");
    },
    beforeCreate() {
      formatAppLog("log", "at pages/detail01/detail01.vue:50", "detail01 beforeCreate");
    },
    created() {
      formatAppLog("log", "at pages/detail01/detail01.vue:53", "detail01 created");
    },
    beforeMount() {
      formatAppLog("log", "at pages/detail01/detail01.vue:56", "detail01 beforeMount");
    },
    mounted() {
      formatAppLog("log", "at pages/detail01/detail01.vue:59", "detail01 mounted");
    },
    methods: {
      handleBackClick() {
        uni.navigateBack({
          delta: 1
        });
        const eventChannel = this.getOpenerEventChannel();
        eventChannel.emit("acceptDataFromOpenedPage", {
          data: "data from detail01 page"
        });
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("navigator", {
        "open-type": "navigateBack",
        delta: 1
      }, [
        vue.createElementVNode("button", { type: "default" }, "\u8FD4\u56DE \u7EC4\u4EF6")
      ]),
      vue.createElementVNode("button", {
        type: "default",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.handleBackClick && $options.handleBackClick(...args))
      }, "\u8FD4\u56DE API"),
      vue.createElementVNode("view", { class: "params" }, vue.toDisplayString($data.params), 1)
    ]);
  }
  const PagesDetail01Detail01 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1], ["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/code/01-uni-app/06-page-uni-app/pages/detail01/detail01.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {};
    },
    methods: {
      handleBackClick() {
        uni.navigateBack({
          delta: 1
        });
        uni.$emit("acceptDataFromDetail02", {
          data: "data from detail02"
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("button", {
        type: "default",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.handleBackClick && $options.handleBackClick(...args))
      }, "\u8FD4\u56DE")
    ]);
  }
  const PagesDetail02Detail02 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render], ["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/code/01-uni-app/06-page-uni-app/pages/detail02/detail02.vue"]]);
  const _sfc_main$1 = {
    __name: "detail-hooks",
    props: {
      name: String,
      id: String
    },
    setup(__props) {
      const props = __props;
      formatAppLog("log", "at pages/detail-hooks/detail-hooks.vue:44", props.name, props.id);
      formatAppLog("log", "at pages/detail-hooks/detail-hooks.vue:45", "getCurrentInstance=>", vue.getCurrentInstance().proxy);
      const $instance = vue.ref(vue.getCurrentInstance().proxy);
      onLoad((options) => {
        formatAppLog("log", "at pages/detail-hooks/detail-hooks.vue:50", "detail-hooks onLoad 123", options);
        const eventChannel = $instance.value.getOpenerEventChannel();
        eventChannel.on("acceptDataFromOpenerPage", (data) => {
          formatAppLog("log", "at pages/detail-hooks/detail-hooks.vue:57", "acceptDataFromOpenerPage: ", data);
        });
      });
      onShow(() => {
        formatAppLog("log", "at pages/detail-hooks/detail-hooks.vue:69", "detail-hooks onShow");
      });
      onReady(() => {
        formatAppLog("log", "at pages/detail-hooks/detail-hooks.vue:72", "detail-hooks onReady");
      });
      onHide(() => {
        formatAppLog("log", "at pages/detail-hooks/detail-hooks.vue:75", "detail-hooks onHide");
      });
      onUnload(() => {
        formatAppLog("log", "at pages/detail-hooks/detail-hooks.vue:78", "detail-hooks onUnload");
      });
      onPullDownRefresh(() => {
        formatAppLog("log", "at pages/detail-hooks/detail-hooks.vue:82", "detail-hooks onPullDownRefresh");
        setTimeout(() => {
          uni.stopPullDownRefresh();
        }, 1e3);
      });
      onReachBottom(() => {
        formatAppLog("log", "at pages/detail-hooks/detail-hooks.vue:88", "detail-hooks onReachBottom");
      });
      vue.onBeforeMount(() => {
        formatAppLog("log", "at pages/detail-hooks/detail-hooks.vue:94", "detail-hooks Vue onBeforeMount");
      });
      vue.onMounted(() => {
        formatAppLog("log", "at pages/detail-hooks/detail-hooks.vue:97", "detail-hooks Vue onMounted");
      });
      vue.onBeforeUnmount(() => {
        formatAppLog("log", "at pages/detail-hooks/detail-hooks.vue:100", "detail-hooks Vue onBeforeUnmount");
      });
      vue.onUnmounted(() => {
        formatAppLog("log", "at pages/detail-hooks/detail-hooks.vue:103", "detail-hooks Vue onUnmounted");
      });
      function handleBackClick() {
        const eventChannel = $instance.value.getOpenerEventChannel();
        eventChannel.emit("acceptDataFromDetailHooks", {
          data: "data from detail01 page"
        });
        uni.navigateBack({
          delta: 1
        });
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createElementVNode("view", {
            class: "item",
            onClick: handleBackClick
          }, "1"),
          vue.createElementVNode("view", { class: "item" }, "1"),
          vue.createElementVNode("view", { class: "item" }, "1"),
          vue.createElementVNode("view", { class: "item" }, "1"),
          vue.createElementVNode("view", { class: "item" }, "1"),
          vue.createElementVNode("view", { class: "item" }, "1"),
          vue.createElementVNode("view", { class: "item" }, "1"),
          vue.createElementVNode("view", { class: "item" }, "1"),
          vue.createElementVNode("view", { class: "item" }, "1"),
          vue.createElementVNode("view", { class: "item" }, "1"),
          vue.createElementVNode("view", { class: "item" }, "1"),
          vue.createElementVNode("view", { class: "item" }, "1")
        ]);
      };
    }
  };
  const PagesDetailHooksDetailHooks = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/code/01-uni-app/06-page-uni-app/pages/detail-hooks/detail-hooks.vue"]]);
  __definePage("pages/home/home", PagesHomeHome);
  __definePage("pages/category/category", PagesCategoryCategory);
  __definePage("pages/cart/cart", PagesCartCart);
  __definePage("pages/profile/profile", PagesProfileProfile);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/detail01/detail01", PagesDetail01Detail01);
  __definePage("pages/detail02/detail02", PagesDetail02Detail02);
  __definePage("pages/detail-hooks/detail-hooks", PagesDetailHooksDetailHooks);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/liujun/Documents/HyKj/\u5907\u8BFE\u8D44\u6599/code/01-uni-app/06-page-uni-app/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
