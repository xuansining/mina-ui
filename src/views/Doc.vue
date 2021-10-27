<template>
  <top-nav></top-nav>
  <div class="content">
    <aside v-if="asideVisible">
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/doc/swich">Switch 组件</router-link>
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
    <main>主内容</main>
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
<style lang="scss">
aside {
  background: rgb(42, 113, 136);
  width: 150px;
  padding: 16px;
  position: fixed;
  padding-top: 70px;
  top: 0;
  left: 0;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
  }
}
</style>