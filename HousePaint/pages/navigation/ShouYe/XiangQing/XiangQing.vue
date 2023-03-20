<template>
	<view style="display: flex;flex-direction: column;">
		<image @click="back()" src="@/static/login/back.png" style="width: 30px;position: fixed;margin-left: 10px;margin-top: 44px;z-index: 1;border-radius: 7px;" mode="widthFix"></image>
		
		<uni-swiper-dot :info="data.image" :current="current" mode="round" :dotsStyles="dotstyle">
			<swiper style="height: 500px;" @change="change_image">
				<swiper-item v-for="(item,index) in data.image" :key="index" style="width: 100%;">
					<image :src="item"  mode="widthFix" style="width: 100%;z-index: 0;"></image>
				</swiper-item>
			</swiper>
			<input style="font-size: 20rpx;" disabled="true"/>
		</uni-swiper-dot>
		
		<view style="display: flex;flex-direction: column;margin-left: 5%;width: 90%;">
			<view style="display: flex;align-items: center;justify-content: space-between;">
				<view style="display: flex;align-items: center;">
					<image :src="data.avatar" style="width: 40px;border-radius: 40px;" mode="widthFix"></image>
					<view style="display: flex;flex-direction: column;margin-left: 10px;justify-content: space-around;height: 40px;">
						<text style="color: #000000;">{{data.writename}}</text>
						<text style="color: gray;font-size: 13px;">{{data.date}}</text>
					</view>
				</view>
				
				<view class="guanzhu" :class="{'active':data.is_guanzhu}" @click="change_guanzhu">
					<text v-if="!data.is_guanzhu">关注</text>
					<text v-else>已关注</text>
				</view>
				
			</view>
			
			<text class="title">{{data.title}}</text>
			<textarea :value="data.content" class="subtitle" auto-height="true" disabled="true"></textarea>
			
			<text style="color: grey;font-size: 14px;margin-top: 10px;">{{data.date}}</text>
			
			<view style="margin-top: 10px;border-top: 1px solid #e4e4e4;display: flex;flex-direction: column;">
				<view style="display: flex;flex-direction: row;align-items: center;margin-top: 10px;">
					<image src="https://img0.baidu.com/it/u=1798624778,1783159833&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" style="width: 50px;border-radius: 50px;flex-shrink: 0;" mode="widthFix"></image>
					
					<input style="border-radius: 20px;background-color: #f6f6f6;margin-left: 5px;height: 40px;width: 100%;" placeholder-style="margin-left: 15px" placeholder="说点什么把"/>
				</view>
				
				<view style="width: 100%;display: flex;align-items: center;flex-direction: column;margin-top: 20px;font-size: 14px;">
					<image src="@/static/navgiation/ShouYe/kong.png" style="width: 50px;" mode="widthFix"></image>
					<text class="pinglun">这是一片荒草地，<span style="color: #58627c;">点击评论</span></text>
				</view>
			</view>
			
			<input style="height: 100px;"/>

		</view>
		
		<view class="bootom_group">
			<view class="user_style">
				使用风格
			</view>
			
			<view style="display: flex;align-items: center;width: 20vw;margin-left: 2vw;" @click="change_favorite">
				<image v-if="!data.is_favorite" src="@/static/navgiation/ShouYe/love.png" mode="widthFix" style="width: 30px;border-radius: 10px;"></image>
				<image v-else src="@/static/navgiation/ShouYe/favorite_s.png" mode="widthFix" style="width: 30px;border-radius: 10px;"></image>
				<text style="font-size: 17px;color: #7a7a7a;margin-left: 5rpx;">{{data.favorite}}</text>
			</view>
			
			<view style="display: flex;align-items: center;width: 20vw;margin-left: 1vw;" @click="change_shoucang">
				<image v-if="!data.is_shoucang" src="@/static/navgiation/ShouYe/shoucang.png" mode="widthFix" style="width: 30px;border-radius: 10px;"></image>
				<image v-else src="@/static/navgiation/ShouYe/shoucang_s.png" mode="widthFix" style="width: 30px;border-radius: 10px;"></image>
				<text style="font-size: 17px;color: #7a7a7a;margin-left: 5rpx;">{{data.shoucang}}</text>
			</view>
			
			<view style="display: flex;align-items: center;width: 20vw;margin-left: 1vw;">
				<image src="@/static/navgiation/ShouYe/commit.png" mode="widthFix" style="width: 30px;border-radius: 10px;"></image>
				<text style="font-size: 17px;color: #7a7a7a;margin-left: 5rpx;">评论</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:{
					title:'210m平方珠海尚东领御雅居原创新中式风格案例',
					image:[
						'https://7463-tcb-6dkhphdodd5e2a-7dedu72135999-1309304321.tcb.qcloud.la/HomePaint/image/1.jpg',
						'https://7463-tcb-6dkhphdodd5e2a-7dedu72135999-1309304321.tcb.qcloud.la/HomePaint/image/2.jpg',
						'https://7463-tcb-6dkhphdodd5e2a-7dedu72135999-1309304321.tcb.qcloud.la/HomePaint/image/3.jpg',
						'https://7463-tcb-6dkhphdodd5e2a-7dedu72135999-1309304321.tcb.qcloud.la/HomePaint/image/4.jpg',
						'https://7463-tcb-6dkhphdodd5e2a-7dedu72135999-1309304321.tcb.qcloud.la/HomePaint/image/5.jpg',
						'https://7463-tcb-6dkhphdodd5e2a-7dedu72135999-1309304321.tcb.qcloud.la/HomePaint/image/6.jpg',
					],
					favorite:323,
					avatar:'https://img1.baidu.com/it/u=1403245892,3051757811&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
					writename:'无与同空间设计',
					content:'专业的客厅设计包括功能划分、区块划设装修风格、色彩搭配、灯光布局、家具配套、软装渲染等一系列设计布局。\n新中式继承了中国传统家居理念的精华，将其中的经典元素符号提炼，通过设计手法来改变原有形式状态，空间布局借鉴传统中式空间设计美学，并且非常注重空间层次、布局、对称等，风格讲究纲常，讲究对称，以阴阳平衡概念调和室内生态，中国五千年文化汉代、唐代的风格都可以用现代手法来演经新中式风格。\n#室内设计 #家居家装日堂 #珠海装修 #现代轻奢 #装修灵感库 #豪宅#珠海装修 #珠海室内设计#入户 #玄关 #鞋柜 ',
					date:'2023-02-24',
					is_guanzhu:false,
					is_shoucang:false,
					is_favorite:false,
					shoucang:127
				},
				current:0,
				dotstyle:{
					backgroundColor:'#ebebeb',
					selectedBackgroundColor:'#dfd3b0',
					border :'none',
					selectedBorder:'none',
					height:10,
					width:10
				},
				
			}
		},
		onLoad() {
			
		},
		mounted() {
			// this.data = uni.getStorageSync('page_parameter')
		},
		methods: {
			change_image(e){
				console.log(e)
				this.current = e.target.current;
			},
			back(){
				uni.navigateBack();
			},
			change_guanzhu(){
				this.data.is_guanzhu = !this.data.is_guanzhu;
			},
			change_favorite(){
				if(this.data.is_favorite)	this.data.favorite--;
				else	this.data.favorite++;
				this.data.is_favorite = !this.data.is_favorite
			},
			change_shoucang(){
				if(this.data.is_shoucang)	this.data.shoucang--;
				else	this.data.shoucang++;
				this.data.is_shoucang = !this.data.is_shoucang;
			}
		}
	}
</script>

<style>
	
	.user_style{
		background-color: #F3EFE3;
		height: 85rpx;
		width: 25vw;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 8vw;
		border-radius: 25px;
	}
	.title{
		font-size: 23px;
		font-weight: 600;
		line-height: 28px;
		margin-top: 10px;
	}
	
	.bootom_group{
		border-top: 1px solid #dfdfdf;
		display: flex;
		flex-direction: row;
		position: fixed;
		bottom: 0;
		height: 120rpx;
		background-color: #FFFFFF;
		align-items: center;
		width: 100vw;
	}
	
	.subtitle{
		font-size: 19px;
		line-height: 25px;
		margin-top: 10px;
		width: 100%;
	}
	
	.guanzhu{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border: 1px solid #c2a2af;
		color: #d5455e;
		border-radius: 20px;
		width: 53px;
		height: 28px;
	}
	
	.guanzhu.active{
		border: 1px solid grey;
		color: grey;
		width: 57px;
	}
	
	.pinglun{
		color: grey;
		margin-top: 10rpx;
	}
	

</style>
