<template>
	<view>
		<view class="myaddress">
			<view v-for="(item, index) in addressList" :key="index" class="order_address">
				<view class="address_box">
					<view class="weizhi_icon">
						<text class="iconfont icon-dizhi" :style="'color:' + colors"></text>
					</view>
					<view @click="onsetAddress(item)">
						<view class="center">
							<view class="moren" v-if="item.default">
								<text class="iconfont icon-moren" :style="'color:' + colors"></text>
							</view>
							<view class="name">
								<text class="text1">{{item.nickname}}</text>
								<text class="phones">{{item.phone}}</text>
							</view>
							<view class="address_name">{{item.addressCity}}-{{item.address}}</view>
						</view>
					</view>
					<view class="caozuo">
						<view class="del" @tap="delAddress(item,index)">
							<text class="iconfont icon-shanchu"></text>
							删除
						</view>
						<view class="edit" @tap="editAddress(item)">
							<text class="iconfont icon-bianji"></text>
							编辑
						</view>
					</view>
				
			</view>
		</view>
		<nodata :colors="colors" title="暂无收货地址" v-if="addressList.length == 0"></nodata>
	</view>
	<view class="save">
		<view class="btn" :style="'background:' + colors" @tap="addAddress">添加收货地址</view>
	</view>
	<loading v-if="isShow == true"></loading>
	</view>
</template>

<script>
	var app = getApp();
	import loading from "../../commponent/public/loading";
	export default {
		data() {
			return {
				colors: '',
				addressList: [],
				isShow: true,
				type:''
			};
		},

		components: {
			loading
		},
		props: {},
		mounted() {
			this.colors = app.globalData.newColor;
			this.init_data();
		},
		onLoad: function(options) {
			this.type = options.type;
		},
		onPullDownRefresh() {
			this.init_data();
			uni.stopPullDownRefresh();
		},
		methods: {
			init_data(){
				this.request(this.server_url+'order/address_list',{},'GET').then((res)=>{
					this.isShow = false;
					if(res.code==0)
						this.addressList = res.data;
						
					if(this.addressList.length==0){
						uni.showToast({
							title:'请添加地址',
							icon:'none'
						});
						
					}
				})
			},
			editAddress(item) {
				//编辑收货地址
				uni.navigateTo({
					url: '/pages/shop/goods/address/edit?type=edit&address=' + JSON.stringify(item)
				});
			},

			addAddress() {
				//添加收货地址
				uni.navigateTo({
					url: '/pages/shop/goods/address/edit?type=add'
				});
			},
			onsetAddress(item){ //选择收货地址后 返回上一层路由
				if(this.type=="select"){
					uni.setStorageSync('nowaddress',item);
					uni.redirectTo({
						url:'/pages/shop/goods/order/confirmOrder'
					});
				}
			},
			delAddress(item,index){
				console.log(item);
				uni.showModal({
					title:'提示',
					content:'确认要删除该地址吗?',
					confirmText:'删除',
					confirmColor:this.colors,
					success: (res) => {
						if(res.confirm){
							var temp = {
								address_id:item.addressId
							};
							console.log(temp);
							this.request(this.server_url+'order/delete',temp,'POST').then((re)=>{
								if(re.code==0){
									uni.showToast({
										title:'删除成功~',
										icon:'none'
									})
									this.addressList.splice(index, 1)
								}
							})

						}
					}
				})
			}
		}
	};
</script>
<style lang="scss" scoped>
	.myaddress {
		padding: 10upx 4%;
		padding-bottom: 140upx;
		margin-top: 10upx;
	}

	.order_address {
		height: 180upx;
		width: 100%;
		background-color: #fff;
		border-radius: 10upx;
		position: relative;
		box-shadow: 0upx 0upx 10upx #ddd;
		margin-bottom: 20upx;
	}

	.order_address image {
		width: 100%;
		height: 100%;
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
	}

	.address_box {
		width: 100%;
		height: 100%;
		display: block;
		z-index: 10;
		box-sizing: border-box;
		padding: 20upx;
		display: flex;
		align-items: center;
	}

	.weizhi_icon text {
		font-size: 40upx;
		margin-left: 10upx;
	}

	.address_box .center {
		margin-left: 20upx;
	}

	.address_box .center .name {
		height: 60upx;
		line-height: 60upx;
	}

	.address_box .center .name .text1 {
		font-size: 26upx;
		font-weight: bold;
		color: #333;
		display: inline-block;
		margin-right: 20upx;
	}

	.phones {
		font-size: 24upx;
		color: #999;
		z-index: 0;
	}

	.address_box .address_name {
		font-size: 26upx;
		font-weight: bold;
		color: #333;
	}

	.noaddress {
		margin-left: 40upx;
		font-weight: bold;
		color: #333;
		font-size: 26upx;
	}

	.caozuo {
		position: absolute;
		right: 20upx;
		display: flex;
		top: 20upx;
	}

	.caozuo view {
		font-size: 24upx;
		color: #666;
		margin-left: 30upx;
	}

	.caozuo view text {
		font-size: 24upx;
	}

	.moren {
		position: absolute;
		top: 0;
		left: 0;
	}

	.moren text {
		font-size: 60upx;
	}

	.save {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 120upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.save view {
		display: flex;
	}

	.save .btn {
		box-shadow: 0upx 5upx 10upx rgba(0, 0, 0, 0.4);
		width: 70%;
		height: 80upx;
		border-radius: 80upx;
		background-color: #f23a3a;
		color: #fff;
		justify-content: center;
		align-items: center;
		font-size: 30upx;
	}
</style>
