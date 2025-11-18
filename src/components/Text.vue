<template>
  <component
    :is="as"
    class="Nui-text"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  as?: 'p' | 'span' | 'li'
}>()

const as = props.as ?? 'p'
</script>

<style>
.Nui-text {
  font-family: var(--px-font-family-body);
  font-size: var(--px-font-size-body);
  font-weight: var(--px-font-weight-normal);
  line-height: var(--px-line-height-body);
}
</style>
