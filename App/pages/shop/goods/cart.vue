<template>
	<view class="cart">
		<!-- #ifdef APP-PLUS -->
		<div class="status-bar" :style="{height:statusBarHeight+'px'}"></div>
		<!-- #endif -->
		<block v-if="cartList.length !== 0">
			<view class="clearCart" :style="{color:colors,top:showHeader==true?statusBarHeight+'px':'0upx'}" @click="clearInvalid">清空失效商品</view>
			<view class="cart_box">
				<view v-for="(item, index) in cartList" :key="item.goodsId" class="cart_list" @longpress.stop="onshowDel(item,index)"
				 @touchend="ontouchend">
					<view class="checkbox-box" @tap="setCurrent(index)">
						<view class="checkbox" :style="'border-color:' + colors" >
							<view :class="item.select == true ? 'on':''" :style="'background-color:' + colors"></view>
						</view>

					</view>
					<view class="cover" @tap="jumpDetails(item,index)">
						<image :src="item.goods_image[0].imageUrl" mode="aspectFill" ></image>
						<text class="masks"></text>
						<text class="mask" v-if="item.status == 1">已失效</text>
					</view>
					<view class="right">
						<view class="goods_name" @tap="jumpDetails(item,index)">
							{{item.title}}
						</view>
						<view class="sku">
							<block >
								<text>暂无规格</text>
							</block>
						</view>
						
						<view class="numbers">
							<text class="price" >
								￥{{item.price}}
							</text>
							<view class="right_btn">
								<view class="sub" @tap="onsub(item,index)" :style="'color:' + (item.num == 1?'#ccc':'')">-</view>
								<view class="input">
									<input v-model="item.count" maxlength="2" @click="change_count(item)" disabled></input>
								</view>
								<view class="add" @tap="onadd(item,index)">+</view>
							</view>
						</view>
					</view>
					<!-- 删除的遮罩层 长按触发 -->
					<view class="del_mask" v-if="current == index" :style="'z-index:' + (current == index ?'99':'-21')" @tap="oncencal">

					</view>
					<view class="dask_del" :style="'opacity:' + (current == index ?'1':'0') + ';z-index:' + (current == index ?'100':'-20')+';left:'+(current == index?'0':'-100%')">
						<text class="del" @tap="delItem(item,index)">删除</text>
						<text class="cencal" @tap="oncencal">取消</text>
					</view>
				</view>
				<view class="daodi" v-if="cartList.length >= 5">—— 到底啦 ——</view>
			</view>
			<!-- 全选 -->
			<view class="bottom_all" :style="{marginBottom: bottomShow}">
				<view class="left">
					<view class="checkbox-box" @tap="setAllCurrent">
						<view class="checkbox" :style="'border-color:' + colors">
							<view :class="allCurrent == true ? 'on':''" :style="'background-color:' + colors"></view>
						</view>
						<view class="text">全选</view>
					</view>
					<view class="delAll" @click="delectAll" :style="'border-color:' + colors + ';color:' + colors" v-if="allCurrent == true">删除</view>
				</view>
				<view class="rights">
					<view class="jiesuan" :style="'background-color:' + colors" @click="settlement">结算({{sum}})</view>
					<view class="sum">合计：<text style="font-size: 30upx;">￥{{sumPrice || 0}}</text></view>
				</view>
			</view>
		</block>
		<!-- 如果购物车没有数据 -->
		<view class="nocart" v-if="cartList.length == 0">
			<text class="iconfont icon-gouwuche1" :style="'color:' + colors"></text>
			<view>空空如也,<text :style="'color:' + colors" @tap="onStroll">随便逛逛 ></text></view>
		</view>
	</view>
</template>

