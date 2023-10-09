<template>
	<view style="display: flex;flex-direction: column;background-color: #f6f6f6;">

		<view style="display: flex;flex-direction: row;height: 85vh;">
			<view
				style="width: 10%;display: flex;flex-direction: column;justify-content: right;flex-shrink: 0;height: 100%;padding: 0px 0px 0px 10px;">
				<a href="uniwebview://shuping">
					<image @click="back()" src="@/static/login/back.png" 
						style="width: 30px;margin-top: 20px;border-radius: 7px;" mode="widthFix"></image>
				</a>
<!-- 				<view @click="change_is_huaqiang" style="display: flex;align-items: center;margin-top: 10px;">
					<image src="../../static/ultis/huabi.png" mode="widthFix" style="width: 15px;"></image>
					<text v-if="!is_huaqiang" style="font-size: 14px;margin-left: 10px;">画墙</text>
					<text v-else style="font-size: 14px;margin-left: 10px;">停止</text>
				</view> -->

				<view @click="save_image()" style="display: flex;align-items: center;margin-top: 10px;">
					<image src="../../static/ultis/baocun.png" mode="widthFix" style="width: 15px;"></image>
					<text style="font-size: 14px;margin-left: 10px;">保存</text>
				</view>

<!-- 				<view @click="chehui" style="display: flex;align-items: center;margin-top: 10px;">
					<image src="../../static/ultis/chehui.png" mode="widthFix" style="width: 15px;"></image>
					<text style="font-size: 14px;margin-left: 10px;">撤回</text>

				</view> -->

				<view @click="deleteHouse" style="display: flex;align-items: center;margin-top: 10px;">
					<image src="../../static/ultis/deleteBlue.png" mode="widthFix" style="width: 15px;"></image>
					<text style="font-size: 14px;margin-left: 10px;">删除</text>
				</view>


			</view>

			<canvas @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend"
				style="width: 80%;z-index: 1;height: 100%;" canvas-id="firstCanvas" id="firstCanvas"></canvas>

			<view style="display: flex;flex-direction: column;justify-content: right;width: 10%;flex-shrink: 0;">
				<view style="margin-top: 25px;display: flex;align-items: center;" @click="jump_unity()">
					<image  src="../../static/ultis/3D.png" mode="widthFix" style="width: 20px;"></image>
					<a style="font-size: 15px;margin-left: 5rpx;text-decoration: underline">3D视角</a>
				</view>

				<view style="display: flex;align-items: center;margin-top: 10px;">
					<view style="width: 20px;height: 2px;background-color: black;"></view>
					<view style="font-size: 14px;">墙</view>
				</view>

				<view style="display: flex;align-items: center;margin-top: 10rpx;">
					<view style="width: 20px;height: 2px;background-color: #caa473;"></view>
					<view style="font-size: 14px;">门</view>
				</view>

				<view style="display: flex;align-items: center;margin-top: 10rpx;">
					<view style="width: 20px;height: 2px;background-color: #3b5bfe;"></view>
					<view style="font-size: 14px;">窗</view>
				</view>
				
				<view style="display: flex;align-items: center;margin-top: 10rpx;color: red;font-size: 15px;" v-if="now_room!=-1&&house!=null">
					{{house.Room[now_room].area.toFixed(2)}}m²
				</view>


			</view>

		</view>



		<view style="width: 100%;height: 15vh;display: flex;">

			<view v-if="now_room==-1"
				style="display: flex;flex-direction: row;justify-content: space-between;align-items: center;width: 100%;">
				<view style="display: flex;flex-direction: row;align-items: center;">
					<view class="menuGroup" style="background: transparent;">
						显示:
					</view>

					<view v-for="(item,index) in menu" class="menuGroup" @click="change_toolbox(index)"
						:class="{'chooseMenu':item.check}">
						{{item.name}}
					</view>
				</view>

				<view style="font-size: 15px;margin-right: 20px;display: flex;align-items: center;">
					<view style="color: red;">{{area}}m²</view>
					<view class="scaleGroup" @click="changeScale()">比例尺</view>
				</view>
			</view>
			<view v-else style="display: flex;flex-direction: row;justify-content: space-between;align-items: center;width: 100%;">


				<scroll-view scroll-x="true" style="width: 50%;display: flex;flex-direction: row;align-items: center;">
					<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
						<view class="menuGroup" style="background: transparent;color: red;">
							类型:
						</view>
						
						<view v-for="(item,index) in RoomMenu" class="menuGroup" @click="changeRoomName(index)"
							:class="{'chooseMenu':NowRoomType==index}">
							{{item}}
						</view>
					</view>

				</scroll-view>
				
				<scroll-view scroll-x="true" style="width: 48%;margin-left: 1%;margin-right: 1%;display: flex;flex-direction: row;align-items: center;">
					<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
						<view class="menuGroup" style="background: transparent;color: red;">
							风格:
						</view>
						
						<view v-for="(item,index) in StyleMenu" class="menuGroup" @click="changeStyleType(index)"
							:class="{'chooseMenu':StyleNow==index}">
							{{item}}
						</view>
					</view>

				</scroll-view>

			</view>

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				area: 0,
				showtext: true,
				ctx: null,
				canvasW: 0,
				canvasH: 420,
				result: null,
				minx: 0,
				maxx: 0,
				miny: 0,
				maxy: 0,
				screenWidth: 700,
				screenHeight: 300,
				pingyi_x: 1,
				fangda_x: 2,
				pingyi_y: 1,
				fangda_y: 2,
				switchList: [{
						title: '2D',
						value: 0
					},
					{
						title: '3D',
						value: 1
					}
				],
				nowList: 0,
				draw_deatil: {
					start: {},
					end: {}
				},
				store_draw_detail: [],
				store_draw_detail_length: 0,
				now_choice: {
					detail: {
						value: ["wall", "windows", "showtext", "door"]
					}
				},
				is_huaqiang: false,
				menu: [{
						name: '墙',
						check: true
					},
					{
						name: '门',
						check: true
					},
					{
						name: '窗',
						check: true
					},
					{
						name: '标签',
						check: true
					}
				],
				RoomMenu: ['客厅', '卧室', '厨房', '阳台', '卫生间', '洗漱间'],
				StyleMenu: ['东南亚','现代','日式','复古','地中海','韩式','轻奢华','极简主义','工业','北欧','美式','新中式','欧洲','新古典主义','中国风','明清','其他','儿童','古典欧洲'],
				StyleNow:0,
				NowRoomType: 0,
				root: null,
				house: null,
				now_room:0,
				touching:false
			}
		},
		onReady: function(e) {
			// 获取户型
			this.root = uni.getStorageSync('House_identify');
			console.log(this.root);
			
			this.init();
		},
		methods: {
			getBuChongFuId(e){
				var maxx = 0;
				for(var i=0;i<e.length;i++){
					if(e[i].id>maxx)	maxx = e[i].id;
				}
				return maxx;
			},
			jump_unity(){
				uni.showLoading({
					title:'加载中'
				});
				// 将新加的墙画上去，改变Walls
				
				var temp = uni.getStorageSync('House_identify');
				// console.log(this.store_draw_detail);
				// var maxx  = this.getBuChongFuId(temp.origin.Walls);
				
				// for(var i=0;i<temp.house.Room.length;i++){
				// 	temp.house.Room[i].style = this.house.Room[i].style;
				// 	temp.house.Room[i].name = this.house.Room[i].name;
				// }
				// temp.furniture.floor = [];
				// temp.furniture.WallPaper = [];
				// console.log(temp);
				this.request(this.server_url+'houseData/save',temp,'POST').then((res)=>{
					if(res.code==0){
						console.log(res);
						uni.showToast({
							title: '保存成功!'
						});
						
						window.location.href = "uniwebview://to3d";
						uni.hideLoading();
						uni.redirectTo({
							url:'/pages/navigation/ShouYe/ShouYe'
						});
					}
				});				
			},
			init() {

				// 总初始化
				this.result = {
					...this.root.DWW
				};
				this.house = {
					...this.root.house
				};
				
				uni.setStorageSync('Fangwu', this.result);
				console.log(this.result);
				uni.setStorageSync('result_file', this.result);
				

				this.ctx = uni.createCanvasContext('firstCanvas')

				// 渲染
				this.get_area();
				this.get_fangsuo();
				this.draw_All_Wall();
				this.draw_All_Door();
				this.draw_All_Window();
				this.AddHouseName();
				this.FillRoom();
				// this.change_toolbox(-1);
				this.ctx.draw();
			},
			get_area() {
				// 获取房屋面积
				if (this.root.areaAfterCalcuate != null && this.root.areaAfterCalcuate != undefined && this.root
					.areaAfterCalcuate != 0) {
					this.area = Math.floor(this.root.areaAfterCalcuate * 100) / 100;
				} else {
					// 没有比例尺切换的面积计算
					var sumarea = 0;
					for(var i=0;i<this.root.house.Room.length;i++){
						sumarea += this.root.house.Room[i].area;
					}
					this.area = Math.floor(sumarea * 100) / 100;
				}
			},
			changeRoomName(e){
				this.NowRoomType = e;
				this.house.Room[this.now_room].name = this.RoomMenu[e]; 
			},
			changeStyleType(e){
				this.StyleNow = e;
				this.house.Room[this.now_room].style = this.StyleMenu[e]; 
			},
			CalDistance(point1,point2){
				  const xDiff = point2.x - point1.x;
				  const yDiff = point2.y - point1.y;
				  const distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
				  return distance;
			},
			PointXifu(e){

				var minn = 100000;
				var min_index = null;
				for(var i=0;i<this.result.WallPoints.length;i++){
					var temp = {
						x:this.fangsuo_x(this.result.WallPoints[i].x),
						y:this.fangsuo_y(this.result.WallPoints[i].y),
						id:this.result.WallPoints[i].id,
					}
					// console.log(temp);
					var distance =  this.CalDistance(e,temp);

					if(distance<minn){
						minn = distance;
						min_index = {...temp};
					}
					
				}

				return min_index;
			},
			GetWallsPointmaxId(){
				var maxx = -100;
				for(var i=0;i<this.result.WallPoints.length;i++){
					if(this.result.WallPoints[i].id>maxx)	maxx = this.result.WallPoints[i].id;
				}
				return maxx;
			},
			AddWallToSave(){				
				var id = this.GetWallsPointmaxId() + 10;

				this.result.WallPoints.push({x:this.NiFangsuo_x( this.draw_deatil.start.x ),y:this.Nifangsuo_y( this.draw_deatil.start.y ),id:id});
				this.result.WallPoints.push({x:this.NiFangsuo_x( this.draw_deatil.end.x ),y:this.Nifangsuo_y( this.draw_deatil.end.y ),id:id+1});

				this.result.Walls.push({start_point:id,end_point:id+1,id:id+2});
			},
			RoMoveAddedWall(){
				this.result.WallPoints.pop();
				this.result.WallPoints.pop();
				this.result.Walls.pop();
			},
			changeScale() {
				// 改变比例尺
				uni.showModal({
					editable: true,
					title: '请输入您房屋的实际面积(排除公摊面积):',
					confirmText: '调整比例尺',
					success: (res) => {
						if (res.confirm) {
							console.log(res);
							var temp = {
								DWW: this.result,
								house: this.house,
								area: res.content
							};
							console.log(temp);
							this.request(this.server_url + 'houseData/ChangeScale', temp, 'POST').then((
								res) => {
								console.log(res);
								this.root = res.data;
								this.init();
							})
						}
					}
				})
			},
			deleteHouse() {
				uni.showModal({
					title: '您确定删除所有数据吗',
					confirmText: '删除',
					success: (res) => {
						if (res.confirm) {
							this.request(this.server_url + 'houseData/delete', {}, 'GET').then((res) => {
								if (res.code == 0) {
									uni.showToast({
										title: '删除成功!',
										icon: 'none'
									});
									uni.redirectTo({
										url: './UploadImage'
									});

								}
							});

						}
					}
				})

			},
			AddHouseName() {
				if (this.showtext == false) return;


				this.ctx.setFontSize(10);
				for (var i = 0; i < this.root.house.Room.length; i++) {
					var x = this.fangsuo_x(this.root.house.Room[i].center.x);
					var y = this.fangsuo_y(this.root.house.Room[i].center.y);
					if (this.now_room == i) this.ctx.setFillStyle('red');
					else this.ctx.setFillStyle('#b3b3b3');
					this.ctx.fillText(this.root.house.Room[i].name, x, y);
				}
			},
			save_image() {
				var that = this;
				uni.canvasToTempFilePath({
					canvasId: 'firstCanvas',
					
					  success: function(res) {
						// 在H5平台下，tempFilePath 为 base64
						console.log(res);
						that.request(that.server_url+'picture/uploadHouseImage',{image:res.tempFilePath},'POST').then((re)=>{
							console.log(re);
								
							if(re.code==0){
								that.data.image.push(re.url);
								uni.showToast({
									title:'上传成功!',
									icon:'none'
								});
							}
							
						});
					  } 
				});
				this.root.house = this.house;
				this.root.DWW = this.result;
				console.log(this.root);
				
				this.request(this.server_url+'houseData/save',this.root,'POST').then((res)=>{
					if(res.code==0){
						uni.showToast({
							title: '保存成功!'
						});
					}
				});

			},
			save_qiang() {
				var temp = {
					house_json: "",
					picture: ''
				};
				console.log(temp);
				this.request(this.server_url + 'house/change', temp, 'POST').then((res) => {
					console.log(res);
					if (res.code == 0) {
						uni.showToast({
							title: '保存成功'
						});
					}
				});

			},
			change_is_huaqiang() {
				this.is_huaqiang = !this.is_huaqiang;
				// 花墙则关闭选中房间的功能
				if (this.is_huaqiang) {
					this.now_room = -1;
					this.change_toolbox(-1);
				}
			},
			chehui() {
				if (this.store_draw_detail.length == 0) {
					uni.showToast({
						title: '无步骤可以撤回',
						icon: 'none'
					});
					return;
				} else {
					this.RoMoveAddedWall();
					this.store_draw_detail.pop();
					this.store_draw_detail_length--;
					this.huifu();
				}
			},
			touchstart(e) {
				// console.log(e.touches[0]);
				if (!this.is_huaqiang) {
					// 打标签操作
					this.now_room = this.GetRoomId(e.touches[0]);
					// console.log(this.now_room);
					this.change_toolbox(-1);
				} else {
					// 画墙操作
					this.touching = true;
					this.draw_deatil.start = this.PointXifu(e.changedTouches[0]);
					console.log(this.draw_deatil);
					this.store_draw_detail.push(this.draw_deatil);
				}

			},
			isPointInPolygon(e, index) {
				// 获取多边形的顶点
				var xx = e.x;
				var yy = e.y;

				var vertices = this.house.Room[index].point;

				let inside = false;
				let j = vertices.length - 1;
				for (let i = 0; i < vertices.length; i++) {
					const xi = this.fangsuo_x(vertices[i].x);
					const yi = this.fangsuo_y(vertices[i].y);
					const xj = this.fangsuo_x(vertices[j].x);
					const yj = this.fangsuo_y(vertices[j].y);

					const intersect = ((yi > yy) != (yj > yy)) && (xx < (xj - xi) * (yy - yi) / (yj - yi) + xi);

					if (intersect) {
						inside = !inside;
					}

					j = i;
				}
				return inside;
			},
			GetRoomId(e) {
				for (var i = 0; i < this.house.Room.length; i++) {
					if (this.isPointInPolygon(e, i)) {
						for (var j = 0; j < this.RoomMenu.length; j++) {
							if (this.RoomMenu[j] == this.house.Room[i].name) {
								this.NowRoomType = j;
									
								if(this.house.Room[i].style!=null&&this.house.Room[i].style!=undefined&&this.house.Room[i].style!=''){
									this.StyleNow = this.house.Room[i].style;
								}else{
									this.StyleNow = 0;
								}
								
								break;
							}
						}
						return i;
					}
				}
				return -1;
			},
			huifu() {
				this.change_toolbox(-1);
			},
			touchmove(e) {
				if (!this.is_huaqiang) return;
				this.draw_deatil.end = e.changedTouches[0];
				this.huifu();
			},
			touchend(e) {
				if (!this.is_huaqiang) return;
				this.touching = false;
				this.draw_deatil.end = this.PointXifu(e.changedTouches[0]);
				this.store_draw_detail[this.store_draw_detail_length] = {
					...this.draw_deatil
				};
				
				this.store_draw_detail_length++;
				
				this.AddWallToSave();
				
				this.change_toolbox(-1);
			},
			change_showtext() {
				this.showtext = !this.showtext;
				this.ctx.draw();
			},
			back() {
				uni.reLaunch({
					url: '/pages/navigation/ShouYe/ShouYe'
				})
			},
			change_toolbox(e) {
				if (e != -1) this.menu[e].check = !this.menu[e].check;

				this.showtext = this.menu[3].check;

				if (this.menu[0].check) {
					this.draw_All_Wall();
				}
				if (this.menu[1].check) {
					this.draw_All_Door();
				}
				if (this.menu[2].check) {
					this.draw_All_Window();
				}

				this.FillRoom();

					
				if(this.touching){
					for (var i = 0; i < this.store_draw_detail_length + 1 && i < this.store_draw_detail.length; i++) {
						var temp = this.store_draw_detail[i];
						this.ctx.beginPath();
					
						this.ctx.moveTo(temp.start.x, temp.start.y);
						this.ctx.lineTo(temp.end.x, temp.end.y);
						this.ctx.setLineWidth(3);
						this.ctx.setStrokeStyle('black')
						this.ctx.stroke()
					}
				}

				
				this.AddHouseName();
				this.ctx.save();
				this.ctx.draw();
			},
			FillRoom() {
				if (this.now_room == -1) return;
				this.ctx.beginPath();

				var temp = this.house.Room[this.now_room].point;

				// 画多边形
				this.ctx.moveTo(this.fangsuo_x(temp[0].x), this.fangsuo_y(temp[0].y));
				for (var i = 1; i < temp.length; i++) {
					this.ctx.lineTo(this.fangsuo_x(temp[i].x), this.fangsuo_y(temp[i].y));
				}
				this.ctx.lineTo(this.fangsuo_x(temp[0].x), this.fangsuo_y(temp[0].y));

				this.ctx.setFillStyle('#88b9f2')
				this.ctx.fill();
				this.ctx.setFillStyle('black')
			},
			get_fangsuo() {
				if (this.result.img_size[0] < this.result.img_size[1]) {
					// this.xuanzhuan_x_y();
				}
				// 求出放缩范围
				var maxx = -100;
				var minx = 10000;
				var maxy = -100;
				var miny = 10000;
				for (var i = 0; i < this.result.WallPoints.length; i++) {
					if (this.result.WallPoints[i].x > maxx) {
						maxx = this.result.WallPoints[i].x;
					}
					if (this.result.WallPoints[i].x < minx) {
						minx = this.result.WallPoints[i].x;
					}
					if (this.result.WallPoints[i].y > maxy) {
						maxy = this.result.WallPoints[i].y;
					}
					if (this.result.WallPoints[i].y < miny) {
						miny = this.result.WallPoints[i].y;
					}
				}
				this.maxx = maxx;
				this.minx = minx;
				this.maxy = maxy;
				this.miny = miny;
				this.screenWidth = this.screen_height;
				this.screenHeight = this.screen_width;
				// this.screenWidth = this.screen_width;
				// this.screenHeight = this.screen_height;


				console.log('Height:' + this.screenHeight + "width:" + this.screenWidth);
				this.pingyi_x = this.screenWidth * 0.4 - ((maxx + minx) / 2);
				this.fangda_x = (this.screenWidth * 0.85) / (maxx - minx);
				this.pingyi_y = this.screenHeight * 0.4 - ((maxy + miny) / 2);
				this.fangda_y = (this.screenHeight * 0.75  ) / (maxy - miny);

				// console.log('minx:'+minx+"maxx:"+maxx+"maxy:"+maxy+"miny:"+miny);
				// console.log(uni.getWindowInfo());
				// console.log(this.pingyi_x+"x放大："+this.fangda_x);
				// console.log(this.pingyi_x+"y放大："+this.fangda_x);

				this.fangda_x = Math.min(this.fangda_x, this.fangda_y);
				this.fangda_y = this.fangda_x;
				console.log(this.fangda_x)
			},
			xuanzhuan_x_y() {
				for (var i = 0; i < this.result.WallPoints.length; i++) {
					var temp = this.result.WallPoints[i].x;
					this.result.WallPoints[i].x = this.result.WallPoints[i].y;
					this.result.WallPoints[i].y = temp;
				}

				for (var i = 0; i < this.result.DoorPoints.length; i++) {
					var temp = this.result.DoorPoints[i].x;
					this.result.DoorPoints[i].x = this.result.DoorPoints[i].y;
					this.result.DoorPoints[i].y = temp;
				}

				for (var i = 0; i < this.result.WindowPoints.length; i++) {
					var temp = this.result.WindowPoints[i].x;
					this.result.WindowPoints[i].x = this.result.WindowPoints[i].y;
					this.result.WindowPoints[i].y = temp;
				}
				
				for(var i = 0;i< this.house.Room.length;i++){
					// 转化center
					var temp = this.house.Room[i].center.x;
					this.house.Room[i].center.x = this.house.Room[i].center.y;
					this.house.Room[i].center.y = temp;
					// 转化point
					for(var j=0;j<this.house.Room[i].point.length;j++){
						var tempp = this.house.Room[i].point[j].x;
						this.house.Room[i].point[j].x = this.house.Room[i].point[j].y;
						this.house.Room[i].point[j].y = tempp;
					}
				}
			},
			draw_All_Window() {
				this.ctx.restore();
				// 画出窗
				for (var i = 0; i < this.result.Windows.length; i++) {
					this.ctx.beginPath();
					var temp_start = this.get_Windowspoint(this.result.Windows[i].start_point);
					var temp_end = this.get_Windowspoint(this.result.Windows[i].end_point);
					// 写文字
					var text = '普通窗';
					if (this.result.Windows[i].category == 1) {
						text = '落地窗'
					} else if (this.result.Windows[i].category == 2) {
						text = '飘窗'
					}
					// console.log('中心点x:'+(this.fangsuo_x(temp_start.x)+this.fangsuo_x(temp_end.x))/2)
					if (this.showtext)
						this.ctx.fillText(text, (this.fangsuo_x(temp_start.x) + this.fangsuo_x(temp_end.x)) / 2, (this
							.fangsuo_y(temp_start.y) + this.fangsuo_y(temp_end.y)) / 2 + 10)
					this.ctx.setFontSize(10);
					this.ctx.moveTo(this.fangsuo_x(temp_start.x), this.fangsuo_y(temp_start.y));
					this.ctx.lineTo(this.fangsuo_x(temp_end.x), this.fangsuo_y(temp_end.y));
					this.ctx.setLineWidth(3);
					this.ctx.setStrokeStyle('#3b5bfe')
					this.ctx.stroke()
				}
				this.ctx.save();
				// this.ctx.draw();
			},
			get_Windowspoint(e) {
				// 根据墙的id返回xy坐标
				for (var i = 0; i < this.result.WindowPoints.length; i++) {
					if (this.result.WindowPoints[i].id == e) {
						return this.result.WindowPoints[i];
					}
				}

			},
			draw_All_Door() {
				this.ctx.restore();
				// 画出门
				for (var i = 0; i < this.result.Doors.length; i++) {
					
					this.ctx.beginPath();
					var text = '单开门';
					var category = this.result.Doors[i].category;
					if (category == 1) {
						text = '双开门'
					} else if (category == 2) {
						text = '子母门'
					} else if (category == 3) {
						text = '移门'
					}
					var temp_start = this.get_Doorspoint(this.result.Doors[i].start_point);
					var temp_end = this.get_Doorspoint(this.result.Doors[i].end_point);
					if (this.showtext)
						this.ctx.fillText(text, (this.fangsuo_x(temp_start.x) + this.fangsuo_x(temp_end.x)) / 2, (this
							.fangsuo_y(temp_start.y) + this.fangsuo_y(temp_end.y)) / 2 + 10)
					this.ctx.setFontSize(10);
					const x1 = this.fangsuo_x(temp_start.x);
					const y1 = this.fangsuo_y(temp_start.y);
					const x2 = this.fangsuo_x(temp_end.x);
					const y2 = this.fangsuo_y(temp_end.y);
					this.ctx.moveTo(x1,y1 );
					this.ctx.lineTo(x2,y2 );
					if(category==0){
						const vX2 = x2 + (y2 - y1);
						const vY2 = y2 + (x1 - x2);
						// 计算角度
						const startAngle = Math.atan2(y1 - y2, x1 - x2);
						const endAngle = Math.atan2(vY2 - y2, vX2 - x2);
						this.ctx.moveTo(x2,y2 );
						this.ctx.lineTo(vX2, vY2);
						this.ctx.setLineWidth(2);
						this.ctx.setStrokeStyle('#caa473')
						this.ctx.stroke()
						this.ctx.save();
						this.ctx.beginPath()
						this.ctx.arc(x2, y2,this.CalDistance({x:x1,y:y1},{x:x2,y:y2}),startAngle,endAngle);
					}else if(category==1){
						// 计算中心点
						var centerx = (x1+x2) / 2;
						var centery = (y1+y2) / 2;
						// 计算边长
						var bian = this.CalDistance({x:x1,y:y1},{x:x2,y:y2});
						// 左上点
						const leftx = x1 + (y1 - centery);
						const lefty = y1 + (centerx - x1);
						// 右上点
						const rightx = x2 + (centery - y2);
						const righty = y2 + (x2 - centerx);
						// 画左边垂直直线
						this.ctx.moveTo(x1,y1 );
						this.ctx.lineTo(leftx, lefty);
						// 计算左侧圆弧角度
						const leftstartAngle = Math.atan2(centery - y2, centerx - x2);
						const leftendAngle = Math.atan2(righty - y2, rightx - x2);
						// 画左边圆弧
						this.ctx.setLineWidth(2);
						this.ctx.setStrokeStyle('#caa473')
						this.ctx.stroke()
						this.ctx.save();
						this.ctx.beginPath()
						if(Math.abs(leftendAngle-leftstartAngle)<Math.PI)
							this.ctx.arc(x2, y2,bian/2,leftstartAngle,leftendAngle);
						else
							this.ctx.arc(x2, y2,bian/2,leftstartAngle,leftendAngle,true);
						// 画右边垂直直线
						this.ctx.setLineWidth(2);
						this.ctx.setStrokeStyle('#caa473')
						this.ctx.stroke()
						this.ctx.save();
						this.ctx.beginPath()
						this.ctx.moveTo(x2,y2 );
						this.ctx.lineTo(rightx, righty);
						// 计算右侧圆弧角度
						const rightstartAngle = Math.atan2(centery - y1, centerx - x1);
						const rightendAngle = Math.atan2(lefty - y1, leftx - x1);
						// 画右边圆弧
						this.ctx.setLineWidth(2);
						this.ctx.setStrokeStyle('#caa473')
						this.ctx.stroke()
						this.ctx.save();
						this.ctx.beginPath()

						if(Math.abs(rightendAngle-rightstartAngle)<Math.PI)
							this.ctx.arc(x1, y1,bian/2,rightstartAngle,rightendAngle);
						else
							this.ctx.arc(x1, y1,bian/2,rightstartAngle,rightendAngle,true);
					}
					this.ctx.setLineWidth(2);
					this.ctx.setStrokeStyle('#caa473')
					this.ctx.stroke()
					
				}
				this.ctx.save();
				// this.ctx.draw();
			},
			get_Doorspoint(e) {
				// 根据墙的id返回xy坐标
				for (var i = 0; i < this.result.DoorPoints.length; i++) {
					if (this.result.DoorPoints[i].id == e) {
						return this.result.DoorPoints[i];
					}
				}
			},
			draw_All_Wall() {
				// 画出墙体
				for (var i = 0; i < this.result.Walls.length; i++) {
					if(this.result.Walls[i].isDoor==true)	continue;
					this.ctx.beginPath();
					var temp_start = this.get_wallspoint(this.result.Walls[i].start_point);
					var temp_end = this.get_wallspoint(this.result.Walls[i].end_point);
					this.ctx.moveTo(this.fangsuo_x(temp_start.x), this.fangsuo_y(temp_start.y));
					this.ctx.lineTo(this.fangsuo_x(temp_end.x), this.fangsuo_y(temp_end.y));
					this.ctx.setLineWidth(3);
					this.ctx.setStrokeStyle('black')
					this.ctx.stroke()
				}
				this.ctx.save();
				// this.ctx.draw();

			},
			get_wallspoint(e) {
				// 根据墙的id返回xy坐标
				for (var i = 0; i < this.result.WallPoints.length; i++) {
					if (this.result.WallPoints[i].id == e) {
						return this.result.WallPoints[i];
					}
				}
			},
			fangsuo_x(e) {
				// x轴放缩移动
				return e * this.fangda_x + this.pingyi_x;
			},
			fangsuo_y(e) {
				// y轴放缩移动
				return e * this.fangda_y + this.pingyi_y;
			},
			NiFangsuo_x(e){
				return (e - this.pingyi_x)/this.fangda_x ;
			},
			Nifangsuo_y(e){
				return (e - this.pingyi_y)/this.fangda_y ;
			}

		}
	}
</script>

<style>
	.menuGroupChoose {
		background-color: #3b5bfe;
	}

	.menuGroup {
		width: 60px;
		height: 30px;
		/* border: 1px solid grey; */
		border-radius: 10px;
		flex-shrink: 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		font-size: 15px;
		background-color: white;
		margin-left: 10px;
	}

	.top {
		position: fixed;
		top: 24px;
		display: flex;
		z-index: 2;
		justify-content: space-between;
		width: 95%;
		align-items: center;
		left: 2%;
	}

	.top_toolbox {
		height: 40px;
		display: flex;
		align-items: center;
		background-color: #3b5bfe;
		margin-left: 10px;
		border-radius: 10px;
		color: white;
		padding: 1px;
		font-size: 14px;
	}

	.chooseMenu {
		background-color: #3b5bfe;
		color: white;
	}

	.scaleGroup {
		width: 60px;
		height: 30px;
		/* border: 1px solid grey; */
		border-radius: 10px;
		flex-shrink: 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		font-size: 15px;
		background-color: #3b5bfe;
		margin-left: 10px;
		color: white;
	}
</style>