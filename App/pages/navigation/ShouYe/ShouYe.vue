 <template>
 	<view style="display: flex;flex-direction: column;width: 100%;height: 100%;">
 		<view class="big_group">
 			<!-- 搜索框 -->
 			<view class="search_bar">
 				<view style="display: flex;">
 					<image src="@/static/navgiation/ShouYe/search.png" style="width: 15px;margin-left: 10px;"
 						mode="widthFix"></image>
 					<input @click="jump_search" placeholder="请输入您感兴趣的风格"
 						style="height: 15px;font-size: 14px;color: #000000;margin-left: 10px;"
 						placeholder-style="color: #999999" />
 				</view>


 				<image @click="scan()" src="@/static/navgiation/ShouYe/scan.png"
 					style="width: 20px;margin-right: 10px;" mode="widthFix"></image>
 			</view>

 			<!-- 房屋块 -->
 			<view class="house">
 				<view style="display: flex;flex-direction: column;">
 					<view style="display: flex;height: 125px">
 						<view style="width: 50%;display: flex;justify-content: center;align-items: flex-end">
 							<image :src="HouseImage" mode="widthFix"
 								style="width: 80%;border-radius: 5px;"></image>
 						</view>
 						<view style="width: 50%;display: flex;flex-direction: column;justify-content: space-between;">
 							<view @click="share()"
 								style="width: 100%;display: flex;flex-direction: row-reverse;margin-top: 10px;">
 								<view
 									style="background-color: #FFF7E6;border-radius: 7px;width: 80px;font-size: 13px;margin-right: 10px;display: flex;justify-content: space-around;align-items: center;height: 25px;">
 									<image src="../../../static/images/example.png" mode="widthFix"
 										style="width: 13px;"></image>
 									<text>示例场景</text>
 								</view>
 							</view>
 							<view style="display: flex;flex-direction: column;">
 								<text style="font-size: 16px;font-weight: bold;">我的家</text>
 								<text style="color: #8C764D;font-size: 14px;margin-top: 5px;">2023-02-22 23：20</text>
 							</view>
 						</view>
 					</view>

 					<view
 						style="border-top: thin solid  rgba(181,151,30,1);width: 90%;margin-left: 5%;margin-top: 20px;opacity: 0.15;">
 					</view>

 					<view
 						style="height: 50px;width: 100%;display: flex;justify-content: space-around;font-size: 14px;color: #8F7819;align-items: center;">
 						<view @click="jump_cehui()">
 							<image src="@/static/navgiation/ShouYe/cehui.png" mode="widthFix"
 								style="width: 10px;margin-left: 10px;"></image>
 							<a href="uniwebview://LandscapeLeft"
 								style="margin-left: 5px;text-decoration: none;color: #8F7819;">测绘</a>
 						</view>

 						<view style="border-left: thin solid rgba(181,151,30,1);height: 35px;opacity: 0.2;"></view>

 						<view @click="jump_u3d">
 							<image src="@/static/navgiation/ShouYe/decoration.png" mode="widthFix"
 								style="width: 10px;"></image>
 							<text style="margin-left: 5px;">3D装修</text>

 						</view>

 						<view style="border-left: thin solid rgba(181,151,30,1);height: 35px;opacity: 0.2;"></view>

 						<view @click="change_style()">
 							<image src="@/static/navgiation/ShouYe/VR.png" mode="widthFix" style="width: 10px;">
 							</image>
 							<a href="uniwebview://StyleLandscapeLeft"
 								style="margin-left: 5px;text-decoration: none;color: #8F7819;">风格切换</a>
 						</view>
 					</view>
 				</view>
 			</view>

 			<!-- 三个主功能块 -->
 			<view
 				style="display: flex;margin-top: 10px;font-weight: bold;font-size: 13px;justify-content: space-between;">
 				<view @click="jump_furniture_shop()"
 					style="width: 31%;background-color: #FFFFFF;border-radius: 10px;height: 50px;display: flex;align-items: center;justify-content: center;">
 					<image src="../../../static/navgiation/ShouYe/shangcheng.png" style="width: 20px;" mode="widthFix">
 					</image>
 					<text style="margin-left: 5px	;">家具商城</text>
 				</view>
				
				<view
					style="width: 31%;background-color: #FFFFFF;border-radius: 10px;height: 50px;display: flex;align-items: center;justify-content: center;">
					<image src="../../../static/navgiation/ShouYe/jianmo.png" style="width: 20px;" mode="widthFix">
					</image>
					<text style="margin-left: 5px	;" @click="jump_modeling">家具建模</text>
				</view>
				
				
 				<view @click="jump_family()"
 					style="width: 31%;background-color: #FFFFFF;border-radius: 10px;height: 50px;display: flex;align-items: center;justify-content: center;">
 					<image src="/static/images/shequ.png" style="width: 20px;" mode="widthFix"></image>
 					<text style="margin-left: 5px	;">社区广场</text>
 				</view>
 			</view>

 			<!-- 滑动选择块 -->
 			<view style="width: 100%;margin-top: 15px;">

 				<scroll-view scroll-x="true">
 					<view style="display: flex;flex-direction: row;width: 100%;">
 						<view @click="change_choice(index)" v-for="(item,index) in info" class="select_area"
 							:class="{'notfirst':index!=0,'active':index==choice}">{{item.name}}</view>
 					</view>

 				</scroll-view>
 			</view>

 			<!-- 图片瀑布流 -->
 			<view v-if="choice==0||choice==2||choice==3" class="diplay_col">
 				<view v-for="(item,index) in comunityList" :key="index" class="diplay_inl">
 					<view class="diplay_view" @click="jump_xiangqing(item)">
 						<view style="width: 100%;">
 							<image v-if="item.tiebaImage.length!=0" :src="item.tiebaImage[0].imageUrl"
 								style="width: 100%;border-radius: 10upx;min-width: 50px;z-index: 0;" mode="widthFix">
 							</image>
 						</view>

 						<view style="display: flex;flex-direction: column;width: 90%;margin-left: 5%;">
 							<view>
 								<text class="title">{{item.title}}</text>
 							</view>
 							<view
 								style="margin-top: 5px;display: flex;flex-direction: row;justify-content: space-between;">
 								<view style="display: flex;flex-direction: row;align-items: center;">
 									<image :src="item.user.avatar" mode="widthFix"
 										style="width: 20px;border-radius: 10px;"></image>
 									<text
 										style="font-size: 11px;text-overflow: ellipsis;color: #7a7a7a;margin-left: 2.5px;display: -webkit-box;text-overflow: ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow: hidden;">{{item.user.username}}</text>
 								</view>
 								<view style="display: flex;align-items: center;">
 									<image src="@/static/navgiation/ShouYe/love.png" mode="widthFix"
 										style="width: 20px;border-radius: 10px;"></image>
 									<text
 										style="font-size: 14px;color: #7a7a7a;margin-left: 2.5px;">{{item.favorite}}</text>
 								</view>
 							</view>
 						</view>
 					</view>

 				</view>

 			</view>
 			<recommend v-else-if="choice==1" :colors="colors" :dataList="datalist" :bottoms="bottoms"></recommend>
 			<recommend v-else-if="choice==4" :colors="colors" :dataList="shafaList" :bottoms="bottoms"></recommend>
 			<input style="height: 80px;" disabled="true" />

 		</view>

 		<uni-popup :maskClick="true" ref="popup">
 			<view style="width: 100vw;height: 100vh;border: 1px solid #000000;font-family: 'pomo';">
 				<view v-if="yindao==1" style="display: flex;flex-direction: column;">
 					<input style="height: 160px;" disabled="true" />
 					<view style="display: flex;height: 100px;margin-left: 25px;">
 						<view style="display: flex;flex-direction: column-reverse;">
 							<image src="../../../static/navgiation/ShouYe/Arrow01.png" style="width: 50px;"
 								mode="widthFix"></image>
 						</view>

 						<view style="color: #FFFFFF;display: flex;flex-direction: column;;text-align: center;">
 							<text>扫描户型图</text>
 							<text style="margin-top: 5px;">2D、3D房屋建模</text>
 						</view>
 					</view>
 				</view>
 				<view v-else-if="yindao==2" style="display: flex;flex-direction: column;">
 					<input style="height: 285px;" disabled="true" />
 					<view style="display: flex;height: 100px;flex-direction: column;align-items: center;width: 100%;">

 						<image src="../../../static/navgiation/ShouYe/Arrow02.png" style="width: 50px;"
 							mode="widthFix"></image>
 						<view
 							style="color: #FFFFFF;display: flex;flex-direction: column;text-align: center;margin-top: 10px;">
 							<text>3D场景模型</text>
 							<text style="margin-top: 5px;">AI智慧助手帮你装修</text>
 						</view>

 					</view>
 				</view>
 				<view v-else-if="yindao==3" style="display: flex;flex-direction: column;">
 					<input style="height: 285px;" disabled="true" />

 					<view style="display: flex;flex-direction: row-reverse;width: 100%;">
 						<image src="../../../static/navgiation/ShouYe/Arrow03.png"
 							style="width: 20px;margin-right: 50px;" mode="widthFix"></image>
 					</view>

 					<view style="display: flex;flex-direction: row-reverse;width: 100%;margin-top: 2.5px;">
 						<view
 							style="color: #FFFFFF;display: flex;flex-direction: column;text-align: center;margin-right: 10px;">
 							<text>VR虚拟现实</text>
 							<text style="margin-top: 5px;">身临其境你的温馨小屋</text>
 						</view>
 					</view>


 				</view>

 				<view style="display: flex;justify-content: center;position: fixed;bottom: 100px;width: 100%;">
 					<view class="button_next" style="background-color: #ececec;border: 1px solid #8F7819;"
 						@click="tiaoguo_yindao()">跳过 </view>

 					<view class="button_next" @click="add_yindao()" style="margin-left: 15px;">

 						<text v-if="yindao!=3">下一步</text>
 						<text v-else>完成</text>
 					</view>
 				</view>


 			</view>
 		</uni-popup>



 		<tabbar :nowpage="nowpage"></tabbar>
 	</view>

 </template>

 <script>
 	import recommend from '@/pages/commponent/home/recommend';
 	export default {
 		data() {
 			return {
 				shafaList: [],
 				datalist: [],
 				show_recommend: false,
 				bottoms: '0',
 				colors: '#fae27e',
 				nowpage: 0,
 				search_value: '',
 				choice: 0,
 				yindao: 1,
 				info: [{
 					name: '推荐'
 				}, {
 					name: '家具'
 				}, {
 					name: '客厅'
 				}, {
 					name: '卧室'
 				}, {
 					name: '沙发'
 				}],
 				dontHaveHouse: false,
 				comunityList: [],
				HouseImage:'https://image-1304455659.cos.ap-nanjing.myqcloud.com/picture/huxing.jpg'
 			}
 		},
 		components: {
 			recommend
 		},
		onPullDownRefresh() {
			this.init_data();
		},
 		onLoad(params) {
 			console.log(params);

 			if (params != undefined && params.token != undefined && params.token.length != 0) {
 				uni.setStorageSync('token', params.token);
 				this.initdata();
 			} else {
 				this.islogin();
 			}
 			// // #ifdef APP-PLUS
 			// plus.screen.lockOrientation('default');
 			// // #endif
 			var have_show = uni.getStorageSync('yindao');
 		},
 		mounted() {
 			// if(have_show==false||have_show==undefined||have_show==null){
 			// 	this.$refs.popup.open('center');
 			// 	uni.setStorageSync('yindao',true);
 			// }

 			// console.log(JSON.stringify(this.info));
 		},
 		methods: {
 			change_style() {
 				if (this.dontHaveHouse) {
					// 再次请求判断
					this.request(this.server_url + 'houseData/get', {}, 'GET').then((res) => {
						console.log(res);
						if (res.data == null) {
							this.dontHaveHouse = true;
							uni.showToast({
								title: '请先上传图片! ',
								icon: 'none'
							});
							return;
						} else {
							uni.setStorageSync('House_identify', res.data);
						}
					});
					
 				}
 				uni.navigateTo({
 					url: '/pages/draw/ChangeStyle'
 				});
 			},
 			islogin() {
 				console.log('---------------------')
 				var token = uni.getStorageSync('token')
 				console.log(token)
 				if (token == null || token == undefined || token.length == 0) {
 					uni.redirectTo({
 						url: '/pages/login/login'
 					});
 				} else {
 					this.initdata();
 				}
 			},
 			scan() {
 				uni.scanCode({
 					success: (res) => {
 						console.log(res);
 						uni.showModal({
 							title: '请输入您的家庭个人昵称:',
 							editable: true,
 							success: (re) => {
 								if (re.content.length == 0) {
 									uni.showToast({
 										title: '不能为空!',
 										icon: 'none'
 									});
 									return;
 								}
 								if (re.confirm) {
 									var temp = {
 										family_id: Number(res.result),
 										nickname: res.content
 									};
 									this.request(this.server_url + 'family/join', temp, 'POST')
 										.then((AddResult) => {
 											console.log(AddResult);
 											if (AddResult.code == 0) {
 												uni.showToast({
 													title: '加入成功!'
 												});
 											}
 										})
 								}
 							}
 						})



 					}
 				})
 			},
 			jump_family() {
 				uni.setStorageSync('IsShare', false);
 				uni.navigateTo({
 					url: '/pages/SheQu/SheQuList/SheQuList'
 				});
 			},
 			jump_cehui() {

 				if (this.dontHaveHouse)
 					uni.navigateTo({
 						url: '/pages/draw/UploadImage'
 					})
 				else
 					uni.navigateTo({
 						url: '/pages/draw/draw2D'
 					})
 			},
 			share() {
 				uni.setStorageSync('isShare', true);
 				uni.navigateTo({
 					url: '/pages/SheQu/SheQuList/SheQuList'
 				});
 			},
 			jump_u3d() {
 				uni.showLoading({
 					title: '渲染中'
 				});
 				setTimeout(function() {
 					uni.hideLoading();
 					window.location.href = "uniwebview://close";
 				}, 350);
 			},
 			jump_vr() {
 				uni.navigateTo({
 					url: 'XiangQing/yindao'
 				})
 				// uni.navigateTo({
 				// 	url:'/pages/navigation/Middle/AR/AR'
 				// })
 			},
 			jump_furniture_shop() {
 				uni.navigateTo({
 					url: '/pages/navigation/ShouYe/furniture_shop/furniture_shop'
 				})
 			},
 			jump_modeling() {
 				uni.navigateTo({
 					url: '/pages/navigation/ShouYe/furniture_modeling/furniture_modeling'
 				})
 			},
 			initdata() {

 				this.request(this.server_url + 'community/list', {}, 'GET').then((res) => {
 					console.log(res);
 					this.comunityList = res.data;
 				});


 				this.request(this.server_url + 'goods/get_list', {}, 'GET').then((res) => {
 					console.log(res);
 					this.datalist = res.data;
 				});

 				this.request(this.server_url + 'houseData/get', {}, 'GET').then((res) => {
 					console.log(res);
 					if (res.data == null) {
 						this.dontHaveHouse = true;
 					} else {
 						uni.setStorageSync('House_identify', res.data);
 					}
 				});

				this.request(this.server_url+'picture/GetHouseImage',{},'GET').then((res)=>{
					console.log(res);
					this.HouseImage = res.data;
				})
 			},
 			change_choice(e) {

 				if (e == 4) {
 					uni.showLoading({
 						title: '加载数据...'
 					});
 					this.request(this.server_url + 'goods/get_list', {
 						search_content: '沙发'
 					}, 'POST').then((res) => {
 						console.log(res);
 						this.shafaList = res.data;
 						uni.hideLoading();
 						this.choice = 4;
 					});
 				} else {
 					this.choice = e;
 				}
 			},
 			jump_xiangqing(e) {
 				uni.setStorageSync('page_chuancan', e);

 				uni.navigateTo({
 					url: '/pages/navigation/ShouYe/XiangQing/XiangQing'
 				});
 			},
 			add_yindao() {
 				if (this.yindao == 3) {
 					this.$refs.popup.close();
 				} else {
 					this.yindao++;
 				}
 			},
 			tiaoguo_yindao() {
 				this.$refs.popup.close();
 			},

 			jump_search() {
 				uni.navigateTo({
 					url: '/pages/commponent/search/search'
 				});
 			}
 		}
 	}
 </script>

 <style>
 	@import url('shouye.css');

 	page {
 		width: 100%;
 		height: 100%;
 		background-color: #F7F6F3;
 	}
 </style>