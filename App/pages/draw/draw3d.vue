<template>
	<view :data="data"  class="content" :change:data="three.change_data">
		<view id="threeView"></view>
		<!-- #ifdef APP-PLUS || H5 -->
		<view id="three" class="three" @click="three.onClick"></view>
		<!-- #endif -->
		<!-- #ifndef APP-PLUS || H5 -->
		<view>非 APP、H5 环境不支持</view>
		<!-- #endif -->
	</view>
</template>

<script>
import { render } from "vue"
	// 原先的script，这里被称为service层 
	export default {
		data() {
			return { 
				data:null,
				
			}
		},
		mounted() {
			
			this.data = uni.getStorageSync('result_file');
			console.log(this.data);
		},
		methods: {
			
		}
	}
</script>

<script module="three" lang="renderjs">
	const THREE = require('static/three/build/three.min.js')
	import {
		OrbitControls
	} from 'static/three/examples/jsm/controls/OrbitControls.js'
	const ThreeBSP = require('static/three/build/ThreeBSP.js')(THREE)
	var renderer;
	var scene;
	var camera;
	var mesh;
	var controls;
	var Colors = {
		red: 0xf25346,
		white: 0xd8d0d1,
		pink: 0xF5986E,
		brown: 0x59332e,
		brownDark: 0x23190f,
		blue: 0x68c3c0,
	};
	var matArrayA = []; //内墙
	var matArrayB = []; //外墙
	export default {
		data() {
			return {
				housedata:null
			}
		},
		mounted() {
			this.initThree();
			this.createControls();

		},
		methods: {
			change_data(e){
				console.log('----------')
				this.housedata = e;
				console.log(e);
				this.createLayout();
				this.createWallMaterail();
				this.createFloor();
				// this.draw_All_Door();
			},
			createControls() {
				controls = new OrbitControls(camera, renderer.domElement)
			},
			get_wallspoint(e){
				// 根据墙的id返回xy坐标
				for(var i=0;i<this.housedata.WallPoints.length;i++){
					if(this.housedata.WallPoints[i].id==e){
						return this.housedata.WallPoints[i];
					}
				}
			},
			draw_All_Door(){
				this.ctx.restore();
				// 画出门
				for(var i=0;i<this.housedata.Doors.length;i++){
			
					var text = '单开门';
					if(this.housedata.Doors[i].category==1){
						text = '双开门'
					}else if(this.housedata.Doors[i].category==2){
						text = '子母门'
					}else if(this.housedata.Doors[i].category==3){
						text = '移门'
					}
					var temp_start = this.get_Doorspoint(this.housedata.Doors[i].start_point);
					var temp_end = this.get_Doorspoint(this.housedata.Doors[i].end_point);
			
				}
				this.ctx.save();
				// this.ctx.draw();
			},
			get_Doorspoint(e){
				// 根据墙的id返回xy坐标
				for(var i=0;i<this.housedata.DoorPoints.length;i++){
					if(this.housedata.DoorPoints[i].id==e){
						return this.housedata.DoorPoints[i];
					}
				}
			},
			//创建墙纹理
			createWallMaterail() {
				matArrayA.push(new THREE.MeshPhongMaterial({
					color: 0xafc0ca
				})); //前  0xafc0ca :灰色
				matArrayA.push(new THREE.MeshPhongMaterial({
					color: 0xafc0ca
				})); //后
				matArrayA.push(new THREE.MeshPhongMaterial({
					color: 0xd6e4ec
				})); //上  0xd6e4ec： 偏白色
				matArrayA.push(new THREE.MeshPhongMaterial({
					color: 0xd6e4ec
				})); //下
				matArrayA.push(new THREE.MeshPhongMaterial({
					color: 0xafc0ca
				})); //左    0xafc0ca :灰色
				matArrayA.push(new THREE.MeshPhongMaterial({
					color: 0xafc0ca
				})); //右

				matArrayB.push(new THREE.MeshPhongMaterial({
					color: 0xafc0ca
				})); //前  0xafc0ca :灰色
				matArrayB.push(new THREE.MeshPhongMaterial({
					color: 0x9cb2d1
				})); //后  0x9cb2d1：淡紫
				matArrayB.push(new THREE.MeshPhongMaterial({
					color: 0xd6e4ec
				})); //上  0xd6e4ec： 偏白色
				matArrayB.push(new THREE.MeshPhongMaterial({
					color: 0xd6e4ec
				})); //下
				matArrayB.push(new THREE.MeshPhongMaterial({
					color: 0xafc0ca
				})); //左   0xafc0ca :灰色
				matArrayB.push(new THREE.MeshPhongMaterial({
					color: 0xafc0ca
				})); //右

			},
			createLayout() {
				
				for(var i=0;i<this.housedata.Walls.length;i++){
					var temp_start = this.get_wallspoint(this.housedata.Walls[i].start_point);
					var temp_end = this.get_wallspoint(this.housedata.Walls[i].end_point);
					console.log(temp_start);
					console.log(temp_end);
					console.log('结束');
					
					var point1 = new THREE.Vector3(temp_start.x*100,200,temp_start.y*100);
					var point2 = new THREE.Vector3(temp_end.x*100,0,temp_end.y*100);
					this.createMyWall(point1,point2,matArrayA);
				}
				

			},
			createMyWall(point1,point2,material){
				var diagonal = new THREE.Vector3();
				diagonal.subVectors(point2, point1);
				var length = diagonal.length();
				var direction = diagonal.normalize();
				
				var geometry = new THREE.BoxGeometry(Math.abs(point1.x-point2.x), Math.abs(point1.y-point2.y), Math.abs(point1.z-point2.z));
				
				var center = new THREE.Vector3();
				center.addVectors(point1, diagonal.multiplyScalar(0.5));
			
				var mesh = new THREE.Mesh(geometry, material);
				mesh.position.copy(center);
				scene.add(mesh);
			
			},
			//返回墙对象
			returnWallObject(width, height, depth, angle, material, x, y, z) {
				var cubeGeometry = new THREE.BoxGeometry(width, height, depth);
				var cube = new THREE.Mesh(cubeGeometry, material);
				cube.position.x = x;
				cube.position.y = y;
				cube.position.z = z;
				cube.rotation.y += angle * Math.PI;
				return cube;
			},
			//墙上挖门，通过两个几何体生成BSP对象
			createResultBsp(bsp, less_bsp, mat) {
				switch (mat) {
					case 1:
		 			var material = new THREE.MeshPhongMaterial({
							color: 0x9cb2d1,
							specular: 0x9cb2d1,
							shininess: 30,
							transparent: true,
							opacity: 1
						});
						break;
					case 2:
						var material = new THREE.MeshPhongMaterial({
							color: 0xafc0ca,
							specular: 0xafc0ca,
							shininess: 30,
							transparent: true,
							opacity: 1
						});
						break;
					default:
				}
				var sphere1BSP = new ThreeBSP(bsp);
				var cube2BSP = new ThreeBSP(less_bsp); //0x9cb2d1 淡紫,0xC3C3C3 白灰 , 0xafc0ca灰
				var resultBSP = sphere1BSP.subtract(cube2BSP);
				var result = resultBSP.toMesh(material);
				result.material.flatshading = THREE.FlatShading;
				result.geometry.computeFaceNormals(); //重新计算几何体侧面法向量
				result.geometry.computeVertexNormals();
				result.material.needsUpdate = true; //更新纹理
				result.geometry.buffersNeedUpdate = true;
				result.geometry.uvsNeedUpdate = true;
		 	scene.add(result);
			},
			createFloor() {
				var loader = new THREE.TextureLoader();
				loader.load("static/images/floor.jpg", function(texture) {
					texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
					texture.repeat.set(10, 10);
					var floorGeometry = new THREE.BoxGeometry(2000, 2000, 1);
					var floorMaterial = new THREE.MeshBasicMaterial({
						map: texture,
						side: THREE.DoubleSide
					});
					var floor = new THREE.Mesh(floorGeometry, floorMaterial);
					floor.position.y = -0.5;
			 	floor.rotation.x = Math.PI / 2;
					scene.add(floor);
				});

				//茶色：0x58ACFA   透明玻璃色：0XECF1F3
				var glass_material = new THREE.MeshBasicMaterial({
					color: 0XECF1F3
				});
				glass_material.opacity = 0.4;
				glass_material.transparent = true;

			},
			//创建墙
			createCubeWall(width, height, depth, angle, material, x, y, z) {
				var cubeGeometry = new THREE.BoxGeometry(width, height, depth);
				var cube = new THREE.Mesh(cubeGeometry, material);
				cube.position.x = x;
				cube.position.y = y;
				cube.position.z = z;
				cube.rotation.y += angle * Math.PI; //-逆时针旋转,+顺时针
				scene.add(cube);
			},
			initThree() {
				// 如果返回的不是未定义，说明threejs成功引入
				console.log('打印场景API', THREE.Scene);
				/* 创建场景对象Scene */
				scene = new THREE.Scene();
				/*
				    光源设置
				 */
				//  点光源--光照强度
				// var point = new THREE.PointLight(0xffffff);
				// point.position.set(0, 3500, 0); // 点光源位置
				// scene.add(point); // 点光源添加到场景中
				// 环境光
				var ambient = new THREE.AmbientLight(0xffffff);
				scene.add(ambient);
				/*
				    相机设置
				 */
				var width = window.innerWidth; // 窗口宽度
				var height = window.innerHeight; // 高度
				var k = width / height; // 窗口宽高比
				var s = 1000; // 三维场景显示范围控制系数，系数越大，显示的范围越大
				// 创建相机对象（正射投影）
				camera = new THREE.PerspectiveCamera(45, k, 1, 10000);
				camera.position.set(0, 3500, 0); // 设置相机位置
				camera.lookAt(scene.position); // 设置相机的方向（指向场景对象）
				/*
				    创建渲染器对象
				 */
				renderer = new THREE.WebGLRenderer({
					antialias: true
				});
				renderer.setSize(width, height); // 设置渲染区域尺寸
				renderer.setClearColor(0xb9d3ff, 1); // 设置背景颜色
				const element = document.getElementById('threeView')
				element.appendChild(renderer.domElement); // body元素中插入canvas对象
				// 执行渲染操作，指定场景，相机作为参数
				renderer.render(scene, camera);
				console.log(1);
				this.render();
			},
			// 动画
			render() {
				let that = this;
				requestAnimationFrame(function() {
					that.render();
				});
				renderer.render(scene, camera); //执行渲染操作
			}
		}
	}
</script>

<style>
	.content {
		margin: 0;
		overflow: hidden;
	}

	.three {
		width: 100%;
		height: 50px;
	}
</style>
