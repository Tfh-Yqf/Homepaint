<template>
	<view style="">
		
		<view style="width: 95%;background-color: #ecf1fe;margin-left: 2%;margin-top: 10px;" v-for="(item,index) in data" >
			<view style="text-align: center;background-color: #FFFFFF;color: #b9b9b9;font-size: 12px;padding: 10px 1px 10px 1px ;">

				<uni-dateformat :date="item.time"></uni-dateformat>
			</view>
			
			<view style="padding: 15px 3px 15px 3px;display: flex;flex-direction: row;justify-content: space-around;align-items: center;" @click="jump_yinfu(index)">
				<view style="display: flex;flex-direction: column;width: 20%;flex-shrink: 0;">
					<text style="font-weight: 600;font-size: 14px;">考试</text>
					<text style="color: #b6bfdb;font-size: 12px;">{{item.diff}}</text>
				</view>
				<view style="display: flex;flex-direction: row;">
					<text style="font-weight: 600;font-size: 12px;">正确个数：</text>
					<view style="background-color: #759ffa;font-size: 10px;padding: 2px 5px 2px 5px;border-radius: 8rpx;">
						<text>{{item.right_cnt}}/30</text>
					</view>
				</view>
				<view style="display: flex;flex-direction: row;">
					<text style="font-weight: 600;font-size: 12px;">正确率：</text>
					<view style="background-color: #759ffa;font-size: 10px;padding: 2px 5px 2px 5px;border-radius: 8rpx;">
						<text>{{(item.right_per*100).toFixed(2)}}%</text>
					</view>
				</view>
				<view style="display: flex;flex-direction: row;">
					<text style="font-weight: 600;font-size: 12px;">得分：</text>
					<view style="background-color: #759ffa;font-size: 10px;padding: 2px 5px 2px 5px;border-radius: 8rpx;">
						<text>{{item.grade}}分</text>
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
				data:[]
			}
		},
		mounted() {
			this.data = uni.getStorageSync('tingyin_exam_foot');
		},
		onPullDownRefresh() {
			uni.showLoading({});
			uni.request({
				url:this.server_url+'/get_tingyin_exam?user='+uni.getStorageSync('user'),
				method:'GET',
				success: (res) => {
					console.log(res);
					this.data=res.data;
					uni.setStorageSync('tingyin_exam_foot',res.data);
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
					key:'exam_list_chuancan'
				});
				uni.navigateTo({
					url:'/pages/navigation/WoDe/exam_list/xunlian'
				})
			}
		}
	}
</script>

<style>

</style>
