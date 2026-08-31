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

      <div
        ref="tablist"
        role="tablist"
        aria-orientation="horizontal"
        class="Px-tabs__list"
        @scroll="updateScroll"
        @keydown="onKeydown"
      >
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

    <div
      :id="panelId"
      class="Px-tabs__content"
      role="tabpanel"
      tabindex="0"
      :aria-labelledby="activeTabId"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, provide, watch, onMounted, onUnmounted, useId } from 'vue'

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

// Panel id — provided to PxTab for aria-controls
const panelId = useId()

// Tab registration — each PxTab registers its value → DOM id on mount,
// so the panel's aria-labelledby can point at the active tab.
const tabRegistry = ref<Record<string, string>>({})

function registerTab(value: string, id: string) {
  tabRegistry.value[value] = id
}

const activeTabId = computed(() => tabRegistry.value[activeTab.value])

provide('activeTab', activeTab)
provide('setActiveTab', setActiveTab)
provide('registerTab', registerTab)
provide('panelId', panelId)

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

// Arrow key navigation between tabs (ARIA tabs pattern)
function onKeydown(e: KeyboardEvent) {
  const tabs = Array.from(
    tablist.value?.querySelectorAll<HTMLElement>('[role="tab"]:not([disabled])') ?? []
  )
  if (!tabs.length) return

  const currentIndex = tabs.indexOf(document.activeElement as HTMLElement)
  let target: HTMLElement | undefined

  switch (e.key) {
    case 'ArrowRight':
      e.preventDefault()
      target = tabs[(currentIndex + 1) % tabs.length]
      break
    case 'ArrowLeft':
      e.preventDefault()
      target = tabs[(currentIndex - 1 + tabs.length) % tabs.length]
      break
    case 'Home':
      e.preventDefault()
      target = tabs[0]
      break
    case 'End':
      e.preventDefault()
      target = tabs[tabs.length - 1]
      break
  }

  if (target) {
    target.focus()
    target.click()
  }
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
.Px-tabs {
  display: flex;
  flex-direction: column;
  gap: var(--px-tabs-gap, 0);
}

.Px-tabs__scroll-container {
  display: flex;
  align-items: center;
  gap: var(--px-tabs-scroll-gap, 0);
}

.Px-tabs__list {
  display: flex;
  flex: 1;
  gap: var(--px-tab-gap, unset);
  padding: var(--px-tabs-list-padding, 0);
  background: var(--px-tabs-list-bg, transparent);
  border: var(--px-tab-list-border, none);
  border-radius: var(--px-border-radius, 0);
  box-shadow: var(--px-tabs-shadow, none);
  box-sizing: border-box;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.Px-tabs__scroll-btn {
  background: var(--px-color-surface);
  border: var(--px-btn-border, none);
  border-radius: var(--px-space-100);
  box-shadow: var(--px-btn-shadow, none);
  color: var(--px-color-text-subtle);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--px-space-050);
  flex-shrink: 0;
  transition: box-shadow var(--px-duration-state) var(--px-ease);

  &:hover { box-shadow: var(--px-btn-shadow-hover, none); }
  &:active { box-shadow: var(--px-btn-shadow-active, none); }

  &:focus-visible {
    outline: var(--px-focus-ring, none);
    outline-offset: var(--px-focus-offset);
  }
}

.Px-tabs__content {
  padding: var(--px-space-200);
  border: var(--px-tab-content-border, none);
  box-shadow: var(--px-tabs-content-shadow, none);
  border-radius: var(--px-tabs-content-border-radius, 0);
}
</style>
