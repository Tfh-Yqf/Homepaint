<template>
	<view>
		<view class="editaddress">
			<view class="content">
				<view class="row">
					<view class="nominal">收件人</view>
					<view class="input"><input placeholder="请输入收件人姓名" v-model="addressData.nickname" type="text"></input>
					</view>
				</view>
				<view class="row">
					<view class="nominal">电话号码</view>
					<view class="input"><input placeholder="请输入收件人电话号码" v-model="addressData.phone" type="number"
							maxlength="11"></input></view>
				</view>
				<view class="row">
					<view class="nominal">所在地区</view>
					<view class="input selectcity" @tap="openPicker">
						<input placeholder="请选择省市区" disabled type="text" v-model="addressData.address_city"></input>
						<image src="/static/images/home/right.png" class="rights"></image>
					</view>
				</view>
				<view class="row">
					<view class="nominal">详细地址</view>
					<view class="input"><textarea style="font-size: 28upx;" v-model="addressData.address"
							auto-height="true" placeholder="输入详细地址" v-if="show == false"></textarea></view>
				</view>
				<view class="row">
					<view class="nominal" style="color: #999;margin-top: 10upx;">设为默认地址</view>
					<view class="input switch">
						<switch :color="colors" style="transform:scale(0.8)" @change="switchChange"
							:checked="addressData.isdefault"></switch>
					</view>
				</view>
			</view>
			<view class="save" @click="save_address()">
				<view class="btn" :style="'background:' + colors">保存地址</view>
			</view>
			<!-- 省市区选择 -->
			<setcity :show="show" @sureSelectArea="onsetCity" @hideShow="onhideShow"></setcity>
		</view>
		<loading v-if="isShow == true"></loading>
	</view>
</template>

<script>
	var app = getApp();
	import setcity from "@/pages/commponent/public/setCity/nyz_area_picker";
	import loading from "@/pages/commponent/public/loading";
	import {txMapKey} from '@/utils/keys.js';
	import qqmapsdk from "@/utils/qqmap-wx-jssdk.min";
	export default {
		data() {
			return {
				colors: '',
				show: false,
				addressData: {
					nickname: '',
					phone: '',
					address_city: '',
					address: '',
					isdefault: 0
				},
				isShow: true,
				type:'',
				latitude:'',
				longitude:'',
				city:null
			};
		},

		components: {
			setcity,
			loading
		},
		props: {},
		onLoad: function(options) {
			if (options.type == 'edit') { //如果是编辑收货地址
				this.addressData = JSON.parse(options.address)
				this.addressData.isdefault = this.addressData.default;
				delete this.addressData.default;
				
				this.addressData.address_city = this.addressData.addressCity;
				delete this.addressData.addressCity;
				
				this.addressData.address_id = this.addressData.addressId;
				delete this.addressData.addressId;
			}else{
				this.getUserPosition();
			}
			this.type = options.type;
			this.isShow = false;

		},
		methods: {
			save_address(){
				if(this.addressData.nickname.length==0){
					uni.showToast({
						title:'收件人未填写',
						icon:'none'
					});
					return;
				}
				if(this.addressData.phone.length==0){
					uni.showToast({
						title:'收件人电话未填写',
						icon:'none'
					});
					return;
				}	
				if(this.addressData.address.length==0){
					uni.showToast({
						title:'详细地址未填写',
						icon:'none'
					});
					return;
				}	
				if(this.addressData.address_city.length==0){
					uni.showToast({
						title:'省市县未选择',
						icon:'none'
					});
					return;
				}	

				console.log(this.addressData);
				if(this.type=='add'){
					

					this.request(this.server_url+'order/add_address',this.addressData,'POST').then((res)=>{
						console.log(res);
						
						if(res.code==0){
							uni.showToast({
								title:'添加成功!',
								icon:'none'
							});
						}
						uni.navigateBack();
					})
				}else{
					delete this.addressData.userId;
					this.request(this.server_url+'order/update_address',this.addressData,'POST').then((res)=>{
						console.log(res);
						
						if(res.code==0){
							uni.showToast({
								title:'添加成功!',
								icon:'none'
							});
						}
						uni.navigateBack();
					})
				}

			},
			getUserPosition() {
				/**
				 * 在这里执行获取用户的位置
				 */
				//获取用户位置
				let that = this;
				uni.getLocation({
					type: 'wgs84',
					geocode: true,
					success: res => {
						console.log('获取经纬度成功', res);
						that.setData({
							latitude: res.latitude,
							longitude: res.longitude
						});
					},
					fail: () => {
						that.setData({
							latitude: '',
							longitude: ''
						});
					},
					complete: () => {
						// 解析地址
						that.getCity();
					}
				});
			},
			getCity() {
				const QQMapWX = new qqmapsdk({
					//腾讯地图  需要用户自己去申请key
					key: txMapKey,
					sig: 'K9NR556vsOa9PYtpWpYV1hJ8tiCgRmK'
				});
				let that = this;
				QQMapWX.reverseGeocoder({
					location: {
						latitude: that.latitude,
						longitude: that.longitude
					},
					success: function(res) {
						console.log('解析地址成功', res);
						let province = res.result.ad_info.province; // 市
			
						let city = res.result;
						that.setData({
							city: city
						});
						that.addressData.address = city.formatted_addresses.recommend;
						that.addressData.address_city = city.address_component.province +city.address_component.city+city.address_component.district;
					},
					fail: function(res) {
						console.log(res);
					}
				});
			},
			openPicker() {
				console.log('执行')
				this.show = true
			},

			onhideShow() {
				this.show = false
				console.log('执行了')
			},
			onsetCity(e) { //选中省市区
				let data = e.detail.target.dataset;
				let address = data.province + data.city + data.area;
				this.show = false
				console.log(address);
				this.addressData.address_city = address
			},
			switchChange(e) {
				// console.log(e);
				
				this.addressData.isdefault = e.detail.value;
			}

		}
	};
