(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-goods-order-confirmOrder"],{"0092":function(t,e,i){"use strict";i.r(e);var o=i("fc1e"),s=i("5c91");for(var n in s)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("58a4");var a=i("f0c5"),d=Object(a["a"])(s["default"],o["b"],o["c"],!1,null,"84a86510",null,!1,o["a"],void 0);e["default"]=d.exports},"0915":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"order"},[i("v-uni-view",{staticClass:"mode",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectMode.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"text1"},[t._v("配送方式")]),i("v-uni-text",{staticClass:"text2"},[t._v(t._s(t.modes||"请选择配送方式"))]),i("v-uni-image",{attrs:{src:"/static/ultis/right.png"}})],1),0==t.tapIndex?i("v-uni-view",{staticClass:"order_address"},[i("v-uni-image",{attrs:{src:"/static/ultis/bottom.png"}}),i("v-uni-view",{staticClass:"address_box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setAddress.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"weizhi_icon"},[i("v-uni-text",{staticClass:"iconfont icon-dizhi",style:"color:"+t.colors})],1),null!=t.address&&t.address.nickname&&""!==t.address.nickname?[i("v-uni-view",{staticClass:"center"},[i("v-uni-view",{staticClass:"name"},[i("v-uni-text",{staticClass:"text1"},[t._v(t._s(t.address.nickname))]),i("v-uni-text",{staticClass:"phones"},[t._v(t._s(t.address.phone))])],1),i("v-uni-view",{staticClass:"address_name"},[t._v(t._s(t.address.addressCity)+"-"+t._s(t.address.address))])],1)]:i("v-uni-view",{staticClass:"noaddress"},[t._v("请添加收货地址")])],2)],1):t._e(),t._l(t.goodsList,(function(e,o){return i("v-uni-view",{key:o,staticClass:"goods"},[i("v-uni-view",{staticClass:"goods_data"},[null!=e.imageUrl?i("v-uni-image",{attrs:{src:e.imageUrl[0].imageUrl,mode:"widthFix"}}):t._e(),i("v-uni-view",{staticClass:"goods_title"},[i("v-uni-view",{staticClass:"g_name"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"goods_sku"},[t._v("规格:"),i("v-uni-text",{staticStyle:{"margin-right":"10upx"}},[t._v("暂无规格")])],1),i("v-uni-view",{staticClass:"price"},[i("v-uni-view",{staticClass:"t1",style:"color:"+t.colors},[t._v("￥"+t._s(e.price))]),i("v-uni-view",{staticClass:"t2"},[i("v-uni-text",[t._v("￥"+t._s((1.2*e.price).toFixed(2)))])],1),i("v-uni-view",{staticClass:"t3"},[t._v("x"+t._s(e.number))])],1)],1)],1),i("v-uni-view",{staticClass:"morelist",staticStyle:{"border-bottom":"none"}},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",{staticClass:"quan",style:"background:"+t.colors},[t._v("券")]),i("v-uni-text",[t._v("优惠券")])],1),i("v-uni-view",{staticClass:"right_title",style:"color:"+t.colors+";font-size:24upx",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openCoupon(o)}}},[t._v(t._s(e.couponName||"请选择优惠券"))])],1)],1)})),i("v-uni-view",{staticClass:"order_more"},[i("v-uni-view",{staticClass:"morelist"},[i("v-uni-text",{staticClass:"title"},[t._v("商品总价")]),i("v-uni-view",{staticClass:"right_title"},[t._v("￥"+t._s(t.nowprice))])],1),i("v-uni-view",{staticClass:"morelist"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",{staticClass:"quan",style:"background:"+t.colors},[t._v("运")]),i("v-uni-text",[t._v("运费")])],1),i("v-uni-view",{staticClass:"right_title"},[t._v("￥"+t._s(t.yunfei))])],1),i("v-uni-view",{staticClass:"morelist"},[i("v-uni-text",{staticClass:"title"},[t._v("实付款")]),i("v-uni-view",{staticClass:"right_title",style:"color:"+t.colors+";"},[t._v("￥"+t._s(t.sumprice))])],1),i("v-uni-view",{staticClass:"tips"},[i("v-uni-view",{staticClass:"tips_name"},[t._v("备注信息")]),i("v-uni-view",{staticClass:"textarea_box"},[0==t.couponshow?i("v-uni-textarea",{attrs:{placeholder:"请输入备注信息","placeholder-class":"font-size: 24upx",maxlength:"-1"},model:{value:t.beizhu,callback:function(e){t.beizhu=e},expression:"beizhu"}}):t._e()],1)],1)],1),i("v-uni-view",{staticClass:"bottom_btn"},[i("v-uni-view",{staticClass:"moneys"},[t._v("合计:"),i("v-uni-text",{style:"color:"+t.colors+";"},[t._v("￥"+t._s(t.sumprice))])],1),i("v-uni-view",{staticClass:"btns",style:"background:"+t.colors+";",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交订单")])],1),1==t.couponshow?i("v-uni-view",{staticClass:"mask",attrs:{catchtouchmove:"preventTouchMove"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hidecoupon.apply(void 0,arguments)}}}):t._e(),i("v-uni-view",{staticClass:"coupon",style:"bottom:"+(1==t.couponshow?"0":"")},[i("v-uni-view",{staticClass:"buyong",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.notUsed()}}},[t._v("不使用优惠券")]),i("v-uni-scroll-view",{staticClass:"scrolls",attrs:{"scroll-y":!0}},[i("coupon",{attrs:{couponList:t.couponList},on:{onReceive:function(e){arguments[0]=e=t.$handleEvent(e),t.onReceive.apply(void 0,arguments)}}})],1)],1)],2)},s=[]},"0dc1":function(t,e,i){"use strict";i.r(e);var o=i("7fd4"),s=i.n(o);for(var n in o)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(n);e["default"]=s.a},"12a9":function(t,e,i){"use strict";var o=i("f28b"),s=i.n(o);s.a},2036:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.coupon_box[data-v-84a86510]{margin:%?20?%;padding:%?20?%;box-shadow:%?0?% %?0?% %?10?% #ddd;position:relative;border-radius:%?10?%;padding-bottom:%?10?%;overflow:hidden}.coupon_box .left[data-v-84a86510]{display:flex;align-items:center;flex-wrap:wrap;border-bottom:%?1?% solid #eee;padding-bottom:%?20?%;position:relative}.coupon_box .left .ylq[data-v-84a86510]{width:%?60?%;height:%?45?%;position:absolute;top:0;right:%?140?%}.coupon_box .left .hui[data-v-84a86510]{width:%?40?%;height:%?40?%;font-size:%?22?%;color:#fff;background-color:rgba(255,84,110,.8);border-radius:%?8?%;line-height:%?40?%;text-align:center;display:inline-block;-webkit-transform:translateY(%?-5?%);transform:translateY(%?-5?%)}.coupon_box .left .left_top[data-v-84a86510]{width:80vw;display:block;font-size:%?26?%;font-weight:700}.left_top .hui_name[data-v-84a86510]{line-height:%?60?%;height:%?60?%;margin-left:%?20?%;display:inline-block;font-size:%?28?%}.left_bottom[data-v-84a86510]{font-size:%?24?%;font-weight:500;color:#333;height:%?60?%;line-height:%?60?%}.coupon_box .right[data-v-84a86510]{position:absolute;right:%?20?%;top:%?25?%;text-align:center}.coupon_box .right .money[data-v-84a86510]{font-size:%?45?%;margin-bottom:%?10?%}.coupon_box .right uni-text[data-v-84a86510]{font-size:%?24?%;color:#999}.coupon_box .bottom[data-v-84a86510]{height:%?60?%;line-height:%?60?%;display:flex;align-content:flex-start;font-size:%?24?%;margin-top:%?10?%}.coupon_box .bottom uni-view[data-v-84a86510]{margin-right:%?20?%;color:#888}',""]),t.exports=e},"58a4":function(t,e,i){"use strict";var o=i("6ad1"),s=i.n(o);s.a},"5c91":function(t,e,i){"use strict";i.r(e);var o=i("6ce2"),s=i.n(o);for(var n in o)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(n);e["default"]=s.a},"663c":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-15d7de58]{background-color:#fff}body.?%PAGE?%[data-v-15d7de58]{background-color:#fff}.order[data-v-15d7de58]{padding:%?20?% 4%}.mode[data-v-15d7de58]{height:%?80?%;line-height:%?80?%;display:flex;justify-content:space-between;background-color:#fff;padding:0 %?20?%;border-radius:%?10?%;align-items:center;margin-bottom:%?20?%;box-shadow:%?0?% %?0?% %?10?% #ddd}.mode[data-v-15d7de58]:active{background-color:#f5f5f5}.mode .text1[data-v-15d7de58]{color:#999;font-size:%?24?%}.mode .text2[data-v-15d7de58]{font-size:%?24?%;color:#333;display:block;width:50%;font-weight:700}.mode uni-image[data-v-15d7de58]{width:%?40?%;height:%?40?%;display:block}.order_address[data-v-15d7de58]{height:%?150?%;width:100%;background-color:#fff;border-radius:%?10?%;overflow:hidden;position:relative;box-shadow:%?0?% %?0?% %?10?% #ddd}.order_address uni-image[data-v-15d7de58]{width:100%;height:100%;display:block;position:absolute;top:0;left:0;z-index:10}.address_box[data-v-15d7de58]{width:100%;height:100%;display:block;position:absolute;top:0;left:0;z-index:10;box-sizing:border-box;padding:%?20?%;display:flex;align-items:center}.weizhi_icon uni-text[data-v-15d7de58]{font-size:%?40?%;margin-left:%?10?%}.address_box .center[data-v-15d7de58]{margin-left:%?20?%}.address_box .center .name[data-v-15d7de58]{height:%?60?%;line-height:%?60?%}.address_box .center .name .text1[data-v-15d7de58]{font-size:%?26?%;font-weight:700;color:#333;display:inline-block;margin-right:%?20?%}.phones[data-v-15d7de58]{font-size:%?24?%;color:#999;z-index:0}.address_box .address_name[data-v-15d7de58]{font-size:%?26?%;font-weight:700;color:#333}.noaddress[data-v-15d7de58]{margin-left:%?40?%;font-weight:700;color:#333;font-size:%?26?%}.goods[data-v-15d7de58]{background-color:#fff;margin-top:%?20?%;box-shadow:%?0?% %?0?% %?10?% #ddd;border-radius:%?10?%;padding:%?20?%;padding-bottom:%?10?%}.goods_data[data-v-15d7de58]{width:100%;display:flex;margin-bottom:%?15?%}.goods_data uni-image[data-v-15d7de58]{min-width:%?150?%;max-width:%?150?%;height:%?150?%;display:block;border-radius:%?10?%}.goods_title[data-v-15d7de58]{margin-left:%?20?%;line-height:%?40?%;width:100%}.goods_title .price[data-v-15d7de58]{width:100%;display:flex;height:%?40?%;line-height:%?40?%;margin-top:%?20?%;position:relative}.goods_title .price .t1[data-v-15d7de58]{font-size:%?30?%;font-weight:700;display:block}.goods_title .price .t2[data-v-15d7de58]{font-size:%?24?%;margin-left:%?15?%;display:block;color:#999;text-decoration:line-through}.goods_title .price .t3[data-v-15d7de58]{float:right;font-weight:700;font-size:%?28?%;color:#999;position:absolute;right:%?0?%;top:0}.goods_title .g_name[data-v-15d7de58]{font-size:%?26?%;font-weight:700;max-height:%?80?%;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.goods_title .goods_sku[data-v-15d7de58]{color:#999\r\n  /* margin-top: 20upx; */}.numbers[data-v-15d7de58]{\r\n  /* text-align: right; */}.shop[data-v-15d7de58]{margin-top:%?20?%;font-size:%?24?%;color:#333;display:flex;align-content:center}.shop .iconfont[data-v-15d7de58]{margin-right:%?20?%}.order_more[data-v-15d7de58]{padding:0 2%;margin-top:%?20?%}.morelist[data-v-15d7de58]{height:%?80?%;line-height:%?80?%;display:flex;justify-content:space-between;border-bottom:%?1?% dashed #eee}.morelist .title[data-v-15d7de58]{color:#333;font-size:%?26?%;font-weight:700;display:flex;align-items:center}.morelist .title .quan[data-v-15d7de58]{font-size:%?20?%;width:%?35?%;height:%?35?%;line-height:%?36?%;text-align:center;border-radius:%?8?%;margin-right:%?10?%;align-items:center;color:#fff}.morelist .right_title[data-v-15d7de58]{color:#999}.tips[data-v-15d7de58]{padding:%?10?% 0;margin-bottom:%?120?%}.tips .tips_name[data-v-15d7de58]{font-size:%?26?%;font-weight:700;line-height:%?60?%}.textarea_box[data-v-15d7de58]{min-height:%?100?%;width:100%;border:%?1?% solid #eee;border-radius:%?10?%;padding:%?20?%}.textarea_box uni-textarea[data-v-15d7de58]{font-size:%?24?%;height:%?150?%}.bottom_btn[data-v-15d7de58]{height:%?100?%;width:100vw;background-color:#fff;position:fixed;left:0;bottom:0;line-height:%?100?%;display:flex;justify-content:flex-end;padding:0 %?30?%;z-index:100;font-weight:700}.bottom_btn .moneys[data-v-15d7de58]{font-size:%?28?%;font-weight:700;margin-right:%?100?%}.bottom_btn .btns[data-v-15d7de58]{font-size:%?28?%;color:#fff;height:%?60?%;line-height:%?60?%;padding:0 %?25?%;text-align:center;border-radius:%?40?%;margin-top:%?20?%;font-weight:700}\r\n/* 优惠券 */.coupon[data-v-15d7de58]{background-color:#fff;border-radius:%?10?% %?10?% 0 0;position:fixed;left:0;bottom:%?-1000?%;z-index:150;transition:all .3s}.coupon .buyong[data-v-15d7de58]{line-height:%?80?%;padding:0 4%;text-align:right;color:#999}.mask[data-v-15d7de58]{width:100%;height:100%;position:fixed;top:0;left:0;background:#000;z-index:10;opacity:.7}.scrolls[data-v-15d7de58]{width:100vw;height:55vh;z-index:500}',""]),t.exports=e},"6ad1":function(t,e,i){var o=i("2036");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var s=i("4f06").default;s("e820970e",o,!0,{sourceMap:!1,shadowMode:!1})},"6ce2":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{}},components:{},props:{colors:{type:String},couponList:{type:Array}},methods:{onreceive:function(t,e){1!=t.status&&this.$emit("onReceive",t,e)}}};e.default=o},"7fd4":function(t,e,i){"use strict";i("7a82");var o=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("14d9"),i("d3b7"),i("159b"),i("a9e3"),i("13d5");var s=o(i("0092")),n=getApp(),a={data:function(){return{yunfei:0,colors:"",couponshow:!1,modes:"物流寄送",tapIndex:0,goodsList:[],couponIndex:0,nowprice:0,sumprice:0,address:null,couponList:[],beizhu:""}},components:{coupon:s.default},props:{},onLoad:function(t){var e=uni.getStorageSync("confirmOrder");Array.isArray(e)?this.goodsList=e:this.goodsList.push(e),console.log(this.goodsList),this.getAddress(),this.getSumPrice(),this.setData({colors:n.globalData.newColor})},methods:{getAddress:function(){var t=this,e=uni.getStorageSync("nowaddress");console.log(e),0==e||null==e||void 0==e?this.request(this.server_url+"order/address_list",{},"GET").then((function(e){if(0==e.code)if(0==e.data.length)uni.showToast({title:"没有地址欧",icon:"none"});else for(var i=0;i<e.data.length;i++)if(e.data[i].default){t.address=e.data[i];break}})):this.address=e,uni.setStorageSync("nowaddress",!1)},getSumPrice:function(){var t=0;this.goodsList.forEach((function(e){t+=e.price*e.number})),this.nowprice=t.toFixed(2),this.yunfei=(t/100).toFixed(2),this.sumprice=(Number(t)+t/100).toFixed(2)},openCoupon:function(t){this.setData({couponshow:!0,couponIndex:t})},hidecoupon:function(){this.setData({couponshow:!1})},submit:function(){for(var t=this,e=0;e<this.goodsList.length;e++){var i={goods_id:this.goodsList[e].goodsId,address_id:this.address.addressId,count:this.goodsList[e].number,yunfei:(this.goodsList[e].price*this.goodsList[e].number/100).toFixed(2),AllPrice:(this.goodsList[e].price*this.goodsList[e].number*1.01).toFixed(2),beizhu:this.beizhu};console.log(i),this.request(this.server_url+"order/add",i,"POST").then((function(o){console.log(o),0==o.code&&(i={orderId:t.goodsList[e].goodsId,status:"待发货"},t.request(t.server_url+"order/change_status",i,"POST").then((function(t){})))}))}uni.setStorageSync("AllPirce",this.sumprice),uni.setStorageSync("success_detail",i),uni.redirectTo({url:"/pages/shop/goods/order/success"})},selectMode:function(){var t=this,e=["物流寄送","到店自提(暂不支持)"];uni.showActionSheet({itemList:e,success:function(i){console.log(i),t.setData({modes:e[i.tapIndex],tapIndex:i.tapIndex})}})},setAddress:function(){uni.navigateTo({url:"/pages/shop/goods/myaddress?type=select"})},onReceive:function(t,e){this.couponshow=!1,this.goodsList[this.couponIndex].couponName="满"+t.money+"减"+t.reduce,this.goodsList[this.couponIndex].couponReduce=t.reduce,this.sumprice=this.sumprice-t.reduce},notUsed:function(){this.couponshow=!1,this.goodsList[this.couponIndex].couponName="",this.goodsList[this.couponIndex].couponReduce&&(this.sumprice=this.sumprice+Number(this.goodsList[this.couponIndex].couponReduce))}}};e.default=a},a42c:function(t,e,i){"use strict";i.r(e);var o=i("0915"),s=i("0dc1");for(var n in s)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("12a9");var a=i("f0c5"),d=Object(a["a"])(s["default"],o["b"],o["c"],!1,null,"15d7de58",null,!1,o["a"],void 0);e["default"]=d.exports},f28b:function(t,e,i){var o=i("663c");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var s=i("4f06").default;s("1d91661b",o,!0,{sourceMap:!1,shadowMode:!1})},fc1e:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",t._l(t.couponList,(function(e,o){return i("v-uni-view",{key:o,staticClass:"coupon_box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onreceive(e,o)}}},[i("v-uni-view",{staticClass:"left"},[i("v-uni-view",{staticClass:"left_top"},[i("v-uni-text",{staticClass:"hui"},[t._v("券")]),i("v-uni-text",{staticClass:"hui_name"},[t._v("满"+t._s(e.money)+"减"+t._s(e.reduce))])],1),i("v-uni-view",{staticClass:"left_bottom"},[i("v-uni-text",[t._v("有效日期："+t._s(e.date))])],1),1==e.status?i("v-uni-image",{staticClass:"ylq",attrs:{src:"/static/images/goods/ylq.png"}}):t._e()],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-view",{staticClass:"money"},[t._v("￥"+t._s(e.reduce))]),i("v-uni-text",[t._v("满"+t._s(e.money)+"可用")])],1),i("v-uni-view",{staticClass:"bottom"},t._l(e.condition,(function(e,o){return i("v-uni-view",{key:o},[t._v(t._s(o+1)+"."+t._s(e))])})),1)],1)})),1)},s=[]}}]);