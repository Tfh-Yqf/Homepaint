<template>
	<view>
		<view class="swiper-css zqui-rel" :style="{ height: hpx }">
			<swiper class="swiper" :style="{ height: hpx }" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
			 :duration="duration" @change="guideAction" next-margin="50rpx">
				<swiper-item class="flex1" v-for="(item, index) in imageList" :key="index">
					<view class="flex-column title-box"	style="text-align: center;">
						<view class="guide-title">{{item.name}}</view>
						<view class="guide-subtitle">{{item.subtitle}}</view>
					</view>
					<image class="flex-column image-size" mode="aspectFit" :src="item.src" />
				</swiper-item>
			</swiper>
			<!-- 按钮样式切换 -->
			<template >
				<view class=" flex-column dots">
					<block v-for="(item,index) in imageList" :key="index">
						<view class="dot" :class="{'active':  index == cur}"></view>
					</block>
				</view>
			</template>
			<!-- 第三张图使用按钮《立即进入》 -->
			<template v-if="cur == 2">

				<view class="footer" @click="launchApp('login')">已有账号去登录</view>
				<view class="footer2" @click="launchApp('register')">
					<image src="../../static/guide/phone.png" mode="widthFix" style="width: 10px;"></image>
					<text style="margin-left: 5px;">手机号注册</text>
				</view>
			</template>
			<!-- 右上角跳过按钮 -->
			<view class="btn-box" @click="launchApp('login')"><text class="passbtn">跳过</text></view>
		</view>
	</view>
</template>

<script>
	const animation = weex.requireModule('animation');
	export default {
		data() {
			return {
				//修改图片,文字描述
				imageList: [{
						name: 'AI智慧装修',
						subtitle: 'AI Smart Decoration',
						src: '/static/guide/guide01.png'
					},
					{
						name: 'VR沉浸体验',
						subtitle: 'VR Immersive Experience',
						src: '/static/guide/guide02.png'
					},
					{
						name: '家具建模',
						subtitle: 'Furniture Modeling',
						src: '/static/guide/guide03.png'
					}
				],
				indicatorDots: false,
				autoplay: false,
				interval: 10000,
				duration: 500,
				iStatusBarHeight: '0px',
				hpx: '100%',
				cur: 0,
				dotsStyles: ''
			};
		},
		onLoad() {
			let that = this;
			plus.navigator.closeSplashscreen();
			uni.getSystemInfo({
				success: function(res) {
					that.hpx = res.windowHeight + 'px';
				}
			});
		},
		onReady() {
			this.move(0, 1);
		},
		methods: {
			launchApp(e) {
				//跳过引导页,储存本地值,下次进入直接跳过
				uni.setStorage({
					key: 'launchFlag',
					data: true,
					success() {
						uni.redirectTo({
							url: '/pages/login/'+e
						});
					}
				});
			},
			guideAction(event) {
				let that = this,
					index = event.detail.current;
				that.cur = index;
				if (index == 0) {
					that.move(0, 1);
					that.moveTwo(150, 0.1);
					that.moveThree(150, 0.1);
					that.lefMainAction(0);
				}
				if (index == 1) {
					that.moveTwo(0, 1);
					that.move(150, 0.1);
					that.moveThree(150, 0.1);
					that.lefMainAction(uni.upx2px(80) + 'px');
				}
				if (index == 2) {
					that.moveThree(0, 1);
					that.moveTwo(150, 0.1);
					that.move(150, 0.1);
					that.lefMainAction(uni.upx2px(160) + 'px');
				}
			},
			lefMainAction(mum) {
				var testLM = this.$refs.lefMain;
				animation.transition(
					testLM, {
						styles: {
							transform: 'translate(' + mum + ',0px)'
						},
						duration: 400, //ms
						timingFunction: 'ease',
						delay: 0 //ms
					},
					function() {}
				);
			},
			move(tran, opa) {
				var testEl = this.$refs.box1;
				animation.transition(
					testEl, {
						styles: {
							transform: 'translate(' + tran + 'px,0px)',
							transformOrigin: 'center center',
							opacity: opa
						},
						duration: 800, //ms
						timingFunction: 'ease',
						delay: 0 //ms
					},
					function() {}
				);
				var textE2 = this.$refs.box2;
				animation.transition(
					textE2, {
						styles: {
							transform: 'translate(0px,' + tran + 'px) scale(' + opa + ')',
							transformOrigin: 'center center',
							opacity: opa
						},
						duration: 800, //ms
						timingFunction: 'ease',
						delay: 0 //ms
					},
					function() {}
				);
			},
			moveTwo(tran, opa) {
				var testEl = this.$refs.box3;
				animation.transition(
					testEl, {
						styles: {
							transform: 'translate(' + tran + 'px,0px)',
							transformOrigin: 'center center',
							opacity: opa
						},
						duration: 800, //ms
						timingFunction: 'ease',
						delay: 0 //ms
					},
					function() {}
				);
				var textE2 = this.$refs.box4;
				animation.transition(
					textE2, {
						styles: {
							transform: 'translate(0px,' + tran + 'px) scale(' + opa + ')',
							transformOrigin: 'center center',
							opacity: opa
						},
						duration: 800, //ms
						timingFunction: 'ease',
						delay: 0 //ms
					},
					function() {}
				);
			},
			moveThree(tran, opa) {
				var testEl = this.$refs.box5;
				animation.transition(
					testEl, {
						styles: {
							transform: 'translate(' + tran + 'px,0px)',
							transformOrigin: 'center center',
							opacity: opa
						},
						duration: 800, //ms
						timingFunction: 'ease',
						delay: 0 //ms
					},
					function() {}
				);
				var textE2 = this.$refs.box6;
				animation.transition(
					textE2, {
						styles: {
							transform: 'translate(0px,' + tran + 'px) scale(' + opa + ')',
							transformOrigin: 'center center',
							opacity: opa
						},
						duration: 800, //ms
						timingFunction: 'ease',
						delay: 0 //ms
					},
					function() {}
				);
			}
		}
	};
