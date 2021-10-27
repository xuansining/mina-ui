<template>
  <div>
    <h1>示例1</h1>
    <Button @click="onClick" @focus="onClick" @mouseover="onClick" :size="size">
      我是示例一
    </Button>
  </div>
</template>
<script lang="ts">
import Button from "../libs/Button.vue";
export default {
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    let size = "small";
    return { onClick, size };
  },
  components: {
    Button,
  },
};
</script>
<style lang="scss">
</style>
