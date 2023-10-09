<template>
	<view class="classList">

		<view class="top_nav">
			<!-- #ifndef H5 -->
			<view class="status_bar" :style="'height: '+ statusBarHeight"></view>
			<!-- #endif -->
			<!-- 搜索框 -->
			<view style="width: 100%;text-align: center;">
				<image :src="res.meta_reault.image_url" mode="widthFix" style="width: 60%;"></image>
			</view>

			<!-- 条件筛选框 -->
			<view class="screen">
				<view class="screen_list" @tap="openScreen" :style="'color:' + (current == 0 ? colors:'')"
					data-index="0">
					{{screenName}}
					<text class="iconfont icon-xiasanjiao down" :style="'color:' + (current == 0 ? colors:'')"></text>
				</view>
				<view class="screen_list" @tap="setCurrent" :style="'color:' + (current == 1 ? colors:'')"
					data-index="1">
					销量
				</view>
				<view class="screen_list" @tap="setList">
					<text class="iconfont icon-gongge"
						:style="'font-size:30upx;font-weight:bold;color:' + (current == 2 ? colors:'#333')"
						v-if="modes == true"></text>
					<text class="iconfont icon-liebiao"
						:style="'font-size:30upx;font-weight:bold;color:' + (current == 2 ? colors:'#333')"
						v-if="modes == false"></text>
				</view>
				<view class="screen_list" @tap="openPop" :style="'color:' + (current == 3 ? colors:'')" data-index="3">
					筛选
				</view>
				<!-- 弹出筛选框 -->
				<view class="more_screen"
					:style="'opacity:' + (isMaskShow == true?'1':'0') + ';display:' + (isMaskShow == true?'block':'none')">
					<view v-for="(item, index) in screenList" :key="index" class="more_list"
						@tap="setScreen(item,index)">
						<text :style="'font-weight:' + (onscreen == index ? 'bold':'500')">{{item.name}}</text>
						<text v-if="onscreen == index" class="iconfont icon-duihao"
							:style="'color:' + colors + ';'"></text>
					</view>
				</view>
			</view>
			<!-- 弹出遮罩层 -->
			<view class="mask" @tap="closeScreen" catchtouchmove="true" v-if="isMaskShow == true"
				:style="'top:'+statusBarHeight+';'"></view>
			<view class="mask" @tap="hideright" catchtouchmove="true" v-if="popShow == true"></view>
			<!-- 点击筛选弹出的右侧弹出窗口 -->
			<view :class="popShow == true ? 'right_popup':'hide_popup'" catchtouchmove="true">
				<scroll-view class="pop_scroll">
					<view class="top_price">
						<text>价 格 区 间</text>
						<text :style="'color:' + colors">请输入价格区间</text>
					</view>
					<view class="input_box">
						<input placeholder="最低价"></input>
						<text>-</text>
						<input placeholder="最高价"></input>
					</view>
					<view v-for="(item, index) in classList" :key="index" class="allClass">
						<view class="classtext">{{item.name}}</view>
						<view class="class_box">
							<!-- 选中分类条件 -->
							<view v-for="(row, indexs) in item.child" :key="indexs" class="class_tag"
								:style="'color:' + (row.current == true ? '#fff':'#333') + ';background:' + (row.current == true ? colors:'') + ';border-color:' + (row.current == true ? colors:'') + ';'"
								@tap="setClass(item,row,index,indexs)">{{row.name}}</view>
						</view>
					</view>
				</scroll-view>
				<view class="bottom_btn">
					<view class="reset" :style="'color:' + colors + ';border-color:' + colors" @tap="onreset">重置</view>
					<view class="enter" :style="'background:' + colors" @tap="onenter">确定</view>
				</view>
			</view>
			<!-- 二级条件选择 -->
			<scroll-view scroll-x="true" class="tow_scroll" :scroll-with-animation="true" :scroll-left="scrollLeft">
				<view class="scroll_tags"
					:style="{color:tagCurrent==index?'#ffffff':'#202020',background:tagCurrent==index?colors:'#F5F5F5'}"
					v-for="(item,index) in tagsList" :key="index" @click="setTags(item,index)">
					{{item}}
				</view>
			</scroll-view>
		</view>

			<!-- 商品列表 -->
		<view style="width: 100%;display: flex;">
			<recommend :colors="colors" :dataList="dataList" :modes="modes" :loading="loading"></recommend>
		</view>
		<loading v-if="isShow == true"></loading>
	</view>
