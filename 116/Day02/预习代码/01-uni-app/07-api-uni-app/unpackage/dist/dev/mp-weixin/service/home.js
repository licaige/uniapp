"use strict";
const service_index = require("./index.js");
const getHomeData = () => {
  return service_index.hyRequest.get("/recommend", {});
};
const getJuanpiHomeData = () => {
  return service_index.hyRequest.post("/goods", {
    page: 1,
    count: 10
  });
};
exports.getHomeData = getHomeData;
exports.getJuanpiHomeData = getJuanpiHomeData;
