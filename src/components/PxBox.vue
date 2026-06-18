<template>
  <component
    :is="as ?? 'div'"
    :class="[
      'Px-box',
      {'Px-box--full-width': fullWidth},
      {'Px-box--clickable': clickable}
    ]">
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  as?: 'div' | 'section' | 'article' | 'aside' | 'nav' | 'main' | 'header' | 'footer'
  clickable?: boolean
  fullWidth?: boolean
}>()
</script>

<style scoped>
.Px-box {
  position: relative;
  box-sizing: border-box;
  width: fit-content;
  padding: var(--px-box-padding);
  background: var(--px-box-default-bg);
  border-radius: var(--px-border-radius);
  box-shadow: var(--px-box-shadow);
}

.Px-box--full-width    { width: 100%; }

.Px-box--clickable {
  cursor: pointer;

  &:hover {
    box-shadow: var(--px-box-shadow-hover);
  }
}
</style>
