<template>
  <div>
    <Switch v-model:value="bool" />
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import Switch from "../libs/Switch.vue";
export default {
  setup() {
    const bool = ref(false);
    return { bool };
  },
  components: {
    Switch: Switch,
  },
};
</script>
