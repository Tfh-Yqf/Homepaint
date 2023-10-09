<template>
	<view style="display: flex;flex-direction: column;width: 100%;height: 100%;">
		<view class="container" style="height: 80vh;">

			
			<view class="avatar_box">
				<view style="display: flex;flex-direction: column;align-items: center;">
					<view class="avatar_view" @click="change_avatar()" :style="{backgroundImage: 'url(' + avator+ ')'}">
					</view>
					<view class="edit_box" @click="change_avatar()">
						<image src="../../../static/navgiation/wode/edit.png" mode="widthFix" style="width: 8px;"></image>
					</view>
					<view class="shipin_s" style="margin-top: 10px;">进入房屋</view>
				</view>
				
			</view>
			
			<view class="wode_middle_box">

				
				<view class="wode_middle_group" @click="jump_buy()">
					<view class="wode_middle_row">
						<view class="wode_middle_row_view">
							<image src="/static/navgiation/wode/order.png" mode="widthFix" style="width: 30px;"></image>
							<text style="font-size: 16px;margin-left: 5%;">我的订单</text>
						</view>
						<image src="/static/navgiation/wode/youjiantou.png" mode="widthFix" style="width: 6px;margin-right: 5%;"></image>
					</view>
				</view>
				<hr>
				<view class="wode_middle_group" @click="jump_cart()">
					<view class="wode_middle_row">
						<view class="wode_middle_row_view">
							<image src="../../../static/ultis/cart.png" mode="widthFix" style="width: 30px;"></image>
							<text style="font-size: 16px;margin-left: 5%;">我的购物车</text>
						</view>
						<image src="/static/navgiation/wode/youjiantou.png" mode="widthFix" style="width: 6px;margin-right: 5%;"></image>
					</view>
				</view>
				<hr>
				<view class="wode_middle_group" @click="jump_address">
					<view class="wode_middle_row">
						<view class="wode_middle_row_view">
							<image src="/static/navgiation/wode/address.png" mode="widthFix" style="width: 30px;"></image>
							<text style="font-size: 16px;margin-left: 5%;">我的收货地址</text>
						</view>
						<image src="/static/navgiation/wode/youjiantou.png" mode="widthFix" style="width: 6px;margin-right: 5%;"></image>
					</view>
				</view>
				<hr>
				
				<view class="wode_middle_group" @click="jump_jiajuku()">
					<view class="wode_middle_row">
						<view class="wode_middle_row_view">
							<image src="/static/navgiation/wode/ku.png" mode="widthFix" style="width: 30px;"></image>
							<text style="font-size: 16px;margin-left: 5%;">我的家具库</text>
						</view>
						<image src="/static/navgiation/wode/youjiantou.png" mode="widthFix" style="width: 6px;margin-right: 5%;"></image>
					</view>
				</view>
				<hr>
				
				<view class="wode_middle_group" @click="jump_collect">
					<view class="wode_middle_row">
						<view class="wode_middle_row_view">
							<image src="/static/navgiation/wode/shoucang.png" mode="widthFix" style="width: 30px;"></image>
							<text style="font-size: 16px;margin-left: 5%;">我的收藏</text>
						</view>
						<image src="/static/navgiation/wode/youjiantou.png" mode="widthFix" style="width: 6px;margin-right: 5%;"></image>
					</view>
				</view>
				<hr>
				

			</view>

			<view class="yinsi">
				<view style="display: flex;flex-direction: row;align-items: center;" @click="Yinsixieyi()">
					<image src="/static/navgiation/wode/yinsi.png" style="width: 24px;" mode="widthFix"></image>
					<text style="font-size: 16px;margin-left: 5px;">隐私协议</text>
				</view>
				
				<view style="display: flex;flex-direction: row;align-items: center;"  @click="Unlogin()">
					<image src="/static/navgiation/wode/unlogin.png" style="width: 24px;" mode="widthFix"></image>
					<text style="font-size: 16px;margin-left: 5px;">退出登录</text>
				</view>
			</view>
			
			<input style="height: 110px;" disabled="true"/>

			

		</view>
		
		<tabbar :nowpage="nowpage"></tabbar>
	</view>

</template>

<script>
	import {
		pathToBase64
	} from '@/utils/image-tools/index.js'

	export default {
		data() {
			return {
				user:'',
				avator:"https://img0.baidu.com/it/u=1798624778,1783159833&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
				nowpage:2
			}
		},
		components:{

		},
		onLoad() {
			this.init_data();
		},
		methods: {
			Yinsixieyi(){
				uni.navigateTo({
					url:'/pages/navigation/WoDe/YINSI/YINSI'
				});
			},
			init_data(){
				this.request(this.server_url+'userdetail/get',{},'GET').then((res)=>{
					console.log(res);
					if(res.code==0){
						this.user = res.data.userId;
						this.avator = res.data.avatar;
					}
				})
			},
			scan(){
				uni.scanCode({
					success: (res) => {
						console.log(res);0
					}
				})
			},
			change_avatar(){
				uni.chooseImage({
					count:1,
					success: (images) => {
						// console.log(images);
						pathToBase64(images.tempFilePaths[0]).then(data => {
							var temp = {
								image: data
							};
							// console.log(temp);
							this.request(this.server_url + 'userdetail/change_avatar', temp, 'POST').then((res) => {
								// console.log(res);
								this.avator = images.tempFilePaths;
								console.log(res);
							});
						})
					}
				})
			},
			jump_cart(){
				uni.navigateTo({
					url:'/pages/shop/goods/cart'
				})
			},
			jump_jiajuku(){
				uni.navigateTo({
					url:'/pages/navigation/ShouYe/furniture_modeling/furniture_modeling'
				})
			},
			jump_buy(){
				uni.navigateTo({
					url:'/pages/shop/goods/order/orderList'
				})
			},
			jump_address(){
				uni.navigateTo({
					url:'/pages/shop/goods/myaddress?type=read'
				});
			},
			change_nowpage(e){
				this.nowpage=e;
				if(this.nowpage==0){
					uni.navigateTo({
						url:'/pages/navigation/ShouYe/ShouYe'
					})
				}else if(this.nowpage==1){
					uni.navigateTo({
						url:'/pages/navigation/Middle/Middle'
					})
				}
			},
			jump_exam(){
				uni.navigateTo({
					url:'/pages/navigation/WoDe/exam_list/exam_list'
				})
			},
			jump_collect(){
				uni.navigateTo({
					url:'shoucang/mycollection'
				})
			},
			jump_lianxi(){
				uni.navigateTo({
					url:'/pages/navigation/WoDe/cuoti_list/cuoti_list'
				})
			},
			Unlogin(){
				uni.clearStorageSync();
				uni.clearStorage();
				uni.reLaunch({
					url:'../../login/login'
				});
			}
		}
	}
</script>


<style>
	@import url("../tabbar.css");
	hr{
		border: 1px solid rgb(234, 230, 230);
	}
	
	page{
		background: linear-gradient(rgba(202,89,89,0) 50.824%,rgba(254,199,191,0.23529411764705882) 100%);
	}
</style>
