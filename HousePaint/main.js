import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

Vue.prototype.height_content = uni.getSystemInfoSync().screenHeight - 80;

Vue.prototype.server_url='http://120.24.238.88:8146';


