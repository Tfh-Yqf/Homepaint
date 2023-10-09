<template>
	<view style="display: flex;flex-direction: column;background-color: #f9f9f9;">
		<image src="@/static/images/back.png" style="width: 20px;position: fixed;left: 10px;top: 10px;" mode="widthFix" @click="back()"></image>
		<view style="display: flex;width: 100%;justify-content: center;font-size: 25px;color: #bbbbbb;margin-top: 44px;font-size: 18px;">

			<view @click="change_fabu()" style="display: flex;flex-direction: column;justify-content: center;align-items: center;width: 50px;height: 40px;" :class="{'NowChoose':!fabu}">
				<view>社区</view>
				<view v-if="!fabu" style="width: 30px;height: 5px;background-color: #14c4bc;border-radius: 10px;"></view>
			</view>
			<view @click="change_fabu()" style="margin-left: 20px;display: flex;flex-direction: column;justify-content: center;align-items: center;width: 50px;height: 40px;" :class="{'NowChoose':fabu}">
				<view>发布</view>
				<view v-if="fabu" style="width: 30px;height: 5px;background-color: #14c4bc;border-radius: 10px;"></view>
			</view>
		</view>
		

		
		<view style="display: flex;flex-direction: column;width: 100%;" v-if="!fabu">
			<view style="display: flex;flex-direction: row;margin-top: 10px;width: 95%;margin-left: 2%;justify-content: center;">
				<search style="width: 90%;"></search>
			</view>
			
			<view style="display: flex;flex-direction: row;width: 100%;padding: 15px;">
				<image src="@/static/images/bac.png" style="width: 100%;border-radius: 10px;margin-top: 10px;" mode="widthFix"></image>
			</view>
			
			<uni-card title="推荐文章">
				<view   class="diplay_col" style="background-color: #FFFFFF;border-radius: 5px;column-gap: 2%;">
				
					<view v-for="(item,index) in info" :key="index" class="diplay_inl">
						<view class="diplay_view" @click="jump_xiangqing(item)" >
							<view style="width: 100%;">
								<image v-if="item.tiebaImage.length!=0"  :src="item.tiebaImage[0].imageUrl"  style="width: 100%;border-radius: 10upx;min-width: 50px;z-index: 0;" mode="widthFix">
								</image>		
							</view>
							
							<view style="display: flex;flex-direction: column;width: 90%;margin-left: 5%;">
								<view>
									<text  class="title" >{{item.title}}</text>
								</view>
								<view style="margin-top: 5px;display: flex;flex-direction: row;justify-content: space-between;">
									<view style="display: flex;flex-direction: row;align-items: center;">
										<image :src="item.user.avatar" mode="widthFix" style="width: 20px;border-radius: 10px;"></image>
										<text style="font-size: 11px;text-overflow: ellipsis;color: #7a7a7a;margin-left: 2.5px;display: -webkit-box;text-overflow: ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow: hidden;">{{item.user.username}}</text>
									</view>
									<view style="display: flex;align-items: center;">
										<image src="@/static/navgiation/ShouYe/love.png" mode="widthFix" style="width: 20px;border-radius: 10px;"></image>
										<text style="font-size: 14px;color: #7a7a7a;margin-left: 2.5px;">{{item.favorite}}</text>
									</view>
								</view>
							</view>						
						</view>
											
					</view>
				</view>
						
			</uni-card>
			

		</view>
		<view v-else style="display: flex;flex-direction: column;padding: 30px;">
			
			<text class="text_login">标题</text>
			<view class="input_login" 	style="display: flex;align-items: center;">
				<view	style="border-left: thin solid #C4C4C4;height: 30rpx;margin-left: 30rpx;width: 1px;"></view>
				<input v-model="data.title" placeholder="您的帖子的标题" style="margin-left: 30rpx;color: #000000;font-size: 14px;" placeholder-style="color: #C4C4C4;">
			</view>
			
			<text class="text_login" style="margin-top: 10px;">内容</text>
			<view class="input_login" 	style="display: flex;align-items: center;padding: 5px;">
				<textarea v-model="data.content"></textarea>
			</view>
			
			<text class="text_login" style="margin-top: 10px;">图片</text>
			<view class="input_login" style="display: flex;align-items: center;padding: 5px;">
				<uni-file-picker file-mediatype	="image" @select="uploadImage" v-model="images"></uni-file-picker>
			</view>
			
			<text class="text_login" style="margin-top: 10px;">使用的家具</text>
			<view class="input_login" style="display: flex;align-items: center;padding: 5px;">
				<checkbox-group style="display: flex;flex-direction: column;">
					<label v-for="(item,index) in goods" style="display: flex;flex-direction: row;align-items: center;margin-top: 10px;">
						<checkbox @click="change_checkbox(index)" :checked="item.checked" />
						<view class="goods_item" style="margin-left: 5px;">
							<image :src="item.imageUrl" lazy-load="true" @tap="jumpDetails(item)"></image>
							<!-- 商品标签 -->
							<!-- <image class="tags" :src="tagImg[item.type-1]"></image> -->
							<view class="goods_right">
								<view class="goods_name" @tap="jumpDetails(item)">{{item.title}}</view>
								<view class="numbers">
									<text v-if="item.style!=null">{{item.style}}</text>
									<text v-if="item.category!=null">{{item.category}}</text>
								</view>
								<view class="price">
									<text class="money">￥{{item.price}}</text>
									<text class="hx_money">￥{{(item.price*1.2).toFixed(2)}}</text>
								</view>
							</view>
						</view>
					</label>

				</checkbox-group>
			</view>
			
			<view style="width: 100%;display: flex;justify-content: center;">
				<view class="login_button" @click="post()">
					发布
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import search from "@/pages/commponent/public/search.vue";
	import {
		pathToBase64
	} from '@/utils/image-tools/index.js'
	export default {
		data() {
			return {
				fabu:false,
				info:[],
				images:[],
				data:{
					title:'',
					content:'',
					image:[],
					goodsId:[]
				},
				goods:[]
			}
		},
		components: {
			search
		},
		mounted(){
			this.fabu = uni.getStorageSync('IsShare');
			
			this.init_data();
		},
		methods: {
			init_data(){
				this.request(this.server_url+'community/list',{},'GET').then((res)=>{
					console.log(res);
					// this.info = JSON.parse( res.data );
					// console.log(this.info);
					// this.info = this.info[0].data;
					this.info = res.data;
				});
				
				this.request(this.server_url+'houseData/GetUserFurniture',{},'GET').then((res)=>{
						
					if(res.code==0){
						this.goods = res.data;
						for(var i=0;i<this.goods.length;i++)
							this.goods[i] = {checked:false,...this.goods[i],imageUrl:'https://image-1304455659.cos.ap-nanjing.myqcloud.com/3D-FUTURE-model-part1/'+this.goods[i].modalId+'/image.jpg'}
					}
				
				});
				
				this.request(this.server_url+'picture/GetHouseImage',{},'GET').then((res)=>{
					console.log(res);
					var temp = {
						name:"C258AE572B81C9C83DA31887D3B43A58.jpg",
						extname:"jpg",
						url:"https://image-1304455659.cos.ap-nanjing.myqcloud.com/picture/C258AE572B81C9C83DA31887D3B43A58.jpg",
					}
					temp.url = res.data;
					this.images.push(temp);
				});
			},
			jump_xiangqing(e){
				uni.setStorageSync('page_chuancan',e);
				
				uni.navigateTo({
					url:'/pages/navigation/ShouYe/XiangQing/XiangQing'
				});
			},
			change_checkbox(e){
				this.goods[e].checked = !this.goods[e].checked;
			},
			back(){uni.navigateBack()},
			post(){
				if(this.data.title.length==0){
					uni.showToast({
						title:'标题未填写',
						icon:'none'
					});
					return;
				}
				
				if(this.data.content.length==0){
					uni.showToast({
						title:'标题未填写',
						icon:'none'
					});
					return;
				}
				console.log(this.goods)
				for(var i=0;i<this.goods.length;i++)
					if(this.goods[i].checked)
						this.data.goodsId.push(this.goods[i].goodsId);
						
				this.request(this.server_url+'community/post',this.data,'POST').then((res)=>{
					if(res.code==0){
						uni.showToast({
							title:'发布成功!',
							icon:'none'
						});
						this.fabu = false;
						this.init_data();
					}
				});
			},
			uploadImage(e){
				console.log(e.tempFilePaths[0]);
				pathToBase64(e.tempFilePaths[0]).then((res)=>{
					console.log(res);
					this.request(this.server_url+'picture/upload',{image:res},'POST').then((re)=>{
						console.log(re);
							
						if(re.code==0){
							this.data.image.push(re.url);
							uni.showToast({
								title:'上传成功!',
								icon:'none'
							});
						}
						
					});
				})
			},
			change_fabu(){
				this.fabu = !this.fabu;
			},
			jump_xiangqing(e){
				uni.setStorageSync('page_chuancan',e);4
				
				uni.navigateTo({
					url:'/pages/navigation/ShouYe/XiangQing/XiangQing'
				});
			},
		}
	}
