<template>
  <router-view></router-view>
</template>

<script>
import { provide, ref } from "vue";
import { router } from "./router";
export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    console.log(width);
    const asideVisible = ref(width <= 500 ? false : true);
    provide("asideVisible", asideVisible);
    router.afterEach((route) => {
      if (width <= 500) {
        asideVisible.value = false;
      }
    });
  },
};
</script>
