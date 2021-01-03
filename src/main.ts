import Vue from 'vue';
import lodash, { map, random, get, reduce, includes, set } from 'lodash';
import VueLodash from 'vue-lodash';
import AntDesign, { message } from 'ant-design-vue';
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import VueSocketIO from 'vue-socket.io';
import App from './App.vue';
import router from './router';
import store from './store';
import env from './vue.config';
import './class-component-hooks';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;

// Load all ant components
Vue.use(AntDesign);
// Vue.use(VueAxios, axios)

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: env.SOCKET_URL
    // vuex: {
    //     store,
    //     actionPrefix: 'SOCKET_',
    //     mutationPrefix: 'SOCKET_'
    // },
  })
);

Vue.prototype.$message = message;
Vue.prototype.$test = lodash;
Vue.use(VueLodash, { name: '$_', lodash: { map, random, get, reduce, includes, set } });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
