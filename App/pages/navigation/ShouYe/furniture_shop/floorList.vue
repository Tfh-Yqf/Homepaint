<template>
	<view class="classList">

		<view class="top_nav">
			<!-- #ifndef H5 -->
			<view class="status_bar" :style="'height: '+ statusBarHeight"></view>
			<!-- #endif -->
			<!-- 搜索框 -->
			<view class="search_box">
				<view class="backTo" @click="backTo">
					<text class="iconfont icon-fanhui"></text>
				</view>
				<view class="search">
					<view class="input-box" @click="jump_seaerch()">
						<input placeholder="搜索关键词" placeholder-style="color:#c0c0c0;font-size:24upx;"></input>
						<view class="icon search">
							<image src="/static/images/home/search.png"></image>
						</view>
					</view>
				</view>
				<view class="bg"></view>
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
		<view class="space">
			<!-- 占位 -->
		</view>
		<!-- 商品列表 -->
		<view>
			<view class="recommend_goods" >
				<view v-for="(item, index) in dataList" :key="index" class="goods">
					<view class="top" >
						<image class="cover" lazy-load="true" :src="item.imageUrl+'?imageMogr2/format/avif'" mode="scaleToFill"></image>
						<image class="tags" lazy-load="true" v-if="item.baoyou" :src="tagImg[0]"></image>
					</view>
					<view class="bottom">
						<view class="goods_name" >
							<text v-if="IsFloor">地板</text>
							<text v-else>墙纸</text>
							ID:{{item.id}}
						</view>
						<view class="price">
							<text class="text1">￥ {{item.price}}</text>
							<text class="text2">￥ {{(item.price*1.2).toFixed(2)}}</text>
			
							<view class="g_right" @tap="FangZhi(item)">
								<image src="@/static/images/fangZhi.png" mode="widthFix" style="width: 20px;"></image>
							</view>
								
						</view>

					</view>
				</view>
				<view class="place">
				</view>
			</view>
			
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
				content: '',
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
						name: '家具类',
						id: 2
					}, {
						name: '门窗类',
						id: 3
					}]
				}, {
					name: '类型',
					id: 2,
					child: [{
						name: '沙发',
						id: 1
					}, {
						name: '吊灯',
						id: 2
					}, {
						name: '床',
						id: 2
					}]
				}],
				newdata: "",
				tagsList: [
					'现代', '简约', '复古', '扶手椅', '中式'
				],
				// 商品列表
				dataList: [],
				IsFloor:false
			};
		},

		components: {
			search,
			recommend,
			loading
		},
		props: {},
		onReachBottom: function() {
			
			this.initdata();
		},
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function() {
			this.IsFloor = uni.getStorageSync('IsFloor');

			this.setData({
				colors: app.globalData.newColor
			});
			this.initdata();

		},
		methods: {
			FangZhi(item){
				var temp = {...item,IsFloor:this.IsFloor};
				console.log(temp);
				uni.setStorageSync('ChooseRoom',temp);
				window.location.href = "uniwebview://StyleLandscapeLeft";
				uni.navigateTo({
					url:'ChooseRoom'
				});
			},
			jump_seaerch() {
				uni.navigateTo({
					url: '/pages/commponent/search/search'
				});
			},
			initdata() {
				uni.showLoading({
					title: '加载数据中...'
				})
				console.log(this.content);
				if(this.IsFloor){
					this.request(this.server_url + 'floor/getFloor', {}, 'get').then((res) => {
						console.log(res);
						for(var i=0;i<res.data.length;i++)
							this.dataList.push(res.data[i]);
						this.isShow = false;
						uni.hideLoading();
						console.log(this.dataList)
						// for(var i=0;i<this.dataList.length;i++){
						// 	this.dataList[i].imageUrl = this.dataList[i].imageUrl + 
						// }
						// console.log(this.dataList)
					});
				}else{
					this.request(this.server_url + 'floor/getWallpaint', {}, 'get').then((res) => {
						console.log(res);
						for(var i=0;i<res.data.length;i++)
							this.dataList.push(res.data[i]);
						this.isShow = false;
						uni.hideLoading();
						
					});
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
				this.content = item;
				this.initdata();
				this.isShow = false
				
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
		position: fixed;
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

	.search_box {
		padding: 0 20upx;
		z-index: 900;
		height: 80upx;
		width: 100%;
		padding-top: 30upx;
		position: relative;
		display: flex;
		align-items: center;

		.backTo {
			color: #202020;
			z-index: 20;
			margin-right: 30upx;
			width: 8%;
			text-align: center;

			text {
				font-size: 34upx;
			}
		}

		.search {
			/* #ifndef MP */
			width: 90%;
			/* #endif */
			/* #ifdef MP */
			width: 60%;
			/* #endif */
			z-index: 900;

			.input-box {
				width: 100%;
				height: 60upx;
				background-color: #f5f5f5;
				position: relative;
				display: flex;
				align-items: center;
				border-radius: 30upx;
				z-index: 900;
			}

			.input-box .icon {
				display: flex;
				align-items: center;
				position: absolute;
				top: 10upx;
				right: 20upx;
				width: 40upx;
				height: 40upx;
				font-size: 32upx;
				color: #c0c0c0;
			}

			.search image {
				width: 40upx;
				height: 40upx;
				display: block;
			}

			.input-box input {
				padding-left: 28upx;
				height: 28upx;
				font-size: 28upx;
			}
		}
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
	
	.recommend_goods {
		padding: 20upx;
		column-count: 2;
		/*分为两列  用于瀑布流*/
		column-gap: 20upx;
	}
	
	.loading {
		height: 80upx;
		line-height: 80upx;
		text-align: center;
		color: #ccc;
		font-size: 24upx;
		width: 100%;
		margin-bottom: 20upx;
	}
	
	.goods {
		height: 100%;
		overflow: auto;
		margin-bottom: 20upx;
		break-inside: avoid;
		/*用于瀑布流*/
		border-radius: 10upx;
		box-sizing: content-box;
	
		&:first-child {
			margin-top: 0;
		}
	}
	
	.goods .top {
		height: 45vw;
		overflow: hidden;
		position: relative;
		background-color: #ffffff;
	}
	
	.top .cover {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
	}
	
	.top .tags {
		width: 65upx;
		height: 65upx;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.bottom {
		padding: 15upx;
		background-color: #ffffff;
		overflow: hidden;
	}
	
	.goods_name {
		/* height: 66upx; */
		font-size: 24upx;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-weight: bold;
	}
	
	.bottom .price {
		margin-top: 15upx;
	}
	
	.bottom .price .text1 {
		font-size: 32upx;
		font-weight: bold;
		color: '#fa436a';
	}
	
	.bottom .price .text2 {
		font-size: 22upx;
		color: #a0a0a0;
		text-decoration: line-through;
		padding-left: 15upx;
	}
	
	.goumai {
		margin-top: 10upx;
	}
	
	.g_left {
		font-size: 24upx;
		float: left;
		align-items: center;
	}
	
	.g_left text {
		display: inline-block;
		height: 35upx;
		line-height: 35upx;
		padding: 0 10upx;
		background-color: #FAEFF7;
		border-radius: 10upx;
		margin-right: 20upx;
		color: '#fa436a';
	}
	
	.g_right {
		float: right;
		font-size: 28upx;
		color: '#fa436a';
	}
	
	.mask {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: #000;
		z-index: 900;
		opacity: 0.7;
	}
	
	.sku {
		width: 100vw;
		min-height: 30vh;
		position: fixed;
		bottom: -100%;
		z-index: 910;
		left: 0;
		background-color: #ffffff;
		padding: 20upx 4%;
		border-top-left-radius: 10upx;
		border-top-right-radius: 10upx;
		border-bottom: 1upx solid #eee;
		transition: all 0.3s;
	}
	
	.shows {
		/* #ifdef MP */
		bottom: 0 !important;
		/* #endif */
		/* #ifdef H5 */
		bottom: 100upx !important;
		/* #endif */
		transition: all 0.3s;
	}
	
	.sku_top {
		overflow: hidden;
	}
	
	.sku_top image {
		height: 170upx;
		width: 170upx;
		float: left;
		margin-right: 15upx;
		border-radius: 8upx;
	}
	
	.sku_top .sku_title {
		font-size: 24upx;
		line-height: 35upx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-weight: bold;
	}
	
	.sku_top .moneys {
		font-size: 28upx;
		line-height: 40upx;
		overflow: hidden;
		margin-top: 20upx;
	}
	
	.sku_top .kucun {
		font-size: 24upx;
		color: #999;
		overflow: hidden;
	}
	
	.sku_list {
		margin-top: 20upx;
		overflow: hidden;
		margin-bottom: 40upx;
	}
	
	.sku_name {
		font-size: 24upx;
		color: #666;
		overflow: hidden;
	}
	
	.sku_tag {
		overflow: hidden;
		margin-top: 20upx;
	}
	
	.sku_tag .tag_s {
		height: 50upx;
		line-height: 50upx;
		padding: 0 20upx;
		text-align: center;
		font-size: 22upx;
		color: #333;
		background-color: #F5F5F5;
		border: 1upx solid rgba(0, 0, 0, .05);
		float: left;
		border-radius: 30upx;
		margin-right: 20upx;
		transition: all 0.2s;
		margin-bottom: 20upx;
	}
	
	.number {
		margin-top: 10upx;
		border-top: 1upx solid #ccc;
		width: 100%;
		height: 80upx;
		line-height: 80upx;
		padding-top: 10upx;
	}
	
	.number .n_left {
		float: left;
		font-size: 28upx;
		color: #333;
	}
	
	.number .n_right {
		float: right;
		height: 60upx;
		width: 200upx;
		background-color: #F5F5F5;
		margin-top: 10upx;
		border-radius: 5upx;
	}
	
	.n_right .jian,
	.jia {
		width: 60upx;
		height: 60upx;
		text-align: center;
		line-height: 60upx;
		font-size: 42upx;
	}
	
	.jian {
		float: left;
	}
	
	.jia {
		float: right;
	}
	
	.jian:active {
		background-color: #eee;
	}
	
	.jia:active {
		background-color: #eee;
	}
	
	.n_right input {
		width: 76upx;
		float: left;
		text-align: center;
		margin-top: 6upx;
	}
	
	.btn_box {
		margin-top: 40upx;
	}
	
	.btn_box .addcart_btn,
	.submit {
		width: 40vw;
		height: 56upx;
		line-height: 56upx;
		border-radius: 42upx;
		font-size: 24upx;
		text-align: center;
		color: #ffffff;
		float: left;
		margin-left: 30upx;
		margin-bottom: 30upx;
	}
	
	.btn_box view:active {
		opacity: 0.8;
	}
	
	/* 列表类样式 */
	.list_mode {
		padding: 20upx 4% 0upx;
		z-index: 10;
		background-color: #FFFFFF;
	}
	
	.goods_list {
		overflow: hidden;
	}
	
	.goods_list .goods_item {
		align-items: center;
		border-bottom: 1upx solid #eee;
		padding-bottom: 10upx;
		margin-bottom: 15upx;
		overflow: hidden;
		position: relative;
	
		&:last-of-type {
			border-bottom: none;
		}
	}
	
	.goods_item image {
		width: 200upx;
		height: 200upx;
		float: left;
		border-radius: 10upx;
		margin-right: 5upx;
	}
	
	.goods_item .tags {
		width: 60upx;
		height: 60upx;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.goods_right {
		/* float: left; */
		padding: 0 10upx;
		overflow: hidden;
	}
	
	.goods_right .goods_name {
		font-size: 28upx;
		overflow: hidden;
		font-weight: bold;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		color: #333;
		min-height: 50upx;
	}
	
	.goods_right .numbers {
		font-size: 20upx;
		line-height: 30upx;
		overflow: hidden;
		margin-top: 30upx;
		display: flex;
		align-content: center;
	}
	
	.goods_right .numbers text {
		display: inline-block;
		height: 35upx;
		line-height: 35upx;
		padding: 0 10upx;
		background-color: #FAEFF7;
		border-radius: 10upx;
		margin-right: 20upx;
		color: '#fa436a';
	}
	
	.goods_right .price {
		line-height: 40upx;
		font-size: 24upx;
		overflow: hidden;
		margin-top: 20upx;
	}
	
	.price .money {
		margin-right: 20upx;
		font-size: 32upx;
		font-weight: bold;
		color: '#fa436a';
	}
	
	.hx_money {
		text-decoration: line-through;
		color: #999;
		font-size: 22upx;
	}
	
	.gouwuche {
		font-size: 32upx;
		float: right;
		margin-right: 20upx;
		color: '#fa436a';
	}
	
	.nodata {
		color: #999;
		text-align: center;
		font-size: 24upx;
		margin-top: 20upx;
		height: 80upx;
		line-height: 80upx;
	}
</style>
