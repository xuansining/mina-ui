<template>
  <div>
    <Switch v-model:value="y" />
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import Switch from "../libs/Switch.vue";
export default {
  setup() {
    const y = ref(false);
    return { y };
  },
  components: {
    Switch: Switch,
  },
};
</script>