</script>

<style>
	@import url('../../navigation/ShouYe/shouye.css');
	.goods_list .goods_item {
		align-items: center;
		border-bottom: 1upx solid #eee;
		padding-bottom: 10upx;
		margin-bottom: 15upx;
		overflow: hidden;
		position: relative;
	
		&:last-of-type {
			border-bottom: none;
		}
	}
	
	.goods_item image {
		width: 200upx;
		height: 200upx;
		float: left;
		border-radius: 10upx;
		margin-right: 5upx;
	}
	
	.goods_item .tags {
		width: 60upx;
		height: 60upx;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	
	.NowChoose{
		color: black;
	}
	
	.text_login{
		font-size: 16px;
		color: #313131;
		letter-spacing: 0;
		font-weight: 600;
	}
	
	.input_login{
		width: 100%;
		min-height: 100rpx;
		background: #FFFFFF;
		border: 1px solid rgba(240,240,240,1);
		border-radius: 8px;
		margin-top: 10px;
	}
	
	.goods_right {
		/* float: left; */
		padding: 0 10upx;
		overflow: hidden;
	}
	
	.goods_right .goods_name {
		font-size: 28upx;
		overflow: hidden;
		font-weight: bold;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		color: #333;
		min-height: 50upx;
	}
	
	.goods_right .numbers {
		font-size: 20upx;
		line-height: 30upx;
		overflow: hidden;
		margin-top: 30upx;
		display: flex;
		align-content: center;
	}
	
	.goods_right .numbers text {
		display: inline-block;
		height: 35upx;
		line-height: 35upx;
		padding: 0 10upx;
		background-color: #FAEFF7;
		border-radius: 10upx;
		margin-right: 20upx;
		color: '#fa436a';
	}
	
	.goods_right .price {
		line-height: 40upx;
		font-size: 24upx;
		overflow: hidden;
		margin-top: 20upx;
	}
	
	.price .money {
		margin-right: 20upx;
		font-size: 32upx;
		font-weight: bold;
		color: '#fa436a';
	}
	
	.hx_money {
		text-decoration: line-through;
		color: #999;
		font-size: 22upx;
	}
	
	.gouwuche {
		font-size: 32upx;
		float: right;
		margin-right: 20upx;
		color: '#fa436a';
	}
	
	.nodata {
		color: #999;
		text-align: center;
		font-size: 24upx;
		margin-top: 20upx;
		height: 80upx;
		line-height: 80upx;
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
