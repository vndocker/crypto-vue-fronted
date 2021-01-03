<template>
  <div class="container">
    <div class="buy-in-container">
      <div class="descriptor" />
      <div class="content">
        <div class="title">Buy In</div>
        <div class="subtitle">
          <div class="text-value">{{ $_.get(this.buyIn, 'value', 0) }} {{ $_.get(this.buyIn, 'unit', '') }}</div>
          <div class="text-value">{{ buyInPairValueText }}</div>
        </div>
      </div>
    </div>
    <div class="current-value-container">
      <div class="descriptor" />
      <div class="content">
        <div class="title">Current Value</div>
        <div class="subtitle">
          <div class="text-value">{{ $_.get(this.currentValue, 'value', 0) }} {{ $_.get(this.currentValue, 'unit', '') }}</div>
          <div class="text-value">{{ currentPairValueText }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { formatCurrency, formatCurrencyZeroFaction } from '@/utils/common.utils';

@Component({})
export default class MarketPieChart extends Vue {
  @Prop() private buyIn!: MarketPairToken;
  @Prop() private currentValue!: MarketPairToken;

  get currentPairValueText() {
    return formatCurrencyZeroFaction(this._.get(this.currentValue, 'pairValue', 0), this._.get(this.currentValue, 'pairValueUnit', 'USD'));
  }
  get buyInPairValueText() {
    return formatCurrencyZeroFaction(this._.get(this.buyIn, 'pairValue', 0), this._.get(this.buyIn, 'pairValueUnit', 'USD'));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
a {
  color: #42b983;
}
.container {
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-evenly;
  .content {
    margin-left: 10px;
    min-width: 300px;
  }
  .title {
    font-weight: 600;
    font-size: 1.5em;
    color: rgba(0, 0, 0, 0.8);
  }
  .subtitle {
    display: flex;
    flex-direction: row;
    font-size: 1.3em;
    color: rgba(0, 0, 0, 0.6);
    justify-content: space-between;
  }
  .text-value {
    flex: 1;
  }
}

.buy-in-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  .descriptor {
    width: 4px;
    height: 50px;
    background-image: linear-gradient(180deg, #3bcad0, #2660cb);
  }
}

.current-value-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  .descriptor {
    width: 4px;
    height: 50px;
    background-image: linear-gradient(180deg, #3ecc09, #64df07);
  }
}
</style>
<style lang="less"></style>
