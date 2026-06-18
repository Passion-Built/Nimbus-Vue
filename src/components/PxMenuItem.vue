<template>
  <component
    :is="url ? 'a' : 'button'"
    class="Px-menu-item"
    role="menuitem"
    :href="url"
    :type="!url ? 'button' : null"
    @click="handleClick"
    @keydown="onKeydown"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const props = defineProps<{
  url?: string
}>()

const closeMenu = inject<() => void>('closeMenu')

function handleClick() {
  closeMenu?.()
}

// Links activate on Enter natively but not Space; menuitems should do both.
function onKeydown(e: KeyboardEvent) {
  if (e.key === ' ' && props.url) {
    e.preventDefault()
    ;(e.currentTarget as HTMLElement).click()
  }
}
</script>

<style scoped>
.Px-menu-item {
  background: transparent;
  border: none;
  box-sizing: border-box;
  color: var(--px-menu-item-text);
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: var(--px-font-family-body);
  font-size: var(--px-font-size-body);
  gap: var(--px-menu-item-gap);
  padding: var(--px-menu-item-padding);
  text-align: left;
  text-decoration: none;
  width: 100%;
  border-radius: calc(var(--px-menu-border-radius) - var(--px-space-025));

  &:hover {
    background: var(--px-menu-item-bg-hover);
  }

  &:active {
    background: var(--px-menu-item-bg-active);
  }

  &:focus-visible {
    outline: 2px solid var(--px-focus-outline);
    outline-offset: -2px;
  }
}
</style>
