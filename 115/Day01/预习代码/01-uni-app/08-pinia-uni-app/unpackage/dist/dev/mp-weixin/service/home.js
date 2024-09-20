"use strict";
const service_index = require("./index.js");
const getHomeData = () => {
  return service_index.hyRequest.get("/recommend", {});
};
exports.getHomeData = getHomeData;
