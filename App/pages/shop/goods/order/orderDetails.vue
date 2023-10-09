<template>
	<view>
		<view class="order">
			<!-- 收货地址 -->
			<view class="order_address" v-if="address!=null">
				<image src="/static/images/home/bottom.png"></image>
				<view class="address_box">
					<view class="weizhi_icon">
						<text class="iconfont icon-dizhi" :style="'color:' + colors"></text>
					</view>
					<block>
						<view class="center">
							<view class="name">
								<text class="text1">{{address.nickname}}</text>
								<text class="phones">{{address.phone}}</text>
							</view>
							<view class="address_name">{{address.addressCity}}-{{address.address}}</view>
						</view>
					</block>
				</view>
			</view>
			<!-- 商品详情 -->
			<view  class="goods" v-if="orderList!=null">
				<view class="goods_data">
					<image v-if="orderList.goods.imageUrl!=null" :src="orderList.goods.imageUrl[0].imageUrl"></image>
					<view class="goods_title">
						<view class="g_name">
							{{orderList.goods.title}}
						</view>
						<view class="goods_sku">
							规格:暂无规格
						</view>
						<view class="price">
							<view class="t1" :style="'color:' + colors">￥{{orderList.goods.price}}</view>
							<view class="t3">
								x{{orderList.count}}
							</view>
						</view>
					</view>
				</view>
				<view class="morelist" style="border-bottom:none">
					<view class="title">
						<text class="quan" :style="'background:' + colors">券</text>
						<text>优惠券</text>
					</view>
					<view class="right_title" :style="'color:' + colors + ';font-size:24upx'">
						减0
					</view>
				</view>
				<!-- 单商品操作按钮 在订单状态为待评价时才会显示-->
				<view class="goods_btns" >
					<view class="btns" style="margin-right: 40upx;" @click="onafterSale()">
						删除订单
					</view>
					<view class="btns" @click="onevaluate()" :style="{borderColor:colors,color:colors}">
						去评价
					</view>
				</view>
			</view>
			<!-- 订单详情 -->
			<view class="order_more" v-if="orderList!=null">
				<view class="morelist">
					<text class="title">商品总价</text>
					<view class="right_title">
						￥{{orderList.allPrice-orderList.yunfei}}
					</view>
				</view>
				<view class="morelist">
					<view class="title">
						<text class="quan" :style="'background:' + colors">运</text>
						<text>运费</text>
					</view>
					<view class="right_title">
						￥{{orderList.yunfei}}
					</view>
				</view>
				<view class="morelist">
					<text class="title">实付款</text>
					<view class="right_title" :style="'color:' + colors + ';'">
						￥{{orderList.allPrice}}
					</view>
				</view>
				<view class="morelist">
					<text class="title">订单编号</text>
					<view class="right_title">
						{{orderList.order_No}}
						<text class="copy" @click="onCopy(orderList.orderId)">复制</text>
					</view>
				</view>
				<view class="morelist">
					<text class="title">创建时间</text>
					<view class="right_title">
						{{orderList.time}}
					</view>
				</view>
				<view class="tips">
					<view class="tips_name">备注信息</view>
					<view class="textarea_box">
						<textarea placeholder="请输入备注信息" disabled="true" placeholder-class="font-size: 24upx"
							maxlength="-1" v-model="orderList.beizhu"></textarea>
					</view>
				</view>
			</view>
			<view class="bottom_btn" v-if="orderList!=null">
				<block >
					<view class="moneys">
						合计: <text :style="'color:' + colors + ';'">￥{{orderList.allPrice}}</text>
					</view>
					<view class="btns"
						:style="'color:' + colors + ';border:1upx solid ' + colors + ';margin-right:20upx'"
						@tap="cencalOrder">
						删除订单
					</view>

				</block>



			</view>
		</view>
		<loading v-if="isShow == true"></loading>
	</view>
</template>

