<template>
  <article class="markdown-body" v-html="md"></article>
</template>
<script>
import md from "../markdown/instro.md";
export default {
  data() {
    return {
      md,
    };
  },
};
</script>