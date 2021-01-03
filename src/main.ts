import Vue from 'vue';
import lodash, { map, random, get, reduce, includes, set } from 'lodash';
import VueLodash from 'vue-lodash';
import AntDesign, { message } from 'ant-design-vue';
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import VueSocketIO from 'vue-socket.io';
import App from './App.vue';
import router from './router';
import store from './store';
import env from './vue.config';
import './class-component-hooks';
import 'ant-design-vue/dist/antd.css';

import socketIOClient from 'socket.io-client';
import sailsIOClient from 'sails.io.js';

Vue.config.productionTip = false;

// Load all ant components
Vue.use(AntDesign);
// Vue.use(VueAxios, axios)

// Vue.use(
//   new VueSocketIO({
//     debug: true,
//     connection: env.SOCKET_URL
//     // vuex: {
//     //     store,
//     //     actionPrefix: 'SOCKET_',
//     //     mutationPrefix: 'SOCKET_'
//     // },
//   })
// );

const io = sailsIOClient(socketIOClient);

// Set some options:
// (you have to specify the host and port of the Sails backend when using this library from Node.js)
io.sails.url = env.SOCKET_URL;
// ...

// Send a GET request to `http://localhost:1337/hello`:
io.socket.get('/hello', function serverResponded(body: any, JWR: any) {
  // body === JWR.body
  console.log('Sails responded with: ', body);
  console.log('with headers: ', JWR.headers);
  console.log('and with status code: ', JWR.statusCode);

  // ...
  // more stuff
  // ...

  // When you are finished with `io.socket`, or any other sockets you connect manually,
  // you should make sure and disconnect them, e.g.:
  io.socket.disconnect();

  // (note that there is no callback argument to the `.disconnect` method)
});

Vue.prototype.$message = message;
Vue.prototype.$test = lodash;
Vue.use(VueLodash, { name: '$_', lodash: { map, random, get, reduce, includes, set } });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
