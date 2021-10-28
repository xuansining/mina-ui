<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog
    v-model:visible="x"
    :onClickOverlayClose="false"
    :onOk="f1"
    :onCancel="f2"
  >
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
    <template v-slot:content>
      <p>hi.................</p>
      <p>hi.................</p>
      <p>hi.................</p>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Dialog from "../libs/Dialog.vue";
import Button from "../libs/Button.vue";
import { ref } from "vue";
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return true;
    };
    const f2 = () => {
      return false;
    };
    return { x, toggle, f1, f2 };
  },
};
</script>
