<template>
  <div class="layout">
    <top-nav :toggleMenuButtonVisible="true" class="nav"></top-nav>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/getstart">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
import TopNav from "../components/TopNav.vue";
export default {
  components: {
    TopNav,
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    return { asideVisible };
  },
};
</script>
<style lang="scss" scoped>
$aside-bg: #d6d0d7;
$aside-index: 10;
.layout {
  background: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  z-index: $aside-index;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
  }
}
aside {
  background: $aside-bg;
  width: 150px;
  padding: 16px 0;
  position: fixed;
  z-index: 8;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  > ol {
    > li {
      padding: 4px 0;
      > a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
        text-decoration-line: none;
        position: relative;

        &:hover {
          top: 3px;
          background: #626277;
          color: white;
        }
      }

      .router-link-active {
        background: #626277;
        color: white;
      }
    }
  }
}
main {
  overflow: auto;
}
</style>