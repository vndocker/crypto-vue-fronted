import { LodashStatic } from 'lodash';

declare module 'vue/types/vue' {
  interface Vue {
    $_: LoDashStatic;
  }
}
