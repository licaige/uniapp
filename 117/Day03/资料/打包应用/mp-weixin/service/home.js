"use strict";const e=require("./index.js");exports.getHomeData=(t,a)=>e.hyRequest.get("/home/data",{type:t,page:a}),exports.getHomeMutidata=()=>e.hyRequest.get("/home/multidata",{});
