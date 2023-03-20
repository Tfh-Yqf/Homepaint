// <template>
	<view style="display: flex;flex-direction: column;width: 100%;height: 100%;">
		<view  class="big_group">
			<!-- 搜索框 -->
			<view  class="search_bar">
				<view	style="display: flex;">
					<image src="@/static/navgiation/ShouYe/search.png" style="width: 15px;margin-left: 10px;" mode="widthFix"></image>
					<input @click="jump_search"  placeholder="请输入您感兴趣的风格" style="height: 15px;font-size: 14px;color: #000000;margin-left: 10px;" placeholder-style="color: #999999"/>
				</view>

				
				<image src="@/static/navgiation/ShouYe/scan.png" style="width: 20px;margin-right: 10px;" mode="widthFix"></image>
			</view>
			
			<!-- 房屋块 -->
			<view  class="house">
				<view style="display: flex;flex-direction: column;">
					<view style="display: flex;height: 250rpx">
						<view style="width: 50%;display: flex;justify-content: center;align-items: flex-end">
							<image src="../../../static/navgiation/ShouYe/huxing.jpg" mode="widthFix" style="width: 80%;border-radius: 5px;"></image>
						</view>
						<view style="width: 50%;display: flex;flex-direction: column;justify-content: space-between;">
							<view style="width: 100%;display: flex;flex-direction: row-reverse;margin-top: 20rpx;">
								<view style="background-color: #FFF7E6;border-radius: 7px;width: 120rpx;font-size: 13px;margin-right: 20rpx;display: flex;justify-content: space-around;align-items: center;height: 25px;">
									<image src="../../../static/navgiation/ShouYe/share.png" mode="widthFix" style="width: 10px;"></image>
									<text>分享</text>
								</view>
							</view>
							<view	style="display: flex;flex-direction: column;">
								<text style="font-size: 16px;font-weight: bold;">我的家</text>
								<text style="color: #8C764D;font-size: 14px;margin-top: 10rpx;">2023-02-22 23：20</text>
							</view>
						</view>
					</view>
					
					<view style="border-top: thin solid  rgba(181,151,30,1);width: 90%;margin-left: 5%;margin-top: 40rpx;opacity: 0.15;"></view>
					
					<view	style="height: 100rpx;width: 100%;display: flex;justify-content: space-around;font-size: 14px;color: #8F7819;align-items: center;">
						<view>
							<image src="@/static/navgiation/ShouYe/cehui.png" mode="widthFix" style="width: 10px;margin-left: 10px;"></image>
							<text style="margin-left: 10rpx;">测绘</text>
						</view>
						
						<view style="border-left: thin solid rgba(181,151,30,1);height: 70rpx;opacity: 0.2;"></view>
						
						<view>
							<image src="@/static/navgiation/ShouYe/decoration.png" mode="widthFix" style="width: 10px;"></image>
							<text style="margin-left: 10rpx;">3D装修</text>
							
						</view>
						
						<view style="border-left: thin solid rgba(181,151,30,1);height: 70rpx;opacity: 0.2;"></view>
						
						<view>
							<image src="@/static/navgiation/ShouYe/VR.png" mode="widthFix" style="width: 10px;"></image>
							<text style="margin-left: 10rpx;margin-right: 10px;">VR体验</text>
							
						</view>
					</view>
				</view>
			</view>
			
			<!-- 三个主功能块 -->
			<view style="display: flex;margin-top: 20rpx;font-weight: bold;font-size: 13px;justify-content: space-between;">
				<view style="width: 31%;background-color: #FFFFFF;border-radius: 10px;height: 50px;display: flex;align-items: center;justify-content: center;">
					<image src="../../../static/navgiation/ShouYe/jianmo.png" style="width: 20px;" mode="widthFix"></image>
					<text style="margin-left: 10rpx	;" @click="jump_modeling">家具建模</text>
				</view>
				
				<view @click="jump_furniture_shop()" style="width: 31%;background-color: #FFFFFF;border-radius: 10px;height: 50px;display: flex;align-items: center;justify-content: center;">
					<image src="../../../static/navgiation/ShouYe/shangcheng.png" style="width: 20px;" mode="widthFix"></image>
					<text style="margin-left: 10rpx	;">家具商城</text>
				</view>
				<view style="width: 31%;background-color: #FFFFFF;border-radius: 10px;height: 50px;display: flex;align-items: center;justify-content: center;">
					<image src="../../../static/navgiation/ShouYe/family.png" style="width: 20px;" mode="widthFix"></image>
					<text style="margin-left: 10rpx	;">我的家庭</text>
				</view>
			</view>
			
			<!-- 滑动选择块 -->
			<view style="width: 100%;margin-top: 30rpx;">
				
				<scroll-view scroll-x="true" >
					<view style="display: flex;flex-direction: row;width: 100%;" >
						<view  @click="change_choice(index)" v-for="(item,index) in info" class="select_area" :class="{'notfirst':index!=0,'active':index==choice}">{{item.name}}</view>
					</view>
					
				</scroll-view>
			</view>
			
			<!-- 图片瀑布流 -->
			<view  class="diplay_col">
			
				<view v-for="(item,index) in info[choice].data" :key="index" class="diplay_inl">
					<view class="diplay_view" @click="jump_xiangqing(item)">
						<image v-if="item.type=='video'" src="@/static/navgiation/ShouYe/bofang.png" style="width: 20px;position: absolute;z-index: 1;margin-left: 40vw;margin-top: 10rpx;" mode="widthFix"></image>
						<view style="width: 100%;">
							<image :src="item.image[0]"  style="width: 100%;border-radius: 10upx;min-width: 310rpx;z-index: 0;" mode="widthFix">
							</image>		
						</view>
						
						<view style="display: flex;flex-direction: column;width: 90%;margin-left: 5%;">
							<view>
								<text  class="title" >{{item.title}}</text>
							</view>
							<view style="margin-top: 5px;display: flex;flex-direction: row;justify-content: space-between;">
								<view style="display: flex;flex-direction: row;align-items: center;">
									<image :src="item.avatar" mode="widthFix" style="width: 20px;border-radius: 10px;"></image>
									<text style="font-size: 11px;text-overflow: ellipsis;color: #7a7a7a;margin-left: 5rpx;display: -webkit-box;text-overflow: ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow: hidden;">{{item.writename}}</text>
								</view>
								<view style="display: flex;align-items: center;">
									<image src="@/static/navgiation/ShouYe/love.png" mode="widthFix" style="width: 20px;border-radius: 10px;"></image>
									<text style="font-size: 14px;color: #7a7a7a;margin-left: 5rpx;">{{item.favorite}}</text>
								</view>
							</view>
						</view>						
					</view>
					
				</view>
				
			</view>
			<input style="height: 80px;" disabled="true"/>
		
		</view>
				
		<uni-popup :maskClick="true" ref="popup">
			<view	style="width: 100vw;height: 100vh;border: 1px solid #000000;font-family: 'pomo';" >
				<view v-if="yindao==1" style="display: flex;flex-direction: column;">
					<input style="height: 320rpx;" disabled="true"/>
					<view style="display: flex;height: 200rpx;margin-left: 50rpx;">
						<view style="display: flex;flex-direction: column-reverse;">
							<image src="../../../static/navgiation/ShouYe/Arrow01.png" style="width: 50px;" mode="widthFix"></image>
						</view>
						
						<view style="color: #FFFFFF;display: flex;flex-direction: column;;text-align: center;">
							<text>扫描户型图</text>
							<text style="margin-top: 10rpx;">2D、3D房屋建模</text>
						</view>
					</view>
				</view>
				<view v-else-if="yindao==2" style="display: flex;flex-direction: column;">
					<input style="height: 570rpx;" disabled="true"/>
					<view style="display: flex;height: 200rpx;flex-direction: column;align-items: center;width: 100%;">
						
						<image src="../../../static/navgiation/ShouYe/Arrow02.png" style="width: 50px;" mode="widthFix"></image>
						<view style="color: #FFFFFF;display: flex;flex-direction: column;text-align: center;margin-top: 10px;">
							<text>3D场景模型</text>
							<text style="margin-top: 10rpx;">AI智慧助手帮你装修</text>
						</view>
						
					</view>
				</view>
				<view v-else style="display: flex;flex-direction: column;">
					<input style="height: 570rpx;" disabled="true"/>
					
					<view style="display: flex;flex-direction: row-reverse;width: 100%;">
						<image src="../../../static/navgiation/ShouYe/Arrow03.png" style="width: 20px;margin-right: 100rpx;" mode="widthFix"></image>
					</view>
					
					<view style="display: flex;flex-direction: row-reverse;width: 100%;margin-top: 5rpx;">
						<view style="color: #FFFFFF;display: flex;flex-direction: column;text-align: center;margin-right: 10px;">
							<text>VR虚拟现实</text>
							<text style="margin-top: 10rpx;">身临其境你的温馨小屋</text>
						</view>
					</view>

					
				</view>
				
				<view style="display: flex;justify-content: center;position: fixed;bottom: 100px;width: 100%;">
					<view class="button_next" style="background-color: #ececec;border: 1px solid #8F7819;" @click="tiaoguo_yindao()">跳过	</view>
				
					<view class="button_next" @click="add_yindao()" style="margin-left: 15px;">
						
						<text v-if="yindao!=3">下一步</text>
						<text v-else>完成</text>
					</view>
				</view>
				

			</view>
		</uni-popup>
		
		
		
		<tabbar ></tabbar>
	</view>

