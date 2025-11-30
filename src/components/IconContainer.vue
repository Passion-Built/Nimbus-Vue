<template>
  <div :class="['Px-icon-container', {'Px-icon-container--clickable': isClickable}]" :tabindex="isClickable ? 0 : null">
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

  > svg {
    fill: var(--px-color-text);
  }
}

.Px-icon-container--clickable {
  cursor: pointer;

  &:hover {
    box-shadow: var(--px-icon-container-shadow-hover);
  }

  &:active {
    box-shadow: var(--px-icon-container-shadow-active);
  }

  &:focus-visible {
    outline: 2px solid var(--px-focus-outline);
    outline-offset: 3px;
  }
}
</style>
