
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/navigation/ShouYe/ShouYe","pages/guide/judge","pages/guide/guide","pages/index/index","pages/login/login","pages/login/register","pages/navigation/Middle/Middle","pages/navigation/WoDe/WoDe","components/tabbar/tabbar","pages/navigation/ShouYe/XiangQing/XiangQing","pages/navigation/ShouYe/furniture_modeling/furniture_modeling","pages/navigation/ShouYe/furniture_modeling/model_result","pages/navigation/ShouYe/furniture_shop/furniture_shop","pages/commponent/search/search","pages/navigation/ShouYe/furniture_shop/classList","pages/shop/goods/MutiModel","pages/shop/goods/goodsDetails","pages/shop/goods/goodsEvaluate","pages/navigation/WoDe/shoucang/mycollection","pages/shop/goods/cart","pages/shop/goods/order/confirmOrder","pages/shop/goods/myaddress","pages/shop/goods/address/edit","pages/shop/goods/order/success","pages/shop/goods/order/orderList","pages/shop/goods/order/orderDetails","pages/shop/goods/order/evaluate/evaluate","pages/draw/draw2D","pages/family/Myfaily","pages/navigation/WoDe/YINSI/YINSI","pages/navigation/Middle/AR/AR","pages/draw/draw3d","pages/draw/UploadImage","pages/navigation/ShouYe/XiangQing/yijian"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"次世代家装","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"networkTimeout":{"request":300000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"HousePaint","compilerVersion":"3.7.11","entryPagePath":"pages/navigation/ShouYe/ShouYe"};
var __uniRoutes = [{"path":"/pages/navigation/ShouYe/ShouYe","meta":{"isQuit":true},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/guide/judge","meta":{},"window":{"enablePullDownRefresh":false,"onReachBottomDistance":100,"navigationStyle":"custom","contentAdjust":false,"bounce":"none"}},{"path":"/pages/guide/guide","meta":{},"window":{"enablePullDownRefresh":false,"onReachBottomDistance":100,"navigationStyle":"custom","contentAdjust":false,"bounce":"none"}},{"path":"/pages/index/index","meta":{},"window":{"navigationBarTitleText":"uni-app"}},{"path":"/pages/login/login","meta":{},"window":{"navigationStyle":"custom","enablePullDownRefresh":true,"titleView":false}},{"path":"/pages/login/register","meta":{},"window":{"navigationStyle":"custom","enablePullDownRefresh":true,"titleView":false}},{"path":"/pages/navigation/Middle/Middle","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/navigation/WoDe/WoDe","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/components/tabbar/tabbar","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/navigation/ShouYe/XiangQing/XiangQing","meta":{},"window":{"navigationStyle":"custom","enablePullDownRefresh":true,"titleView":false}},{"path":"/pages/navigation/ShouYe/furniture_modeling/furniture_modeling","meta":{},"window":{"navigationStyle":"custom","enablePullDownRefresh":true,"titleView":false}},{"path":"/pages/navigation/ShouYe/furniture_modeling/model_result","meta":{},"window":{"navigationStyle":"custom","enablePullDownRefresh":false,"titleView":false}},{"path":"/pages/navigation/ShouYe/furniture_shop/furniture_shop","meta":{},"window":{"navigationBarTitleText":"首页","navigationBarBackgroundColor":"#fa436a","navigationBarTextStyle":"white","titleNView":false,"bounce":"none"}},{"path":"/pages/commponent/search/search","meta":{},"window":{"navigationBarTitleText":"搜索","navigationBarBackgroundColor":"#F8F8F8"}},{"path":"/pages/navigation/ShouYe/furniture_shop/classList","meta":{},"window":{"navigationBarTitleText":"商品列表","navigationStyle":"custom","titleNView":false,"bounce":"none"}},{"path":"/pages/shop/goods/MutiModel","meta":{},"window":{"navigationBarTitleText":"多模态检索结果","navigationStyle":"custom","titleNView":false,"bounce":"none"}},{"path":"/pages/shop/goods/goodsDetails","meta":{},"window":{"navigationStyle":"custom","navigationBarTitleText":"商品详情"}},{"path":"/pages/shop/goods/goodsEvaluate","meta":{},"window":{"navigationBarTitleText":"所有评价","navigationBarBackgroundColor":"#F8F8F8","bounce":"none"}},{"path":"/pages/navigation/WoDe/shoucang/mycollection","meta":{},"window":{"navigationBarTitleText":"我的收藏","navigationStyle":"custom","titleNView":false,"bounce":"none"}},{"path":"/pages/shop/goods/cart","meta":{},"window":{"navigationBarTitleText":"购物车","titleNView":false,"bounce":"none"}},{"path":"/pages/shop/goods/order/confirmOrder","meta":{},"window":{"navigationBarTitleText":"确认订单","navigationBarBackgroundColor":"#F8F8F8"}},{"path":"/pages/shop/goods/myaddress","meta":{},"window":{"navigationBarTitleText":"收货地址","navigationBarBackgroundColor":"#F8F8F8","enablePullDownRefresh":true}},{"path":"/pages/shop/goods/address/edit","meta":{},"window":{"navigationBarTitleText":"编辑收货地址","navigationBarBackgroundColor":"#F8F8F8"}},{"path":"/pages/shop/goods/order/success","meta":{},"window":{"navigationBarTitleText":"支付结果","navigationStyle":"custom","titleNView":false}},{"path":"/pages/shop/goods/order/orderList","meta":{},"window":{"navigationBarTitleText":"我的订单","navigationStyle":"custom","titleNView":false,"bounce":"none"}},{"path":"/pages/shop/goods/order/orderDetails","meta":{},"window":{"navigationBarTitleText":"订单详情","navigationBarBackgroundColor":"#F8F8F8"}},{"path":"/pages/shop/goods/order/evaluate/evaluate","meta":{},"window":{"navigationBarTitleText":"商品评价","navigationBarBackgroundColor":"#F8F8F8"}},{"path":"/pages/draw/draw2D","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/family/Myfaily","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/navigation/WoDe/YINSI/YINSI","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/navigation/Middle/AR/AR","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/draw/draw3d","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/draw/UploadImage","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/navigation/ShouYe/XiangQing/yijian","meta":{},"window":{"navigationBarTitleText":"一键装修","navigationBarBackgroundColor":"#F8F8F8"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
