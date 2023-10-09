<template>
	<!-- 商品评价 -->
	<view class="evaluate">
		<!-- 顶部tab -->
		<view class="tabs">
			<view v-for="(item, index) in tabList" :key="index" class="tabs_list"  @tap="setTabs(item, index)"
			 :style="'color:' + (active == index ?colors :'') + ';font-weight:' + (active == index ?'bold' : '500')">
				{{item.name}}({{item.number}})
				<view class="active" :style="'background:' + colors" v-if="active == index"></view>
			</view>
		</view>
		<!-- 评价列表 -->
		<view class="my_evaluate" >
			<view class="evaluate_box">
					<view class="pingjia">
						<view v-if="goodsEva.length !== 0">
							<view class="pingjia_box" v-for="(row, indexs) in goodsEva" :key="indexs">
								<view class="box_top">
									<image :src="row.headimg" mode="" class="head"></image>
									<view class="right">
										<p class="name">{{ row.nickname }}</p>
										<p class="p2">
											<text class="text1">{{ row.create_time }}</text>
											<text class="text2">{{ row.goods_name }}</text>
										</p>
										<p class="p3">
											<!-- 循环遍历星星 -->
											<image src="/static/images/home/stars.png" v-for="i in row.score" :key="i" mode="" ></image>
											<block v-if="row.score !== 5">
												<image src="/static/images/home/star-no.png" v-for="(s,h) in (5-row.score)" :key="h" mode="" ></image>
											</block>
											</p>
									</view>
								</view>
									<view class="tag_box" v-if="row.tags.length !== 0">
										<view class="tags" v-for="(s,x) in row.tags" :key="x">{{s}}</view>
									</view>
								<view class="ping_neirong">{{ row.comment }}</view>
								<view class="ping_img" v-if="row.images.length !== 0 || row.video.length !== 0">
									<image :src="s" mode="" v-for="(s,x) in row.images" :key="x" @click="preview(row.images, x)"></image>
										<view class="video" v-for="(video, videos) in row.video" :key="String(videos+1)">
											<!-- 建议设置视频封面 封面壁纸为https网络图片 video层级高会覆盖loading 所以先隐藏-->
											<video v-if="isShow == false" :controls="false" id="coverVideo" :src="video.videourl" :poster="video.poster" :show-center-play-btn="false" :show-play-btn="false" :enable-progress-gesture="false">
														<cover-view class="covers"></cover-view>
														<cover-image class="imgs" v-if="showVideo == false" src="/static/images/goods/bofang.png" mode="" @click="onplayVideos" :data-videos="video.videourl"></cover-image>
													
											</video>
										</view>
								</view>
								<!-- 回复 -->
								<view class="huifu" v-if="row.reply && row.reply !== ''">商家回复：{{ row.reply }}</view>
							</view>
							<p class="onbottom">—— 到底了 ——</p>
						</view>
					</view>
			</view>
		</view>
		<!-- 预览视频弹窗 -->
		<view class="mask" v-if="showVideo == true" @touchmove.stop.prevent="ondefault" @click="closeVideo">	
		<view class="close">
			<image src="/static/images/goods/close.png"></image>
		</view>
		</view>
		<view class="previewvideo" v-if="showVideo == true">
			<view class="videos">
				<video class="nowvideos" id="nowVideo" v-if="showVideo == true" :src="videos" :autoplay="showVideo"
				 :show-center-play-btn="false" :show-mute-btn="true" :show-fullscreen-btn="false"></video>
			</view>
		</view>
		<!-- 用来兼容H5操作的 ↓ -->
		<view style="position: absolute;top: -999upx;left: -999upx;">
			<video ref="nowVideo" id="newVideo" :src="videos"
			:autoplay="showVideo"
			 :show-center-play-btn="true" :show-mute-btn="true" :show-fullscreen-btn="false"></video>
		</view>
		<nodata v-if="goodsEva.length == 0" :colors="colors"></nodata>
		<loading v-if="isShow == true"></loading>
		</video>
	</view>
</template>