</template>

<script>
	
	export default { 
		data() {
			return {
				search_value:'',
				choice:0,
				yindao:1,
				video:[],
				info:[
					{
						name:'推荐',
						data:[
							{
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
								type:'image'
								
							},
							{
								title:'一镜到底看我家！极简风！分享家装经验！',
								image:['https://7463-tcb-6dkhphdodd5e2a-7dedu72135999-1309304321.tcb.qcloud.la/HomePaint/1d90ca0ea1dbd3b95d23f6163db56520bbf730a9.jpg'],
								favorite:76,
								avatar:'https://img0.baidu.com/it/u=3905825772,3024012927&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1677344400&t=d5d82a414c3e6475f0b0ba1a4185d6f6',
								writename:'次世代家装',
								type:'video',
								video:{
									_id: "homepaint02",
									username: "次世代家装",
									href: "https://7463-tcb-6dkhphdodd5e2a-7dedu72135999-1309304321.tcb.qcloud.la/HomePaint/1d90ca0ea1dbd3b95d23f6163db56520bbf730a9.jpg",
									title: "一镜到底看我家！极简风！分享家装经验！",
									msg: "次世代家装",
									state: "pause",
									src: "https://7463-tcb-6dkhphdodd5e2a-7dedu72135999-1309304321.tcb.qcloud.la/HomePaint/311064446-1-208.mp4",
									playNumber: 0,
									playlng: false,
									isShowimage: false,
									isShowProgressBarTime: false,
									isplay: true,
									type: "homepaint"
								},
							},
							{
								title:'磐石远程设计 | 日式暖木风，暖暖的家',
								image:['https://7463-tcb-6dkhphdodd5e2a-7dedu72135999-1309304321.tcb.qcloud.la/HomePaint/image/7.jpg'],
								favorite:6171,
								avatar:'https://img2.baidu.com/it/u=4261212628,2246376874&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
								writename:'更新装饰设计工程',
								type:'image'
							},
							{
								title:'简介大气的优美！诗情画意的意境！',
								image:['https://7463-tcb-6dkhphdodd5e2a-7dedu72135999-1309304321.tcb.qcloud.la/HomePaint/image/8.jpg'],
								favorite:40,
								avatar:'https://img2.baidu.com/it/u=4186913488,2418932402&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
								writename:'今和设计装修中心',
								type:'image'
							},

							{
								title:'极简新中式 || 年轻人爱不释手的选择',
								image:['https://7463-tcb-6dkhphdodd5e2a-7dedu72135999-1309304321.tcb.qcloud.la/HomePaint/image/9.jpg'],
								favorite:1383,
								avatar:'https://img1.baidu.com/it/u=2691907958,269123817&fm=253&fmt=auto&app=138&f=JPEG?w=532&h=500',
								writename:'紫苹果国际设计',
								type:'image'
							},
							{
								title:'原木风#体验生活之美，感受惬意时光',
								image:['https://7463-tcb-6dkhphdodd5e2a-7dedu72135999-1309304321.tcb.qcloud.la/HomePaint/1.jpg'],
								favorite:3501,
								avatar:'https://img1.baidu.com/it/u=4188500822,3869319195&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
								writename:'优住空间',
								type:'image'
							},
						]
					},
					{
						name:'风格',
						data:[
							{
								title:'磐石远程设计 | 日式暖木风，暖暖的家',
								image:['https://7463-tcb-6dkhphdodd5e2a-7dedu72135999-1309304321.tcb.qcloud.la/HomePaint/image/7.jpg'],
								favorite:6171,
								avatar:'https://img2.baidu.com/it/u=4261212628,2246376874&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
								writename:'更新装饰设计工程'
							},
						]
					},
					{
						name:'客厅',
						data:[
							
						]
					},
					{
						name:'卧室',
						data:[
							
						]
					},
					{
						name:'沙发',
						data:[
							
						]
					}
				]
			}
		},
		onLoad() {
			
		},
		mounted() {
			uni.setStorageSync('nowpage',0);
			
			// this.$refs.popup.open('center');
			
			this.initdata();
		},
		methods: {
			jump_furniture_shop(){
				uni.navigateTo({
					url:'/pages/navigation/ShouYe/furniture_shop/furniture_shop'
				})
			},
			jump_modeling(){
				uni.navigateTo({
					url:'/pages/navigation/ShouYe/furniture_modeling/furniture_modeling'
				})
			},
			initdata(){
				uni.request({
					url:this.server_url+'/homepaint/getvideo',
					method:'GET',
					success: (res) => {
						console.log(res)
						this.video=res.data;
					}
				})
			},
			change_choice(e){
				this.choice = e;
			},
			jump_xiangqing(e){
				if(e.type!='video'){
					uni.setStorageSync('page_parameter',e);
					uni.navigateTo({
						url:'/pages/navigation/ShouYe/XiangQing/XiangQing'
					});
					
					
				}else{
					uni.setStorage({
						data:e.video,
						key:'video_chuancan'
					});
					uni.setStorage({
						data:this.video,
						key:'all_video'
					});
					
					uni.navigateTo({
						url:'/pages/navigation/ShouYe/video/video'
					})
				}

			},
			add_yindao(){
				if(this.yindao==3){
					this.$refs.popup.close();
				}else{
					this.yindao++;
				}
			},
			tiaoguo_yindao(){
				this.$refs.popup.close();
			},
			jump_video(e){
				uni.setStorage({
					data:e,
					key:'video_chuancan'
				});
				uni.setStorage({
					data:this.video,
					key:'all_video'
				});
				uni.navigateTo({
					url:'video/video'
				})
			},
			jump_search(){
				uni.navigateTo({
					url:'/pages/navigation/ShouYe/search/search'
				});
			}
		}
	}
