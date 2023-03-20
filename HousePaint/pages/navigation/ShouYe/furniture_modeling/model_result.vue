<template>
	<view style="display: flex;flex-direction: column;align-items: center;">
		
		<view	style="left: 20px;margin-top: 65rpx;display: flex;align-items: center;">
			<image src="@/static/login/back.png" mode="widthFix" style="width: 28px;left: 20px;position: fixed" @click="back"></image>
			
			<text class="text_login" style="font-size: 17px;">您的模型已生成</text>
		</view>
		
		<view style="width: 100%;text-align: center;margin-top: 30px;">
			<text class="text_login" style="font-size: 15px;">渲染视频</text>
		</view>

		<view style="margin-top: 20px;margin-left: 5%;margin-right: 5%;">
			<video 
				id="myVideo" 
				src="https://7463-tcb-6dkhphdodd5e2a-7dedu72135999-1309304321.tcb.qcloud.la/HomePaint/3D_furniture.mp4"
				autoplay="true"
				muted="true"
				controls="false"
				object-fit="fill"
				>
			</video>
		</view>
		<view style="width: 80%;margin-top: 50rpx;">
			
			<view style="text-align: center;">
				<text class="text_login"	style="font-size: 15px;">家具名称</text>
			</view>
			<view class="input_login"	style="display: flex;align-items: center;">
				<input disabled="true" v-model="data.name+'-' +data.type" placeholder="请输入家具名称" style="color: #000000;font-size: 14px;text-align: center;width: 100%;" placeholder-style="color: #C4C4C4;">
			</view>
			

			<view class="login_button" @click="add_model()">
				添加到家具库
			</view>
						
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:{}

			}
		},
		mounted() {
			this.data = uni.getStorageSync('model_chuancan');
		},
		methods: {
			back(){
				uni.navigateBack();
			},
			add_model(){
				uni.showToast({
					title:'添加成功!'
				});
				uni.navigateTo({
					url:'/pages/navigation/ShouYe/ShouYe'
				})
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
		width: 100%;
	}
	
	.select{
		border: 1px solid #7a1822;
	}
	
	.text_login{
		font-size: 14px;
		color: #313131;
		letter-spacing: 0;
		font-weight: 600;
	}
	
	.input_login{
		width: 100%;
		height: 100rpx;
		background: #FFFFFF;
		border: 1px solid rgba(240,240,240,1);
		border-radius: 8px;
		margin-top: 20rpx;

	}
	
	.input_login.havehouse{
		width: 45%;display: flex;align-items: center;justify-content: center;
	}
	
	.input_login.active{
		border: 1px solid #f3efe3;

	}
	
	.login_button{
		width: 100%;
		height: 120rpx;
		background: #3d5cff;
		border-radius: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 70rpx;
		font-size: 14px;
		color: #FFFFFF;
		font-size: 16px;
		font-weight: bold;
	}
</style>
