<template>
  <div :class="['Px-accordion-item', { 'Px-accordion-item--open': isOpen }]">
    <button
      type="button"
      :id="triggerId"
      class="Px-accordion-item__trigger"
      :aria-expanded="isOpen"
      :aria-controls="panelId"
      @click="openPanel"
    >
      <span class="Px-accordion-item__title">{{ title }}</span>
      <span class="Px-accordion-item__icon">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="var(--px-accordion-trigger-icon-size)" viewBox="0 -960 960 960" width="var(--px-accordion-trigger-icon-size)" fill="#e3e3e3"><path d="M480-325.91 221.91-584 296-658.09l184 184 184-184L738.09-584 480-325.91Z"/></svg>
      </span>
    </button>
    <div
      :id="panelId"
      role="region"
      :aria-labelledby="triggerId"
      class="Px-accordion-item__panel"
    >
      <div class="Px-accordion-item__panel-inner">
        <slot />
      </div>
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
  border: var(--px-accordion-item-border, none);
  box-shadow: var(--px-accordion-shadow, none);
  margin: var(--px-accordion-trigger-margin);
  transition:
    box-shadow var(--px-duration-state) var(--px-ease),
    transform var(--px-duration-state) var(--px-ease);

  &:not(.Px-accordion-item--open):hover {
    transform: var(--px-accordion-transform-hover, none);
    box-shadow: none;
  }
}

.Px-accordion-item__trigger {
  background: var(--px-accordion-trigger-bg);
  box-shadow: none;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: var(--px-accordion-trigger-padding);
  cursor: pointer;

  &:focus-visible {
    outline: var(--px-focus-ring, none);
    outline-offset: var(--px-focus-offset);
  }
}

.Px-accordion-item__title {
  color: var(--px-accordion-trigger-color);
  font-size: var(--px-accordion-font-size);
  font-weight: var(--px-accordion-font-weight);
}

.Px-accordion-item__panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--px-duration-expand) var(--px-ease);
}

.Px-accordion-item--open {
  box-shadow: none;

  .Px-accordion-item__trigger {
    border-bottom: var(--px-accordion-item-border);
  }

  .Px-accordion-item__panel {
    grid-template-rows: 1fr;
  }
}

.Px-accordion-item__panel-inner {
  overflow: hidden;
  padding: 0 var(--px-accordion-panel-padding);
  transition: padding var(--px-duration-expand) var(--px-ease);
  color: var(--px-accordion-trigger-color);
}

.Px-accordion-item--open .Px-accordion-item__panel-inner {
  padding: var(--px-accordion-panel-padding);
}

.Px-accordion-item__icon > svg {
  fill: currentColor;
  transition: transform var(--px-duration-expand) var(--px-ease);
}

.Px-accordion-item--open .Px-accordion-item__icon > svg {
  transform: rotate(180deg);
}
</style>
