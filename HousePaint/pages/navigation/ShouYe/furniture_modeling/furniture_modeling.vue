<template>
	<view style="display: flex;flex-direction: column;align-items: center;">
		
		<view	style="left: 20px;margin-top: 65rpx;display: flex;align-items: center;">
			<image src="@/static/login/back.png" mode="widthFix" style="width: 28px;left: 20px;position: fixed" @click="back"></image>
			
			<text class="text_login" style="font-size: 17px;">家具建模</text>
		</view>
		


		
		<view style="width: 80%;margin-top: 150rpx;">
			
			<text class="text_login">家具类型</text>
			  <uni-data-select
				v-model="value"
				:localdata="range"
				@change="change"
				
			  ></uni-data-select>
			
			<view style="margin-top: 30rpx;">
				<text class="text_login"	>家具名称</text>
			</view>
			<view class="input_login"	style="display: flex;align-items: center;">
				<input v-model="data.name" placeholder="请输入家具名称" style="margin-left: 30rpx;color: #000000;font-size: 14px;" placeholder-style="color: #C4C4C4;">
			</view>
			
			<view style="margin-top: 30rpx;" class="text_login">
				上传家具图片
					<text style="font-size: 11px;">(全方位拍摄，建议大于5张)</text>
				
			</view>
			
			<view style="margin-top: 10px;">
				<uni-file-picker 
					v-model="data.image" 
					fileMediatype="image" 
					mode="grid" 

					@success="success" 

				/>
			</view>
			
			<view class="login_button" @click="start_model()">
				开始建模
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
				value: 0,
				range: [
				  { value: 0, text: "沙发" },
				  { value: 1, text: "床" },
				  { value: 2, text: "冰箱" },
				  { value: 3, text: "电视" },
				  { value: 4, text: "洗衣机" },
				  { value: 5, text: "柜子" },
				  { value: 6, text: "桌子" },
				  { value: 7, text: "椅子" },
				  { value: 8, text: "空调" },
				  { value: 9, text: "马桶" },
				  { value: 10, text: "灯" }
				],
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
		margin-top: 60rpx;
		font-size: 14px;
		color: #FFFFFF;
		font-size: 16px;
		font-weight: bold;
	}
</style>
