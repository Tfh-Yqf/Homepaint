<template>
	<view class="home">
		<!-- 顶部 -->
		<headers :colors="colors" :locations="locations" :swiperList="swiperList"></headers>
		<!-- 推荐分类菜单 与tab分类中不同 -->
		<classList :categoryList="categoryList"></classList>
		<!-- 公告 -->
		<notice :colors="colors" :noticeList="noticeList"></notice>
		<!-- 栏目 -->
		<column></column>
		<!-- 广告图 -->
		<!-- <banner></banner> -->
		<!-- 热门标题 -->
		<hotstitle :colors="colors"></hotstitle>
		<!-- 推荐商品列表 -->
		<recommend :colors="colors" :dataList="dataList" :loading="loading" :bottoms="bottoms"></recommend>
		<!-- 右侧悬浮菜单栏 -->
		<suspension :scrollShow="scrollShow" :colors="colors"></suspension>
	</view>
</template>

<script>
	var app = getApp();
	import headers from '@/pages/commponent/home/header';
	import classList from '@/pages/commponent/home/classList';
	import notice from '@/pages/commponent/home/notice';
	import column from '@/pages/commponent/home/column';
	// import banner from '@/pages/commponent/home/banner';
	import hotstitle from '@/pages/commponent/home/hotstitle';
	import recommend from '@/pages/commponent/home/recommend';
	import suspension from '@/pages/commponent/home/suspension';


	export default {
		data() {
			return {
				colors: '',
				bottoms: '100',
				scrollShow: false, //是否显示悬浮菜单
				categoryList: 
				[
					{
						id: 1,
						name: '推荐',
						img: "/static/class/tuijian.png"
					},
					{ //分类列表
						id: 2,
						name: '沙发',
						img: "/static/class/shafa.png"
					},  {
						id: 3,
						name: '床',
						img: "/static/class/chuang.png"
					}, {
						id: 4,
						name: '扶手椅',
						img: "/static/class/yi.png"
					}, {
						id: 5,
						name: '餐桌',
						img: "/static/class/canzhuo.png"
					}, {
						id: 6,
						name: '床头柜',
						img: "/static/class/chuangtougui.png"
					}, {
						id: 7,
						name: '窗户',
						img: "/static/class/chuanghu.png"
					}, {
						id: 8,
						name: '门',
						img: "/static/class/men.png"
					}, {
						id: 9,
						name: '壁纸',
						img: "/static/class/bizhi.png"
					}, {
						id: 10,
						name: '地板',
						img: "/static/class/diban.png"
					},
				],
				// 商品列表
				dataList: [
					
				],
				locations: {

				},
				loading: true,
				swiperList: [],
				noticeList: [
					{
						id: 1,
						title: '次世代家装-让装修更简单，更智能'
					},
					{
						id: 2,
						title: '可以在我的家庭里加入您的爱人和孩子一起装修哦'
					},
					{
						id: 3,
						title: '连接VR设备，提前带您入住您的小屋'
					},
				]
			};
		},
		components: {
			headers,
			classList,
			notice,
			column,
			hotstitle,
			recommend,
			suspension
		},
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			// #ifdef APP-PLUS
			this.bottoms = '0'  //在APP下 规格弹窗的位置发生变化
			// #endif
		},

		onShow: function() {
			this.setData({
				colors: '#fae27e'
			});
			uni.setNavigationBarColor({ //设置标题栏颜色
				backgroundColor: app.globalData.newColor,
				frontColor: '#ffffff'
			});
			// #ifdef H5
			let locations = getlocation() //获取位置信息
			if (locations) {
				this.locations = locations
			}
			// #endif
		},
		mounted() {
			console.log('----------------------------')
			this.request(this.server_url+'goods/swiperList',{},'GET').then((res)=>{
				console.log(res);
				this.swiperList = res.data;
			});
			
			this.request(this.server_url+'goods/get_list',{},'GET').then((res)=>{
				console.log(res);
				this.dataList = res.data;
			});
			
			// uni.request({
			// 	url:this.server_url+'goods/swiperList',
			// 	method:'GET',
			// 	header:{token:'312'},
			// 	complete: (res) => {
			// 		console.log(res);

			// 	}
			// })

		},
		onReachBottom: function() {
			this.loading = true;
			
			this.request(this.server_url+'goods/get_list?skip='+this.dataList.length,{},'GET').then((res)=>{
				console.log(res);
				this.loading = false;
				for(var i=0;i<res.data.length;i++)
					this.dataList.push( res.data[i] );
			});
		},

		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage: function() {},
		methods: {
			onPageScroll: function(e) {
				if (e.scrollTop >= 500) {
					this.setData({
						scrollShow: true
					});
				} else {
					this.setData({
						scrollShow: false
					});
				}
			}
		}
	};
</script>
<style scoped lang="scss">
	.home {
		margin-bottom: 40rpx;
	}
</style>
