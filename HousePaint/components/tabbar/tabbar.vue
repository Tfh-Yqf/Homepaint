<template>
	<view  class="tabbar">
		<view class="icon" @click="change_nowpage(0)">
			<view v-if="nowpage==0" class="icon2">
				<view   style="width: 30px;height: 2.3px;background: rgb(61, 92, 255);position: absolute;top: 0;"></view>			
				<image  src="@/static/navgiation/shouye_select.png" style="width: 21px;" mode="widthFix"></image>
				<text class="text_s">首页</text>
			</view>
			<view v-else class="icon2">					
				<image  src="@/static/navgiation/shouye.png" style="width: 21px;" mode="widthFix"></image>
				<text class="text">首页</text>
			</view>
	
		</view>
		<view @click="change_nowpage(1)" style="width: 14%;flex-shrink: 0;display: flex;flex-direction: column;align-items: center;" v-if="nowpage==1">
			
			<view class="yuan" style="background-color: #c7d0ff;">
				<image src="@/static/navgiation/VR.png" style="width: 30px;" mode="widthFix"></image>
			</view>
			<text class="text_s" style="margin-top: 5px;">VR</text>

		</view>
		<view @click="change_nowpage(1)" style="width: 14%;flex-shrink: 0;display: flex;flex-direction: column;align-items: center;" v-else>
			
			<view class="yuan">
				<image src="@/static/navgiation/VR.png" style="width: 30px;" mode="widthFix"></image>
			</view>
			<text class="text" style="margin-top: 5px;">VR</text>
		
		</view>
		<view class="icon" @click="change_nowpage(2)">
			<view class="icon2" v-if="nowpage===2" >
				<view style="width: 30px;height: 2.3px;background: rgb(61, 92, 255);position: absolute;top: 0;"></view>
				<image src="@/static/navgiation/wode_select.png" style="width: 21px;" mode="widthFix"></image>
				<text class="text_s">我的</text>
			</view>
			<view class="icon2" v-else>
				<image src="@/static/navgiation/wode.png" style="width: 21px;" mode="widthFix"></image>
				<text class="text">我的</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'tabbar',
		props:[''],
		data() {
			return {
				nowpage:0
			}
		},
		mounted() {
			this.nowpage = uni.getStorageSync('nowpage');
		},
		methods: {
			change_nowpage(e){
				if(this.nowpage==e)
					return;

				this.nowpage=e;
				uni.setStorageSync('nowpage',this.nowpage);
				if(this.nowpage==0){

					uni.redirectTo({
						url:'/pages/navigation/ShouYe/ShouYe'
					})
				}else if(this.nowpage==2){
					uni.redirectTo({
						url:'/pages/navigation/WoDe/WoDe'
					})
				}else{
					uni.redirectTo({
						url:'/pages/navigation/Middle/Middle'
					})
				}
			},
		}
	}
</script>

<style>
	@import url("./tabbar.css");
</style>
