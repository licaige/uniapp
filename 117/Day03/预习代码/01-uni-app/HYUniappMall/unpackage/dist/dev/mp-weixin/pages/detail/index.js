"use strict";
const common_vendor = require("../../common/vendor.js");
const store_index = require("../../store/index.js");
const utils_common = require("../../utils/common.js");
const service_detail = require("../../service/detail.js");
require("../../store/modules/cart.js");
require("../../service/index.js");
const DetailNavBar = () => "./childCpns/detail-nav-bar.js";
const DetailSwiper = () => "./childCpns/detail-swiper.js";
const DetailBaseInfo = () => "./childCpns/detail-base-info.js";
const DetailShopInfo = () => "./childCpns/detail-shop-info.js";
const DetailGoodsInfo = () => "./childCpns/detail-goods-info.js";
const DetailParamInfo = () => "./childCpns/detail-param-info.js";
const DetailCommentInfo = () => "./childCpns/detail-comment-info.js";
const DetailRecommendInfo = () => "./childCpns/detail-recommend-info.js";
const DetailBottomBar = () => "./childCpns/detail-bottom-bar.js";
const _sfc_main = {
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    DetailBottomBar
  },
  setup(props, context) {
    console.log("props=", props);
    console.log("context=", context);
    const id = common_vendor.ref("");
    const scrollTop = common_vendor.ref(0);
    const currentNavBarIndex = common_vendor.ref(0);
    const topImages = common_vendor.ref([]);
    const good = common_vendor.ref({});
    const shop = common_vendor.ref({});
    const detailInfo = common_vendor.ref({});
    const paramInfo = common_vendor.ref({});
    const commentInfo = common_vendor.ref({});
    const recommendList = common_vendor.ref([]);
    common_vendor.onShow(() => {
      console.log("onShow");
    });
    common_vendor.onLoad((options) => {
      id.value = options.id;
    });
    common_vendor.onMounted(() => {
      service_detail.getGoodDetail(id.value).then((res) => {
        const data = res.result;
        topImages.value = data.itemInfo.topImages || [];
        good.value = new service_detail.Goods(data.itemInfo, data.columns, data.shopInfo.services);
        shop.value = new service_detail.Shop(data.shopInfo);
        detailInfo.value = data.detailInfo || {};
        paramInfo.value = new service_detail.GoodsParam(data.itemParams.info, data.itemParams.rule);
        if (data.rate.list) {
          commentInfo.value = data.rate.list[0];
        }
      });
      service_detail.getGoodRecommend().then((res) => {
        recommendList.value = res.data.list || [];
      });
    });
    const addToCart = utils_common.debounce(() => {
      console.log("addToCart");
      common_vendor.index.showToast({
        title: "\u5DF2\u52A0\u5165\u8D2D\u7269\u8F66",
        duration: 1e3
      });
      const obj = {};
      obj.iid = id.value;
      obj.imgURL = topImages.value[0];
      obj.title = good.value.title;
      obj.desc = good.value.desc;
      obj.newPrice = good.value.nowPrice;
      store_index.store.dispatch("addCartAction", obj);
    }, 500);
    const handleNavBarItemClick = ({ id: id2 }) => {
      currentNavBarIndex.value = id2;
    };
    const handleScroll = ({ detail }) => {
    };
    return {
      scrollTop,
      currentNavBarIndex,
      topImages,
      good,
      shop,
      detailInfo,
      paramInfo,
      commentInfo,
      recommendList,
      addToCart,
      handleNavBarItemClick,
      handleScroll
    };
  }
};
if (!Array) {
  const _component_detail_nav_bar = common_vendor.resolveComponent("detail-nav-bar");
  const _component_detail_swiper = common_vendor.resolveComponent("detail-swiper");
  const _component_detail_base_info = common_vendor.resolveComponent("detail-base-info");
  const _component_detail_shop_info = common_vendor.resolveComponent("detail-shop-info");
  const _component_detail_goods_info = common_vendor.resolveComponent("detail-goods-info");
  const _component_detail_param_info = common_vendor.resolveComponent("detail-param-info");
  const _component_detail_comment_info = common_vendor.resolveComponent("detail-comment-info");
  const _component_detail_recommend_info = common_vendor.resolveComponent("detail-recommend-info");
  const _component_detail_bottom_bar = common_vendor.resolveComponent("detail-bottom-bar");
  (_component_detail_nav_bar + _component_detail_swiper + _component_detail_base_info + _component_detail_shop_info + _component_detail_goods_info + _component_detail_param_info + _component_detail_comment_info + _component_detail_recommend_info + _component_detail_bottom_bar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($setup.handleNavBarItemClick),
    b: $setup.currentNavBarIndex === 0
  }, $setup.currentNavBarIndex === 0 ? {
    c: common_vendor.sr("base", "5594af00-1"),
    d: common_vendor.p({
      banners: $setup.topImages
    }),
    e: common_vendor.p({
      good: $setup.good
    }),
    f: common_vendor.p({
      shop: $setup.shop
    }),
    g: common_vendor.p({
      detailInfo: $setup.detailInfo
    })
  } : $setup.currentNavBarIndex === 1 ? {
    i: common_vendor.sr("param", "5594af00-5"),
    j: common_vendor.p({
      ["param-info"]: $setup.paramInfo
    })
  } : $setup.currentNavBarIndex === 2 ? {
    l: common_vendor.sr("comment", "5594af00-6"),
    m: common_vendor.p({
      ["comment-info"]: $setup.commentInfo
    })
  } : {
    n: common_vendor.sr("recommend", "5594af00-7"),
    o: common_vendor.p({
      ["recommend-list"]: $setup.recommendList
    })
  }, {
    h: $setup.currentNavBarIndex === 1,
    k: $setup.currentNavBarIndex === 2,
    p: $setup.scrollTop,
    q: common_vendor.o((...args) => $setup.handleScroll && $setup.handleScroll(...args)),
    r: common_vendor.o($setup.addToCart)
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/Day03/\u9884\u4E60\u4EE3\u7801/01-uni-app/HYUniappMall/pages/detail/index.vue"]]);
wx.createPage(MiniProgramPage);
