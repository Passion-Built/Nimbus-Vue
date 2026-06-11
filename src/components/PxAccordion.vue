<template>
  <div class="Px-accordion">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'

const props = defineProps<{
  allowMultiple?: boolean
}>()

const openItems = ref<Set<string>>(new Set())

const toggle = (id: string) => {
  const wasOpen = openItems.value.has(id)
  if (!props.allowMultiple) openItems.value.clear()
  if (!wasOpen) openItems.value.add(id)
}

const isItemOpen = (id: string) => openItems.value.has(id)

const openOnMount = (id: string) => {
  if (openItems.value.size > 0) return
  openItems.value.add(id)
}

provide('PxAccordion', { isItemOpen, toggle, openOnMount })
</script>

<style scoped>
.Px-accordion {
  border-bottom: 1px solid var(--px-accordion-border);
}
</style>
