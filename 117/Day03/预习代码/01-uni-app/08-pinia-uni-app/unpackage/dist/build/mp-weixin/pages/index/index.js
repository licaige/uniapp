"use strict";const e=require("../../common/vendor.js"),r=require("../../store/counter.js"),o=require("../../store/home.js");require("../../service/home.js"),require("../../service/index.js");const t={__name:"index",setup(t){const n=r.useCounterStore(),s=o.useHomeStore(),{counter:u}=e.storeToRefs(n),{homeData:c}=e.storeToRefs(s);function i(){n.increment()}function m(){n.decrement()}function a(){s.getHomePageData()}return(r,o)=>({a:e.o(i),b:e.o(m),c:e.t(e.unref(u)),d:e.o(a),e:e.t(e.unref(c))})}};wx.createPage(t);
