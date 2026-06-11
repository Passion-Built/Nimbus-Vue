<template>
  <button
    type="button"
    :id="triggerId"
    class="Px-accordion-item"
    :aria-expanded="isOpen"
    :aria-controls="panelId"
    @click="openPanel"
  >
    <span>{{ title }}</span>
    <span :class="['Px-accordion-item__icon', { 'Px-accordion-item__icon--open': isOpen }]">
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
    </span>
  </button>
  <div
    :id="panelId"
    role="region"
    :aria-labelledby="triggerId"
    :class="['Px-accordion-item__panel', { 'Px-accordion-item--open': isOpen }]"
  >
    <div class="Px-accordion-item__panel-inner">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, computed, useId, onMounted } from 'vue'

const props = defineProps<{
  title?: string
  defaultOpen?: boolean
}>()

const id = useId()
const triggerId = `${id}-trigger`
const panelId = `${id}-panel`

const accordion = inject<{
  isItemOpen: (id: string) => boolean
  toggle: (id: string) => void
  openOnMount: (id: string) => void
}>('PxAccordion')

const isOpen = computed(() => accordion?.isItemOpen(id) ?? false)

const openPanel = () => accordion?.toggle(id)

onMounted(() => {
  if (props.defaultOpen) accordion?.openOnMount(id)
})
</script>

<style scoped>
.Px-accordion-item {
  background: transparent;
  box-shadow: none;
  border: none;
  border-top: 1px solid var(--px-accordion-border);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: var(--px-space-200) var(--px-space-300);
  color: var(--px-accordion-trigger-color);
  font-family: var(--px-font-family-body);
  font-size: var(--px-font-size-body);
  cursor: pointer;
  transition: box-shadow .25s ease-in-out;

  &:hover {
    box-shadow: var(--px-accordion-trigger-shadow-hover);
  }

  &:active {
    box-shadow: var(--px-accordion-trigger-shadow-active);
  }

  &:focus-visible {
    outline: 2px solid var(--px-focus-outline);
    outline-offset: 3px;
  }
}

.Px-accordion-item__panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows .25s ease;
}

.Px-accordion-item--open {
  grid-template-rows: 1fr;
}

.Px-accordion-item__panel-inner {
  overflow: hidden;
  padding: 0 var(--px-space-300);
  transition: padding .25s ease;
  font-family: var(--px-font-family-body);
  font-size: var(--px-font-size-body);
  color: var(--px-accordion-trigger-color);
}

.Px-accordion-item--open .Px-accordion-item__panel-inner {
  padding: var(--px-space-200) var(--px-space-300);
}

.Px-accordion-item__icon > svg {
  fill: currentColor;
  display: block;
  transition: transform .25s ease;
}

.Px-accordion-item__icon--open > svg {
  transform: rotate(180deg);
}
</style>
