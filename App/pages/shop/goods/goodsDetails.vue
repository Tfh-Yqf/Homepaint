<template>
	<view class="goodsDetails">
		<!-- 顶部自定义导航栏 -->
		<view class="top_nav">
			<navBar textcolor="#000" :showLeft="true" :showTitle="false"></navBar>
		</view>
		<!-- 轮播图 -->
		<swipers :goodsData="goodsData" @setShowVideo="setShowVideo"></swipers>
		<!-- 占位 -->
		<!-- #ifndef MP -->
		<view class="place" :style="'top:-' + toBar"></view>
		<!-- #endif -->
		<!-- 商品信息 -->
		<view class="goods_info">
			<view class="goods_name">
				{{goodsData.title}}
			</view>
			<view class="goods_price">
				<text class="money">￥{{goodsData.price}}</text>
				<text class="h_money">￥{{(goodsData.price*1.2).toFixed(2)}}</text>
			</view>
			
			<view class="shoucang" style="right: 50upx;width: 100px;display: flex;flex-direction: column;justify-content: center;margin-top: 2rpx;" @click="AddToWareHouse()">
				<image src="@/static/ultis/AddToWareHouse.png" mode="widthFix" style="width: 20px;"></image>
				<text class="sc_text">加入家具库</text>
			</view>

			<view class="shoucang">
				<view class="sc_icons" @tap="setisColl">
					<text :class="['iconfont',isColl == true?'icon-shoucang1':'icon-shoucang'] " :style="{color: isColl == true? colors :''}"></text>
				</view>
				<view class="sc_text" :style="{color: isColl == true? colors :''}">收藏</view>
			</view>
		</view>
		<view class="other">
			<p v-if="goodsData.baoyou == true">快递:包邮</p>
			<p v-else>快递费:{{(goodsData.price/100).toFixed(2)}}元</p>
			<p>销量:100</p>
		</view>
		<!-- 分享按钮 -->
		<view class="share">
			<view class="tips" style="color: #666;">
				<text class="iconfont icon-zuanshi" style="color: #FF546E;font-size: 38upx;font-weight: 600;"></text>
				分享商品可获得商城积分
			</view>
			<!-- #ifdef MP -->
			<view class="onshare" style="color: #FF546E;">
				<text class="iconfont icon-fenxiang"></text>
				<button open-type="share" class="share_btn">1</button>
				立即分享
			</view>
			<!-- #endif -->
			<view class="poster" style="color: #FF546E;" @tap="openPoster">
				<text class="iconfont icon-CombinedShape"></text>
				生成海报
			</view>
		</view>
		<!-- 店铺信息 -->
		<view class="shop">
			<image class="shop_img" src="/static/logo.png" mode="widthFix" style="width: 50px;"></image>
			<view class="shop_center">
				<view class="shop_name">次世代家装</view>
				<view class="shop_address">软件创新大赛工作组</view>
			</view>
			<!-- #ifdef MP -->
			<view class="shoucang go_btn" @tap="nearAddress">
				<view class="sc_icons">
					<text class="iconfont icon-dizhi"></text>
				</view>
				<view class="sc_text">到这去</view>
			</view>
			<!-- #endif -->
			<!-- #ifndef MP -->
			<!-- 直接打开地图需要传递店铺的经纬度 来获取店铺的位置 -->
			<view class="shoucang go_btn" @tap="openMap">
				<view class="sc_icons">
					<text class="iconfont icon-dizhi"></text>
				</view>
				<view class="sc_text">到这去</view>
			</view>
			<!-- #endif -->
		</view>
		<!-- 选择规格和优惠券 -->
		<view class="sku_pon">
			<view class="cell" @tap="openSku">
				<text class="text1">商品规格：</text>
				<text class="text2">类型...</text>
				<image src="/static/ultis/right.png"></image>
			</view>
			<view class="cell" style="border:none" >
				<text class="text1">优 惠 券：</text>
				<text class="text2" :style="{color: colors}">暂无优惠卷</text>
				<image src="/static/ultis/right.png"></image>
			</view>
		</view>
		<!-- 商品评价 -->
		<view class="evaluate">
			<p class="eva_title">
				商品评价<text v-if="goodsData.appraise != null">({{goodsData.appraise.length}})</text>
				<text class="seeAll" @click="seeAll">查看全部</text>
			</p>
			<view class="evaluate_box">
				<view class="pingjia">
					<view v-if="goodsData.appraise != null">
						<view class="pingjia_box" v-for="(row, index) in goodsData.appraise" :key="index">
							<view class="box_top">
								<image v-if="row.user != null" :src="row.user.avatar" mode="" class="head"></image>
								<view class="right">
									<p class="name">{{ row.user.username }}</p>
									<p class="p2">
										<text class="text1">{{ row.time.substring(0,10) }}</text>
										<text class="text2">{{ row.time.substring(0,10) }}</text>
									</p>

								</view>
							</view>
							<view class="tag_box" v-if="row.tags!=null && row.tags.length !== 0">
								<view class="tags" v-for="(s,x) in row.tags" :key="x">{{s}}</view>
							</view>
							<view class="ping_neirong">{{ row.appraise }}</view>
							<view class="ping_img" v-if="row.images!=null && row.images.length !== 0">
								<image :src="s" mode="" v-for="(s,x) in row.images" :key="x" @click="preview(row.images, x)"></image>
							</view>
							<!-- 回复 -->
							<view class="huifu" v-if="row.reply && row.reply !== ''">商家回复：{{ row.reply }}</view>
						</view>
					</view>
				
				</view>
			</view>
		</view>

		<!-- 商品详情 -->
		<view class="details">
			<view class="details_title">
				—— <text style="color: #666666;margin: 0 20upx;"> 商品详情 </text> ——
			</view>
			<view class="details_content">
				<rich-text :nodes="htmlNode"></rich-text>
				<view v-for="(item,index) in goodsData.goodsDetail" :src="item.image" hasdata="1" style="line-height: 2; transform-origin: 0px 0px; font-size: 30px;width:100%;"></view>
				
			</view>
		</view>
		<!-- 底部操作栏 -->
		<view class="operation">
			<view style="display: flex;align-items: center;margin-left: 5px;" @click="jump_3d">
				<image src="../../../static/ultis/3D.png" style="width: 20px;" mode="widthFix"></image>
				<text style="color: #fa436a;margin-left: 5px;">3D展示</text>
			</view>

			<view class="btns">
				<view class="addcart" :style="'border-color:' + colors + ';color:' + colors" @tap="openSku">
					加入购物车
				</view>
				<view class="dingjin" :style="'background:' + colors" @tap="openSku">
					立 即 购 买
				</view>
			</view>
		</view>
		<!-- 规格弹出层 -->
		<sku :skuList="nowList" :showModal="showModal" :colors="colors" bottoms="0" @onhide="onhide"></sku>
		<!-- 选择优惠券弹出层 -->
		<view class="mask" catchtouchmove="preventTouchMove" v-if="couponshow == true" @tap="hidecoupon"></view>
		<view class="coupon" :style="'bottom:' + (couponshow == true ? '0px':'')">
			<scroll-view class="scrolls" scroll-y>
				<coupon :colors="colors" :couponList="couponList" @onReceive="onReceive"></coupon>
			</scroll-view>
		</view>
		<!-- 返回顶部按钮 -->
		<view class="go_top" :style="'right: ' + (scrollShow == true ? '3%':'-200upx')">
			<view class="ontop" @tap="goTop">
				<image src="/static/images/home/TOP.png"></image>
			</view>
		</view>

		


	</view>
