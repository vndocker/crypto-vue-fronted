<template>
  <section class="section-body">
    <div class="flex-item left-section">
      <MarketPieChart :buyIn="buyIn" :currentValue="currentValue" />
    </div>
    <div class="flex-item right-section"></div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MarketPieChart } from '@/components';

@Component({
  components: {
    MarketPieChart
  }
})
export default class Dashboard extends Vue {
  buyIn = {
    title: 'Buy In',
    value: 11.45,
    unit: 'BTC',
    pairValue: 98890,
    pairUnit: 'USD'
  };
  currentValue = {
    title: 'Current Value',
    value: 25000,
    unit: '$',
    pairValue: 98890,
    pairUnit: 'USD'
  };
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
