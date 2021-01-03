<template>
  <section class="section-body">
    <div class="flex-item left-section">
      <MarketChart :buy-in="buyIn" :current-value="currentValue" />
    </div>
    <div class="flex-item right-section">
      <MarketChartDetail :buy-in="buyIn" :current-value="currentValue" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MarketChart, MarketChartDetail } from '@/components';
import env from '@/vue.config';

@Component({
  components: {
    MarketChart,
    MarketChartDetail
  }
})
export default class Dashboard extends Vue {
  buyIn = {
    title: 'Buy In',
    value: 2.32,
    unit: 'BTC',
    pairValue: 10000,
    pairUnit: 'USD'
  };
  currentValue = {
    title: 'Current Value',
    value: 11.45,
    unit: 'BTC',
    pairValue: 98890,
    pairUnit: 'USD'
  };
  mounted() {
    console.log('Connect sails socket ...');
    this.$io.sails.connect().on('connect', () => {
      console.log('Sails socket is now connected');
    });

    if (this.$io.socket.isConnected()) {
      this.$io.socket.post('/chat', { message: 'test1 ' });
      window.io.socket.get('/chat', function serverResponded(body: any, JWR: any) {
        // body === JWR.body
        console.log('Sails responded with: ', body);
        console.log('with headers: ', JWR.headers);
        console.log('and with status code: ', JWR.statusCode);
        window.io.socket.post('/chat', { message: 'test1 ' });
        window.io.socket.post('/message', { message: 'test2 ' });
      });

      console.log('subscribe to message');
      this.$io.socket.on('message', (data: any) => {
        console.log('msg--> ', data);
      });

      console.log('subscribe to chat');
      this.$io.socket.on('chat', (data: any) => {
        console.log('chat--> ', data);
      });

      this.$io.socket.get('/chat', function serverResponded(body: any, JWR: any) {
        console.log('Sails responded with: ', body);
        console.log('with headers: ', JWR.headers);
        console.log('and with status code: ', JWR.statusCode);
        window.io.socket.post('/chat', { message: 'test1 ' });
        window.io.socket.post('/message', { message: 'test2 ' });
      });
    }
  }

  destroy() {
    if (this.$io.socket) {
      this.$io.socket.removeAllListeners();
    }
  }
}
</script>

<style scoped lang="less">
.section-body {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.flex-item {
  flex: 1;
}
</style>
