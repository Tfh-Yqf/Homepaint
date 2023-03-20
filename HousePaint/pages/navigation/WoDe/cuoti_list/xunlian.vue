<template>
	<view style="height: 100%;">
		
		
		<!-- 五线谱部分 -->
		<view  style="background-color: #ffffff;flex-shrink: 0;display: flex;flex-direction: column;" :style="{height:height.shang+'px'}">

			<input style="height: 20rpx;width: 100%;flex-shrink: 0;" disabled="true" />
			<view style="display: flex;flex-direction: row-reverse;width: 100%;height: 30px;align-items: center;">
				<view style="width: 85%;display: flex;flex-direction: row-reverse;height: 30px;align-items: center;" >
					<view @click="close_pop()" style="margin-right: 20rpx;background-color: #ff7599;height: 30px;width: 50px;border-radius: 10upx;text-align: center;">
						<text>离开</text>
					</view>
					<input style="width: 20rpx;" disabled="true"/>
					<view style="align-items: center;">
						<image @click="start_mp3()" v-if="start===false"  src="/static/video/bofang.png" style="width: 30px;" mode="widthFix"></image>
						<image v-else src="/static/tingyin/zanting.png" @click="pause()" style="width: 30px" mode="widthFix"></image>
					</view>
					<input style="width: 20rpx;" disabled="true"/>
					<view>
						<text>{{(voice_percentage*100).toFixed(2)}}%</text>
					</view>
				</view>
				<view>
					<text>{{type_name}}训练</text>
				</view>

			</view>

			<view style="display: flex;flex-direction: row;align-items: center;padding: 0px 15px 0px 15px;">
				<view style="width: 10px;flex-shrink: 0;">
					<!-- 大括号 -->
					<image src="/static/tingyin/kuohao.png" style="height: 103.4px;" mode="heightFix"></image>
				</view>

				<view  style="display: flex;flex-direction: column;height: 116.33px;background-size: 100% 100%;margin-right: 5px;z-index: 80;" :style="{backgroundImage: 'url(' + wuxianpu_url + ')',width:width.wuxianpuall+'px'}">
					 
					<!-- 高音 -->
					<view style="display: flex;flex-direction: row;align-items: center;width: 100%;height: 116.33px;flex-shrink: 0;" >
						<view style="display: flex;flex-direction: column;width: 30px;justify-content: flex-start;height: 116.33px;">
							<view style="width: 30px;flex-shrink: 0;" >
								<image style="width: 25px;" mode="widthFix" src="/static/tingyin/gaoyin.png"></image>
							</view>
							<view style="width: 30px;flex-shrink: 0;margin-top: 20px;" >
								<image style="width: 30px;" mode="widthFix" src="/static/tingyin/dayin.png"></image>
							</view>
						</view>

						<!-- 作答 -->
						<view style="height: 116.33px;" >
							<view style="display: flex;flex-direction: row;z-index: 0;position: fixed;" >

								<view  v-for="(item,index) in all_dian"  :style="{width:width.wuxianpu+'px'}"  style="height: 116.33px;flex-shrink: 0;display: flex;flex-direction: row;">
									<view v-for="(it,ind) in item"  style="display: flex;flex-direction: column;margin-left: 10px;position: fixed;">
										<view style="background: transparent;width: 10px;flex-shrink: 0;" :style="{height:it.top+'px'}" >	
										</view>
										<view style="display: flex;flex-direction: row;">
											<view v-if="it.jiangyin" style="font-size: 12px;margin-top: -5.5px;width: 7px;">b</view>
											<view v-else style="width: 7px;"> </view>
											<view @tap="change_dian('高音',index,ind)" :class="{'hongdian':it.id===now_dian.pos,'heidian':it.id!==now_dian.pos}"  v-if="it.show"  style="width: 10px;height: 8.3px;border-radius: 20upx;z-index: 85;"  >
											</view>
										</view>
									</view>
								</view>
							</view>					
						</view> 
						
					</view>

				</view>
				
				<view style="display: flex;flex-direction: row;position: fixed;height: 100px;z-index: 81;" >
					<view @click="change_area(index)" :class="{area_select:index===area_select}"  v-for="(item,index) in all_dian" :style="{width:width.wuxianpu+'px'}" style="flex-shrink: 0;border-right: 1px solid #000000;" >
					</view>
				</view>
				
				<view style="height: 116.33px;position: fixed;">
					
					<view style="display: flex;flex-direction: row;z-index: 0;position: fixed;flex-shrink: 0;">
						<view style="width: 60px;flex-shrink: 0;height: 116.33px;"></view>
						<view   v-for="(item,index) in wrong_dian" :style="{width:width.wuxianpu+'px'}"  style="height: 116.33px;flex-shrink: 0;display: flex;flex-direction: row;">
							<view v-for="(it,ind) in item" style="display: flex;flex-direction: column;margin-left: 10px;position: fixed;">
								<view style="background: transparent;width: 10px;flex-shrink: 0;" :style="{height:it.top+'px'}" >	
								</view>
								<view style="display: flex;flex-direction: row;">
									<view v-if="it.jiangyin" style="font-size: 12px;margin-top: -5.5px;width: 7px;">b</view>
									<view v-else style="width: 7px;"> </view>
									<cover-view  class="hongdian"   style="width: 10px;height: 8.3px;border-radius: 20upx;z-index: 85;"  >
									</cover-view>
								</view>
							</view>
						</view>
					</view>					
				</view> 
			</view>


		</view>
		<view  style="margin-left: -1px;overflow: hidden;background-color: #999999;" :style="{height:height.xia+'px'}">
			<view @touchstart="hei_start" @touchend="hei_end"  @touchmove="hei_move" v-for="(item,index) in heikuai" class="hei"  :style="{width:width.hei+'px',height:height.xia+'px'}" :class="{hei_select:item.select}" > 
				<input  style="width: 1px;flex-shrink: 0;" :style="{height:height.xia*0.8+'px'}" disabled="true"/>
				<view>
					<text style="color: #000000;" >{{item.zimu}}</text>
					<text style="color: #000000;" class="unitSPan" >{{item.shuzi}}</text>
				</view>

			</view>
			  
			<view @click="baikuai_start(index)" v-for="(item,index) in baikuai" class="bai" style="" :style="{left: index+item.left*width.hei+width.hei*0.65 + 'px',height:height.bai+'px',width:width.bai+'px'}" :class="{bai_select:item.select}">
				<view style="height: 100%;display: flex;flex-direction: column-reverse;align-items: center;">
					<input style="height: 30%;" disabled="ture"/>
					<view style="margin-bottom: 10rpx;">
						<text style="color: #ffffff;" class="unitSPan">b</text>
						<text style="color: #ffffff;" >{{item.zimu}}</text>
						<text style="color: #ffffff;" class="unitSPan" >{{item.shuzi}}</text>
					</view>

				</view>
				
			</view>
		</view> 
		
	</view>
