<template>
  <section class="section-body">
    <div class="flex-item left-section">
      <MarketChart :buyIn="buyIn" :currentValue="currentValue" ref="highcharts" />
    </div>
    <div class="flex-item right-section">
      <MarketChartDetail :buyIn="buyIn" :currentValue="currentValue" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MarketChart, MarketChartDetail } from '@/components';

@Component({
  components: {
    MarketChart,
    MarketChartDetail
  }
})
export default class Dashboard extends Vue {
  timer = 0;
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
  //  sockets() {
  //       connect: function () {
  //           console.log('socket connected')
  //       },
  //       customEmit: function (data) {
  //           console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
  //       }
  //   }
  mounted() {
    // this.$socket.on('connect', () => {
    //   console.log('Socket connected');

    //   this.sockets.subscribe('hello', data => {
    //     console.log('subcribe hello: ', data);
    //   });
    //   this.$socket.on('hello', (msg: any) => {
    //     console.log('msg hello: ', msg);
    //   });
    // });

    this.timer = setInterval(() => {
      // this.buyIn = {
      //   title: 'Buy In',
      //   value: this._.random(51, 52),
      //   unit: 'BTC',
      //   pairValue: this._.random(1000, 10000),
      //   pairUnit: 'USD',
      // };
      // this.currentValue = {
      //   title: 'Current Value',
      //   value: this._.random(52, 53),
      //   unit: 'BTC',
      //   pairValue: this._.random(10, 12),
      //   pairUnit: 'USD',
      // };
      console.log('sent hello');
      // this.$socket.emit('hello', {
      //   date: Date.now()
      // });
    }, 1000);
  }

  destroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    // this.sockets.unsubscribe('hello');
    // this.$socket.disconnect();
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