<script>
	let app = getApp()
	import loading from "../../commponent/public/loading";
	import tabs from '../../commponent/public/tabs.vue'
	export default {
		components: {
			tabs,
			loading
		},
		data() {
			return {
				colors: '',
				temporary:[],
				platform:'',
				isShow:true,
				videos:'',
				showVideo:false,
				tabList: [{
					name: '最新',
					number: 10,
					id: 0
				}, {
					name: '好评',
					number: 8,
					id: 1
				}, {
					name: '中评',
					number: 8,
					id: 2
				}, {
					name: '差评',
					number: 6,
					id: 3
				}, {
					name: '有图',
					number: 5,
					id: 4
				}],
				active: 0,
				goodsEva:[ //评价列表
					{headimg:'/static/images/face.jpg',nickname:'反转',create_time:'2020-09-10 15:36',goods_name:'醇黑巧克力【20枚】', score:5,comment:'产品很不错,赞',images:['/static/images/goods/two.jpg','/static/images/goods/one.jpg'],reply:'感谢您的支持',tags:['价格合理','味道好','价格优惠','态度好'],video:[]},
					{headimg:'/static/images/face.jpg',nickname:'清风',create_time:'2020-09-10 13:36',goods_name:'醇黑巧克力【20枚】', score:4,comment:'针不戳，住在山里面针不戳~',images:['/static/images/goods/two.jpg'],reply:'',tags:[],video:[{vid:1,videourl:'https://fzdz.soft.haoyangsoft.com/uploads/system/videos/20200813/6c819d24ee6868aee33e150c4333329b.mp4',poster:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603080909940&di=ac10c5f2c952dd1b40441bb696c55a88&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw640h640%2F20180127%2F369b-fyqzcxh1087346.jpg"}]},
					{headimg:'/static/images/face.jpg',nickname:'明月',create_time:'2020-09-10 15:36',goods_name:'草莓味【8枚】', score:5,comment:'产品很不错,赞',images:['/static/images/goods/two.jpg','/static/images/goods/one.jpg'],reply:'感谢您的支持',tags:['价格合理','态度好'],video:[]},
				]
			}
		},
		onReady() {
			this.newVideo = uni.createVideoContext('newVideo');
			this.nowVideo = uni.createVideoContext('nowVideo');
		},
		onLoad() {
			this.platform = uni.getSystemInfoSync().platform  //判断当前是安卓还是ios 然后进行适配
			this.colors = app.globalData.newColor; //设置主题颜色
			this.temporary = this.goodsEva
			setTimeout(()=>{
				this.isShow = false
			},600)
		},
		methods:{
			ondefault(){ //阻止事件 抛弃
				
			},
			setTabs(item,index){ //切换状态栏 模拟数据
				this.active = index
				this.goodsEva = index == 0 ? this.temporary : []
			},
			preview(imgs, index){ //预览图片
				uni.previewImage({
					current:index,
					urls:imgs
				})
			},
			onplayVideos(video){
				this.videos = video.currentTarget.dataset.videos
				// #ifdef MP
				// 小程序下可以直接打开,但是在H5下部分浏览器会强制调用原生播放器播放
				this.showVideo = true
				setTimeout(()=>{
					// this.nowVideo.play()
				},300)
				// #endif
				// #ifdef APP-PLUS
				// 兼容APP处理
				this.showVideo = true
				// #endif
				// #ifdef H5
				// H5状态下会调用浏览器原生video 这是不需要
				if(this.platform == 'android'){
					this.newVideo.play();
				}else{
					this.showVideo = true
				}
				// #endif
			},
			closeVideo(){
				this.showVideo = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tabs {
		height: 80upx;
		line-height: 80upx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		background-color: #fff;
		border-bottom: 1upx solid rgba($color: #eee, $alpha: 0.5);
		.tabs_list {
			flex: 1;
			text-align: center;
			font-size: 28upx;
			position: relative;
			color: #333;
		}
		.active {
			font-weight: bold;
			color: #DD4F42;
			width: 50upx;
			height: 4upx;
			border-radius: 20upx;
			background-color: #DD4F42;
			position: absolute;
			bottom: 0upx;
			left: 50%;
			transform: translateX(-50%);
			transition: all 0.3s;
		}
	}
	.my_evaluate{
		padding: 20upx 4%;
		.eva_title{
			height: 70upx;
			margin-top: 10upx;
			line-height: 70upx;
			font-size: 30upx;
			font-weight: bold;
			color: #202020;
			text{
				font-weight: normal;
			}
			.seeAll{
				float: right;
				font-size: 24upx;
				color: #999999;
				transform: translateY(6upx);
				&:active{
					opacity: 0.8;
				}
			}
		}
		.evaluate_box{
			.pingjia {
				background-color: #ffffff;
				overflow: hidden;
				.pingjia_box {
					overflow: hidden;
					margin-top: 20upx;
					padding-bottom: 20upx;
					overflow: hidden;
					border-bottom: 1upx solid #f2f2f2;
					&:last-child {
						border-bottom: none;
						padding-bottom: 10upx;
					}
					.box_top {
						display: flex;
						.head {
							height: 80upx;
							max-width: 80upx;
							min-width: 80upx;
							flex: 1;
							border-radius: 50%;
							float: left;
						}
						.right {
							flex: 1;
							margin-left: 20upx;
							position: relative;
							.name {
								font-size: 26upx;
								font-family: Source Han Sans CN;
								font-weight: 400;
								color: rgba(0, 0, 0, 1);
							}
							.p2 {
								margin-top: 20upx;
								font-size: 24upx;
								font-family: Source Han Sans CN;
								font-weight: 400;
								color: rgba(156, 156, 156, 1);
								.text2 {
									margin-left: 50upx;
								}
							}
							.p3 {
								height: 35upx;
								position: absolute;
								right: 0;
								width: 200upx;
								top: 8upx;
								image {
									width: 35upx;
									height: 35upx;
									float: left;
									margin-left: 5upx;
								}
							}
						}
					}
					.tag_box {
						margin-top: 20upx;
						overflow: hidden;
						.tags {
							font-size: 22upx;
							font-family: Source Han Sans CN;
							font-weight: 400;
							background-color: #FAEFF7;
							color: #FF546E;
							float: left;
							height: 50upx;
							line-height: 50upx;
							padding: 0 15upx;
							border-radius: 25upx;
							text-align: center;
							margin-right: 20upx;
						}
					}
					.ping_neirong {
						font-size: 28upx;
						margin-top: 20upx;
						font-family: Source Han Sans CN;
						font-weight: 500;
						color: rgba(0, 0, 0, 1);
						line-height: 50upx;
					}
					.ping_img {
						display: flex;
						flex-wrap: wrap;
						align-items: flex-start;
						align-content: flex-start;
						justify-content: space-between;
						margin-top: 20upx;
						&::after {
							content: '';
							max-width: 29vw;
							min-width: 29vw;
						}
						image,video {
							max-width: 29vw;
							min-width: 29vw;
							height: 29vw;
							border-radius: 5upx;
							margin-bottom: 20upx;
						}
						.video{
							position: relative;
							max-width: 29vw;
							min-width: 29vw;
							height: 29vw;
							overflow: hidden;
							border-radius: 5upx;
							video{
								overflow: hidden;
								position: relative;
								border-radius: 5upx;
								.covers{ //遮挡层
									width: 100%;
									height: 100%;
									position: absolute;
									top: 0;
									left: 0;
									z-index: 9990;
								}
								.imgs{
									width: 72upx;
									height: 72upx;
									position: absolute;
									top: 50%;
									left: 50%;
									z-index: 9999;
									transform: translate(-50% ,-50%);
								}
							}
						}
					}
					.huifu {
						padding: 20upx;
						background-color: #f3f3f3;
						border-radius: 10upx;
						font-size: 24upx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: rgba(77, 77, 77, 1);
					}
				}
			}
		}
	}
	.onbottom{
		height: 80upx;
		line-height: 80upx;
		text-align: center;
		font-size: 24upx;
		color: #ccc;
	}
	/* 预览视频弹窗 */
	.mask{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(0,0,0,.8);
		z-index: 200;
	}
	.previewvideo {
		width: 100vw;
		height: 100vw;
		position: fixed;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		background-color: #000;
		z-index: 900;
		opacity: 1;
	}
	.close {
		display: flex;
		align-content: center;
		align-items: flex-end;
		position: absolute;
		top: 100upx;
		left: 20upx;
		z-index: 900;
		image {
			width: 50upx;
			height: 50upx;
			display: block;
			justify-content: center;
			margin-left: 30upx;
			margin-bottom: 20upx;
			border-radius: 50%;
			padding: 10upx;
			background-color: rgba(0, 0, 0, 0.2);
		}
	}
	
	.videos {
		height: 100vw;
		width: 100vw;
		z-index: 10;
		position: relative;
		video{
			width: 100%;
			height: 100%;
		}
	}
	
	.nowvideos {
		width: 100%;
		height: 100%;
		margin: 0 auto;
	}
</style>