</script>
<style lang="scss" scoped>
	.save {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 120upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.save view {
		display: flex;
	}

	.save .btn {
		box-shadow: 0upx 5upx 10upx rgba(0, 0, 0, 0.4);
		width: 70%;
		height: 80upx;
		border-radius: 80upx;
		background-color: #f23a3a;
		color: #fff;
		justify-content: center;
		align-items: center;
		font-size: 30upx;
	}

	.save .btn .icon {
		height: 80upx;
		color: #fff;
		font-size: 30upx;
		justify-content: center;
		align-items: center;
	}

	.content {
		display: flex;
		flex-wrap: wrap;
		margin-top: 40upx;
	}

	.content view {
		display: flex;
	}

	.content .row {
		width: 92%;
		margin: 0 4%;
		border-bottom: solid 1upx #eee;
	}

	.content .row .nominal {
		width: 30%;
		height: 80upx;
		font-size: 28upx;
		font-family: Droid Sans Fallback;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		align-items: center;
	}

	.content .row .input {
		width: 70%;
		padding: 20upx 0;
		align-items: center;
		font-size: 28upx;

	}

	.content .row .input input {
		font-size: 28upx;
		color: #333333;
	}

	.content .row .switch {
		justify-content: flex-end;
	}

	.content .row .input textarea {
		min-height: 40upx;
		line-height: 40upx;
	}

	.content .del_box {
		width: 100%;
		display: block;
		overflow: hidden;
		margin-right: 30upx;
	}

	.content .del {
		width: 240upx;
		height: 80upx;
		float: right;
		justify-content: center;
		align-items: center;
		font-size: 28upx;
		color: #F23A3A;
		margin: 0 auto;
		margin-top: 50upx;
		border-radius: 38upx;
		background-color: rgba(255, 0, 0, 0.05);
		border-bottom: solid 1upx #eee;
	}

	.selectcity input {
		width: 90%;
	}

	.selectcity image {
		width: 40upx;
		height: 40upx;
		float: right;
	}
</style>
