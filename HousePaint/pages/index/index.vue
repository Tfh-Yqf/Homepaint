<template>
	<view >
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			outBtn: function() {
				// #ifdef APP-PLUS
				uni.showModal({
					title: '清除launchFlag值',
					content: '确定要清除launchFlag值，进行重启测试？',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							// 清除缓存
							uni.clearStorage();
							// 一秒后重启
							uni.showToast({
								icon: 'none',
								duration: 3000,
								title: '清除成功1秒后重启'
							});
							setTimeout(function() {
								uni.hideToast();
								plus.runtime.restart();
							}, 1000);
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
				// #endif
			}
		}
	}
</script>

<style>

</style>
