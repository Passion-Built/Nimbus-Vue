<template>
  <div class="Px-tabs">
    <div role="tablist" class="Px-tabs__list">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watch } from 'vue'

const props = withDefaults(defineProps<{
  modelValue?: string
}>(), {
  modelValue: '',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const activeTab = ref(props.modelValue)

watch(() => props.modelValue, (val) => {
  activeTab.value = val
})

function setActiveTab(name: string) {
  activeTab.value = name
  emit('update:modelValue', name)
}

provide('activeTab', activeTab)
provide('setActiveTab', setActiveTab)
</script>

<style scoped>
.Px-tabs__list {
  display: flex;
  gap: var(--px-tab-gap);
  border-bottom: 1px solid var(--px-tab-border-color);
  padding: var(--px-space-100) var(--px-space-050) 0;
}
</style>
