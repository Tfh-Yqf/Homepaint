<template>
	<view>
		<view class="order_list">
			<view class="top_nav">
				<view style="background-color: #FFFFFF;">
					<navBar :showLeft="true" navTitle="订单列表" textcolor="#000" :leftBg="false"></navBar>
				</view>
				<!-- 顶部tab -->
				<view class="nav_top" style="border-bottom: 1upx solid #F8F8F8;">
					<tabs :colors="colors" :tabList="tabList" :active="active" @setTabs="setTabs"></tabs>
				</view>
			</view>
			<!-- 占位 -->
			<view :style="{height: 35+statusBarHeight+toBarHeight+'px'}"></view>
			<view class="list_box">
				<view v-for="(item, index) in orderList" :key="index" class="lists">
					<view class="type">
						<text class="order_id" >订单编号:{{item.orderId}}</text>
						<text class="order_type" :style="'color:' + colors">
							{{item.status}}
						</text>
					</view>
					<view  class="top" @tap="jumpDetails(item)">
						<image v-if="item.goods.imageUrl!=null" :src="item.goods.imageUrl[0].imageUrl" mode="aspectFill"></image>
						<view class="top_right">
							<view class="order_name">{{item.goods.title}}</view>
							<view class="sku">规格：{{item.goods_sku_text || '暂无规格'}}</view>
							<view class="price">
								<view class="t1">￥{{item.goods.price}}</view>
								<view class="t3">
									x{{item.count}}
								</view>
							</view>
						</view>
					</view>
					<view class="bottom">
						<view class="address">店铺地址：软件创新大赛-开飞机的舒克</view>
						<view class="btns">

							<block v-if="active == 0">
								<view class="pay shouhou" :style="'color:' + colors + ';border-color:' + colors"
								 @tap="change_status('待收货',item.orderId)">已发货</view>
							</block>
							<block v-if="active == 1">
								<view class="pay" :style="'color:#fff;background:' + colors+ ';border-color:' + colors"
									@tap="change_status('待评价',item.orderId)">确认收货</view>
								<view class="pay shouhou" @tap="change_status('待评价',item.orderId)">申请退款</view>
							</block>
							<block v-if="active == 2">
								<view class="pay shouhou" :style="'color:' + colors + ';border-color:' + colors"
									@tap="jumpDetails(item)">订单评价</view>
								<view class="pay shouhou" @tap="cencalOrder(item)">删除订单</view>
							</block>
							<view class="pay shouhou" v-if="active == 3" @click="delOrder(item)">删除订单</view>
						</view>
					</view>
				</view>
				<view class="nodata" v-if="orderList.length >= 3">—— 到底啦 ——</view>
				<nodata :colors="colors" title="暂无订单信息" v-if="orderList.length == 0"></nodata>
			</view>
		</view>
		<loading v-if="isShow == true"></loading>
	</view>
</template>

<script>
	var app = getApp();
	import tabs from "@/pages/commponent/public/tabs";
	import loading from "@/pages/commponent/public/loading";
	import navBar from '@/pages/commponent/public/navBar.vue'
	export default {
		data() {
			return {
				statusBarHeight: app.globalData.statusHeight,
				toBarHeight: app.globalData.toBar,
				tabList: [
					{
						name: '待发货',
						id: 0
					}, {
						name: '待收货',
						id: 1
					}, {
						name: '待评价',
						id: 2
					},
					{
						name: '已完成',
						id: 3
					}
				],
				AllOrder:[],
				active: 0,
				orderList: [],
				isShow: true,
				colors: ""
			};
		},
		filters: {
			setStatus(value) {
				if (value == 0) {
					return '待付款'
				} else if (value == 1) {
					return '待发货'
				} else if (value == 2) {
					return '待收货'
				} else if (value == 3) {
					return '待评价'
				} else if (value == 4) {
					return '已完成'
				}
			}
		},
		components: {
			tabs,
			loading,
			navBar
		},
		props: {},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			if (options.tabIndex) {
				this.setData({
					active: Number(options.tabIndex)
				});
			}
			this.setData({
				colors: app.globalData.newColor
			});
			this.init_data();
		},
		methods: {
			pingjia(e){
				
			},
			change_status(status,orderId){
				var temp = {
					orderId,
					status
				};
				this.request(this.server_url+'order/change_status',temp,'POST').then((res)=>{
					if(res.code==0){
						uni.showToast({
							title:'成功!',
							icon:'none'
						});
						this.init_data();
					}
				})
			},
			init_data(){
				uni.showLoading({
					title:'加载数据中...'
				})
				this.request(this.server_url+'order/Post_list',{},'POST').then((res)=>{
					uni.hideLoading();
					// console.log(res);
					if(res.code==0){
						this.AllOrder = res.data;
						this.setTabs(this.tabList[this.active]);
					};
					this.isShow = false;
				})
			},
			setTabs(item) {
				this.setData({
					active: item.id
				});
				this.orderList = [];
				
				for(var i=0;i<this.AllOrder.length;i++){
					if(item.name == this.AllOrder[i].status)
						this.orderList.push(this.AllOrder[i]);
				}
			},

			jumpDetails(item) { //模拟跳转商品详情
				uni.setStorageSync('orderDetails_orderId',item.orderId);
				uni.navigateTo({
					url: '/pages/shop/goods/order/orderDetails'
				});
			},
			cencalOrder(item) {
				//取消订单
				uni.showModal({
					title: '确认要取消该订单吗?',
					confirmColor: this.colors,
					success: (res) => {
						if (res.confirm) {
							var temp = {
								orderId:item.orderId
							}
							this.request(this.server_url+'order/deleteOrder',temp,'POST').then((res)=>{
								if(res.code==0){
									uni.showToast({
										title:'删除成功',
										icon:'none'
									});
									this.init_data();
								}
							})
						}
					}
				})
			},
			onRefund(item) {
				// 申请退款
				uni.navigateTo({
					url: '/pages/views/order/cancelOrder?orderId'
				});
			},
			delOrder(item) {
				uni.showModal({
					title: '确认要删除该订单吗?',
					confirmColor: this.colors,
					success: (res) => {
						if (res.confirm) {
							console.log('删除成功')
						}
					}
				})
			}
		}
	};
