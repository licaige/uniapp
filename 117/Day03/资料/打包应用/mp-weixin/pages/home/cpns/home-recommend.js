"use strict";const e=require("../../../common/vendor.js"),m={__name:"home-recommend",props:{recommends:{type:Array,default:()=>[]}},emits:["itemClick"],setup:(m,{emit:t})=>(o,c)=>({a:e.f(m.recommends,((m,o,c)=>({a:m.image,b:e.t(m.title),c:e.o((e=>function(e){t("itemClick",e)}(m))),d:m})))})};wx.createComponent(m);
