<template>
	<view>
		<view style="display: flex;flex-direction: column;">
			<image :src="data.imageUrl" style="width: 100%;" mode="widthFix"></image>
			<text style="font-size: 20px;">ID:{{data.id}}</text>
		</view>
		
		<view style="display: flex;flex-direction: row;flex-wrap: wrap;">
			<view @click="change(index)" style="width: 50px;height: 50px;display: flex;align-items: center;justify-content: center;margin-left: 10px;margin-top: 10px;" :class="{'choose':nowStyle==index}" v-for="(item,index) in style">
				{{item}}
				
			</view>
		</view>
		
		<button @click="post">提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:{
					id:1,
					imageUrl:'https://image-1304455659.cos.ap-nanjing.myqcloud.com/BiZhi/1.jpg',
					style:''
				},
				style:['东南亚','现代','日式','复古','地中海','韩式','轻奢华','极简主义','工业','北欧','美式','新中式','欧洲','新古典主义','中国风','明清','其他','儿童','古典欧洲'],
				nowStyle:0
			}
		},
		methods: {
			change(index){this.nowStyle = index},
			post(){
				uni.showLoading({
					title:'上传中'
				});
				this.data.style = this.style[this.nowStyle];
				console.log(this.data)
				this.request(this.server_url+'goods/insertWallpaint',this.data,'POST').then((res)=>{
					console.log(res);

					if(res.code==0){
						uni.hideLoading();
						this.data.id ++;
						this.data.imageUrl = 'https://image-1304455659.cos.ap-nanjing.myqcloud.com/BiZhi/'+this.data.id+".jpg?imageMogr2/format/avif";
					}
				});
			}

		}
	}
</script>

<style>
	.choose{
		background-color: aqua;
	}
</style>
