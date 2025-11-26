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
