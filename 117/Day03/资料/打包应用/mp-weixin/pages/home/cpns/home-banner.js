"use strict";const e=require("../../../common/vendor.js"),n={__name:"home-banner",props:{banners:{type:Array,default:()=>[]}},emits:["bannerItemClick"],setup:(n,{emit:r})=>(t,a)=>({a:e.f(n.banners,((n,t,a)=>({a:n.image,b:e.o((e=>function(e){r("bannerItemClick",e.link)}(n))),c:n})))})};wx.createComponent(n);
