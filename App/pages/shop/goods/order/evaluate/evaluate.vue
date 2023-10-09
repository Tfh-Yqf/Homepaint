<template>
	<view>
		<view class="evaluate">
			<view class="goods_data">
				<image :src="goodData.goods.imageUrl[0].imageUrl" mode="" v-if="goodData.goods.imageUrl!=null"></image>
				<view class="right">
					<p class="goods_name">{{goodData.goods.title}}</p>
					<p class="goods_sku">暂未规格</p>
					<p class="goods_price">
						<text style="font-size: 24upx;">数量x{{goodData.count}}</text>
						<text :style="{color:colors}">￥{{goodData.goods.price}}</text>
					</p>
				</view>
			</view>
			<view class="Rate">
				<p>整体评价</p>
				<view class="star">
					<image :src="item.img" mode="" v-for="(item,index) in stars" :key="index"
						@click="setStar(item,index)"></image>
				</view>
			</view>
			<view class="pingjia_box">
				<textarea placeholder="说说您的感受..." maxlength="-1" v-model="comment" />
			</view>
			

		</view>
		<view class="btns" :style="{background:colors}" @click="submit">提交评价</view>


	</view>
</template>
<script>
	var app = getApp();
	export default {
		data() {
			return {
				value: 5,
				showVideo: false,
				isH5: false,
				videos: '',
				comment: '',
				platform: '',
				imgUrl: [], //模拟上传后从后台获得的图片和视频
				goodData: {},
				colors: '',
				stars: [{
						id: 1,
						types: true,
						img: '/static/ultis/stars.png'
					},
					{
						id: 2,
						types: true,
						img: '/static/ultis/stars.png'
					},
					{
						id: 3,
						types: true,
						img: '/static/ultis/stars.png'
					},
					{
						id: 4,
						types: true,
						img: '/static/ultis/stars.png'
					},
					{
						id: 5,
						types: true,
						img: '/static/ultis/stars.png'
					},
				],
				starNoImg: '/static/ultis/star-no.png',
				starImg: '/static/ultis/stars.png',
				starValue: 5
			};
		},
		created() {
			this.platform = uni.getSystemInfoSync().platform //判断当前是安卓还是ios 然后进行适配
			this.newVideo = uni.createVideoContext('newVideo');
		},
		onLoad(options) {
			let goodData = JSON.parse(options.goodData)
			this.setData({
				colors: app.globalData.newColor,
				goodData: goodData
			});
		},
		methods: {
			delImg(index) {
				//删除图片
				this.imgUrl.splice(index, 1);
			},
			onChoose() {
				uni.showActionSheet({
			 	title: "选择上传类型",
					itemList: ['图片', '视频'],
					success: (res) => {
						console.log(res)
						if (res.tapIndex == 0) {
							this.chooseImages()
						} else {
							this.chooseVideo()
						}
					}
				})
			},
			chooseImages() { //上传图片
				let that = this;
				uni.chooseImage({
					//该方法是调出选择图片的方法
					count: 1, //数量限制
					sizeType: ['original', 'compressed'], //可选 原图 或缩略图
					success: function(res) {
						//返回的值为本地的图片的链接
						console.log(res);
						// 这里模拟接口向imgUrl 里添加图片  后期调用接口时参照该方法
						if (that.imgUrl.length >= 3) { //最多上传3张 超出了提醒
							uni.showToast({
								title: '最多上传3个',
								icon: 'none'
							})
						} else { //模拟上传图片
							let img = {
								url: '/static/images/goods/four.jpg',
								type: 1
							}
							that.imgUrl.push(img)
						}
					}
				});
			},
			chooseVideo() { //上传视频  
				let that = this;
				uni.chooseVideo({
					count: 1,
					sourceType: ['camera', 'album'],
					success: function(res) {
						console.log(res) //如果需要对视频的长度和大小做判断 在此处进行获取和处理
						// 下面是模拟上传视频 ↓
						if (that.imgUrl.length >= 3) { //最多上传3张 超出了提醒
							uni.showToast({
								title: '最多上传3个',
								icon: 'none'
							})
						} else { //模拟上传视频
							/**
							 *  ***重点注意 
							 *  视频的封面图因为需要做多端兼容 并且只允许是网络图片
							 *  所有建议是上传视频给后端之后，然后由后端对视频进行截取
							 * 	建议截取视频的第5帧来生成图片，并返回给前端
							 *  下面的poster是模拟后台返回的封面
							 */
							let video = {
								url: 'https://fzdz.soft.haoyangsoft.com/uploads/system/videos/20200813/6c819d24ee6868aee33e150c4333329b.mp4',
								type: 2,
								poster: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603080909940&di=ac10c5f2c952dd1b40441bb696c55a88&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw640h640%2F20180127%2F369b-fyqzcxh1087346.jpg'
							}
							that.imgUrl.push(video)

						}
					}
				});
			},
			setStar(item, index) { //设置评价星星
				let that = this
				if (item.types == false) {
					for (var i = 0; i <= index; i++) {
						console.log(that.stars[i].types)
						that.stars[i].types = true
						that.stars[i].img = that.starImg
					}
				} else {
					for (var i = index + 1; i < that.stars.length; i++) {
						console.log(that.stars[i].types)
						that.stars[i].types = false
						that.stars[i].img = that.starNoImg
					}
				}
				this.$forceUpdate() //强制刷新视图
				let value = this.stars.filter((e) => {
					return e.types == true
				})
				this.starValue = value.length
			},
			previewImg(url) { //预览图片
				let arr = []
				arr[0] = url
				uni.previewImage({
					urls: arr
				})
			},
			onshowVideo(video) { //预览视频
				this.videos = video
				// #ifndef H5
				this.showVideo = true
				// #endif
				// #ifdef H5
				// h5 在真机上测试
				if (this.platform == 'android') { //判断是安卓还是ios来对视频做适配
					this.isH5 = true
					this.newVideo.play()
				} else {
					this.showVideo = true
				}
				// #endif
			},
			hideShow() { //隐藏预览视频
				this.showVideo = false
			},
			submit() { //提交时需要对存储图片和视频的数组进行操作 把视频和图片分离出来
				var temp = {
					comment:this.comment,
					goods_id:this.goodData.goods.goodsId
				};
				
				this.request(this.server_url+'goods/evaluate',temp,'POST').then((res)=>{
					console.log(res);
					if(res.code==0){
						uni.showToast({
							title: '提交成功'
						});
						uni.navigateBack();
					}
				})
				
			}
		},
		onShow() {

		}
	};
</script>

<style lang="scss" scoped>
	@import "./evaluate.scss";
</style>
<style>
	page {
		background-color: #F8F8F8;
	}
</style>