</script>

<style lang="scss">
	page {
		background-color: #FFFFFF;
		min-height: 100%;
		height: 100%;
	}
	
	.button_group{
		width: 300px;
		height: 53px;
		background: #F3EFE3;
		border-radius: 8px;
		position: fixed;
	}
	
	.footer {
		width: 70%;
		height: 100rpx;
		position: fixed;
		bottom: 366rpx;
		left: 15%;
		font-size: 14px;
		color: #000000;
		background-color: #F3EFE3;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 8px;
	}
	
	.footer2 {
		width: 70%;
		height: 100rpx;
		position: fixed;
		bottom: 226rpx;
		left: 15%;
		font-size: 14px;
		color: #000000;
		border: thin solid #F3EFE3;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 8px;
	}

	.guide {
		flex-direction: column;
		flex: 1;
	}

	.flex1 {
		flex: 1;
		width: 100%;
		height: 100%;
	}

	.image-size {
		width: 630rpx;
		height: 600rpx;
		margin-left: 60rpx;
	}

	.title-box {
		padding: 250rpx 0 120rpx 64rpx;
	}

	.guide-title {
		font-size: 30px;
		font-weight: 400;
		color: #141412;
		letter-spacing: 1.94px;
	}

	.guide-subtitle {
		margin-top: 20rpx;
		font-size: 14px;
		color: #141412;
		line-height: 50rpx;
		font-weight: 600;
		letter-spacing: 0.8px;
	}



	.btn-box {
		position: absolute;
		z-index: 999;
		right: 40rpx;
		top: 120rpx;
	}

	.dots {
		display: flex;
		justify-content: center;
		position: absolute;
		z-index: 999;
		height: 151rpx;
		left: 0;
		right: 0;
		bottom: 20rpx;
	}

	.passbtn {
		color: #838892;
		text-align: center;
		border-width: 1rpx;
		border-color: rgba(0, 0, 0, 0.5);
		border-style: solid;
		border-radius: 30rpx;
		font-size: 28rpx;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		padding-left: 25rpx;
		padding-right: 25rpx;
	}

	.dot {
		margin: 0 8rpx;
		width: 20rpx;
		height: 20rpx;
		background: #ebebeb;
		border-radius: 15rpx;
		transition: all .6s;
	}

	.dot.active {
		width: 55rpx;
		background: #dfd3b0 !important;
	}

	/* 相对定位 */
	.zqui-rel {
		position: relative;
	}

	.swiper-css {
		width: 750rpx;
	}

	.swiper-item {
		width: 750rpx;
	}
</style>
