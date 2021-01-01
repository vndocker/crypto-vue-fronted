<template>
  <div style="border: 1px solid gray; height: 50px, width: 50px">
    -----{{ $_.get(buyIn, 'value', '') }} {{ $_.get(buyIn, 'unit', '') }} -----{{ $_.get(currentValue, 'value', '') }}
    {{ $_.get(currentValue, 'unit', '') }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MarketPieChart extends Vue {
  @Prop() private buyIn!: MarketToken;
  @Prop() private currentValue!: MarketToken;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
