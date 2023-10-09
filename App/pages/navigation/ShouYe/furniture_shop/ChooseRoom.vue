<template>
	<view style="display: flex;flex-direction: column;background-color: #f6f6f6;">


		<view style="display: flex;flex-direction: row;height: 85vh;width: 100%;">
			<view style="width: 40px;flex-shrink: 0;display: flex;flex-direction: column;">
				<a  href="uniwebview://shuping">
					<image @click="back()" src="@/static/login/back.png" 
						style="width: 30px;margin-top: 20px;border-radius: 7px;margin-left: 10px;" mode="widthFix"></image>
				</a>
				
			</view>
			<canvas @touchstart="touchstart" 
				style="width: 80%;z-index: 1;height: 100%;" canvas-id="firstCanvas" id="firstCanvas"></canvas>
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
				</view>
			</view>
			<view v-else style="display: flex;flex-direction: row;justify-content: center;align-items: center;width: 100%;">
				
				<view style="background-color: #3b5bfe;width: 100px;margin-top: 10px;height: 40px;display: flex;align-items: center;justify-content: center;border-radius: 5px;flex-shrink: 0;font-size: 16px;color: white" @click="start_qiehuan">
					确定
				</view>
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
				nowList: 0,
				draw_deatil: {
					start: {},
					end: {}
				},
				store_draw_detail: [],
				store_draw_detail_length: 0,
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
			start_qiehuan(){
				if(this.now_room==-1){
					uni.showToast({
						title:'请选择房间!',
						icon:'none'
					});
					return;
				}
				var tempData = uni.getStorageSync('ChooseRoom');
				var temp = {
					rooms:[this.now_room],
					...tempData
				}
				
				uni.showLoading({
					title:'计算中'
				});

				if(tempData.IsFloor==true){
					console.log('floor');
					window.location.href = "uniwebview://FLOOR"+JSON.stringify(temp);
				}else{
					// 只能修改一个房间
					temp.rooms = this.now_room;
					console.log(temp);
					window.location.href = "uniwebview://BiZhi"+JSON.stringify(temp);
				}
				// uni.navigateBack();
				setTimeout(function asd(){
					uni.hideLoading();
				},1000);
				
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
					this.area = Math.floor(this.root.house.House.area * 100) / 100;
				}
			},
			CalDistance(point1,point2){
				  const xDiff = point2.x - point1.x;
				  const yDiff = point2.y - point1.y;
				  const distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
				  return distance;
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
			touchstart(e) {
				console.log(e.touches[0]);
				// 打标签操作
				this.now_room = this.GetRoomId(e.touches[0]);
				console.log(this.now_room);
				this.change_toolbox(-1);

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

						return i;
					}
				}
				return -1;
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
					this.xuanzhuan_x_y();
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
				this.pingyi_x = this.screenWidth * 0.25 - ((maxx + minx) / 2);
				this.fangda_x = (this.screenWidth * 0.4) / (maxx - minx);
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
		min-width: 60px;
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