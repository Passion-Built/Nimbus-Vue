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
  border: var(--px-icon-container-border, none);
  border-radius: 50%;
  box-shadow: var(--px-icon-container-shadow);
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(--px-space-400);
  width: var(--px-space-400);
  padding: var(--px-space-100);
  transition:
    box-shadow var(--px-duration-state) var(--px-ease),
    transform var(--px-duration-state) var(--px-ease);

  > svg {
    fill: var(--px-color-text);
  }
}

.Px-icon-container--clickable {
  cursor: pointer;

  &:hover {
    transform: var(--px-icon-container-transform-hover, none);
    box-shadow: var(--px-icon-container-shadow-hover, none);
  }

  &:active {
    transform: var(--px-icon-container-transform-hover, none);
    box-shadow: var(--px-icon-container-shadow-active, none);
  }

  &:focus-visible {
    outline: var(--px-focus-ring, none);
    outline-offset: var(--px-focus-offset);
  }
}
</style>
