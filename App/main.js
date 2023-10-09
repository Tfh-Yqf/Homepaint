import Vue from 'vue'
import App from './App'
import request from './utils/request'


Vue.prototype.request = request.request //挂载到全局
Vue.config.productionTip = false



App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

Vue.prototype.height_content = uni.getSystemInfoSync().screenHeight - 80;

Vue.prototype.screen_width = uni.getWindowInfo().windowWidth;
Vue.prototype.screen_height= uni.getWindowInfo().windowHeight;

// Vue.prototype.server_url='http://120.24.238.88:8146';
// Vue.prototype.server_url='/host/';
// Vue.prototype.server_url='http://127.0.0.1:8095/';
Vue.prototype.server_url='/api/';

Vue.mixin({
	methods: {
		setData: function(obj, callback) {
			let that = this;
			const handleData = (tepData, tepKey, afterKey) => {
				tepKey = tepKey.split('.');
				tepKey.forEach(item => {
					if (tepData[item] === null || tepData[item] === undefined) {
						let reg = /^[0-9]+$/;
						tepData[item] = reg.test(afterKey) ? [] : {};
						tepData = tepData[item];
					} else {
						tepData = tepData[item];
					}
				});
				return tepData;
			};
			const isFn = function(value) {
				return typeof value == 'function' || false;
			};
			Object.keys(obj).forEach(function(key) {
				let val = obj[key];
				key = key.replace(/\]/g, '').replace(/\[/g, '.');
				let front, after;
				let index_after = key.lastIndexOf('.');
				if (index_after != -1) {
					after = key.slice(index_after + 1);
					front = handleData(that, key.slice(0, index_after), after);
				} else {
					after = key;
					front = that;
				}
				if (front.$data && front.$data[after] === undefined) {
					Object.defineProperty(front, after, {
						get() {
							return front.$data[after];
						},
						set(newValue) {
							front.$data[after] = newValue;
							that.$forceUpdate();
						},
						enumerable: true,
						configurable: true
					});
					front[after] = val;
				} else {
					that.$set(front, after, val);
				}
			});
			isFn(callback) && this.$nextTick(callback);
		}
	}
});