<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <h1>示例2</h1>
  <Button size="big">大的btn</Button>
  <Button>平平无奇</Button>
  <Button size="small">小的btn</Button>
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