</script>
<style>
	page {
		background-color: #F8F8F8;
	}
</style>
<style scoped lang="scss">
	.order_list {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.top_nav {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 200;
	}

	.list_box {
		padding: 0 3%;
		box-sizing: border-box;
		overflow: hidden;
		/* #ifdef MP */
		padding-bottom: 50upx;
		/* #endif */
		width: 100%;
		padding-top: 20upx;
	}

	.lists {
		margin: 0 auto;
		padding: 20upx;
		margin-top: 5upx;
		background-color: #ffffff;
		border-radius: 10upx;
		margin-bottom: 20upx;
		box-shadow: 0upx 0upx 10upx #EDEDED;
		box-sizing: border-box;
		width: 98%;
	}

	.type {
		height: 50upx;
		font-size: 26upx;
		line-height: 50upx;
		font-weight: bold;
		text-align: right;
		display: flex;
		justify-content: space-between;
	}

	.type .order_id {
		font-weight: 600;
		color: #999;
		font-size: 24upx;
	}

	.lists .top {
		display: flex;
		align-content: center;
		margin-bottom: 20upx;
	}

	.lists .top image {
		min-width: 180upx;
		max-width: 180upx;
		height: 180upx;
		display: block;
		border-radius: 10upx;
	}

	.lists .top .top_right {
		margin-left: 20upx;
		width: 100%;
	}

	.lists .top .order_name {
		line-height: 40upx;
		height: 80upx;
		font-size: 26upx;
		font-weight: bold;
		color: #333;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}

	.lists .top .sku {
		height: 40upx;
		line-height: 40upx;
		font-size: 24upx;
		border-radius: 8upx;
		padding: 0 10upx;
		color: #A7A7A7;
		background-color: #F7F7F7;
	}

	.lists .top .price {
		width: 100%;
		display: flex;
		align-items: center;
		height: 40upx;
		line-height: 40upx;
		margin-top: 20upx;
		position: relative;
	}

	.price .t1 {
		font-size: 30upx;
		// font-weight: bold;
		display: block;
		color: red;
	}

	.price .t2 {
		font-size: 24upx;
		margin-left: 15upx;
		display: block;
		color: #C5C5C5;
		text-decoration: line-through;
	}

	.price .t3 {
		float: right;
		font-weight: bold;
		font-size: 28upx;
		color: #999;
		position: absolute;
		right: 0upx;
		top: 0;
	}

	.list_box .bottom {
		margin-top: 20upx;
	}

	.list_box .bottom .address {
		font-size: 24upx;
		color: #696969;
	}

	.list_box .bottom .btns {
		margin-top: 15upx;
		overflow: hidden;
	}

	.list_box .bottom .btns .pay {
		padding: 8upx 15upx;
		border-radius: 8upx;
		text-align: center;
		font-size: 24upx;
		float: right;
		margin-left: 20upx;
		box-sizing: border-box;
		border: 1upx solid #ddd;
	}

	.pay:active {
		opacity: .8;
	}

	.nodata {
		color: #ccc;
		text-align: center;
		font-size: 24upx;
		margin-bottom: 30upx;
		height: 80upx;
		line-height: 80upx;
	}
</style>
