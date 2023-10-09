<template>
	<view class="carousel">
		<swiper circular="true" duration="400" touchable @change="swiperchange" class="swiper">
			<swiper-item v-for="(item, index) in goodsData.imageUrl" :key="index" class="swiper-item" @click="preview(goodsData.imageUrl,index)">
				<view class="image-wrapper">
					<image :src="item.imageUrl" class="loaded" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="dots" v-if="goodsData.imageUrl.length !== 0">
			<text>{{currentIndex}}</text> / <text>{{goodsData.imageUrl.length}}</text>
		</view>
		<view class="video_btn" @click="onshowVideo" v-if="goodsData.videos !== ''&& goodsData.videos!=null">
			<text>{{minutes}}'{{seconds}}'</text>
			<!-- 这里的视频时间 建议后端上传视频时进行计算 返回给前端 前端兼容多端的情况下计算起来比较复杂 -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex: 1,
				showVideo: false,
				minutes:'00',
				seconds:'18',
				isH5: false ,//针对H5做处理
				platform:'',
				videos:''
			}
		},
		props: {
			goodsData: {
				type: Object
			}
		},
		created() {
			this.platform = uni.getSystemInfoSync().platform  //判断当前是安卓还是ios
		},
		methods: {
			onshowVideo() {
				// #ifndef H5
				this.showVideo = true
				// #endif
				// #ifdef H5
				// h5 在真机上测试
				if(this.platform == 'android'){ //判断是安卓还是ios来对视频做适配
					this.isH5 = true
				}else{
					this.showVideo = true
				}
				// #endif
				this.$emit('setShowVideo',this.showVideo,this.isH5)
			},
			swiperchange(e) {
				this.currentIndex = e.detail.current + 1
			},
			preview(imgs, index) { //预览图片
				uni.previewImage({
					current: index,
					urls: imgs
				})
			},
			
		}
	}
</script>
<style scoped lang="scss">
	.carousel {
		position: relative;
		overflow: hidden;
		.dots {
			height: 40upx;
			line-height: 40upx;
			font-size: 24upx;
			text-align: center;
			background-color: rgba(0, 0, 0, .2);
			position: absolute;
			bottom: 30upx;
			right: 0;
			z-index: 20;
			color: #FFFFFF;
			padding: 0 20upx;
			border-radius: 20upx 0 0 20upx;
		}
	}

	.swiper {
		width: 100vw;
		height: 100vw;
		z-index: 100;
	}

	.loaded {
		width: 100vw;
		height: 100vw;
		display: block;
	}

	.video_btn {
		width: 165upx;
		height: 60upx;
		background: url(data:image/png;base64,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) no-repeat;
		background-size: 100% 100%;
		position: absolute;
		bottom: 20upx;
		left: 50%;
		transform: translateX(-50%);
		text-align: right;
		line-height: 60upx;
		padding: 0 20upx;
		font-size: 24upx;
		letter-spacing: 2upx;

		&:active {
			opacity: .8;
		}
	}
</style>
