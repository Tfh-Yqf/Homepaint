<template>
	<view>
		<view class="house" style="width: 90%;margin-left: 5%;margin-top: 44rpx;">
			<view style="display: flex;flex-direction: column;">
				<view style="display: flex;height: 250rpx">
					<view style="width: 50%;display: flex;justify-content: center;align-items: flex-end">
						<image src="@/static/navgiation/ShouYe/huxing.jpg" mode="widthFix"
							style="width: 80%;border-radius: 5px;"></image>
					</view>
					<view style="width: 50%;display: flex;flex-direction: column;justify-content: space-between;">
						<view @click="share()"
							style="width: 100%;display: flex;flex-direction: row-reverse;margin-top: 20rpx;">
							<view
								style="background-color: #FFF7E6;border-radius: 7px;width: 120rpx;font-size: 13px;margin-right: 20rpx;display: flex;justify-content: space-around;align-items: center;height: 25px;">
								<image src="@/static/navgiation/ShouYe/share.png" mode="widthFix" style="width: 10px;">
								</image>
								<text>分享</text>
							</view>
						</view>
						<view style="display: flex;flex-direction: column;">
							<text style="font-size: 16px;font-weight: bold;" v-if="family.length!=0">{{family[0].familyName}}</text>
							<text style="color: #8C764D;font-size: 14px;margin-top: 10rpx;" v-if="family.length!=0">{{family[0].time.substring(0,10)}}</text>
						</view>
					</view>
				</view>

				<view
					style="border-top: thin solid  rgba(181,151,30,1);width: 90%;margin-left: 5%;margin-top: 40rpx;opacity: 0.15;">
				</view>

				<view
					style="height: 100rpx;width: 100%;display: flex;justify-content: space-around;font-size: 14px;color: #8F7819;align-items: center;">
					<view @click="jump_cehui()">
						<image src="@/static/navgiation/ShouYe/cehui.png" mode="widthFix"
							style="width: 10px;margin-left: 10px;"></image>
						<text style="margin-left: 10rpx;">测绘</text>
					</view>

					<view style="border-left: thin solid rgba(181,151,30,1);height: 70rpx;opacity: 0.2;"></view>

					<view>
						<image src="@/static/navgiation/ShouYe/decoration.png" mode="widthFix" style="width: 10px;">
						</image>
						<text style="margin-left: 10rpx;">3D装修</text>

					</view>

					<view style="border-left: thin solid rgba(181,151,30,1);height: 70rpx;opacity: 0.2;"></view>

					<view @click="jump_vr()">
						<image src="@/static/navgiation/ShouYe/VR.png" mode="widthFix" style="width: 10px;"></image>
						<text style="margin-left: 10rpx;margin-right: 10px;">空间重建</text>

					</view>
				</view>
			</view>
		</view>

		<view style="display: flex;flex-direction: column;width: 90%;margin-left: 5%;margin-top: 20px;">
			<text >家庭成员({{family.length}})</text>

			<view style="display: flex;flex-direction: row;flex-wrap: wrap;margin-top: 20px;">

				<view style="display: flex;flex-direction: column;background-color: #f5f5f5;border-radius: 10px;width: 30%;height: 300rpx;margin-left: 10px;justify-content: space-between;" v-for="(item,index) in family">
					<view style="width: 100%;text-align: center;">
						<image :src="item.avatar" style="width:95%;margin-top: 10rpx;border-radius: 10px" mode="widthFix"></image>
					</view>

					<view style="display: flex;flex-direction: column;margin-top: 1rpx;">
						<view style="display: flex;flex-direction: row;justify-content: space-between;align-items: center;">
							<text style="margin-left: 5rpx;">{{item.nickName}}</text>
							<image v-if="!item.isadmin" @click="deletePerson(item)"
								src="../../static/ultis/movePerson.png" mode="widthFix" style="width: 20px;"></image>
						</view>

						<view style="display: flex;flex-direction: row;justify-content: space-between;">
							<text style="margin-left: 5rpx;">{{item.time.substring(0,10)}}</text>
						</view>


					</view>
				</view>
				
				<view @click="AddJoin()" style="display: flex;flex-direction: column;background-color: white;border-radius: 10px;width: 30%;height: 300rpx;margin-left: 10px;" >
					<view style="width: 100%;display: flex;justify-content: center;flex-direction: column;align-items: center;height: 300rpx;">
						<image src="../../static/ultis/Add.png" mode="widthFix" style="width: 50px;"></image>
						<text style="margin-top: 10px;">点击添加新成员</text>
					</view>
				</view>
			</view>
		</view>

		<uni-popup ref="createFamily" :mask-click="false">
			<view class="popup_box">
				<view style="width: 90%;margin-left: 5%;display: flex;margin-top: 20px;align-items: center;">
					<text style="width: 80px;flex-shrink: 0;">家庭名</text>

					<input v-model="CreateFmailyData.family_name"
						style="border: 1px solid gray;border-radius: 5px;height: 30px;" placeholder="幸福美满的一家" />
				</view>

				<view style="width: 90%;margin-left: 5%;display: flex;margin-top: 10px;align-items: center;">
					<text style="width: 80px;flex-shrink: 0;">个人身份：</text>

					<input v-model="CreateFmailyData.nick_name"
						style="border: 1px solid gray;border-radius: 5px;height: 30px" placeholder="爸爸" />
				</view>

				<view style="width: 100%;display: flex;justify-content: center;margin-top: 20px;">
					<view @click="StartCreateFamily()"
						style="width: 70px;height: 35px;display: flex;align-items: center;justify-content: center;background-color: #3d5cff;color: white;border-radius: 3px;">
						创建</view>
				</view>
			</view>
		</uni-popup>

		<uni-popup ref="Familyjoin">
			<view style="width: 300px;background-color: white;display: flex;flex-direction: column;">
				<view style="width: 90%;margin-left: 5%;display: flex;margin-top: 20px;flex-direction: column;justify-content: center;">
					<text style="">分享二维码给您的用户</text>
					<text style="font-size: 10px;">(在 我的-扫一扫加入家庭 中使用)</text>
				</view>
				<yz-qr :qrPath.sync="Code" :text="family_id"  ></yz-qr>
				<div ref="qrcodeDom"></div>
			</view>
		</uni-popup>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				family: [],
				family_name: '',
				CreateFmailyData: {
					family_name: '',
					nick_name: ''
				},
				Code: '',
				family_id:1
			}
		},
		mounted() {
			this.init_data();
		},
		methods: {
			jump_vr(){
				uni.navigateTo({
					url:'/pages/navigation/Middle/AR/AR'
				})
			},
			jump_cehui(){
				uni.navigateTo({
					url:'/pages/draw/draw2D'
				})
			},
			AddJoin() {
				console.log(this.family);
				this.family_id = this.family[0].familyId.toString();
				this.$refs.Familyjoin.open('center');
			},
			deletePerson(item) {
				uni.showModal({
					title: '确定踢出该家庭成员吗',
					confirmText: '踢出',
					success: (res) => {
						if (res.confirm) {
							var temp = {
								family_id: item.familyId,
								user_id: item.userId
							};
							// console.log(temp);
							this.request(this.server_url + 'family/delete', temp, 'POST').then((res) => {
								if (res.code == 0) {
									uni.showToast({
										title: '删除成功!'
									});
									this.init_data();
								}
							})
						}
					}
				})
			},
			init_data() {
				this.request(this.server_url + 'family/get', {}, 'GET').then((res) => {
					console.log(res);
					if (res.code == 0) {
						this.family = [{}];
						for(var i=0;i<res.data.length;i++){
							if(res.data[i].isadmin==false)
								this.family.push(res.data[i]);
							else
								this.family[0] = res.data[i];
						}
						console.log(this.family);

						if (res.data.length == 0) {
							this.$refs.createFamily.open('center');
						}
					}

				})
			},
			StartCreateFamily() {
				if (this.CreateFmailyData.family_name.length == 0) {
					uni.showToast({
						title: '家庭名称未填写',
						icon: 'none'
					});
					return;
				}

				if (this.CreateFmailyData.nick_name == 0) {
					uni.showToast({
						title: '个人昵称未填写',
						icon: 'none'
					});
					return;
				}

				this.request(this.server_url + 'family/create', this.CreateFmailyData, 'POST').then((res) => {
					if (res.code == 0) {
						uni.showToast({
							title: '创建成功!'
						});
						this.$refs.createFamily.close();
						this.init_data();
					}
				})
			}
		}
	}
</script>

<style>
	@import url('@/pages/navigation/ShouYe/shouye.css');

	.popup_box {
		width: 250px;
		height: 160px;
		display: flex;
		flex-direction: column;
		background-color: white;
		border-radius: 10px;
		font-size: 15px;
	}
</style>
