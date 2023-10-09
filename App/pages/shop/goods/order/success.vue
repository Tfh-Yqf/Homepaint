<template>
	<view class="jieguo" :style="{background: colors}">
		<view class="place">
		</view>
		<view class="jieguo_box">
			<view class="success">
				<text class="iconfont icon-chenggong" :style="'color:' + colors"></text>
			</view>
			<view class="texts">支付成功</view>
			<view class="moneys">￥{{AllPirce}}</view>
			<view class="wancheng" @tap="onsuccess" :style="'color:' + colors + ';border-color:' + colors">完成</view>
			<view class="ewm" @tap="jumpUser">返回个人中心>>></view>
		</view>
	</view>
</template>

<script>
	var app = getApp();

	export default {
		data() {
			return {
				colors: "",
				AllPirce:0
			};
		},

		components: {},
		props: {},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			this.setData({
				colors: app.globalData.newColor
			});
		},
		mounted() {
			this.AllPirce = uni.getStorageSync('AllPirce');
		},
		methods: {
			onsuccess() {
				uni.redirectTo({
					url:'/pages/navigation/ShouYe/furniture_shop/furniture_shop'
				});
			},

			jumpUser() {
				uni.navigateTo({
					url:'/pages/navigation/WoDe/WoDe'
				});
			}

		}
	};
</script>
<style>
	.jieguo {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		bottom: 0;
		padding: 0 8%;
		overflow: hidden;
	}

	.place {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, .3), rgba(255, 255, 255, .5), #ffffff);
		z-index: 10;
	}

	.jieguo_box {
		width: 88%;
		background-color: #fff;
		height: 90vw;
		border-radius: 10upx;
		box-shadow: 0upx 0upx 10upx #999;
		padding: 20upx;
		z-index: 900;
		position: absolute;
		top: 150upx;
		left: 50%;
		transform: translateX(-50%);
	}

	.success {
		text-align: center;
		margin-top: 50upx;
	}

	.success text {
		font-size: 140upx;
	}

	.jieguo .texts,
	.moneys {
		text-align: center;
		font-size: 32upx;
		margin-top: 20upx;
		font-weight: bold;
	}

	.wancheng {
		width: 80%;
		height: 80upx;
		border: 2upx solid #3E7E8B;
		color: #3E7E8B;
		text-align: center;
		line-height: 80upx;
		border-radius: 10upx;
		margin: 0 auto;
		margin-top: 150upx;
		font-weight: bold;
	}

	.ewm {
		margin-top: 20upx;
		height: 40upx;
		line-height: 40upx;
		text-align: center;
		font-size: 24upx;
		color: #999;
	}
</style>
