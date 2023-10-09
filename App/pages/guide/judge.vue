<template>
	<view class="content"></view>
</template>

<script>
	export default {
		onLoad() {
			this.checkGuide();
		},
		methods: {
			checkGuide() {
				console.log("进入checkGuide判断页");
				// 思路： 检测是否有启动缓存，如果没有，就是第一次启动，第一次启动就去 启动介绍页面
				try {
					var launchFlag = uni.getStorageSync('launchFlag');
					console.log("launchFlag:" + launchFlag);
					if (launchFlag	) { //判断本地缓存跳转首页
						var token = uni.getStorageSync('token');
						if(token!=undefined&&token!=null&&token.length!=0){
							uni.redirectTo({
								url:'/pages/navigation/ShouYe/ShouYe'
							})
						}else{
							uni.redirectTo({
								url: '/pages/login/login'
							});
						}
						

					} else { //没有缓存进入启动页引导页
						console.log('去引导页');
						uni.redirectTo({
							url: '/pages/guide/guide'
						});
					}
				} catch (e) {
					console.log(e.message);
				}
			}
		}
	};
</script>