</script>

<style>
	

	page {
		width: 100%;
		height: 100%;
		background-color:  #F7F6F3;
	}
	
	.button_next{
		background-color: #fae27e;
		width: 95px;
		height: 35px;
		border-radius: 15px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.house{
		width: 100%;
		height: 400rpx;
		margin-top: 25rpx;
		background: url('../../../static/navgiation/ShouYe/bac.png');
		background-size: 100% 100%;
	}
	
	.search_bar{
		border-radius: 25px;
		width: 100%;
		background-color: white;
		height: 40px;
		margin-top: 44px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.big_group{
		width: 95%;
		margin-left: 2.5%;
		display: flex;
		flex-direction: column;
	}

	.select_area{
		width: 150rpx;
		background-color: #FFFFFF;
		border-radius: 15px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		font-weight: bold;
		flex-shrink: 0;
	}
	
	.select_area.active{
		background-color: #fae27e;
		color: #000000;
	}
	
	.select_area.notfirst{
		margin-left: 10px;
	}
	
	.diplay_col{
		margin-left: 0%;
		width: 100%;
		column-count: 2; // 设置显示2列
		column-gap: 1%; //设置或检索对象的列与列之间的间隙为30upx
		margin: auto;
		margin-top: 20rpx;
	}
	.diplay_inl{
		display: inline-block;
		background-color: #FFFFFF;
		margin-top: 15rpx;
	}
	.sen_618{
		background-color: #FAD961;
		background-image: linear-gradient(90deg, #FAD961 0%, #F76B1C 100%);
		color: #FFFFFF;
		font-weight: 600;
		font-size: 13px;
		border-radius: 10upx;
	}
	.diplay_view{
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.title{
		width: 100%;
		font-size: 15px;
		-webkit-line-clamp:2;
		display: -webkit-box;
		text-overflow: ellipsis;
		-webkit-box-orient:vertical;
		overflow: hidden;;
		font-weight: bold;
	}
	.price{
		display: flex;
		flex-direction: row;
		margin-top: 2px;
		
	}
	.huang_border{
		color: #f6a358;
		font-size: 11px;
		border-radius: 5upx;
		
		border: 1px solid #f6a358;
	}
</style>
