
<template>
<article class="markdown-body" v-html="content">
</article>
</template>

<script lang="ts">
export default {
  props: {
    content: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.markdown-body p {
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: 20px;
}
</style>