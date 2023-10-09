<template>
<view>
<view class="editaddress">
		<view class="content">
			<view class="row">
				<view class="nominal">收件人</view>
				<view class="input"><input placeholder="请输入收件人姓名" v-model="addressData.name" type="text"></input></view>
			</view>
			<view class="row">
				<view class="nominal">电话号码</view>
				<view class="input"><input placeholder="请输入收件人电话号码" v-model="addressData.phone" type="number" maxlength="11"></input></view>
			</view>
			<view class="row">
				<view class="nominal">所在地区</view>
				<view class="input selectcity" @tap="openPicker">
					<input placeholder="请选择省市区" disabled type="text" v-model="addressData.address"></input>
					<image src="/static/images/home/right.png" class="rights"></image>
				</view>
			</view>
			<view class="row">
				<view class="nominal">详细地址</view>
				<view class="input"><textarea style="font-size: 28upx;" v-model="addressData.moreAddres" auto-height="true" placeholder="输入详细地址" v-if="show == false"></textarea></view>
			</view>
		</view>
		<view class="save"><view class="btn" :style="'background:' + colors" @click="saveAddress">保存地址</view></view>
    <!-- 省市区选择 -->
    <setcity :show="show" @sureSelectArea="onsetCity" @hideShow="onhideShow"></setcity>
	</view>
	<loading v-if="isShow == true"></loading>
</view>
</template>

<script>
var app = getApp();
import setcity from "../../../commponent/public/setCity/nyz_area_picker";
import loading from "../../../commponent/public/loading";
import {setPickaddress,setToaddress} from '@/utils/auth.js'
export default {
  data() {
    return {
      colors: '',
	  status:'',
      show: false,
      checked: false,
      isShow: true,
	  addressData:{}
    };
  },

  components: {
    setcity,
    loading
  },
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      colors: app.globalData.newColor,
	  status: options.status,
	  addressData: JSON.parse(options.address)
    });
	uni.setNavigationBarTitle({ //根据status判断是收件还是取件地址
		title: options.status==0?'编辑取件地址':'编辑收件地址'
	})
    setTimeout(() => {
      this.setData({
        isShow: false
      });
    }, 500);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  methods: {
    openPicker() { //选择所在地区
		this.show = true
    },
    onhideShow() {
	  this.show = false
    },
    onsetCity(e) { //设置省市区
      let data = e.detail.target.dataset;
      let address = data.province + data.city + data.area;
	  this.show = false
	  this.addressData.address = address
    },
	saveAddress(){ //模拟保存成功
		if(this.addressData.name == ''){
			uni.showToast({
				title:'姓名不能为空',
				icon:'none'
			})
			return
		}else if(this.addressData.phone == ''){
			uni.showToast({
				title:'手机号不能为空',
				icon:'none'
			})
			return
		}else if(this.addressData.address == ''){
			uni.showToast({
				title:'所在地区不能为空',
				icon:'none'
			})
			return
		}else if(this.addressData.moreAddres == ''){
			uni.showToast({
				title:'详细地址不能为空',
				icon:'none'
			})
			return
		}
		uni.showToast({ //模拟保存成功
			title:'保存成功'
		})
		setTimeout(()=>{
			// 根据status的值来判断是取件地址还是收货地址
			if(this.status == 0){ //取件
				setPickaddress(this.addressData)
			}else{//收件
				setToaddress(this.addressData)
			}
			uni.navigateBack(-1)
		},1500)
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
.selectcity input{
  width: 90%;
}
.selectcity image{
  width: 40upx;
  height: 40upx;
  float: right;
}
</style>