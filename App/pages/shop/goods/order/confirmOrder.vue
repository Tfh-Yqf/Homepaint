<template>
	<view class="order">
		<!-- 选择配送方式 -->
		<view class="mode" @tap="selectMode">
			<text class="text1">配送方式</text>
			<text class="text2">{{modes || "请选择配送方式"}}</text>
			<image src="/static/ultis/right.png"></image>
		</view>
		<!-- 收货地址 -->
		<view class="order_address" v-if="tapIndex == 0">
			<image src="/static/ultis/bottom.png"></image>
			<view class="address_box" @tap="setAddress">
				<view class="weizhi_icon">
					<text class="iconfont icon-dizhi" :style="'color:' + colors"></text>
				</view>
				<block v-if="address!=null &&address.nickname && address.nickname !== ''">
					<view class="center">
						<view class="name">
							<text class="text1">{{address.nickname}}</text>
							<text class="phones">{{address.phone}}</text>
						</view>
						<view class="address_name">{{address.addressCity}}-{{address.address}}</view>
					</view>
				</block>
				<view class="noaddress" v-else>
					请添加收货地址
				</view>
			</view>
		</view>
		<!-- 商品详情 -->
		<view v-for="(item, index) in goodsList" :key="index" class="goods">
			<view class="goods_data">
				<image :src="item.imageUrl[0].imageUrl" mode="widthFix" v-if="item.imageUrl!=null"></image>

				<view class="goods_title">
					<view class="g_name">
						{{item.title}}
					</view>
					<view class="goods_sku">
						<!-- 判断当前商品是否存在规格 -->
						规格: 
						<text style="margin-right: 10upx;" >暂无规格</text>
					</view>
					<view class="price">
						<view class="t1" :style="'color:' + colors">￥{{item.price}}</view>
						<view class="t2">
							<text>￥{{(item.price*1.2).toFixed(2)}}</text>
						</view>
						<view class="t3">
							x{{item.number}}
						</view>
					</view>
				</view>
			</view>
			<view class="morelist" style="border-bottom:none">
				<view class="title">
					<text class="quan" :style="'background:' + colors">券</text>
					<text>优惠券</text>
				</view>
				<view class="right_title" :style="'color:' + colors + ';font-size:24upx'" @tap="openCoupon(index)">
					{{item.couponName || '请选择优惠券'}}
				</view>
			</view>
		</view>
		<!-- 订单详情 -->
		<view class="order_more">
			<view class="morelist">
				<text class="title">商品总价</text>
				<view class="right_title">
					￥{{nowprice}}
				</view>
			</view>
			<view class="morelist">
				<view class="title">
					<text class="quan" :style="'background:' + colors">运</text>
					<text>运费</text>
				</view>
				<view class="right_title">
					￥{{yunfei}}
				</view>
			</view>
			<view class="morelist">
				<text class="title">实付款</text>
				<view class="right_title" :style="'color:' + colors + ';'">
					￥{{sumprice}}
				</view>
			</view>
			<view class="tips">
				<view class="tips_name">备注信息</view>
				<view class="textarea_box">
					<textarea v-model="beizhu" placeholder="请输入备注信息" placeholder-class="font-size: 24upx" maxlength="-1"
						v-if="couponshow == false"></textarea>
				</view>
			</view>
		</view>
		<view class="bottom_btn">
			<view class="moneys">
				合计: <text :style="'color:' + colors + ';'">￥{{sumprice}}</text>
			</view>
			<view class="btns" :style="'background:' + colors + ';'" @tap="submit">
				提交订单
			</view>
		</view>
		<!-- 优惠券弹出层 -->
		<view class="mask" catchtouchmove="preventTouchMove" v-if="couponshow == true" @tap="hidecoupon"></view>
		<view class="coupon" :style="'bottom:' + (couponshow == true ? '0':'')">
			<view class="buyong" @click="notUsed()">不使用优惠券</view>
			<scroll-view class="scrolls" scroll-y>
				<coupon :couponList="couponList" @onReceive="onReceive"></coupon>
			</scroll-view>
		</view>
	</view>
</template>

