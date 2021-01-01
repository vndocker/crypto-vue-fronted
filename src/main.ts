import Vue from 'vue';
import lodash from 'lodash';
import App from './App.vue';
import router from './router';
import store from './store';
import AntDesign, { message } from 'ant-design-vue';
import './class-component-hooks';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;

// Load all ant components
Vue.use(AntDesign);

Vue.prototype.$message = message;
Vue.prototype.$_ = lodash;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
