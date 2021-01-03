<template>
  <a-layout id="app-layout" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" :default-selected-keys="['dashboard']" mode="inline">
        <a-menu-item key="dashboard" @click="$router.replace('/')">
          <a-icon type="pie-chart" />
          <span>Dashboard</span>
        </a-menu-item>
        <a-sub-menu key="user">
          <span slot="title"><a-icon type="user" /><span>User</span></span>
          <a-menu-item key="3"> Tom </a-menu-item>
          <a-menu-item key="4"> Bill </a-menu-item>
          <a-menu-item key="5"> Alex </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="team">
          <span slot="title"><a-icon type="team" /><span>Team</span></span>
          <a-menu-item key="6"> Team 1 </a-menu-item>
          <a-menu-item key="8"> Team 2 </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="file" @click="$router.push('/about')">
          <a-icon type="file" />
          <span>File</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content style="margin: 16px">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <header>
            <h2 class="title">Overview</h2>
            <a-divider class="divider" />
          </header>
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center"> Made with ❤️ | Team ©2020 </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Dashboard extends Vue {
  collapsed = true;
}
</script>

<style lang="less">
#app-layout .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.title {
  font-weight: bold;
}
.divider {
  height: 1.5px;
}
</style>
