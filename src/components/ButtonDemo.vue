<template>
  <div>
    <h1>示例1</h1>
    <Button> 示例1 </Button>
    <Button theme="link"> 示例2 </Button>
    <Button theme="text"> 示例3 </Button>
    <Button theme="button"> 示例4 </Button>
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
