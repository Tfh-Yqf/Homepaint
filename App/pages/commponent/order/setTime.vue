<template>
	<view class="set_time">
		<uni-popup ref="popup" type="bottom" @change="onhide">
			<view class="popup_box">
				<image class="close" @click="closePopup" src="/static/images/search/close.png" mode=""></image>
				<view class="box">
					<view class="left">
						<p :class="[timeCurrent == index?'timeCurrent':'']" v-for="(item,index) in dateList" :key="index" @click="setTimeCurrent(item,index)">{{item.month}}月{{item.day}}日(<text v-if="index == 0">今天</text><text v-else>星期{{item.week}}</text>)</p>
					</view>
					<view class="right">
						<view class="a_p_m" v-for="(item,index) in nowList" :key="index">
							<p>{{item.name}}</p>
							<view :class="['tag',tagCurrent == index ?'tag_active':'']" @click="setTagCurrent(item,index)">
								{{item.time}}
							</view>
						</view>
						<view style="font-size: 24upx;color: #999;line-height: 60upx;" v-if="nowList.length == 0">
							请您预定明天~
						</view>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>
<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default{
		name:'set-time',
		data(){
			return{
				dateList:[],
				ApmList:[
					{name:'上午',time:'09:00-15:00',status: 0},
					{name:'下午',time:'15:00-21:00',status: 1},
				],
				nowList:[],
				timeCurrent: 0,
				tagCurrent: 0,
				nowTime:'',
				day:'' ,//日期数据
			}
		},
		props:{
			shows:{
				type:Boolean,
				default:false
			}
		},
		components:{
			uniPopup
		},
		watch:{
			shows(value){
				console.log(value)
				value == true&&this.$refs.popup.open()
			}
		},
		mounted() {
			this.getNowDate()
			this.setTimeCurrent(this.dateList[0],0)  //默认传递给父元素第一项
		},
		methods:{
			closePopup(){
				this.$refs.popup.close()
				this.$emit('onClose')
			},
			onhide(e){ //弹出收回触发事件
				if(e.show == false){
					this.$emit('onClose')
				}
			},
			setTimeCurrent(item,index){
				this.nowList = []
				var dd = new Date();
				// 获取当前的时间
				let nowTime = dd.getHours()
				// 根据当前时间算出是否可选上午和下午
				this.timeCurrent = index
				if(index == 0){
					this.setNowTime(nowTime)
				}else{
					this.nowList = this.ApmList
				}
				let week = index == 0 ?'今天':'星期'+item.week
				this.day = item.month+'月'+item.day+'日'+week
				let time = ''
				if(this.nowList.length == 0){ //必须判断当前时间段是否还在设置的时间区间内 如果不在了就设置为第二天		  
					let items = this.dateList[index+1]
					let weeks = index+1 == 0 ?'今天':'星期'+items.week
					time = items.month+'月'+items.day+'日'+ weeks + this.ApmList[0].time  //取默认值
					console.log('执行了')
					/**
					 * 过了当天的设定的时间点之后 就不允许再点击了
					 */
					this.timeCurrent = 1
					this.nowList = this.ApmList
				}else{
					time = this.day+' '+ this.nowList[0].time
				}
				this.$emit('onComplete',time)  //把选中的项返回给父元素
			},
			setTagCurrent(item,index){
				this.tagCurrent = index
				let time = this.day+' '+item.time
				this.$emit('onComplete',time)
				this.$emit('onClose')
				this.$refs.popup.close()
			},
			getNowDate(){ //获取当前日期和未来七天
				var dd = new Date();
				// 获取当前的时间
				let nowTime = dd.getHours()
				// 根据当前时间算出是否可选上午和下午
				this.setNowTime(nowTime)
				var arr=[];
				for(var i=0;i<7;i++){
					let m = dd.getMonth()+1
					let month = m < 10 ? '0' + m: m;
					let d = dd.getDate()
					let day = d < 10 ? '0' + d: d;
					let week = dd.getDay()
					let time = {}
					time.day = day
					time.month = month
					time.week = this.setWeek(week)
				    arr.push(time)
					dd.setDate(dd.getDate()+1);
				}
				this.dateList = arr
			},
			setNowTime(value){
				if(value <= 12){ //在中午十二点之前 还可以选择9-15
					this.nowList = this.ApmList
				}else if(value <= 17){ //在下午十六点之前 还可以选择15-21
					this.nowList.push(this.ApmList[1])
				}else{
					this.nowList = []
				}
			},
			setWeek(value){
				switch (value){
					case 0:
					return '日';
					break;
					case 1:
					return '一';
					break;
					case 2:
					return '二';
					break;
					case 3:
					return '三';
					break;
					case 4:
					return '四';
					break;
					case 5:
					return '五';
					break;
					case 6:
					return '六';
					break;
					default:
					return '一'
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.popup_box{
		// height: 50vh;
		width: 100vw;
		background-color: #FFFFFF;
		border-radius: 20upx 20upx 0 0;
		position: relative;
		.close{
			width: 40upx;
			height: 40upx;
			position: absolute;
			top: 20upx;
			right: 20upx;
			background-color: #DDDDDD;
			border-radius: 50%;
		}
		.box{
			display: flex;
			padding: 20upx 0;
			.left{
				overflow: hidden;
				margin-top: 70upx;
				padding-bottom: 30upx;
				width: 260upx;
				height: calc(55vh - 70upx);
				display: flex;
				flex-direction: column;
				background-color: #F8F8F8;
				p{
					padding: 0 20upx;
					min-width: 100%;
					height: 80upx;
					line-height: 80upx;
					font-size: 26upx;
					color: #8D8D8D;
					transition: all 0.3s;
				}
				.timeCurrent{
					background-color: #FFFFFF;
					color: #202020;
					transition: all 0.3s;
				}
			}
			.right{
				margin-top: 70upx;
				margin-left: 10upx;
				.a_p_m{
					margin-bottom: 20upx;
					p{
						font-size: 26upx;
						color: #8D8D8D;
						height: 80upx;
						line-height: 80upx;
						transition: all 0.3s;
					}
					.tag{
						height: 80upx;
						line-height: 70upx;
						padding: 5upx 20upx;
						color: #000000;
						border-radius: 8upx;
						background-color: #F7F7F7;
					}
					.tag_active{
						background-color: #FDF3F2;
						color: #F40603;
						transition: all 0.3s;
					}
				}
			}
		}
	}
</style>