</template>

<script>
	
	var app = getApp();

	import navBar from "@/pages/commponent/public/navBar";
	import sku from "@/pages/commponent/public/sku";
	import coupon from "@/pages/commponent/public/coupon";
	import loading from "@/pages/commponent/public/loading";
	import poster from '@/pages/commponent/goods/poster.vue'
	import swipers from './swiper/swiper.vue'

	export default {
		data() {
			return {
				colors: '',
				shows: false,
				statusBarHeight: app.globalData.statusHeight + 'px',
				toBar: app.globalData.toBar+ 'px',
				showdots: false,
				swiperList: [],
				isColl: false,
				latitude: '',
				longitude: '',
				nowList: {},
				goodsData: {
					imageUrl:[],
					appraise:null
				},
				showModal: false,
				couponshow: false,
				isshowVideo: true,
				voice: false,
				showVideo: false,
				isShow: true,
				couponList: [],
				htmlNode: '',
				// 商品详情
				descriptionStr: '',

				goodsEva: [],
				scrollShow: false
			};
		},
		components: {
			navBar,
			sku,
			coupon,
			loading,
			poster,
			swipers
		},
		props: {},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			this.setData({ //设置主题颜色
				colors: app.globalData.newColor
			});
			this.getLocation(); //获取位置信息
			this.setFrom(this.descriptionStr); //处理商品详情

			// #ifdef APP-PLUS
			this.toBar = app.globalData.toBar + 25 + 'px'
			// #endif

		},

		mounted(){
			var goodsDetail = uni.getStorageSync('goodsDetail')
			console.log(goodsDetail);
			var temp = {
				goods_id:Number( goodsDetail.goodsId)
			}
			console.log("-----------");
			this.request(this.server_url+'goods/post',temp,'POST').then((res)=>{
				console.log(res);
				this.goodsData = {...res.data};
				console.log("--------------")
				console.log(this.goodsData);
				this.isShow = false;
				this.isColl = res.isCollect;
			});
			
		},
		/**
		 * 生命周期函数--监听页面滚动
		 */
		onPageScroll: function(e) {
			if (e.scrollTop >= 400) {
				this.scrollShow = true
			} else {
				this.scrollShow = false
			}
		},

		onShareAppMessage: function() {
			return {
				title: this.goodsData.title,
				path: '/pages/views/goods/goodsDetails',
				imageUrl: this.goodsData.img
			}
		},
		/**
		 * 用户点击右上角分享到朋友圈
		 */
		onShareTimeline: function() {
			return {
				title: this.goodsData.title,
				path: '/pages/views/goods/goodsDetails',
				imageUrl: this.goodsData.img
			}
		},
		methods: {
			AddToWareHouse(){
				uni.showModal({
					confirmText:'添加',
					editable:true,
					title:'请输入您的家具名称：',
					success: (res) => {
						if(res.confirm){
							var temp = {
								goods_id:this.goodsData.goodsId,
								name:res.content
							};
							console.log(temp);
							this.request(this.server_url+'goods/WareHouse',temp,'POST').then((Add_result)=>{
								console.log(Add_result);
								if(Add_result.code==0){
									uni.showToast({
										title:'添加成功!'
									});
								}
							})
						}
					}
				})
			},
			jump_3d(){
				var temp = {
					OBJ:'https://image-1304455659.cos.ap-nanjing.myqcloud.com/3D-FUTURE-model-part1/'+this.goodsData.modalId+'/normalized_model.obj',
					jpg:'https://image-1304455659.cos.ap-nanjing.myqcloud.com/3D-FUTURE-model-part1/'+this.goodsData.modalId+'/texture.png',
					mtl:'https://image-1304455659.cos.ap-nanjing.myqcloud.com/3D-FUTURE-model-part1/'+this.goodsData.modalId+'/model.mtl',
					scale:500
				};

				uni.setStorageSync('result_file',temp);
				uni.navigateTo({
					url:'/pages/navigation/ShouYe/furniture_modeling/model_result'
				});
			},
			getLocation() {
				let that = this;
				uni.getLocation({
					type: 'wgs84',
					geocode: true,
					success: res => {
						console.log('获取经纬度成功', res);
						that.setData({
							latitude: res.latitude,
							longitude: res.longitude
						});
					},
					fail: () => {
						console.log('获取经纬度失败');
						that.setData({
							latitude: '',
							longitude: ''
						});
					},
					complete: () => { // 解析地址
					}
				});
			},
			setFrom(html) {
				//处理富文本 让图片居中适应
				let newContent = html.replace(/\<img/gi, '<img class="rich-img" ');
				this.setData({
					htmlNode: newContent
				});
			},
			openPoster() { //生成海报
				this.shows = false
				uni.showLoading({
					title: '海报绘制中..'
				})
				this.$refs.popup.open()
				setTimeout(() => {
					uni.hideLoading()
					this.shows = true
				}, 600)
			},
			hidePoster(){//关闭海报
				this.$refs.popup.close()
			},
			setisColl() {
				//收藏与取消收藏
				var temp = {
					id:this.goodsData.goodsId,
					types:'goods'
				}
				console.log(temp);
				if(!this.isColl){
					this.request(this.server_url+'goods/shoucang',temp,"POST").then((res)=>{
						console.log(res);
						this.isColl = !this.isColl;
					})
				}else{
					this.request(this.server_url+'goods/unshoucang',temp,"POST").then((res)=>{
						console.log(res);
						this.isColl = !this.isColl;
					})
				}
			},
			openMap() {
				//打开地图
				let that = this;
				uni.openLocation({
					latitude: 39.90,
					longitude: 116.40,
					success: e => {

					}
				});
			},
			nearAddress() {
				if (this.longitude !== '') {
					this.openMap();
				} else {
					const _this = this; // 处理拒绝再次打开调用设置
					uni.getSetting({
						success(res) {
							if (res && res.authSetting && res.authSetting.hasOwnProperty('scope.userLocation')) {
								uni.openSetting({
									success() {
										_this.getLocation();
									}

								});
							}
						}

					});
				}
			},
			setShowVideo(showVideo, isH5){ //操作视频
				this.showVideo = showVideo
				if(isH5 == true){
					this.newVideo.play()
				}
			},
			hideShow(){
				this.showVideo = false
			},
			ondefault(){ //阻止事件 抛弃
				
			},
			onhide() {
				this.showModal = false
			},
			openSku() {
				this.nowList = this.goodsData
				this.showModal = true
			},
			opencoupon() {
				this.couponshow = true
			},
			hidecoupon() {
				this.couponshow = false
			},
			toHome() {
				uni.switchTab({
					url: '/pages/views/tabBar/home'
				});
			},

			toCart() {
				uni.switchTab({
					url: '/pages/views/tabBar/cart'
				});
			},
			goTop() { //返回顶部
				uni.pageScrollTo({
					scrollTop: 0
				});
			},
			onReceive(item, index) { //领取优惠券
				console.log(item, index)
				if (item.status == 1) {
					return
				} else {
					this.couponList[index].status = 1 //领取成功
					uni.showToast({
						title: '领取成功',
						icon: 'none'
					})
				}
			},
			seeAll() { //查看全部评论
				uni.navigateTo({
					url: '/pages/views/goods/goodsEvaluate'
				})
			}
		}
	};
</script>
<style scoped lang="scss">
	@import "./goodsDetails.scss";
	/deep/.rich-img {
		width: 100%;
		height: auto;
	}
</style>
