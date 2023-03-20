<template>
	<view style="display: flex;flex-direction: column;align-items: center;">
		
		<view	style="position: fixed;left: 20px;margin-top: 60rpx;">
			<image src="../../static/login/back.png" mode="widthFix" style="width: 28px;" @click="jump_login"></image>
		</view>
		
		<view style="width: 100%;">
			<image src="../../static/login/logo.png" style="width: 60%;margin-left: 18%;margin-top: 120rpx;" mode="widthFix"></image>
		</view>

		
		<view style="width: 80%;">
			
			<text class="text_login">用户名</text>
			<view class="input_login"	style="display: flex;align-items: center;">
				<input v-model="data.username" placeholder="请输入用户名" style="margin-left: 30rpx;color: #000000;font-size: 14px;" placeholder-style="color: #C4C4C4;">
			</view>
			
			<view style="margin-top: 30rpx;">
				<text class="text_login"	>电话号码</text>
			</view>
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
			
			<view style="margin-top: 30rpx;">
				<text class="text_login"	>已有房屋</text>
			</view>
			<view	style="width: 100%;display: flex;justify-content: space-between;font-size: 14px;color: #929292">
				<view class="input_login havehouse"  :class="{'active':  data.have_house}">
					<radio color="#bdbab1"  :checked="data.have_house" @click="change_havehouse">有</radio>
				</view>
				
				<view class="input_login havehouse"  :class="{'active':  !data.have_house}">
					<radio color="#bdbab1"  :checked="!data.have_house" @click="change_havehouse">无</radio>
				</view>
			</view>
			
			<view style="margin-top: 30rpx;">
				<text class="text_login"	>喜欢的装修风格</text>
			</view>
			<view	style="width: 100%;display: flex;justify-content: space-between;font-size: 14px;color: #929292;margin-top: 10px;">
				<scroll-view scroll-x="true" show-scrollbar="true">
					<view style="display: flex;flex-direction: row;">
						<view @click="select_style(index)" v-for="(item,index) in list" style="margin-left: 10px;display: flex;flex-direction: column;text-align: center;">
							<image :src="item.image" style="height: 120px;border-radius: 5px;" mode="heightFix" :class="{'select': item.select}"></image>
							<text style="margin-top: 5px;">{{item.name}}</text>
						</view>
					</view>

				</scroll-view>
			</view>
			
			<view class="login_button" @click="reg()">
				注册
			</view>
			
			<input style="height: 100rpx;" disabled="true"/>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:{
					phone:'',
					smscode:'',
					username:'',
					have_house:true,
					style:[]
				},
				countdown:0,
				countdown_interval:null,
				list:[
					{
						name:'新中式',
						image:'https://7463-tcb-6dkhphdodd5e2a-7dedu72135999-1309304321.tcb.qcloud.la/HomePaint/A604FCE79AEDE974078E9929379C79B0.jpg',
						select:false
					},
					{
						name:'奶油风',
						image:'https://7463-tcb-6dkhphdodd5e2a-7dedu72135999-1309304321.tcb.qcloud.la/HomePaint/Camera_XHS_16770709720750302aq016kad94y3zf0010xux5r0ifphox.jpg',
						select:false
					},
					{
						name:'轻奢风',
						image:'https://7463-tcb-6dkhphdodd5e2a-7dedu72135999-1309304321.tcb.qcloud.la/HomePaint/Camera_XHS_167707104694901021j01kdxlrmsrcgk0112qlm40q2n758.jpg',
						select:false
					},
					{
						name:'原木风',
						image:'https://7463-tcb-6dkhphdodd5e2a-7dedu72135999-1309304321.tcb.qcloud.la/HomePaint/Camera_XHS_167707112967801023d016ztnyvrd2pq0110ajwwcd87478.jpg',
						select:false
					},
					{
						name:'美式风',
						image:'	https://7463-tcb-6dkhphdodd5e2a-7dedu72135999-1309304321.tcb.qcloud.la/HomePaint/Camera_1000g0k01dv9p8oo8s0005ocodduk0g8oq7fov50.jpg',
						select:false
					}
				]
			}
		},
		methods: {
			change_havehouse(){
				this.data.have_house = !this.data.have_house;
			},
			sendsms() {
				var that = this;
				if (!that.data.phone) {
					uni.showToast({ title: '请输入手机号', icon: 'none' });
					return;
				}
				if (!/^[1][3,4,5,7,8,9][0-9]{9}$/.test(that.data.phone)) {
					uni.showToast({ title: '请输入正确手机号', icon: 'none' });
					return;
				}
			
				//这里请求后台获取短信验证码
				uni.request({
					url:that.server_url+'/homepaint/sendsms?user='+that.data.phone,
					method:'GET',
					success: function(res) {
						
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
			
			jump_login(){
				uni.navigateBack();
			},
			register(){
				
			},
			select_style(e){
				this.list[e].select = !this.list[e].select;
			},
			reg() {

				var that = this;

				
				if (!that.data.phone) {
					uni.showToast({ title: '请输入手机号', icon: 'none' });
					return;
				}
				if (!/^[1][3,4,5,7,8,9][0-9]{9}$/.test(that.data.phone)) {
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
				
				
				// uni.showLoading();
				uni.request({
					url:this.server_url+'/homepaint/register?user='+this.data.phone+'&password=123456&code='+this.data.smscode+'&gender=男',
					method:'GET',
					success: (res) => {
						console.log(res);
						if(res.data.result=="注册成功"){
							uni.showToast({
								icon:'success',
								title:'注册成功'
							});
							//保存token,user
							uni.setStorage({
								key:'token',
								data:res.data.token
							});
							uni.setStorage({
								key:'user',
								data:that.data.phone
							});


							//jump
							uni.redirectTo({
								url:'/pages/navigation/ShouYe/ShouYe'
							})
						}else{
							uni.showToast({
								icon:'none',
								position:'bottom',
								title:res.data.result
							});
							this.yzm="";
						}
					},
					finally:(res)=>{
						uni.hideLoading();
					}
				})
			},
			//立刻注册
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
		background: #F3EFE3;
		border-radius: 8px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 60rpx;
		font-size: 14px;
	}
</style>