<script>
	var app = getApp();

	export default {
		data() {
			return {
				colors: '',
				statusBarHeight:20,
				cartList: [],
				current: 99999,
				allCurrent: false,
				sum: 0,
				sumPrice: 0,
				lock: false,
				bottomShow: '',
				showHeader: false
			};
		},

		components: {},
		props: {},
		onLoad: function(options) {
			// #ifdef MP
			this.bottomShow = 0
			// #endif
			// #ifdef H5
			this.bottomShow = '100upx'
			// #endif
			// #ifdef APP-PLUS
			this.showHeader = true   //在APP端对样式进行调整
			// #endif
		},
		onShow: function() {
			
			this.setData({
				colors: app.globalData.newColor,
				current: '99999',
				allCurrent: false,
				sum: 0,
				sumPrice: 0
			});
		},
		mounted() {
			uni.showLoading({
				title:'载入数据中...'
			})
			this.request(this.server_url+'shopping/get',{},'GET').then((res)=>{
				uni.hideLoading();
				console.log(res);
				for(var i=0;i<res.data.length;i++){
					this.cartList.push({...res.data[i],select:false});
				}
				
			})
		},
		methods: {
			change_count(item){
				var temp = {
					goods_id:item.goodsId,
					count:item.count
				}
				this.request(this.server_url+'shopping/update',temp,'POSt').then((res)=>{
					if(res.code==0){
						uni.showToast({
							title:'修改成功！'
						});
					}
				});
				
				this.getSumprice() 
			},
			setCurrent(index) {
				this.cartList[index].select = true;
				this.getSumprice();
			},
			onshowDel(item, index) {
				//显示删除
				this.setData({
					current: index,
					lock: true
				});
				return;
			},

			delItem(item, index) {
				//点击删除 模拟删除本地数据
				var temp = {
					goods_id:item.goodsId
				};
				this.request(this.server_url+'shopping/delete',temp,'POST').then((res)=>{
					if(res.code==0){
						this.cartList.splice(index, 1);
						uni.showToast({
							title:'修改成功！'
						});
					}
				});
			},

			oncencal() {},

			onsub(item, index) {
				if(this.cartList[index].count==1){
					uni.showToast({
						title:'已经最少!',
						icon:'none'
					});
					return;
				}
				//减少 //已失效商品不做操作
				this.cartList[index].count--;
				this.getSumprice() //计算总价
				this.change_count(item);
			},

			onadd(item, index) {
				if(this.cartList[index].count>=9999){
					uni.showToast({
						title:'已经最多!',
						icon:'none'
					});
					return;
				}
				this.cartList[index].count++;
				this.getSumprice() //计算总价
				this.change_count(item);
			},
			setAllCurrent() {
				for(var i=0;i<this.cartList.length;i++)
					this.cartList[i].select = true;
				this.allCurrent = true;
				this.getSumprice()
			},
			getSumprice() { 
				this.sumPrice = 0;
				this.sum = 0;
				for(var i=0;i<this.cartList.length;i++){
					if(this.cartList[i].select){
						this.sumPrice += parseFloat( this.cartList[i].price)*this.cartList[i].count;
						// console.log(this.cartList[i].price);
						this.sum += this.cartList[i].count;
					}
				}
				this.sumPrice = this.sumPrice.toFixed(2);
			},
			ontouchend() { //隐藏删除弹窗
				if (this.lock) {
					setTimeout(() => {
						this.setData({
							lock: false
						});
					}, 100);
				}
			},
			clearInvalid() { //模拟清空失效商品  根据商品的status值来判断商品状态
				uni.showToast({
					title: '清空成功~',
					icon: 'none'
				})
			},
			delectAll() { //模拟删除所有商品
				for(var i=0;i<this.cartList.length;i++){
					var temp = {
						goods_id:this.cartList[i].goodsId
					};
					this.request(this.server_url+'shopping/delete',temp,'POST').then((res)=>{
						if(res.code==0){
							this.cartList.splice(index, 1);
							uni.showToast({
								title:'修改成功！'
							});
						}
					});
				}
				this.cartList = []
			},
			setTabBarBadge() { //设置购物车角标
				let length = String(this.cartList.length)
				if (length == 0) {
					uni.removeTabBarBadge({
						index: 2
					})
					return
				}
				uni.setTabBarBadge({ //重新设置角标
					//给tabBar添加角标
					index: 2,
					text: length
				});
			},
			jumpDetails(item, index) {
				if (item.status == 1 || this.lock) { //已失效商品不做操作
					return
				}
				uni.navigateTo({
					url: '/pages/views/goods/goodsDetails'
				});
			},
			settlement() { //结算
				var temp = [];
				for(var i=0;i<this.cartList.length;i++)
					if(this.cartList[i].select){
						var tempp = {...this.cartList[i],number:this.cartList[i].count,imageUrl:this.cartList[i].goods_image};
						delete tempp.goods_image;
						temp.push(tempp);
					}
						
				uni.setStorageSync('confirmOrder',temp);
				console.log(temp);
				uni.navigateTo({
					url: '/pages/shop/goods/order/confirmOrder'
				});
				
			},
			onStroll() { 
				uni.navigateBack();
			}

		}
	};
