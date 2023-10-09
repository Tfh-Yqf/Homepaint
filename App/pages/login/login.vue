<template>
	<view style="display: flex;flex-direction: column;align-items: center;overflow-y: scroll;">
		
		<view style="width: 100%;">
			<image src="../../static/login/logo.png" style="width: 60%;margin-left: 18%;margin-top: 120rpx;" mode="widthFix"></image>
		</view>

		
		<view style="width: 80%;">
			
			<text class="text_login">电话号码</text>
			<view class="input_login" 	style="display: flex;align-items: center;">
				<image src="../../static/login/qiu.png" style="width: 50rpx;margin-left: 30rpx;;" mode="widthFix"></image>
				<view	style="border-left: thin solid #C4C4C4;height: 30rpx;margin-left: 30rpx;width: 1px;"></view>
				<input v-model="data.phone" placeholder="IDN(+86)" style="margin-left: 30rpx;color: #000000;font-size: 14px;" placeholder-style="color: #C4C4C4;">
			</view>
			
			<view style="margin-top: 30rpx;">
				<text class="text_login"	>验证码</text>
			</view>

			<view	style="width: 100%;display: flex;justify-content: space-between;">
				<view class="input_login" style="width: 60%;display: flex;align-items: center;">
					<input v-model="data.smscode" placeholder="请输入验证码" style="margin-left: 30rpx;color: #000000;font-size: 14px;" placeholder-style="color: #C4C4C4;">
				</view>
				
				<view class="input_login" style="width: 34%;font-size: 13px;color: #000000;display: flex;align-items: center;justify-content: center;">
					<text v-if="countdown<=0" @click="sendsms()">发送验证码</text>
					<text v-else>重新发送({{countdown}})</text>
				</view>
			</view>
			
			<view style="width: 100%;display: flex;justify-content: center;">
				<view class="login_button" @click="login()">
					登录
				</view>
			</view>

			<view	style="width: 100%;text-align: center;margin-top: 40rpx;font-size: 14px;">
				<text @click="jump_register()">立即注册</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:{
					phone:'',
					smscode:''
				},
				countdown:0,
				countdown_interval:null
			}
		},
		methods: {
			jump_register(){
				uni.navigateTo({
					url:'/pages/login/register'
				})
			},
			sendsms() {
				var that = this;
				if (!that.data.phone) {
					uni.showToast({ title: '请输入手机号', icon: 'none' });
					return;
				}
				if (that.data.phone.length==0) {
					uni.showToast({ title: '请输入正确手机号', icon: 'none' });
					return;
				}
				
				var temp = {
					telephone:that.data.phone
				}
				this.request(this.server_url+'user/loginSendCode',temp,'POST').then((res)=>{
					if(res.code==0){
						that.countdown = 30;
						that.countdown_interval = setInterval(function(){
							that.countdown--;
							if(that.countdown == 0){
								clearInterval(that.countdown_interval);
							}
						},1000)
					}

				});

			},
			login() {
				var that = this;
				
				if (!that.data.phone) {
					uni.showToast({ title: '请输入手机号', icon: 'none' });
					return;
				}
				if (that.data.phone.length==0) {
					uni.showToast({ title: '请输入正确手机号', icon: 'none' });
					return;
				}
				
				if (that.data.smscode=="") {
					uni.showToast({ title: '请输入验证码', icon: 'none' });
					return;
				}
				if (that.data.smscode.length!=6) {
					uni.showToast({ title: '验证码格式错误', icon: 'none' });
					return;
				}
				
				var temp = {
					telephone:this.data.phone,
					verifyCode:this.data.smscode
				}
				this.request(this.server_url+'user/smsLogin',temp,'POST').then((res)=>{
					console.log(res);
					if(res.code==0){
						uni.showToast({
							title:'登录成功!'
						});
						
						uni.setStorage({
							key:'token',
							data:res.token
						});
	
						uni.redirectTo({
							url:'/pages/navigation/ShouYe/ShouYe'
						});
					}else{
						this.data.smscode=""
					};
				});

		},
	
		}
	}
</script>

<style>
	page{
		width: 100%;
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
	
	.login_button{
		width: 80%;
		height: 90rpx;
		background: #3d5cff;
		border-radius: 8px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 60rpx;
		font-size: 16px;
		color: white;
	}
</style>
