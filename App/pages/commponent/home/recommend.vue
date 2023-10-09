<template>
	<view style="background: #F8F8F8;overflow: hidden;">
		<!-- 宫格类样式 -->
		<view class="recommend_goods" v-if="modes == true">
			<view v-for="(item, index) in newList" :key="index" class="goods">
				<view class="top" @tap="jumpDetails(item)">
					<image class="cover" lazy-load="true" :src="item.imageURL" mode="scaleToFill"></image>
					<image class="tags" lazy-load="true" v-if="item.baoyou" :src="tagImg[0]"></image>
				</view>
				<view class="bottom">
					<view class="goods_name" @tap="jumpDetails(item)">
						{{item.title}}
					</view>
					<view class="price">
						<text class="text1">￥ {{item.price}}</text>
						<text class="text2">￥ {{(item.price*1.2).toFixed(2)}}</text>

						<text style="float: right;color:red;font-size: 13px;"
							v-if="item.score!=null">{{item.score}}分</text>
					</view>
					<view class="goumai" style="display: flex;flex-direction: row;align-items: center;justify-content: space-between;">
						<view class="g_left"> 
							<text v-if="item.style!=null&&item.style.length!=0">{{item.style}}</text>
							<text v-if="item.material!=null&&item.material.length!=0">{{item.material}}</text>
						</view>
						<view class="g_right" @tap="FangZhi(item)">
							<image src="@/static/images/fangZhi.png" mode="widthFix" style="width: 20px;"></image>
						</view>
					</view>
				</view>
			</view>
			<view class="place">
			</view>
		</view>

		<!-- 列表类样式 -->
		<view class="list_mode" v-if="modes == false">
			<view class="goods_list" v-if="newList.length !== 0">
				<view v-for="(item, index) in newList" :key="index" class="goods_item">
					<image :src="item.imageURL" lazy-load="true" @tap="jumpDetails(item)"></image>
					<!-- 商品标签 -->
					<image class="tags" :src="tagImg[item.type-1]"></image>
					<view class="goods_right">
						<view class="goods_name" @tap="jumpDetails(item)">{{item.title}}</view>
						<view class="numbers">
							<text v-if="item.style!=null">{{item.style}}</text>
							<text v-if="item.material!=null">{{item.material}}</text>
						</view>
						<view class="price" style="display: flex;flex-direction: row;justify-content: space-between;align-items: center;">
							<view style="display: flex;flex-direction: row;align-items: center;">
								<text class="money">￥{{item.price}}</text>
								<text class="hx_money">￥{{(item.price*1.2).toFixed(2)}}</text>
							</view>

							<image @click="FangZhi(item)" src="../../../static/images/fangZhi.png" style="width: 20px;" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="loading" v-if="loading == true">加载中...</view>
		<view class="loading" v-if="loading == false">—— 到底啦 ——</view>
		<!-- 选择规格 -->
		<sku :skuList="nowList" :showModal="showModal" :colors="'#3b5cff'" @onhide="onhide" :bottoms="bottoms"></sku>
	</view>
</template>

<script>
	const app = getApp();

	import sku from '../public/sku.vue'
	export default {
		components: {
			sku
		},
		data() {
			return {
				showModal: false,
				nowList: {},
				newList: [],
				sku: "",
				tagImg: [
					'/static/images/home/five.png',
				],
			};
		},
		props: {
			colors: {
				type: String
			},
			dataList: {
				type: Array
			},
			modes: {
				//控制显示宫格类样式或者列表类样式
				type: Boolean,
				default: true
			},
			loading: {
				type: Boolean,
				default: true
			},
			bottoms: {
				type: String,
				default: '0'
			}
		},
		created() {
			this.setDataList(this.dataList)

		},
		watch: {
			dataList(value) {
				this.setDataList(value)
			}
		},
		methods: {
			FangZhi(e){
				console.log(e);
				window.location.href = "uniwebview://GOODS"+JSON.stringify(e);
			},
			setDataList(newVal) {
				const newList = [].concat(...Array.from(newVal.reduce((total, cur, index) => { //瀑布流处理
					total[index % 2].push(cur);
					return total;
				}, {
					0: [],
					1: [],
					length: 2
				})));
				this.setData({
					newList: newList
				});
			},
			onhide() {
				this.showModal = false
			},
			addCart(item) {
				//加入购物车弹出对话框
				console.log('点击了', item)
				this.showModal = true
				this.nowList = item
			},
			jumpDetails(e) {
				uni.setStorageSync('goodsDetail', e);
				uni.navigateTo({
					url: '/pages/shop/goods/goodsDetails'
				});
			}
		}
	};
</script>
<style scoped lang="scss">
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
