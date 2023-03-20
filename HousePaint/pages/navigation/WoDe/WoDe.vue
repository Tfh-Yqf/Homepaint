<template>
	<view style="display: flex;flex-direction: column;width: 100%;height: 100%;">
		<view class="container" :style="{height:height_content+'px'}">
			<view class="topbox_wode" >
				
			</view>
			
			<view class="avatar_box">
				<view style="display: flex;flex-direction: column;align-items: center;">
					<view class="avatar_view">

					</view>
					<view class="edit_box">
						<image src="../../../static/navgiation/wode/edit.png" mode="widthFix" style="width: 8px;"></image>
					</view>
					<text style="font-size: 24px;font-weight: 700;margin-top: -15px;">{{user}}</text>
					<view class="shipin_s" style="margin-top: 10px;">进入房屋</view>
				</view>
				
			</view>
			
			<view class="wode_middle_box">
				<view class="wode_middle_group" @click="scan()">
					<view class="wode_middle_row">
						<view class="wode_middle_row_view">
							<image src="/static/navgiation/wode/saoyisao.png" mode="widthFix" style="width: 30px;"></image>
							<text style="font-size: 16px;margin-left: 5%;">扫一扫 马上加入家庭</text>
						</view>
						<image src="/static/navgiation/wode/youjiantou.png" mode="widthFix" style="width: 6px;margin-right: 5%;"></image>
					</view>
				</view>
				<hr>
				
				<view class="wode_middle_group" @click="scan()">
					<view class="wode_middle_row">
						<view class="wode_middle_row_view">
							<image src="/static/navgiation/wode/order.png" mode="widthFix" style="width: 30px;"></image>
							<text style="font-size: 16px;margin-left: 5%;">我的购买</text>
						</view>
						<image src="/static/navgiation/wode/youjiantou.png" mode="widthFix" style="width: 6px;margin-right: 5%;"></image>
					</view>
				</view>
				<hr>
				
				<view class="wode_middle_group" @click="jump_lianxi()">
					<view class="wode_middle_row">
						<view class="wode_middle_row_view">
							<image src="/static/navgiation/wode/ku.png" mode="widthFix" style="width: 30px;"></image>
							<text style="font-size: 16px;margin-left: 5%;">我的家具库</text>
						</view>
						<image src="/static/navgiation/wode/youjiantou.png" mode="widthFix" style="width: 6px;margin-right: 5%;"></image>
					</view>
				</view>
				<hr>
				
				<view class="wode_middle_group" @click="jump_exam()">
					<view class="wode_middle_row">
						<view class="wode_middle_row_view">
							<image src="/static/navgiation/wode/shoucang.png" mode="widthFix" style="width: 30px;"></image>
							<text style="font-size: 16px;margin-left: 5%;">我的收藏</text>
						</view>
						<image src="/static/navgiation/wode/youjiantou.png" mode="widthFix" style="width: 6px;margin-right: 5%;"></image>
					</view>
				</view>
				<hr>
				
				<view class="wode_middle_group">
					<view class="wode_middle_row">
						<view class="wode_middle_row_view">
							<image src="/static/navgiation/wode/family.png" mode="widthFix" style="width: 30px;"></image>
							<text style="font-size: 16px;margin-left: 5%;">我的家庭</text>
						</view>
						<image src="/static/navgiation/wode/youjiantou.png" mode="widthFix" style="width: 6px;margin-right: 5%;"></image>
					</view>
				</view>
			</view>

			<view class="yinsi">
				<view style="display: flex;flex-direction: row;" @click="Yinsixieyi()">
					<image src="/static/navgiation/wode/yinsi.png" style="width: 24px;" mode="widthFix"></image>
					<text style="font-size: 16px;margin-left: 5px;">隐私协议</text>
				</view>
				
				<view style="display: flex;flex-direction: row;"  @click="Unlogin()">
					<image src="/static/navgiation/wode/unlogin.png" style="width: 24px;" mode="widthFix"></image>
					<text style="font-size: 16px;margin-left: 5px;">退出登录</text>
				</view>
			</view>
			
			<input style="height: 110px;" disabled="true"/>

			

		</view>
		
		<tabbar ></tabbar>
	</view>

</template>

<script>


	export default {
		data() {
			return {
				user:'',
				avator:"https://7463-tcb-6dkhphdodd5e2a-7dedu72135999-1309304321.tcb.qcloud.la/Lazy_search/Avatar/default_avator.jpg",
				nowpage:2
			}
		},
		components:{

		},
		mounted() {
			this.user=uni.getStorageSync('user');

		},
		methods: {
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