<script>
	var app = getApp();
	import loading from "@/pages/commponent/public/loading";
	export default {
		data() {
			return {
				colors: '',
				status: 0,
				//订单状态
				isShow: true,
				orderList: null,
				address:null
			};
		},

		components: {
			loading
		},
		props: {},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			console.log()
			this.setData({
				colors: app.globalData.newColor
			});
			
			uni.showLoading({
				title:'加载数据中...'
			});
			
			var temp = {
				order_id:uni.getStorageSync('orderDetails_orderId')
			};
			this.request(this.server_url+'order/Post_detail',temp,'POST').then((res)=>{
				console.log(res);
				uni.hideLoading();
				// console.log(res);
				if(res.code==0){
					this.address = res.data.address;
					this.orderList = res.data;
				}
				this.isShow = false;
			});
		},
		methods: {
			cencalOrder(item) {
				//取消订单
				uni.showModal({
					title: '确认要删除该订单吗?',
					confirmColor: this.colors,
					success: (res) => {
						if (res.confirm) {
							var temp = {
								orderId:this.orderList.orderId
							}
							this.request(this.server_url+'order/deleteOrder',temp,'POST').then((re)=>{
								if(re.code==0){
									uni.showToast({
										title:'删除成功',
										icon:'none'
									});
									uni.navigateBack();
								}
							})
						}
					}
				})
			},

			onCopy(value) { //复制订单号
				// #ifdef H5
				var input = document.createElement('input'); // 直接构建input
				input.value = value; // 设置内容
				document.body.appendChild(input); // 添加临时实例
				input.select(); // 选择实例内容
				document.execCommand('Copy'); // 执行复制
				document.body.removeChild(input); // 删除临时实例
				uni.showToast({
					title: '复制成功~',
					icon: 'none'
				})
				// #endif
				// #ifndef H5
				uni.setClipboardData({
					data: value,
					success: function() {
						uni.showToast({
							title: '复制成功~',
							icon: 'none'
						})
					}
				})
				// #endif
			},

			onevaluate(item) { 
				if(this.orderList.status=='待评价'){
					uni.navigateTo({
						url: '/pages/shop/goods/order/evaluate/evaluate?goodData=' + JSON.stringify(this.orderList)
					})
				}else{
					uni.showToast({
						title:'未收货不能评价',
						icon:'none'
					});
					return;
				}

			},
			jumpSale() { //退款售后
				uni.navigateTo({
					url: '/pages/views/order/afterSaleList'
				})
			},
		}
	};
</script>
<style lang="scss" scoped>
	page {
		background-color: #F9F9F9;
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
		padding: 30upx 20upx;
		padding-bottom: 10upx;
	}

	.goods_data {
		width: 100%;
		display: flex;
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
		align-items: center;
		height: 40upx;
		line-height: 40upx;
		margin-top: 20upx;
		position: relative;
	}

	.goods_title .price .t1 {
		font-size: 30upx;
		display: block;
	}

	.goods_title .price .t2 {
		font-size: 24upx;
		margin-left: 15upx;
		display: block;
		color: #999;
	}

	.goods_title .price .t3 {
		float: right;
		font-size: 26upx;
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

	.order_more {
		padding: 0 2%;
		margin-top: 20upx;
		background-color: #fff;
		box-shadow: 0upx 0upx 10upx #ddd;
		border-radius: 10upx;
	}

	.morelist {
		height: 70upx;
		line-height: 70upx;
		display: flex;
		align-items: center;
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
		font-size: 26upx;
	}

	.morelist .copy {
		font-size: 22upx;
		color: #888;
		background-color: #eee;
		height: 50upx;
		line-height: 50upx;
		padding: 0 20upx;
		border-radius: 10upx;
		margin-left: 20upx;
		display: inline-block;
	}

	.goods_btns {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		margin-bottom: 10upx;

		.btns {
			font-size: 24upx;
			text-align: center;
			color: #999999;
			padding: 5upx 15upx;
			border-radius: 8upx;
			border: 1upx solid #DDDDDD;
		}
	}

	.tips {
		padding: 10upx 0;
		margin-bottom: 120upx;
		padding-bottom: 20upx;
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
	}

	.bottom_btn .moneys {
		font-size: 32upx;
		margin-right: 100upx;
	}

	.bottom_btn .btns {
		font-size: 26upx;
		height: 50upx;
		line-height: 50upx;
		padding: 0 20upx;
		text-align: center;
		border-radius: 8upx;
		margin-top: 30upx;
		color: #FFFFFF;
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

	.shop {
		padding: 20upx;
		display: flex;
		justify-content: flex-start;
		position: relative;
		background-color: #fff;
		box-shadow: 0upx 0upx 10upx #ddd;
		border-radius: 10upx;
	}

	.shop .shop_img {
		width: 120upx;
		height: 120upx;
		display: block;
		overflow: hidden;
		box-sizing: border-box;
		border-radius: 8upx;
	}

	.shop_center {
		overflow: hidden;
		margin-left: 20upx;
	}

	.shop_center .shop_name {
		font-size: 28upx;
		color: #333;
		font-weight: bold;
	}

	.shop_center .shop_address {
		font-size: 24upx;
		color: #333;
		margin-top: 40upx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.shoucang {
		width: 80upx;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		position: absolute;
		right: 20upx;
		top: 50%;
		transform: translateY(-50%);
	}

	.shoucang .sc_icons text {
		font-size: 45upx;
		color: #999;
	}

	.shoucang .sc_text {
		font-size: 22upx;
		color: #333;
		font-weight: bold;
	}

	.order_ewm {
		width: 100%;
		height: 380upx;
		padding: 20upx 10upx;
		background-color: #fff;
		border-radius: 10upx;
		box-shadow: 0upx 0upx 10upx #ddd;
		margin-top: 20upx;
	}

	.ewm_title {
		height: 40upx;
		line-height: 40upx;
		font-size: 26upx;
		font-weight: bold;
	}

	.center_ewm {
		height: 300upx;
		width: 300upx;
		margin: 0 auto;
	}

	.center_ewm image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.shouhou {
		border: 1upx solid #ddd;
		color: #999 !important;
		font-weight: normal !important;
	}
</style>
