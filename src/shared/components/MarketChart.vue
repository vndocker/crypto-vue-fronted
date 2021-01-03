<template>
  <div class="market-pie-chart">
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Chart } from 'highcharts-vue';
import { chartConfig } from './data';
import { formatCurrency, formatCurrencyZeroFaction } from '@/utils/common.utils';

@Component({
  components: {
    highcharts: Chart
  }
})
export default class MarketPieChart extends Vue {
  @Prop() private buyIn!: MarketPairToken;
  @Prop() private currentValue!: MarketPairToken;

  get chartOptions() {
    return {
      ...chartConfig,
      title: {
        useHTML: true,
        text: `<div class="inner-chart-container">
        <div class="chart-inner-text current-value-text">
        ${this._.get(this.currentValue, 'value', '')} ${this._.get(this.currentValue, 'unit', '')}
          </div>
          <div class="current-pair-value-text">${this.getCurrentPairValueText()}</div>
          <div class="chart-inner-text buy-in-value-text">${this.getCurrentValuePairText()}</div>
          <div class="chart-inner-text buy-in-title">Buy In</h1>
      </div>`,
        align: 'center',
        style: {
          'text-align': 'center'
        },
        verticalAlign: 'middle',
        y: 16,
        x: 0
      },
      series: [
        {
          type: 'pie',
          name: 'Market',
          innerSize: '80%',
          data: [
            {
              name: 'Buy In',
              y: this._.get(this.buyIn, 'value', 0),
              dataLabels: {
                enabled: false
              }
            },
            {
              name: 'Current Value',
              y: this._.get(this.currentValue, 'value', 0),
              dataLabels: {
                enabled: false
              }
            }
          ]
        }
      ]
    };
  }

  getCurrentPairValueText() {
    return formatCurrency(this._.get(this.currentValue, 'pairValue', 0), this._.get(this.currentValue, 'pairValueUnit', 'USD'));
  }
  getCurrentValuePairText() {
    return formatCurrencyZeroFaction(this._.get(this.buyIn, 'pairValue', 0), this._.get(this.buyIn, 'pairValueUnit', 'USD'));
  }
}
</script>

<style scoped lang="less">
a {
  color: #42b983;
}
</style>
<style lang="less">
@import './highcharts.css';
@import '../styles/screens.less';
.market-pie-chart {
  @media @phone {
    display: none;
  }
  .inner-chart-container {
    text-align: center;
    margin: 20px;
    padding-top: 50px;
    border-radius: 320px;
    height: 250px;
  }
  .highcharts-color-0 {
    fill: url(#linear1);
    stroke-width: 5;
  }
  .highcharts-color-1 {
    fill: url(#linear2);
    stroke-width: 5;
  }
  .current-pair-value-text {
    font-weight: 600;
    font-size: 1.5em;
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 1em;
  }
  .current-value-text {
    margin: 1em 0;
  }
  .chart-inner-text {
    opacity: 0.7;
    line-height: 1.5em;
  }
}
</style>
