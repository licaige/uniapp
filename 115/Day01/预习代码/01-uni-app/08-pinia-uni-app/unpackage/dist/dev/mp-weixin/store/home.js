"use strict";
const common_vendor = require("../common/vendor.js");
const service_home = require("../service/home.js");
const useHomeStore = common_vendor.defineStore("home", {
  state: () => {
    return {
      homeData: {}
    };
  },
  actions: {
    async getHomePageData() {
      const res = await service_home.getHomeData();
      this.homeData = res.data || {};
    }
  }
});
exports.useHomeStore = useHomeStore;
