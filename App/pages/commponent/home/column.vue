<template>
	<view class="column">
		<view class="column_left">
			<image src="https://image-1304455659.cos.ap-nanjing.myqcloud.com/images/test/colum_left.jpg"
				mode="scaleToFill" class="left_img" @click="jump_search('北欧')"></image>
		</view>
		<view class="colum_right">
			<image src="https://image-1304455659.cos.ap-nanjing.myqcloud.com/images/test/column_right1.jpg"
				class="right_img" @click="jump_search('极简')"></image>
			<image src="https://image-1304455659.cos.ap-nanjing.myqcloud.com/images/test/column_right2.jpg"
				style="margin-top: 12upx" class="right_img" @click="jump_search('轻奢')"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		components: {},
		props: {},
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
	.column {
		height: 400upx;
		width: 94%;
		overflow: hidden;
		margin: 0 3%;
		margin-top: 15upx;
	}

	.column_left {
		height: 100%;
		width: 40%;
		float: left;

		.left_img {
			width: 100%;
			height: 100%;
			display: block;
		}
	}

	.colum_right {
		float: right;
		width: 58%;

		.right_img {
			width: 100%;
			height: 196upx;
			display: block;
		}
	}
</style>
