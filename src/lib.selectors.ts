import Vue from "vue";
import { Divider, Icon, Layout, Menu, message, Slider } from "ant-design-vue";
import VueLodash from "vue-lodash";
import {
  first,
  get,
  includes,
  last,
  map,
  merge,
  random,
  reduce,
  set,
  union,
  unionBy
} from "lodash";

Vue.use(Menu)
  .use(Layout)
  .use(Slider)
  .use(Icon)
  .use(Divider);

Vue.prototype.$message = message;

Vue.use(VueLodash, {
  name: "$_",
  lodash: {
    //
    map,
    random,
    get,
    reduce,
    includes,
    set,
    first,
    last,
    union,
    merge,
    unionBy
  }
});
