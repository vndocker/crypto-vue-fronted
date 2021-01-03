import Vue from 'vue';
import { Menu, Layout, Slider, Icon, message, Divider } from 'ant-design-vue';
import VueLodash from 'vue-lodash';
import { get, includes, map, random, reduce, set } from 'lodash';

Vue.use(Menu)
  .use(Layout)
  .use(Slider)
  .use(Icon)
  .use(Divider);

Vue.prototype.$message = message;

Vue.use(VueLodash, {
  name: '$_',
  lodash: { map, random, get, reduce, includes, set }
});
