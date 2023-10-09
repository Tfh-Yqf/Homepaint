<template>
	<view class="suspension">
		<view :class="showsever == true ? 'topon' : 'top'">
			<view class="serve" v-for="(item,index) in iconList" :key="index" @tap="jumpServer(item)">
				<text :class="['iconfont',item.icon ]"></text>
			</view>
		</view>
		<view class="bottom">
			<view class="serve" :style="'background-color:' + colors" @tap="onshowsever">
				<text class="iconfont icon-fuwu"></text>
			</view>
			<view class="ontop" :style="'opacity: ' + (scrollShow == true ? '1':'0')" @tap="goTop">
				<image src="/static/ultis/TOP.png" class="top_img"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showsever: false,
				iconList: [{
						icon: 'icon-sousou',
						name: '搜索',
						link: '/pages/commponent/search/search'
					},
					{
						icon: 'icon-kefu',
						name: '客服',
						link: '',
						tel: '12345'
					},
					{
						icon: 'icon-gouwuche',
						name: '购物车',
						link: '/pages/shop/goods/cart'
					}
				]
			};
		},
		props: {
			scrollShow: { //监听页面滚动
				type: Boolean,
				default: false
			},
			colors: {
				type: String
			}
		},
		methods: {
			onshowsever() { //控制top按钮的显示
				let shows = !this.showsever;
				this.setData({
					showsever: shows
				});
			},
			goTop() { //回到顶部
				uni.pageScrollTo({
					scrollTop: 0
				});
			},
			jumpServer(item) { //跳转
				if(this.showsever == false){
					return
				}
				if (item.link !== '') {
					uni.navigateTo({
						url: item.link
					})
				} else { //拨打电话
					uni.makePhoneCall({
						phoneNumber: item.tel
					})
				}
			}
		}
	};
</script>
<style scoped lang="scss">
	.suspension {
		position: fixed;
		bottom: 12vh;
		right: 3%;
		width: 80upx;
		z-index: 200;
	}

	.suspension .top {
		width: 100%;
		padding-bottom: 20upx;
		transition: all 0.3s;
		transform: scale(0.1) translateY(80%);
		opacity: 0;
		z-index: -100;
		.serve {
			width: 0upx;
			height: 0upx;
			background-color: rgba(0, 0, 0, 0.5);
			color: #fff;
			border-radius: 50%;
			margin-bottom: 20upx;
		}
	}

	.topon {
		width: 100%;
		transition: all 0.3s;
		opacity: 1;
		transform: none;
		z-index: 100;
		.serve {
			width: 70upx;
			height: 70upx;
			background-color: rgba(0, 0, 0, 0.5);
			color: #fff;
			border-radius: 50%;
			margin-bottom: 20upx;
		}
	}

	.suspension .bottom .serve {
		width: 70upx;
		height: 70upx;
		background-color: rgba(0, 0, 0, 0.5);
		color: #fff;
		border-radius: 50%;
		margin-bottom: 20upx;
	}

	.suspension .serve:active {
		opacity: 0.8;
	}

	.serve .iconfont {
		font-size: 32upx;
		display: block;
		text-align: center;
		line-height: 70upx;
	}

	.ontop {
		width: 70upx;
		height: 70upx;
		background-color: rgba(0, 0, 0, 0.6);
		border-radius: 50%;
		transition: all 0.3s;
	}

	.ontop:active {
		opacity: 0.8;
	}

	.ontop .top_img {
		width: 45upx;
		height: 55upx;
		display: block;
		margin: 0 auto;
		padding-top: 15upx;
		overflow: hidden;
	}
</style>