</script>
<style lang="scss" scoped>
	.cart {
		padding: 10rpx 4%;
	}
	.clearCart {
		height: 80rpx;
		font-size: 26rpx;
		text-align: right;
		line-height: 80rpx;
		position: fixed;
		left: 0;
		width: 100vw;
		padding: 0 4%;
		background-color: #FFFFFF;
		z-index: 100;
	}
	.cart_box {
		margin-top: 80rpx;
		padding-bottom: 100rpx;
	}

	.cart_list {
		width: 92vw;
		height: calc(22vw + 34rpx);
		border-radius: 12rpx;
		box-shadow: 0px 4rpx 16rpx rgba(0, 0, 0, .1);
		overflow: hidden;
		border: 0;
		display: flex;
		align-items: center;
		position: relative;
		margin-bottom: 20rpx;
	}

	.cart_list .checkbox-box {
		padding-left: 16rpx;
		flex-shrink: 0;
		height: 22vw;
		margin-right: 16rpx;
		align-items: center;
		position: relative;
		width: 50rpx;
	}

	.cart_list .checkbox-box .checkbox {
		width: 28rpx;
		height: 28rpx;
		border-radius: 100%;
		border: solid 1rpx;
		position: absolute;
		top: 50%;
		left: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		transform: translateY(-50%);
	}

	.cart_list .checkbox-box .checkbox .on {
		width: 20rpx;
		height: 20rpx;
		border-radius: 100%;
		align-items: center;
	}

	.cart_list .cover {
		width: 22vw;
		height: 22vw;
		flex-shrink: 0;
		margin-left: 10rpx;
		border-radius: 8rpx;
		overflow: hidden;
		margin-right: 10rpx;
		position: relative;
	}

	.cart_list .cover .mask {
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .6);
		position: absolute;
		top: 0;
		left: 0;
		text-align: center;
		color: #ddd;
		font-size: 24upx;
		line-height: 22vw;
	}

	.cart_list .cover .masks {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}

	.cart_list .cover image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.daodi {
		text-align: center;
		font-size: 24rpx;
		color: #ccc;
		margin-top: 30rpx;
	}

	.right {
		height: 22vw;
		width: 100%;
		/* overflow: hidden; */
		display: flex;
		flex-wrap: wrap;
		padding-right: 15rpx;
		position: relative;
	}

	.right .goods_name {
		width: 100%;
		font-size: 24rpx;
		line-height: 34rpx;
		max-height: 68rpx;
		color: #333;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.sku {
		font-size: 22rpx;
		background-color: #f3f3f3;
		border-radius: 10rpx;
		height: 40rpx;
		line-height: 40rpx;
		padding: 0 10rpx;
		color: #a7a7a7;
		margin-bottom: 40rpx;
	}

	.numbers {
		position: absolute;
		width: 100%;
		overflow: hidden;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		height: 50rpx;
		bottom: -5rpx;
	}

	.numbers .price {
		font-size: 30rpx;
		line-height: 50rpx;
		color: red;
	}

	.numbers .right_btn {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		margin-right: 20rpx;
	}

	.right_btn .sub {
		width: 40rpx;
		height: 40rpx;
		font-size: 40rpx;
		background-color: #f3f3f3;
		border-radius: 4rpx;
		text-align: center;
		line-height: 40rpx;
	}

	.right_btn .sub:active {
		background-color: #f8f8f8;
	}

	.right_btn .input {
		width: 50rpx;
		height: 50rpx;
		margin: 0 8rpx;
		background-color: #f3f3f3;
	}

	.right_btn .input input {
		width: 50rpx;
		height: 50rpx;
		display: flex;
		font-size: 22rpx;
		text-align: center;
		align-items: center;
		justify-content: center;
		color: red;
	}

	.right_btn .add {
		width: 40rpx;
		height: 40rpx;
		font-size: 40rpx;
		background-color: #f3f3f3;
		border-radius: 4rpx;
		text-align: center;
		line-height: 40rpx;
	}

	.right_btn .add:active {
		background-color: #f8f8f8;
	}

	.del_mask {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: -21;
	}

	.dask_del {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, .5);
		z-index: -20;
		display: flex;
		align-items: center;
		opacity: 0;
		transition: all 0.3s;
	}

	.dask_del .del,
	.cencal {
		width: 100rpx;
		height: 100rpx;
		display: flex;
		justify-content: center;
		line-height: 100rpx;
		border-radius: 100%;
		text-align: center;
		font-size: 24rpx;
		background: linear-gradient(#FF5D39, #FFAF48);
		color: #ffffff;
		font-weight: 500;
		margin: 0 auto;
	}

	.dask_del text:active {
		opacity: 0.9;
	}

	.cencal {
		background: linear-gradient(#FFE846, #FFCD43);
	}

	.bottom_all {
		height: 100rpx;
		width: 100%;
		padding: 0 2%;
		align-items: center;
		justify-content: center;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: #fdfdfd;
		z-index: 11;
		border-top: 1upx solid #F8F8F8;
	}

	.bottom_all .left {
		float: left;
		width: 40vw;
		font-size: 24rpx;
		position: relative;
	}

	.bottom_all .left .delAll {
		height: 40rpx;
		border-radius: 20rpx;
		font-size: 22rpx;
		line-height: 38rpx;
		border: solid 1rpx;
		text-align: center;
		width: 92rpx;
		position: absolute;
		right: 50rpx;
		top: 50%;
		transform: translateY(-50%);
	}

	.bottom_all .left .text {
		position: absolute;
		left: 60rpx;
		top: 50%;
		transform: translateY(-52%);
	}

	.bottom_all .checkbox-box {
		padding-left: 16rpx;
		flex-shrink: 0;
		height: 100rpx;
		margin-right: 16rpx;
		align-items: center;
		position: relative;
	}

	.bottom_all .checkbox-box .checkbox {
		width: 32rpx;
		height: 32rpx;
		border-radius: 100%;
		border: solid 1rpx;
		position: absolute;
		top: 50%;
		left: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		transform: translateY(-50%);
	}

	.bottom_all .checkbox-box .checkbox .on {
		width: 20rpx;
		height: 20rpx;
		border-radius: 100%;
		align-items: center;
	}

	.bottom_all .rights {
		float: right;
		width: 56vw;
		line-height: 100rpx;
		font-size: 24rpx;
	}

	.bottom_all .rights view {
		float: right;
	}

	.bottom_all .rights .sum {
		font-weight: bold;
		margin-right: 20rpx;
	}

	.bottom_all .rights .jiesuan {
		padding: 0 22rpx;
		border-radius: 24rpx;
		background-color: pink;
		height: 50rpx;
		line-height: 50rpx;
		color: #ffffff;
		font-size: 24rpx;
		margin-top: 28rpx;
		margin-left: 40rpx;

	}

	/* 购物车为空的样式} */
	.nocart {
		text-align: center;
		margin-top: 30vh;
	}

	.nocart .iconfont {
		font-size: 80rpx;
		text-align: center;
	}

	.nocart view {
		height: 40rpx;
		line-height: 40rpx;
		font-size: 24rpx;
		color: #999;
		margin-top: 20rpx;
	}
</style>
