<template>
  <button
    type="button"
    role="tab"
    :id="tabId"
    :aria-selected="isActive"
    :aria-controls="panelId"
    :tabindex="isActive ? 0 : -1"
    :class="['Px-tab', { 'Px-tab--active': isActive }]"
    @click="activate"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, useId, type Ref } from 'vue'

const props = defineProps<{
  value: string
  id?: string
}>()

const autoId = useId()
const tabId = computed(() => props.id ?? autoId)

const activeTab = inject<Ref<string>>('activeTab')!
const setActiveTab = inject<(name: string) => void>('setActiveTab')!
const registerTab = inject<(value: string, id: string) => void>('registerTab')!
const panelId = inject<string>('panelId')

const isActive = computed(() => activeTab.value === props.value)

function activate() {
  setActiveTab(props.value)
}

onMounted(() => registerTab(props.value, tabId.value))
</script>

<style scoped>
.Px-tab {
  flex: var(--px-tab-flex, initial);
  padding: var(--px-tab-padding);
  background: var(--px-tab-bg, transparent);
  border: var(--px-tab-border, none);
  border-radius: var(--px-tab-border-radius, 0);
  cursor: pointer;
  color: var(--px-tab-color);
  font-family: var(--px-font-family-body);
  font-size: var(--px-font-size-body);
  white-space: nowrap;
  box-shadow: var(--px-tab-shadow, none);
  transition:
    background-color var(--px-duration-state) var(--px-ease),
    box-shadow var(--px-duration-state) var(--px-ease),
    color var(--px-duration-state) var(--px-ease);
}

.Px-tab:hover {
  color: var(--px-tab-color-hover);
  box-shadow: var(--px-tab-shadow-hover, none);
}

.Px-tab--active {
  background: var(--px-tab-active-bg, transparent);
  border: var(--px-tab-border-active, none);
  color: var(--px-tab-color-active);
  box-shadow: var(--px-tab-shadow-active, none);
}

.Px-tab:focus-visible {
  outline: var(--px-focus-ring, none);
  outline-offset: var(--px-focus-offset);
}
</style>
