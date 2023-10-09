<template>
	<view>
		<view style="display: flex;flex-direction: row;justify-content: center;width: 100%;">
			<image @click="back()" src="@/static/login/back.png" style="width: 30px;position: fixed;left: 10px;margin-top: 44px;z-index: 1;border-radius: 7px;" mode="widthFix"></image>
					
			<view style="margin-top: 30px;width: 90%;">
				<uni-steps :options="list1" :active="active"></uni-steps>
			</view>
			
		</view>
		
		<view style="display: flex;flex-direction: column;align-items: center;justify-content: center;height: 90vh;">	
			<view @click="chooseImage" style="width: 100px;height: 50px;display: flex;align-items: center;background-color: #40a9ff;color: white;border-radius: 10px;font-size: 17px;justify-content: center;">点击上传</view>
			<view style="display: flex;margin-top: 20px;font-size: 16px;">
				<text>提示：</text>
				<view style="display: flex;flex-direction: column;">
					<text>1、上传格式仅支持jpg、png</text>
					<text>2、黑白照片的识别结果更好哦</text>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import {
		pathToBase64
	} from '@/utils/image-tools/index.js'
	export default {
		data() {
			return {
				list1: [{
					title: '上传图片'
				}, {
					title: '户型图编辑'
				}, {
					title: '2D->3D'
				}, {
					title: '3D装修'
				}],
				active:0,
				test_data:{"msg":"户型识别检索成功","code":0,"data":{"code":0,"data":{"RoomTypes":[],"Doors":[{"start_point":98,"end_point":103,"host":74,"id":114,"category":0},{"start_point":97,"end_point":104,"host":75,"id":115,"category":0},{"start_point":99,"end_point":105,"host":79,"id":116,"category":0},{"start_point":106,"end_point":101,"host":59,"id":117,"category":0},{"start_point":108,"end_point":100,"host":60,"id":118,"category":0},{"start_point":107,"end_point":102,"host":39,"id":119,"category":0},{"start_point":113,"end_point":110,"host":96,"id":120,"category":2},{"start_point":112,"end_point":111,"host":51,"id":121,"category":2}],"scale":0.07784288194444444,"WallPoints":[{"x":1.226,"y":-4.946,"id":0},{"x":2.509,"y":-0.558,"id":1},{"x":1.807,"y":-0.558,"id":2},{"x":1.06,"y":-3.687,"id":3},{"x":2.509,"y":5.913,"id":4},{"x":4.903,"y":-1.956,"id":5},{"x":-1.361,"y":-1.933,"id":6},{"x":-2.576,"y":1.439,"id":7},{"x":3.553,"y":0.27,"id":8},{"x":-1.343,"y":5.868,"id":9},{"x":1.856,"y":-1.956,"id":10},{"x":0.042,"y":5.913,"id":11},{"x":-4.76,"y":5.868,"id":12},{"x":-4.76,"y":-5.66,"id":13},{"x":4.903,"y":-5.66,"id":14},{"x":-1.343,"y":-0.577,"id":15},{"x":0.042,"y":5.148,"id":16},{"x":-2.576,"y":-2.608,"id":17},{"x":2.555,"y":-0.558,"id":18},{"x":1.856,"y":-5.66,"id":19},{"x":3.553,"y":-1.956,"id":20},{"x":-1.361,"y":-5.66,"id":21},{"x":1.856,"y":-3.687,"id":22},{"x":2.509,"y":4.114,"id":23},{"x":1.226,"y":-3.687,"id":24},{"x":-2.576,"y":-1.933,"id":25},{"x":-4.76,"y":-0.577,"id":26},{"x":2.509,"y":0.27,"id":27},{"x":-4.76,"y":-2.608,"id":28},{"x":-1.343,"y":5.148,"id":29},{"x":-4.76,"y":1.439,"id":30},{"x":-1.361,"y":-3.642,"id":31},{"x":-1.343,"y":4.114,"id":32},{"x":-2.576,"y":-0.577,"id":33}],"DoorPoints":[{"x":-2.576,"y":0.225,"id":97},{"x":-2.576,"y":-1.709,"id":98},{"x":3.553,"y":-1.754,"id":99},{"x":2.929,"y":-1.956,"id":100},{"x":-1.558,"y":-1.933,"id":101},{"x":-1.537,"y":-0.577,"id":102},{"x":-2.576,"y":-0.809,"id":103},{"x":-2.576,"y":1.034,"id":104},{"x":3.553,"y":-0.764,"id":105},{"x":-2.431,"y":-1.933,"id":106},{"x":-2.451,"y":-0.577,"id":107},{"x":2.015,"y":-1.956,"id":108},{"x":3.386,"y":-0.585,"id":109},{"x":2.41,"y":4.114,"id":110},{"x":0.956,"y":-3.682,"id":111},{"x":-0.436,"y":-3.658,"id":112},{"x":0.145,"y":4.114,"id":113}],"img_size":[828,1792],"Windows":[{"start_point":122,"end_point":130,"host":84,"id":136,"category":0},{"start_point":123,"end_point":129,"host":85,"id":137,"category":0},{"start_point":131,"end_point":126,"host":88,"id":138,"category":0},{"start_point":133,"end_point":124,"host":89,"id":139,"category":0},{"start_point":135,"end_point":128,"host":90,"id":140,"category":0},{"start_point":132,"end_point":125,"host":56,"id":141,"category":0},{"start_point":134,"end_point":127,"host":57,"id":142,"category":0}],"WindowPoints":[{"x":-4.76,"y":-1.439,"id":122},{"x":-4.76,"y":0.629,"id":123},{"x":1.018,"y":-5.66,"id":124},{"x":-2.14,"y":5.868,"id":125},{"x":-2.14,"y":-5.66,"id":126},{"x":2.389,"y":5.913,"id":127},{"x":4.134,"y":-5.66,"id":128},{"x":-4.76,"y":1.304,"id":129},{"x":-4.76,"y":-0.764,"id":130},{"x":-3.926,"y":-5.66,"id":131},{"x":-3.947,"y":5.868,"id":132},{"x":-0.478,"y":-5.66,"id":133},{"x":0.145,"y":5.913,"id":134},{"x":2.306,"y":-5.66,"id":135}],"Walls":[{"start_point":3,"end_point":24,"id":52},{"start_point":26,"end_point":30,"id":85},{"start_point":24,"end_point":22,"id":53},{"start_point":17,"end_point":25,"id":73},{"start_point":27,"end_point":23,"id":45},{"start_point":22,"end_point":10,"id":49},{"start_point":21,"end_point":19,"id":89},{"start_point":26,"end_point":33,"id":38},{"start_point":31,"end_point":24,"id":51},{"start_point":14,"end_point":5,"id":63},{"start_point":12,"end_point":9,"id":56},{"start_point":19,"end_point":22,"id":48},{"start_point":33,"end_point":7,"id":75},{"start_point":19,"end_point":14,"id":90},{"start_point":16,"end_point":11,"id":81},{"start_point":23,"end_point":4,"id":46},{"start_point":29,"end_point":16,"id":92},{"start_point":0,"end_point":24,"id":36},{"start_point":20,"end_point":8,"id":79},{"start_point":31,"end_point":6,"id":66},{"start_point":32,"end_point":23,"id":96},{"start_point":2,"end_point":1,"id":40},{"start_point":1,"end_point":18,"id":41},{"start_point":33,"end_point":15,"id":39},{"start_point":30,"end_point":12,"id":86},{"start_point":1,"end_point":18,"id":43},{"start_point":29,"end_point":9,"id":69},{"start_point":20,"end_point":5,"id":61},{"start_point":27,"end_point":8,"id":77},{"start_point":25,"end_point":33,"id":74},{"start_point":13,"end_point":21,"id":88},{"start_point":1,"end_point":27,"id":44},{"start_point":13,"end_point":28,"id":83},{"start_point":30,"end_point":7,"id":71},{"start_point":28,"end_point":26,"id":84},{"start_point":28,"end_point":17,"id":94},{"start_point":25,"end_point":6,"id":59},{"start_point":11,"end_point":4,"id":57},{"start_point":21,"end_point":31,"id":65},{"start_point":10,"end_point":20,"id":60},{"start_point":32,"end_point":29,"id":68},{"start_point":15,"end_point":32,"id":67}]},"message":"success"}}
			}
		},
		onReady: function (e) {

			// #ifdef APP-PLUS
			 plus.screen.lockOrientation("landscape-primary");
			// #endif

		},
		onUnload() {
			// #ifdef APP-PLUS
			plus.screen.lockOrientation('portrait-primary');
			// #endif
		},
		methods: {
			back(){
				uni.navigateBack();
			},
			chooseImage(){
				//测试用
				// uni.navigateTo({
				// 	url:'/pages/draw/draw2D'
				// })
				// uni.setStorageSync('House_identify', JSON.stringify( this.test_data.data.data));
				// return;
				
				uni.chooseImage({
					count:1,
					complete: (res) => {
						console.log(res);
						pathToBase64(res.tempFilePaths[0]).then(data => {
							console.log(data);
							var temp = {
								image:data
							};
							uni.showLoading({
								title:'识别中...'
							});
							this.request(this.server_url+'identify/upload',temp,'POST').then((res)=>{
								uni.hideLoading();
								console.log(res);
								if(res.code==0){
									uni.showToast({
										title:'识别成功!'
									});
									uni.setStorageSync('House_identify',res.data);
									uni.navigateTo({
										url:'/pages/draw/draw2D'
									})
								}

							})
							
						})
					}
				})
			}
		}
	}
</script>

<style>

</style>
