<template>
  <div class="dm-cell">
    <div class="dm-cell-left">
      <template v-if="$slots.title">
        <slot name="title"></slot>
      </template>
      <template v-else>
        <div>{{ title }}</div>
      </template>
    </div>
    <div class="dm-cell-right">
      <template v-if="$slots.content">
        <slot name="content"></slot>
      </template>
      <template v-else>
        <div>{{ content }}</div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String },
    content: { type: String },
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
@use "../common/style/cell.scss";
</style>