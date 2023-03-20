<template>
	<view style="">
		
		<view style="width: 95%;background-color: #ecf1fe;margin-left: 2%;margin-top: 10px;" v-for="(item,index) in data" >
			<view style="text-align: center;background-color: #FFFFFF;color: #b9b9b9;font-size: 12px;padding: 10px 1px 10px 1px ;">

				<uni-dateformat :date="item.time"></uni-dateformat>
			</view>
			
			<view style="padding: 15px 3px 15px 3px;display: flex;flex-direction: row;justify-content: space-around;align-items: center;" @click="jump_yinfu(index)">
				<view style="display: flex;flex-direction: column;width: 20%;flex-shrink: 0;">
					<text style="font-weight: 600;font-size: 14px;">{{item.type}}训练</text>
					<text style="color: #b6bfdb;font-size: 12px;">{{item.diff}}</text>
				</view>
				<view style="display: flex;flex-direction: row;">
					<text style="font-weight: 600;font-size: 12px;">正确个数：</text>
					<view style="background-color: #759ffa;font-size: 10px;padding: 2px 5px 2px 5px;border-radius: 8rpx;">
						<text>{{item.right_cnt}}/{{item.all_cnt}}</text>
					</view>
				</view>
				<view style="display: flex;flex-direction: row;">
					<text style="font-weight: 600;font-size: 12px;">正确率：</text>
					<view style="background-color: #759ffa;font-size: 10px;padding: 2px 5px 2px 5px;border-radius: 8rpx;">
						<text>{{item.right_per*100}}%</text>
					</view>
				</view>
				<view style="display: flex;flex-direction: row;">
					<text style="font-weight: 600;font-size: 12px;">耗时：</text>
					<view style="background-color: #759ffa;font-size: 10px;padding: 2px 5px 2px 5px;border-radius: 8rpx;">
						<text>{{item.cost_time}}秒</text>
					</view>
				</view>
			</view>
			
		</view>
			
			 
		<view  style="text-align: center;font-size: 12px;">无数据可下拉云同步</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:[],
				bofang:-1
			}
		},
		mounted() {
			this.data = uni.getStorageSync('tingyin_cuoti');
		},
		onPullDownRefresh() {
			uni.showLoading({});
			uni.request({
				url:this.server_url+'/get_tingyin_xunlian?user='+uni.getStorageSync('user'),
				method:'GET',
				success: (res) => {
					console.log(res);
					this.data=res.data;
					uni.setStorageSync('tingyin_cuoti',res.data);
				},
				complete: (res) => {
					uni.hideLoading();
					uni.stopPullDownRefresh();
				}
			})
		},
		methods: {
			jump_yinfu(e){
				console.log(e);
				uni.setStorage({
					data:this.data[e],
					key:'lianxi_chuancan'
				});
				uni.navigateTo({
					url:'/pages/navigation/WoDe/cuoti_list/xunlian'
				})
			}
		}
	}
</script>

<style>

</style>
