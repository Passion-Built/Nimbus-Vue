<template>
  <div class="Px-menu__container">
    <div
      ref="reference"
      class="Px-menu__trigger"
      v-bind="triggerAttrs"
      :aria-controls="menuId"
      @click="toggle"
    >
      <slot name="trigger" />
    </div>
    <Teleport to="body">
      <div
        v-if="isOpen"
        ref="floating"
        :id="menuId"
        role="menu"
        class="Px-menu"
        :style="floatingStyles"
        @keydown="onKeydown"
      >
        <slot />
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { useId, provide, nextTick, watch } from 'vue'
import { useMenuFloating } from '../composables/useMenuFloating'
import type { Placement } from '@floating-ui/vue'

const props = withDefaults(defineProps<{
  placement?: Placement
  offset?: number
}>(), {})

const menuId = useId()

const { reference, floating, floatingStyles, isOpen, close, toggle, triggerAttrs } =
  useMenuFloating({ placement: props.placement, offset: props.offset })


provide('closeMenu', close)

function getItems(): HTMLElement[] {
  return Array.from(
    floating.value?.querySelectorAll<HTMLElement>('[role="menuitem"]:not([disabled]):not([aria-disabled="true"])') ?? []
  )
}

function focusFirstItem() {
  getItems()[0]?.focus({ preventScroll: true })
}

function onKeydown(e: KeyboardEvent) {
  const items = getItems()
  const current = document.activeElement as HTMLElement
  const idx = items.indexOf(current)

  if (e.key === 'Escape') {
    e.preventDefault()
    close()
    ;(reference.value?.querySelector('button, a, [tabindex]') as HTMLElement | null)?.focus()
  } else if (e.key === 'ArrowDown') {
    e.preventDefault()
    items[(idx + 1) % items.length]?.focus()
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    items[(idx - 1 + items.length) % items.length]?.focus()
  } else if (e.key === 'Tab') {
    e.preventDefault()
    close()
    ;(reference.value?.querySelector('button, a, [tabindex]') as HTMLElement | null)?.focus({ preventScroll: true })
  }
}

watch(isOpen, (open) => {
  if (open) {
    nextTick(focusFirstItem)
  }
})
</script>

<style scoped>
.Px-menu__container {
  display: inline-flex;
}

.Px-menu__trigger {
  display: inline-flex;
}

.Px-menu {
  background-color: var(--px-menu-bg);
  border-radius: var(--px-menu-border-radius);
  box-shadow: var(--px-menu-shadow);
  z-index: var(--px-menu-z-index);
  min-width: var(--px-menu-min-width);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: var(--px-menu-padding);
}
</style>
