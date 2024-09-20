"use strict";
const common_vendor = require("../common/vendor.js");
const useCounterStore = common_vendor.defineStore("counter", {
  state: () => {
    return {
      counter: 888
    };
  },
  actions: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter = this.counter - 1;
    }
  }
});
exports.useCounterStore = useCounterStore;
