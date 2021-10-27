<template>
  <button
    class="mina-switch"
    :class="{ 'mina-checked': value }"
    @click="troggle"
  >
    <span></span>
  </button>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const troggle = () => {
      context.emit("update:value", !props.value);
    };
    return { troggle };
  },
};
</script>
<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.mina-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 250ms;
  }
  &.mina-checked {
    background: #1890ff;
  }
  &.mina-checked > span {
    left: calc(100% - #{$h2} - 2px);
  }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.mina-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
