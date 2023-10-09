<template>
	<view class="content" >
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
			
			// this.data = uni.getStorageSync('result_file');
			uni.showLoading({
				title:'加载中...'
			});
			setTimeout(function(){
				uni.hideLoading();
			},2000);
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
	

	import {
		OBJLoader
	} from "static/three/examples/jsm/loaders/OBJLoader.js";
	


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
				result_file: null
			}
		},
		mounted() {
			this.initThree();
			this.createControls();		
			this.loadOBJ();
		},
		methods: {

			init_data(e){
				this.result_file = e;
			},
			loadOBJ() {
				// console.log('-------------------')
				var that = this;
				let loader = new OBJLoader();
				loader.setCrossOrigin("Anonymous");
				loader.load('static/model1/model.obj', function(
						Myobj) {
					
						// console.log('////////////////////////')
						that.msg = null;
						// 加载纹理贴图
						let texture = new THREE.TextureLoader().load(
							'static/model1/model_m2.jpg',
							function() {
								that.render(); // 加载成功后重新调用渲染函数
							});
					
						// 给 OBJ 模型设置纹理贴图
						for(var i=0;i<Myobj.children.length;i++)
							Myobj.children[i].material = new THREE.MeshBasicMaterial({
								map: texture
							});
					
						// 将 OBJ 模型添加到场景中
						scene.add(Myobj);
					
						// 设置 OBJ 模型居中
						// Myobj.children[0].geometry.center();
					
						// 设置 OBJ 模型缩放大小
						for(var i=0;i<Myobj.children.length;i++)
							Myobj.children[i].scale.set(2,2,2);	
						object.rotation.z = Math.PI;
					})


			},
			createControls() {
				controls = new OrbitControls(camera, renderer.domElement)
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
				camera.position.set(3500, -3500, 1000); // 设置相机位置
				camera.lookAt(scene.position); // 设置相机的方向（指向场景对象）
				/*
				    创建渲染器对象
				 */
				renderer = new THREE.WebGLRenderer({
					antialias: true
				});
				renderer.setSize(width, height); // 设置渲染区域尺寸
				renderer.setClearColor(0x6294eb, 1); // 设置背景颜色
				const element = document.getElementById('threeView')
				element.appendChild(renderer.domElement); // body元素中插入canvas对象
				// 执行渲染操作，指定场景，相机作为参数
				renderer.render(scene, camera);

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