<script>


	var app = getApp();
	import coupon from "@/pages/commponent/public/coupon";
	
	export default {
		data() {
			return {
				yunfei:0,
				colors: '',
				couponshow: false,
				modes: '物流寄送',
				tapIndex: 0,
				goodsList: [],
				couponIndex: 0,
				nowprice: 0, //临时存储总金额的变量 用于计算优惠券
				sumprice: 0,
				address: null,
				couponList: [],
				beizhu:''
			};
		},
		components: {
			coupon
		},
		props: {},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			var temp = uni.getStorageSync('confirmOrder');
			if(Array.isArray(temp)){
				this.goodsList = temp;
			}else{
				this.goodsList.push(temp);
			}
			
			console.log(this.goodsList);
			this.getAddress();
			this.getSumPrice()
			this.setData({
				colors: app.globalData.newColor
			});
			
		},
		methods: {
			getAddress(){
				var nowaddress = uni.getStorageSync('nowaddress');
				console.log(nowaddress);
				
				if(nowaddress==false || nowaddress == null || nowaddress == undefined){
					this.request(this.server_url+'order/address_list',{},'GET').then((res)=>{
						// console.log(res);
						if(res.code==0){
							if(res.data.length==0){
								uni.showToast({
									title:'没有地址欧',
									icon:'none'
								});
							}else{
								for(var i=0;i<res.data.length;i++){
									if(res.data[i].default){
										this.address = res.data[i];
										break;
									}
								}
							}

						}
					});
					// console.log(this.address);
				}else{
					this.address = nowaddress;
				}
				uni.setStorageSync('nowaddress',false);
			},
			getSumPrice() {
				let sumprice = 0
				this.goodsList.forEach(e => {
					sumprice = (sumprice + e.price*e.number);
				})
				
				this.nowprice = sumprice.toFixed(2);
				this.yunfei = (sumprice/100).toFixed(2);
				this.sumprice = (Number( sumprice )+ (sumprice/100)).toFixed(2);
			},
			openCoupon(index) {
				this.setData({
					couponshow: true,
					couponIndex: index
				});
			},

			hidecoupon() {
				this.setData({
					couponshow: false
				});
			},

			submit() {
				for(var i=0;i<this.goodsList.length;i++){
			
					var temp = {
						goods_id:this.goodsList[i].goodsId,
						address_id:this.address.addressId,
						count:this.goodsList[i].number,
						yunfei: ((this.goodsList[i].price*this.goodsList[i].number)/100 ).toFixed(2),
						AllPrice: ((this.goodsList[i].price*this.goodsList[i].number)*1.01).toFixed(2),
						beizhu:this.beizhu
					};
					console.log(temp);
					this.request(this.server_url+'order/add',temp,'POST').then((res)=>{
						console.log(res);
						if(res.code==0){
							temp = {
								orderId:this.goodsList[i].goodsId,
								status:'待发货'
							}
							this.request(this.server_url+'order/change_status',temp,'POST').then((re)=>{
							})
						}

					});

					
				}

				uni.setStorageSync('AllPirce',this.sumprice);
				uni.setStorageSync('success_detail',temp);
				uni.redirectTo({
					url:'/pages/shop/goods/order/success'
				})

			},

			selectMode() {
				let that = this;
				let list = ['物流寄送', '到店自提(暂不支持)']
				uni.showActionSheet({
					itemList: list,
					success: function(res) {
						console.log(res);
						that.setData({
							modes: list[res.tapIndex],
							tapIndex: res.tapIndex
						});
					}
				});
			},

			setAddress() {
				uni.navigateTo({
					url: '/pages/shop/goods/myaddress?type=select'
				});
			},
			onReceive(item, index) { //选择优惠券
				this.couponshow = false
				/**
				 * 自定义变量 到goodsList中 用户计算合计金额与优惠券
				 */
				this.goodsList[this.couponIndex].couponName = '满' + item.money + '减' + item.reduce
				this.goodsList[this.couponIndex].couponReduce = item.reduce //优惠券金额
				this.sumprice = this.sumprice - item.reduce
			},
			notUsed() { //不使用优惠券 重置金额

				this.couponshow = false
				this.goodsList[this.couponIndex].couponName = ''
				if (this.goodsList[this.couponIndex].couponReduce) {
					this.sumprice = this.sumprice + Number(this.goodsList[this.couponIndex].couponReduce)
				}
			}
		}
	};
