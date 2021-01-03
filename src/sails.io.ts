import Vue from 'vue';
import env from './vue.config';

if (window.io) {
  if (env.NODE_ENV === 'development') {
    window.io.sails.url = env.SOCKET_URL;
  }
  window.io.sails.autoConnect = false;
  window.io.sails.reconnection = true;
  window.io.sails.environment = env.NODE_ENV === 'staging' ? 'development' : env.NODE_ENV;
  Vue.prototype.$io = window.io;
  window.io.socket.on('message', function(data: any) {
    console.log('On message data', data);
  });
}
