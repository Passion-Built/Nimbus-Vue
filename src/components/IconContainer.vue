<template>
  <div :class="['Px-icon-container', {'Px-icon-container--clickable': isClickable}]">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  isClickable?: boolean
}>()
</script>

<style>
:root {
  --px-icon-container-bg: #eeeeee;
  --px-icon-container-shadow: 4px 4px 6px #CACACB, -4px -4px 6px #f6f6f6;
  --px-icon-container-shadow-hover: inset 4px 4px 4px #CACACB, inset -4px -4px 4px #f6f6f6;
  --px-icon-container-shadow-active: inset 2px 2px 2px #CACACB, inset -2px -2px 2px #f6f6f6;
}

.Px-icon-container {
  background-color: var(--px-icon-container-bg);
  height: var(--px-space-400);
  width: var(--px-space-400);
  padding: var(--px-space-050);
  border-radius: 50%;
  padding: var(--px-space-100);
  box-shadow: var(--px-icon-container-shadow);
}

.Px-icon-container--clickable {
  cursor: pointer;

  &:hover {
    box-shadow: var(--px-icon-container-shadow-hover);
  }

  &:active {
    box-shadow: var(--px-icon-container-shadow-active);
  }
}
</style>
