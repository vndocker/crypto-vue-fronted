declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

interface MarketToken {
  title: string;
  value: number;
  unit: string;
  pairValue: number;
  pairUnit: string;
}
