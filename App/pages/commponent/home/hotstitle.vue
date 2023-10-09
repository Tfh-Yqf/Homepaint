<template>
	<view class="hots">
		<view class="left_icon" style="display: flex;justify-content: center;flex-direction: column;height: 90%;">
			<image src="/static/FirstPage/chinese_style.png" mode="widthFix" style="width: 30px;"></image>
		</view>
		<view class="center" style="margin-left: 5px;" @click="jump_search('中国')">
			<view class="p1">中国风-红木家具，雕花墙板</view>
			<view class="p2">Chinese style-mahogany furniture,carved wall panels</view>
		</view>

		<view class="right">
			<image src="/static/ultis/right.png" class="right_img"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},

		components: {},
		props: {
			colors: {
				type: String
			}
		},
		methods: {
			jump_search(e){
				uni.navigateTo({
					url: '/pages/navigation/ShouYe/furniture_shop/classList?content=' + e
				})
			}
		}
	};
</script>
<style lang="scss" scoped>
	.hots {
		margin: 0 3%;
		margin-top: 20upx;
		height: 110upx;
		border-bottom: 1upx solid #F8F8F8;
		overflow: hidden;
	}

	.hots:active {
		opacity: 0.8;
	}

	.left_icon {
		float: left;
	}

	.left_icon .iconfont {
		font-size: 46upx;
		display: inline-block;
		margin-right: 20upx;
		line-height: 100upx;
	}

	.center {
		float: left;
	}

	.p1 {
		font-size: 28upx;
		font-weight: 500;
		color: #000;
		line-height: 50upx;
		margin-top: 10upx;
	}

	.p2 {
		font-size: 24upx;
		color: #999;
	}

	.right {
		float: right;
	}

	.right .right_img {
		width: 40upx;
		height: 40upx;
		display: inline-block;
		margin-top: 28upx;
	}
</style>
