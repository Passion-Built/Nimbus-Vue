<template>
  <button
    type="button"
    role="tab"
    :aria-selected="isActive"
    :class="['Px-tab', { 'Px-tab--active': isActive }]"
    @click="activate"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, inject, type Ref } from 'vue'

const props = defineProps<{
  value: string
}>()

const activeTab = inject<Ref<string>>('activeTab')!
const setActiveTab = inject<(name: string) => void>('setActiveTab')!

const isActive = computed(() => activeTab.value === props.value)

function activate() {
  setActiveTab(props.value)
}
</script>

<style scoped>
.Px-tab {
  padding: var(--px-tab-padding);
  background: var(--px-color-surface);
  border: none;
  border-radius: var(--px-space-100) var(--px-space-100) 0 0;
  cursor: pointer;
  color: var(--px-tab-color);
  font-family: var(--px-font-family-body);
  font-size: var(--px-font-size-body);
  box-shadow: var(--px-tab-shadow);
  transition: box-shadow 0.15s ease, color 0.15s ease;
}

.Px-tab:hover {
  color: var(--px-tab-color-hover);
  box-shadow: var(--px-tab-shadow-hover);
}

.Px-tab--active {
  color: var(--px-tab-color-active);
  box-shadow: var(--px-tab-shadow-active);
}

.Px-tab:focus-visible {
  outline: 2px solid var(--px-focus-outline);
  outline-offset: 3px;
}
</style>
