<template>
  <div :class="['dm-icon', name]"></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "DmIcon",
  props: {
    name: { type: String, default: "" },
  }
})
</script>