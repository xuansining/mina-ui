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

  <h1>示例2</h1>
  <h2>一句代码搞定Dialog</h2>
  <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import Dialog from "../libs/Dialog.vue";
import Button from "../libs/Button.vue";
import { ref, h } from "vue";
import { openDialog } from "../libs/openDialog";
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
      console.log("ok");

      return true;
    };
    const f2 = () => {
      console.log("cancel");

      return true;
    };
    const showDialog = () => {
      openDialog({
        title: h("strong", {}, "标题"),
        content: "你好",
        onOk: f1,
        onCancel: f2,
        onClickOverlayClose: true,
      });
    };
    return { x, toggle, f1, f2, showDialog };
  },
};
</script>
