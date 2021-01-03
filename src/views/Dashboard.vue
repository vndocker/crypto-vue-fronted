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
import { MarketChart, MarketChartDetail } from '@/shared/components';
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
  created() {
    console.log('Connect sails socket ...');
    this.$io.sails.connect().on('connect', () => {
      console.log('Sails socket is now connected');
      if (this.$io.socket && this.$io.socket.isConnected()) {
        console.log('subscribe to market');
        this.$io.socket.on('socket.market.data.update', (message: { data: MarketPairToken[] }) => {
          console.log('New socket update data', message.data);
          this.currentValue = this.$_.first(message.data);
          this.buyIn = this.$_.last(message.data);
        });
      }
    });
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
