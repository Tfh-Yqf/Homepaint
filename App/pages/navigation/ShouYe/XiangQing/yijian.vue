<template>
	<view style="display: flex;flex-direction: column;">
		
		<view style="width: 90%;margin-left: 5%;display: flex;flex-direction: column;align-items: center;justify-content: center;">
			<uni-card title="场景一 俯视图" >
				<video src="https://image-1304455659.cos.ap-nanjing.myqcloud.com/video/1fushi.mp4" autoplay="true" ></video>
			</uni-card>

			<uni-card title="场景一 测视图"  style="margin-top: 20px;">
				<video src="https://image-1304455659.cos.ap-nanjing.myqcloud.com/video/1yangshi.mp4" autoplay="true" ></video>
			</uni-card>

			<uni-card title="场景二 俯视图"  style="margin-top: 20px;">
				<video src="https://image-1304455659.cos.ap-nanjing.myqcloud.com/video/2fushi.mp4" autoplay="true" ></video>
			</uni-card>

			<uni-card title="场景二 测视图"  style="margin-top: 20px;">
				<video src="https://image-1304455659.cos.ap-nanjing.myqcloud.com/video/2yangshi.mp4" autoplay="true"></video>
			</uni-card>
			
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