</template>

<script>
	var app = getApp();
	import search from "@/pages/commponent/public/search";
	import recommend from "@/pages/commponent/home/recommend";
	import loading from "@/pages/commponent/public/loading";
	import request from '@/utils/request';

	export default {
		data() {
			return {
				statusBarHeight: app.globalData.statusHeight + 'px',
				toBarHeight: app.globalData.toBar + 'px',
				colors: '',
				isShow: false,
				current: 0,
				isMaskShow: false,
				modes: true,
				onscreen: 0,
				scrollLeft: 0,
				tagCurrent: 999,
				loading: false,
				screenList: [{
					name: '综合',
					id: 0
				}, {
					name: '价格升序',
					id: 1
				}, {
					name: '价格降序',
					id: 2
				}],
				screenName: '综合',
				popShow: false,
				classList: [{
					name: '全部分类',
					id: 1,
					child: [{
						name: '资源类',
						id: 2
					}, {
						name: '工具类',
						id: 3
					}]
				}, {
					name: '品牌',
					id: 2,
					child: [{
						name: '苹果',
						id: 1
					}, {
						name: '华为',
						id: 2
					}, {
						name: '小米',
						id: 2
					}]
				}],
				newdata: "",
				tagsList: [
					'沙发', '椅子', '床', '地板', '餐桌', '床头柜', '窗户', '门', '壁纸', '吊灯', '衣服柜'
				],
				// 商品列表
				dataList: [],
				res: null
			};
		},

		components: {
			search,
			recommend,
			loading
		},
		props: {},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function() {

			this.setData({
				colors: app.globalData.newColor
			});
			this.initdata();
		},

		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage: function() {},
		methods: {
			initdata() {


				this.isShow = false;
				uni.hideLoading();
				this.res = uni.getStorageSync('search_result');
				this.dataList = [];
				for (var i = 0; i < this.res.Image_Mate.length; i++) {
					this.dataList.push({...this.res.Image_Mate[i].goods,score:this.res.Image_Mate[i].images_meta_result.score,imageURL:this.res.Image_Mate[i].imageURL});
				}
			},
			setCurrent(e) {
				console.log(e);
				let index = e.currentTarget.dataset.index;
				this.setData({
					current: index
				});
			},

			openScreen(e) {
				let index = e.currentTarget.dataset.index;
				console.log(e)
				this.setData({
					current: index,
					isMaskShow: !this.isMaskShow
				});
			},

			closeScreen() {
				this.setData({
					isMaskShow: false
				});
			},

			setList() {
				this.setData({
					modes: !this.modes
				});
			},

			setScreen(item, index) {
				this.setData({
					onscreen: index,
					screenName: item.name,
					isMaskShow: false
				});
			},

			openPop() {
				this.setData({
					popShow: true
				});
			},

			hideright() {
				this.setData({
					popShow: false
				});
			},

			setClass(item, row, index, indexs) { //选择条件
				row.current = row.current == true ? false : true
				item.child[indexs] = row;
				let data = item;
				let newdata = 'classList[' + index + ']';
				this.setData({
					[newdata]: data
				});
			},

			onreset() { //重置筛选条件
				let data = this.classList;
				data.forEach(e => {
					e.child.forEach(ele => {
						ele.current = false;
					});
				});
				this.setData({
					classList: data,
					popShow: false
				});
			},

			onenter() { //确认筛选条件
				this.setData({
					popShow: false
				});
				let select = []
				this.classList.forEach(e => {
					e.child.forEach(ele => {
						if (ele.current == true) {
							select.push(ele)
						}
					});
				})
				console.log('选中的项', select)
			},
			backTo() {
				uni.navigateBack(-1)
			},
			setTags(item, index) { //选择tag二级分类
				this.tagCurrent = index
				this.isShow = true
				let scrollLeft = index * 38;
				if (index <= 2) {
					scrollLeft = 0;
				}
				this.scrollLeft = scrollLeft
				setTimeout(() => {
					this.isShow = false
				}, 500)
			}
		}
	};
