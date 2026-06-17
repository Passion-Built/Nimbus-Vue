<template>
  <div class="Px-menu__container">
    <div
      class="Px-menu__trigger"
      ref="reference"
      v-bind="triggerAttrs"
      :aria-controls="generateAttribute('menu')"
      @click="toggle"
    >
      <slot name="trigger" />
    </div>
    <Teleport to="body">
      <div
        v-if="isOpen"
        class="Px-menu"
        ref="floating"
        :id="generateAttribute('menu')"
        :style="floatingStyles"
        role="menu"
      >
        <div class="Px-menu__content" @keydown="onKeydown">
          <slot />
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, useId } from 'vue';
import { useMenuFloating } from '../composables/useMenuFloating'
import { useFocusTrap } from '../composables/useFocusTrap'
import type { Placement } from '@floating-ui/vue'

const props = withDefaults(defineProps<{
  id?: string
  placement?: Placement
  offset?: number
}>(), {})

const autoId = useId()
const baseId = computed(() => props.id ?? autoId)
const generateAttribute = (attribute: string) => `${baseId.value}-${attribute}`

const { reference, floating, floatingStyles, isOpen, close, toggle, triggerAttrs } = useMenuFloating({
  placement: props.placement,
  offset: props.offset
})

provide('closeMenu', close)

// Focus trap: focuses the first item on open, wraps Tab at the boundaries,
// handles Escape, and restores focus to the trigger on close.
const { getFocusable, handleKeydown } = useFocusTrap(floating, {
  active: isOpen,
  selector: '[role="menuitem"]:not([disabled]):not([aria-disabled="true"])',
  onEscape: close,
})

function onKeydown(e: KeyboardEvent) {
  const items = getFocusable()
  if (!items.length) return

  const currentIndex = items.indexOf(document.activeElement as HTMLElement)

  switch (e.key) {
    case 'ArrowDown':
      e.preventDefault()
      items[(currentIndex + 1) % items.length]?.focus()
      break
    case 'ArrowUp':
      e.preventDefault()
      items[(currentIndex - 1 + items.length) % items.length]?.focus()
      break
    case 'Home':
      e.preventDefault()
      items[0]?.focus()
      break
    case 'End':
      e.preventDefault()
      items[items.length - 1]?.focus()
      break
    default:
      // Tab boundary-wrap + Escape
      handleKeydown(e)
  }
}
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

.Px-menu__content {
  display: contents;
}
</style>