</template>

<script>
	var innerAudioContext = null;
	export default {
		data() {
			return {
				data:'',
				now:0,
				bofang:false,
				height:{
					shang:0,
					xia:0,
					all:0,
					bai:0,
					windows:0
				},
				width:{
					hei:0,
					bai:0,
					all:0,
					windows:0,
					wuxianpu:0,
					gap:0
				},
				heikuai:[{name:'g',select:false,value:1,zimu:'g',top:14},{name:'a',select:false,value:3,zimu:'a',top:13},
						 {name:'b',select:false,value:5,top:12,zimu:'b'},{name:'c1',select:false,value:6,top:11,zimu:'c',shuzi:'1'},
						 {name:'d1',select:false,value:8,top:10,zimu:'d',shuzi:1},{name:'e1',select:false,value:10,top:9,zimu:'e',shuzi:1},
						 {name:'f1',select:false,value:11,zimu:'f',shuzi:1,top:8},{name:'g1',select:false,value:13,zimu:'g',shuzi:1,top:7},
						 {name:'a1',select:false,value:15,zimu:'a',shuzi:1,top:6},{name:'b1',select:false,value:17,top:5,zimu:'b',shuzi:1},
						 {name:'c2',select:false,value:18,zimu:'c',shuzi:2,top:4},{name:'d2',select:false,value:20,zimu:'d',shuzi:2,top:3},
						 {name:'e2',select:false,value:22,top:2,zimu:'e',shuzi:2},{name:'f2',select:false,value:23,zimu:'f',shuzi:2,top:1},
						 {name:'g2',select:false,value:25,zimu:'g',shuzi:2,top:0}],
				baikuai:[{name:'ba' ,left:0,select:false,value:2,top:13,zimu:'a'},{name:'bb', left:1, select:false,value:4,top:12,zimu:'b'},
						 {name:'bd1', left:3, select:false,value:7,zimu:'d',shuzi:1,top:10},{name:'be1' ,left:4,select:false,value:9,zimu:'e',shuzi:1,top:9},
						 {name:'bg1', left:6, select:false,value:12,top:7,zimu:'g',shuzi:1},{name:'ba1',left:7, select:false,value:14,top:6,zimu:'a',shuzi:1},
						 {name:'bb1',left:8,select:false,value:16,top:5,zimu:'b',shuzi:1},{name:'bd2',left:10,select:false,value:19,top:3,zimu:'d',shuzi:2},
						 {name:'be2',left:11,select:false,value:21,top:2,zimu:'e',shuzi:2},{name:'bg2',left:13,select:false,value:24,top:0,zimu:'g',shuzi:2}],
				test:'', 
				start:false,
				wuxianpu_url:'/static/wuxianpu.png',
				wuxianpu_a:'/static/wuxianpu_a.png',
				wrong_dian:[[],[],[],[],[]],
				all_dian:[[],[],[],[],[]],
				video1:'/static/music/3.mp3',
				is_pause:false,
				area_select:0,
				type:1,
				type_name:'',
				now_dian:{
					area:-1,
					pos:-1,
					type:''
				},
				sum_dian:0,
				voice_percentage:0.00,
				finall_res:{
					zhengque_per:0,
					right:0,
					wrong:0,
					ans:[],
					zuoda:[],
					result:[]
				},
				show_ans:false,
				is_zuoda:true,
				start_time:0,
				end_time:0,
				cost_time:0,
				diff:'',
				diff_name:''
			}
		},
		onLoad() {
				// #ifdef APP-PLUS
				 plus.screen.lockOrientation("landscape-primary");
				// #endif
			},
		onUnload() {
				// #ifdef APP-PLUS
				plus.screen.lockOrientation('portrait-primary');
				// #endif
			},

		mounted() {
			innerAudioContext = uni.createInnerAudioContext();
			this.data = uni.getStorageSync('lianxi_chuancan');
			this.diff_name=this.data.diff;
			this.data.array = this.data.ans.split(",");
			this.all_dian = JSON.parse(this.data.all_dian);
			// console.log(this.data);
			
			this.type = this.data.array.length/5;
			if(this.type==1)	this.type_name='单音';
			else if(this.type==2)	this.type_name='音程';
			else this.type_name='和弦';
			
			this.start_time = new Date();
			this.queding_tijiao();
			
			this.height.windows=uni.getSystemInfoSync().screenHeight;
			this.width.windows=uni.getSystemInfoSync().screenWidth;
			
			if(this.height.windows>this.width.windows){
				var temp =this.height.windows;
				this.height.windows = this.width.windows;
				this.width.windows=temp;
			}
			 
			this.height.shang = this.height.windows*0.5;
			this.height.xia = this.height.windows*0.5;
			this.height.all = this.height.windows;
			this.height.bai = this.height.xia*0.6;
			this.height.pop = this.height.windows*0.6;
			
			this.width.all = this.width.windows;
			this.width.hei = (this.width.windows -14 )/15;
			this.width.bai = this.width.hei*0.7;
			this.width.wuxianpu = (this.width.windows-40)/5;
			this.width.gap = this.width.wuxianpu/5;
			this.width.wuxianpuall = (this.width.windows-15);
			this.width.pop = this.width.windows*0.5;
			
			
		},
		onBackPress(e){
			console.log(e);
			innerAudioContext.pause();
			innerAudioContext.destroy();
		},
		methods: {
			cuowu_xiangqing(){
				this.show_ans=true;
				this.$refs.result.close();
				
			},
			close_pop(){

				innerAudioContext.destroy();
				uni.navigateBack();
				
			},
			getjiangyin_byvalue(e){
				var top = -1;
				for(var i=0;i<this.heikuai.length&&top==-1;i++)
					if(this.heikuai[i].value==e)	top = this.heikuai[i].top;
				if(top==-1)	return true;
				else return false;
			},
			gettop_byvalue(e){
				var top = -1;
				for(var i=0;i<this.heikuai.length&&top==-1;i++)
					if(this.heikuai[i].value==e)	top = this.heikuai[i].top;
				for(var i=0;i<this.baikuai.length&&top==-1;i++)
					if(this.baikuai[i].value==e)	top = this.baikuai[i].top;
				var height_view = top;
				if(top<11){
					height_view = top*4.15;
				}
				else if(top==11){	
					this.wuxianpu_url=this.wuxianpu_a;
					height_view = 54.2;
				}else{
					height_view = 66.2+(top-12)*4.15;
				}
				return height_view;
			},
			queding_tijiao(){
				if(innerAudioContext.is_pause==false)
					innerAudioContext.pause();
				console.log('tijiao');
				uni.setStorageSync('xunlian_result',{ans:this.data.array,zuoda:this.all_dian,result:[[],[],[],[],[]]});
				var data = {ans:this.data.array,zuoda:this.all_dian,result:[[],[],[],[],[]],right:0,wrong:0,zhengqulv:0.00};
				var ind = 0;
				for(var i=0;i<data.zuoda.length;i++){
					var wrong = false;
					for(var j=0;j<data.zuoda[i].length;j++){
						if(data.ans[ind]==data.zuoda[i][j].value){
							data.right++;
							data.result[i].push(Object.assign(data.zuoda[i][j], { ans:true }));
						}else{
							wrong=true;
							data.wrong++;
							data.result[i].push(Object.assign(data.zuoda[i][j], { ans:false}));
						}
						ind++;
					}
					ind+=this.type-data.zuoda[i].length;
					// 有空白的
					if(this.type-data.zuoda[i].length!=0){
						data.wrong+=this.type-data.zuoda[i].length;
						wrong=true;
					}
					if(wrong){
						var temp_i = ind - this.type;
						for(var j=0;j<this.type;j++)
							this.wrong_dian[i].push({value:data.ans[j+temp_i],top:this.gettop_byvalue(data.ans[j+temp_i]),jiangyin:this.getjiangyin_byvalue(data.ans[j+temp_i])});
					}
				}
				
				if(data.right+data.wrong!=0)
					data.zhengque_per = data.right/(data.right+data.wrong);
				else
					data.zhengque_per = 0.00;
				this.finall_res=data;
				console.log(this.wrong_dian);
				
				this.cost_time = (parseInt(this.end_time-this.start_time) / 1000 );
				
			},
			change_dian(s,index,ind){
				console.log('选中！');
				this.area_select=index;
				this.now_dian.pos=ind;
				this.now_dian.area=index;
				this.now_dian.type=s;
			},
			change_area(index){
				this.area_select=index;
				if(this.area_select!=this.now_dian.area){
					this.now_dian.area=-1;
					this.now_dian.pos=-1;
				}
			},
			pause(){
				this.is_pause=true;
				innerAudioContext.pause();
				this.start=false;
			},
			adddian_click(top,value,is_jiangyin){
				var height_view = top;				
				if(top<11){
					height_view = top*4.15;
				}
				else if(top==11){	
					this.wuxianpu_url=this.wuxianpu_a;
					height_view = 54.2;
				}else{
					height_view = 66.2+(top-12)*4.15;
				}
				if(this.all_dian[this.area_select].length==this.type){
					delete this.all_dian[this.area_select];
					this.all_dian[this.area_select] = [];
				}	
				this.all_dian[this.area_select].push({show:true,top:height_view,id:this.sum_dian,value:value,jiangyin:is_jiangyin});
				this.sum_dian++;
			},
			baikuai_start(e){
				var that = this;
				console.log(e);
				console.log(this.baikuai[e].name+'top:'+this.baikuai[e].top); 
				this.baikuai[e].select=true;
				
				setTimeout(function closebaikuai(){
					that.baikuai[e].select=false;
				},250) 
				//加点
				this.adddian_click(this.baikuai[e].top,this.baikuai[e].value,true);

			},
			start_mp3(){
				if(this.is_pause==true){
					this.is_pause=false;
					innerAudioContext.play();
					this.start=true;
					return;
				}
				var that = this;

				innerAudioContext.sessionCategory = "ambient";
				this.start=true;
				var play_biao  = true; 
				this.voice_percentage=0;
				innerAudioContext.autoplay = true;
				console.log(this.music + this.data.data);
				innerAudioContext.src = this.music_url + this.data.music_link;
				setInterval(function xunhuan(){
					if(that.start==true)
						that.voice_percentage +=1/300;
				},100);
				innerAudioContext.play( ()=>{

				})
				innerAudioContext.onEnded(()=>{
					this.voice_percentage=1;
					this.is_pause=false;
					this.start=false;
				})
				
			},
			hei_start(e){
				var that = this;
				var lie = e.changedTouches[0].clientX / this.width.hei;
				var lie_int = parseInt(lie);
				this.heikuai[lie_int].select=true;
				
				//加点
				this.adddian_click(this.heikuai[lie_int].top,this.heikuai[lie_int].value,false);		
				setTimeout(function closexiaoguo(){
					that.heikuai[lie_int].select=false;
				},250) 

			}, 
			hei_move(e){
				var that = this;
				var lie = e.changedTouches[0].clientX / this.width.hei;
				var lie_int = parseInt(lie);
				if(this.heikuai[lie_int].select==false){
					this.heikuai[lie_int].select=true;
					//加点
					this.adddian_click(this.heikuai[lie_int].top,this.heikuai[lie_int].value,false);		
					
					setTimeout(function closexiaoguo(){
						that.heikuai[lie_int].select=false;
					},250)
				}
				 
			},
			hei_end(e){
				var lie = e.changedTouches[0].clientX / this.width.hei;
				var lie_int = parseInt(lie);
				this.heikuai[lie_int].select=false;
			}
		}
	}
