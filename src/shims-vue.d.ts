declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

interface MarketPairToken {
  title: string;
  value: number;
  unit: string;
  pairValue: number;
  pairUnit: string;
}

interface Window {
  io: any /* Refs: sailjs/assets/dependencies/sails.io.js */;
}
