<template>
  <component
    :is="isClickable ? 'button' : 'div'"
    :class="['Px-icon-container', {'Px-icon-container--clickable': isClickable}]"
    :type="isClickable ? 'button' : undefined"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  isClickable?: boolean
}>()
</script>

<style scoped>
.Px-icon-container {
  background-color: var(--px-icon-container-bg);
  border: none;
  border-radius: 50%;
  box-shadow: var(--px-icon-container-shadow);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(--px-space-400);
  width: var(--px-space-400);
  padding: var(--px-space-100);

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
