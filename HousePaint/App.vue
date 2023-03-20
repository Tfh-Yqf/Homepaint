<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
			uni.setStorageSync('nowpage',0);
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		
	}
</script>

<style>
	/*每个页面公共css */
	@font-face {
		font-family: 'STK';
		src: url('@/static/ttf/STK.ttf');
	}
	
	@font-face {
		font-family: 'pomo';
		src: url('@/static/ttf/bomo.ttf');
	}
	
	page{
		font-family: 'STK';
	}
</style>
