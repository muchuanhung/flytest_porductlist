import Vue from 'vue'
import App from './App.vue'
import router from './router'

//新增bootstrap全局設定
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
//新增sass全局設定
import './assets/stylesheets/scss/main.scss';

//新增字型樣式
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
