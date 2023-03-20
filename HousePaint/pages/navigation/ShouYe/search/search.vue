<template>
	<view style="display: flex;flex-direction: column;align-items: center;">
		
		<view	style="left: 20px;margin-top: 65rpx;display: flex;align-items: center;">
			<image src="@/static/login/back.png" mode="widthFix" style="width: 28px;left: 20px;position: fixed" @click="back"></image>
			
			<text class="text_login" style="font-size: 17px;font-weight: bold;">Search</text>
		</view>
		
		<view style="width: 90%;margin-left: 5;margin-top: 50rpx;display: flex;flex-direction: column;">
			<view style="width: 100%;background-color: #ffffff;border-radius: 20px;display: flex;flex-direction: row;height: 40px;align-items: center;">
				<view style="width: 30px;display: flex;align-items: center;justify-content: right;flex-direction: row-reverse;">
					<view style="width: 12px;height: 12px;background-color: #606060;border-radius: 13px;flex-shrink: 0;"></view>
				</view>
				<view style="width: 80%;margin-left: 10px;">
					<input placeholder="请输入关键字或上传图像" style="font-size: 14px;color: #606060;width: 100%;font-size: 13px;" />
				</view>
				<view style="width: 5rpx;height: 100%;background-color: #fafafc;flex-shrink: 0;">
					
				</view>
				
				<view class="right_group">
					<image src="@/static/navgiation/ShouYe/image.png" style="width: 20px;" mode="widthFix"></image>
				</view>
			</view>
			
			<view style="display: flex;flex-direction: row;justify-content: space-between;margin-top: 30px;align-items: center;">
				<text style="font-size: 20px;font-weight: bold;">{{result.length}} results</text>
				<text style="font-size: 13px;color: #c9c9ca;">Clear All</text>
			</view>
			
			<view style="display: flex;flex-direction: column;margin-top: 20px;">
				<view v-for="(item,index) in result" class="group">
					<image :src="item.image" style="width: 80px;border-radius: 15px;margin-left: 10px;flex-shrink: 0;height: 80px;" mode="aspectFill"></image>
					
					<view style="display: flex;flex-direction: column;margin-left: 10px;justify-content: space-around;height: 81px;margin-top: 10px;">
						<view style="font-size: 16px;font-weight: bold;">{{item.title}}</view>
						<view class="sub_title">{{item.su_title}}</view>
						<view style="display: flex;align-items: center">
							<image src="@/static/navgiation/ShouYe/start.png" style="width: 10px;" mode="widthFix"></image>
							<text style="color: #fbbf24;margin-left: 5px;">{{item.star}}</text>
							<text style="color: #999999;font-size: 14px;margin-left: 5px;">({{item.reviews}} Reviews)</text>
						</view>
					</view>
					
					<view style="width: 40px;display: flex;flex-direction: row;align-items: flex-end;height: 80px;margin-top: 10px;flex-shrink: 0;margin-right: 16px;">
						<view style="display: flex;flex-direction: row;color: #e72949;align-items: center;">
							<image src="@/static/navgiation/ShouYe/zan.png" mode="widthFix" style="width: 15px;"></image>
							<view style="margin-left: 5px;">{{item.favorite}}</view>
							
						</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:{
					name:'',
					image:[],
					type:''
				},
				result:[
					{
						image:'https://pic.huitu.com/pic/20220812/2064894_20220812202427533070_0.jpg',
						title:'纯实木茶桌-高端大气',
						su_title:'黑胡桃2M实木大板桌，够大也够料！',
						star:4.0,
						reviews:6600,
						favorite:'10M'
					},
					{
						image:'https://pic.huitu.com/pic/20230213/1417944_20230213222520879214_0.jpg',
						title:'图书馆沙发和小桌子',
						su_title:'采用简洁明快、张弛有毒的设计手法营造图书馆的空间气质，',
						star:5.0,
						reviews:6500,
						favorite:'9M'
					},
					{
						image:'https://photo-static-api.fotomore.com/creative/vcg/veer/400/new/VCG41N810733288.jpg',
						title:'西式庭院餐桌',
						su_title:'别有风情的浪漫餐桌，坐在这里看书吃饭都非常舒适。',
						star:4.0,
						reviews:5100,
						favorite:'5M'
					},
					{
						image:'https://pic.huitu.com/pic/20220302/788147_20220302102035655070_0.jpg',
						title:'大理石小圆桌',
						su_title:'现代简约轻奢的搭配，质感满满！！',
						star:5.0,
						reviews:4300,
						favorite:'7M'
					},
					{
						image:'https://pic3.ntimg.cn/pic/20221230/30703445_212224837120_4.jpg',
						title:'复古实木床上桌',
						su_title:'一张好看的复古书桌，可以看书也可以喝茶。',
						star:4.5,
						reviews:2300,
						favorite:'3M'
					},
				]
			}
		},
		methods: {
			back(){
				uni.navigateBack();
			},
			start_model(){
				this.data.type = this.range[this.value].text;
				uni.setStorageSync('model_chuancan',this.data);
				uni.showLoading({
					title:'模型构建中'
				})
				
				setTimeout(function(){
					uni.hideLoading();
					uni.navigateTo({
						url:'/pages/navigation/ShouYe/furniture_modeling/model_result'
					})
				},2000);
			},
		    change(e) {
				this.value = e;
			},
			success(){
				uni.showToast({
					title:'上传成功!',
					icon:'none'
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #fafafc;
		width: 100%;
	}
	
	.right_group{
		width: 40px;
		height: 100%;
		background-color: #e72949;
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	
	.group{
		align-items: center;
		height: 100px;
		display: flex;
		flex-direction: row;
		margin-top: 10px;
		background-color: #FFFFFF;
		border-radius: 15px;
		width: 100%;
		justify-content: space-around;
	}
	
	.sub_title{
		margin-top: 5px;
		color: #999999;
		font-size: 13px;
		-webkit-line-clamp:2;
		display: -webkit-box;
		text-overflow: ellipsis;
		-webkit-box-orient:vertical;
		overflow: hidden;
	}
</style>
