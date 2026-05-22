<template>
  <div class="Px-tabs">
    <div class="Px-tabs__scroll-container">
      <button
        v-if="canScrollLeft"
        class="Px-tabs__scroll-btn"
        aria-label="Scroll tabs left"
        @click="scrollLeft"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div ref="tablist" role="tablist" class="Px-tabs__list" @scroll="updateScroll">
        <slot />
      </div>

      <button
        v-if="canScrollRight"
        class="Px-tabs__scroll-btn"
        aria-label="Scroll tabs right"
        @click="scrollRight"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>

    <div class="Px-tabs__content">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watch, onMounted, onUnmounted } from 'vue'

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

const tablist = ref<HTMLElement | null>(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(false)

function updateScroll() {
  const el = tablist.value
  if (!el) return
  canScrollLeft.value = el.scrollLeft > 0
  canScrollRight.value = el.scrollLeft + el.clientWidth < el.scrollWidth
}

function scrollLeft() {
  tablist.value?.scrollBy({ left: -150, behavior: 'smooth' })
}

function scrollRight() {
  tablist.value?.scrollBy({ left: 150, behavior: 'smooth' })
}

let ro: ResizeObserver

onMounted(() => {
  updateScroll()
  ro = new ResizeObserver(updateScroll)
  if (tablist.value) ro.observe(tablist.value)
})

onUnmounted(() => ro?.disconnect())
</script>

<style scoped>
.Px-tabs__scroll-container {
  display: flex;
  align-items: center;
  gap: var(--px-space-050);
}

.Px-tabs__list {
  display: flex;
  flex: 1;
  gap: var(--px-tab-gap);
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.Px-tabs__scroll-btn {
  background: var(--px-color-surface);
  border: none;
  border-radius: var(--px-space-100);
  box-shadow: var(--px-btn-shadow);
  color: var(--px-color-text-subtle);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--px-space-050);
  flex-shrink: 0;
  transition: box-shadow 0.15s ease;

  &:hover { box-shadow: var(--px-btn-shadow-hover); }
  &:active { box-shadow: var(--px-btn-shadow-active); }

  &:focus-visible {
    outline: 2px solid var(--px-focus-outline);
    outline-offset: 3px;
  }
}

.Px-tabs__content {
  padding: var(--px-space-200);
  box-shadow: var(--px-tab-shadow-active);
  border-radius: 0 0 var(--px-space-100) var(--px-space-100);
}
</style>