</script>
<style scoped lang="scss">
	.classList {
		width: 100%;
		height: 100%;
	}

	.top_nav {
		min-height: 240upx;
		width: 100%;
		background-color: #FFFFFF;
		border-bottom: 1upx solid rgba($color: #eee, $alpha: 0.6);

		top: 0;
		left: 0;
		z-index: 200;
	}

	.space {
		width: 100%;
		height: 240upx;
		background-color: #F8F8F8;
		/* #ifdef APP-PLUS */
		height: 280upx;
		/* #endif */
	}

	.status_bar {
		width: 100vw;
		overflow: hidden;
		display: block;
		background-color: #FFFFFF;
		z-index: 900;
	}

	.scroll_box {
		height: calc(100vh - 260upx);
	}

	.search_box .bg {
		width: 100%;
		height: 100%;
		background-color: #fff;
		position: absolute;
		top: 0;
		left: 0;
	}

	.screen {
		height: 80upx;
		line-height: 80upx;
		display: flex;
		align-items: center;
		padding: 0 10upx;
		z-index: 900;
		position: relative;
		background-color: #fff;
	}

	.screen .screen_list {
		flex: 1;
		text-align: center;
		font-size: 28upx;
		color: #333;
		font-weight: 500;

		.down {
			margin-left: 10upx;
		}
	}

	.screen_list text {
		font-size: 24upx;
		font-weight: normal;
	}

	.more_screen {
		width: 100%;
		padding: 0 60upx;
		border-bottom-left-radius: 20upx;
		border-bottom-right-radius: 20upx;
		position: absolute;
		background-color: #fff;
		top: 80upx;
		left: 0;
		padding-bottom: 20upx;
		opacity: 0;
		transition: all 0.3s;
	}

	.more_list {
		height: 80upx;
		line-height: 80upx;
	}

	.more_list .iconfont {
		float: right;
	}

	.mask {
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.8);
		z-index: 800;
	}

	/* 右侧弹出框 */
	.right_popup {
		width: 85%;
		height: 100%;
		position: fixed;
		right: 0;
		top: 0;
		background-color: #fff;
		z-index: 920;
		transition: all 0.3s;
	}

	.hide_popup {
		transition: all 0.3s;
		width: 85%;
		height: 100%;
		position: fixed;
		right: -100%;
		top: 0;
		z-index: 920;
		transition: all 0.3s;
		background-color: #fff;
	}

	.pop_scroll {
		/* #ifndef H5 */
		height: calc(90% - 120upx);
		margin-top: 120upx;
		/* #endif */
		/* #ifdef H5 */
		height: 90%;
		margin-top: 20upx;
		/* #endif */
	}

	.top_price {
		height: 80upx;
		line-height: 80upx;
		display: flex;
		padding: 0 20upx;
	}

	.top_price text {
		flex: 1;
		text-align: center;
		font-size: 28upx;
		font-weight: bold;
		color: #333;
	}

	.input_box {
		padding: 0 30upx;
		height: 60upx;
		line-height: 60upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 30upx;
	}

	.input_box text {
		color: #999;
	}

	.input_box input {
		flex: 1;
		max-width: 45%;
		height: 100%;
		background-color: #F7F7F7;
		border-radius: 40upx;
		box-sizing: border-box;
		text-align: center;
		font-size: 24upx;
	}

	.allClass {
		margin-top: 50upx;
		padding: 0 30upx;
	}

	.allClass .classtext {
		font-size: 28upx;
		font-weight: bold;
		color: #333;
	}

	.allClass .class_box {
		margin-top: 30upx;
		overflow: hidden;
	}

	.class_box .class_tag {
		height: 60upx;
		line-height: 60upx;
		padding: 0 20upx;
		font-size: 26upx;
		color: #333;
		border: 1upx solid #999;
		text-align: center;
		border-radius: 30upx;
		float: left;
		margin-right: 20upx;
	}

	.bottom_btn {
		height: 10%;
		display: flex;
		align-items: center;
		align-items: center;
		justify-content: space-between;
		padding: 0 30upx;
	}

	.bottom_btn view {
		max-width: 45%;
		min-width: 45%;
		height: 60upx;
		line-height: 60upx;
		background-color: #FA436A;
		text-align: center;
		border-radius: 35upx;
		color: #fff;
	}

	.bottom_btn .reset {
		background-color: #fff;
		color: #FA436A;
		border: 1upx solid #FA436A;
	}

	.tow_scroll {
		height: 80upx;
		line-height: 80upx;
		padding: 0 10upx;
		white-space: nowrap;

		.scroll_tags {
			display: inline-block;
			background-color: #FFF8F5;
			color: #202020;
			height: 50upx;
			line-height: 50upx;
			padding: 0 25upx;
			text-align: center;
			font-size: 24upx;
			border-radius: 30upx;
			margin: 0 10upx;
		}
	}
</style>
