<template>
  <a-layout id="app-layout" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" :default-selected-keys="['dashboard']" mode="inline">
        <a-sub-menu
          v-for="menu in menuList"
          :key="menu.key"
          :disabled="$route.path === menu.path"
          @titleClick="menu.path && $router.replace(menu.path)"
        >
          <span v-if="menu.title" slot="title"
            ><a-icon :type="menu.icon" />
            <span>{{ menu.title }}</span>
          </span>
          <a-menu-item v-for="subMenu in menu.subMenu" :key="subMenu.key" @click="$router.replace(subMenu.path)">
            <a-icon v-if="subMenu.icon" :type="subMenu.icon" />
            <span>{{ subMenu.title }}</span>
          </a-menu-item>
        </a-sub-menu>
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
  menuList = [
    {
      menuKey: 'at-glance',
      path: '/',
      title: 'Dashboard',
      icon: 'pie-chart',
      subMenu: []
    },
    {
      menuKey: 'user',
      title: 'User',
      icon: 'user',
      subMenu: [
        {
          key: 'team-01',
          path: '/team-01',
          title: 'Team 1'
        },
        {
          key: 'team-02',
          path: '/team-02',
          title: 'Team 2'
        }
      ]
    },
    {
      menuKey: 'team',
      title: 'Team',
      icon: 'team',
      subMenu: [
        {
          key: 'user-01',
          path: '/user-01',
          title: 'Tom'
        },
        {
          key: 'user-02',
          path: '/user-02',
          title: 'Bill'
        },
        {
          key: 'user-03',
          path: '/user-03',
          title: 'Alex'
        }
      ]
    }
  ];
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