</script>

<style>
	.area_select{
		background-color: aqua;
		opacity: 0.1;
	}
	.bg-set{
	    position: fixed;
	    width: 100%;
	    height: 100%;
	    top: 0;
	    left: 0;
	    z-index: -1;
	}
	.bai{
		background-color: #666666;
		background-image: linear-gradient(160deg, #666666 0%, #000000 100%);
		width: 100px;
		position: fixed;
		border: thick solid #666666;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.bai_select{
		background-color: #666666;
		background-image: linear-gradient(160deg, #000000 0%, #000000 100%);
		width: 100px;
		position: fixed;
		border: thick solid #666666;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.hei{
		background-color: #eeeeee;
		background-image: linear-gradient(160deg, #eeeeee 0%,#dfdfdf 50%, #bebebe 100%);
		margin-left: 1px;
		flex-shrink: 0;
		float: left;
		text-align: center;
		display: flex;
		flex-direction: column;
		border-bottom-left-radius: 11px;
		border-bottom-right-radius: 11px;
	}
	.hei_select{
		background-color: #404040;
		background-image: linear-gradient(160deg, #404040 0%,#555555 100%);
		margin-left: 1px;
		flex-shrink: 0;
		float: left;
		text-align: center;
		display: flex;
		flex-direction: column;
		border-bottom-left-radius: 11px;
		border-bottom-right-radius: 11px;
	}
	
	.unitSPan {
		font-size: 12px;
		vertical-align: super;
	}
	
	.hongdian{
		background-color: red;
	}
	.heidian{
		background-color: #000000;
	}
</style>