</script>
<style lang="scss" scoped>
	page {
		background-color: #FFFFFF;
	}

	.order {
		padding: 20upx 4%;
	}

	.mode {
		height: 80upx;
		line-height: 80upx;
		display: flex;
		justify-content: space-between;
		background-color: #fff;
		padding: 0 20upx;
		border-radius: 10upx;
		align-items: center;
		margin-bottom: 20upx;
		box-shadow: 0upx 0upx 10upx #ddd;
	}

	.mode:active {
		background-color: #f5f5f5;
	}

	.mode .text1 {
		color: #999;
		font-size: 24upx;
	}

	.mode .text2 {
		font-size: 24upx;
		color: #333;
		display: block;
		width: 50%;
		font-weight: bold;
	}

	.mode image {
		width: 40upx;
		height: 40upx;
		display: block;
	}

	.order_address {
		height: 150upx;
		width: 100%;
		background-color: #fff;
		border-radius: 10upx;
		overflow: hidden;
		position: relative;
		box-shadow: 0upx 0upx 10upx #ddd;
	}

	.order_address image {
		width: 100%;
		height: 100%;
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
	}

	.address_box {
		width: 100%;
		height: 100%;
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
		box-sizing: border-box;
		padding: 20upx;
		display: flex;
		align-items: center;
	}

	.weizhi_icon text {
		font-size: 40upx;
		margin-left: 10upx;
	}

	.address_box .center {
		margin-left: 20upx;
	}

	.address_box .center .name {
		height: 60upx;
		line-height: 60upx;
	}

	.address_box .center .name .text1 {
		font-size: 26upx;
		font-weight: bold;
		color: #333;
		display: inline-block;
		margin-right: 20upx;
	}

	.phones {
		font-size: 24upx;
		color: #999;
		z-index: 0;
	}

	.address_box .address_name {
		font-size: 26upx;
		font-weight: bold;
		color: #333;
	}

	.noaddress {
		margin-left: 40upx;
		font-weight: bold;
		color: #333;
		font-size: 26upx;
	}

	.goods {
		background-color: #fff;
		margin-top: 20upx;
		box-shadow: 0upx 0upx 10upx #ddd;
		border-radius: 10upx;
		padding: 20upx;
		padding-bottom: 10upx;
	}

	.goods_data {
		width: 100%;
		display: flex;
		margin-bottom: 15upx;
	}

	.goods_data image {
		min-width: 150upx;
		max-width: 150upx;
		height: 150upx;
		display: block;
		border-radius: 10upx;
	}

	.goods_title {
		margin-left: 20upx;
		line-height: 40upx;
		width: 100%;
	}

	.goods_title .price {
		width: 100%;
		display: flex;
		height: 40upx;
		line-height: 40upx;
		margin-top: 20upx;
		position: relative;
	}

	.goods_title .price .t1 {
		font-size: 30upx;
		font-weight: bold;
		display: block;
	}

	.goods_title .price .t2 {
		font-size: 24upx;
		margin-left: 15upx;
		display: block;
		color: #999;
		text-decoration: line-through;
	}

	.goods_title .price .t3 {
		float: right;
		font-weight: bold;
		font-size: 28upx;
		color: #999;
		position: absolute;
		right: 0upx;
		top: 0;
	}

	.goods_title .g_name {
		font-size: 26upx;
		font-weight: bold;
		max-height: 80upx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.goods_title .goods_sku {
		color: #999;
		/* margin-top: 20upx; */
	}

	.numbers {
		/* text-align: right; */
	}

	.shop {
		margin-top: 20upx;
		font-size: 24upx;
		color: #333;
		display: flex;
		align-content: center;
	}

	.shop .iconfont {
		margin-right: 20upx;
	}

	.order_more {
		padding: 0 2%;
		margin-top: 20upx;
	}

	.morelist {
		height: 80upx;
		line-height: 80upx;
		display: flex;
		justify-content: space-between;
		border-bottom: 1upx dashed #eee;
	}

	.morelist .title {
		color: #333;
		font-size: 26upx;
		font-weight: bold;
		display: flex;
		align-items: center;
	}

	.morelist .title .quan {
		font-size: 20upx;
		width: 35upx;
		height: 35upx;
		line-height: 36upx;
		text-align: center;
		border-radius: 8upx;
		margin-right: 10upx;
		align-items: center;
		color: #fff;
	}

	.morelist .right_title {
		color: #999;
	}

	.tips {
		padding: 10upx 0;
		margin-bottom: 120upx;
	}

	.tips .tips_name {
		font-size: 26upx;
		font-weight: bold;
		line-height: 60upx;
	}

	.textarea_box {
		min-height: 100upx;
		width: 100%;
		border: 1upx solid #eee;
		border-radius: 10upx;
		padding: 20upx;
	}

	.textarea_box textarea {
		font-size: 24upx;
		height: 150upx;
	}

	.bottom_btn {
		height: 100upx;
		width: 100vw;
		background-color: #fff;
		position: fixed;
		left: 0;
		bottom: 0;
		line-height: 100upx;
		display: flex;
		justify-content: flex-end;
		padding: 0 30upx;
		z-index: 100;
		font-weight: bold;
	}

	.bottom_btn .moneys {
		font-size: 28upx;
		font-weight: bold;
		margin-right: 100upx;
	}

	.bottom_btn .btns {
		font-size: 28upx;
		color: #fff;
		height: 60upx;
		line-height: 60upx;
		padding: 0 25upx;
		text-align: center;
		border-radius: 40upx;
		margin-top: 20upx;
		font-weight: bold;
	}

	/* 优惠券 */
	.coupon {
		background-color: #fff;
		border-radius: 10upx 10upx 0 0;
		position: fixed;
		left: 0;
		bottom: -1000upx;
		z-index: 150;
		transition: all 0.3s;
	}

	.coupon .buyong {
		line-height: 80upx;
		padding: 0 4%;
		text-align: right;
		color: #999;
	}

	.mask {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: #000;
		z-index: 10;
		opacity: 0.7;
	}

	.scrolls {
		width: 100vw;
		height: 55vh;
		z-index: 500;
	}
</style>
