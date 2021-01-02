declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare let $_: any;

interface MarketToken {
  title: string;
  value: number;
  unit: string;
  pairValue: number;
  pairUnit: string;
}
