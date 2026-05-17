<template>
  <Teleport to="body">
    <div v-if="isOpen" class="Px-dialog__container">
      <div class="Px-dialog__overlay" @click="emit('update:isOpen', false)" />
      <div
        ref="dialogRef"
        class="Px-dialog"
        role="dialog"
        aria-modal="true"
        tabindex="-1"
      >
        <div class="Px-dialog__header">
          <slot name="header" />
        </div>

        <div class="Px-dialog__body">
          <slot />
        </div>

        <div class="Px-dialog__footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onUnmounted } from 'vue'

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits(['update:isOpen'])
const dialogRef = ref<HTMLElement | null>(null)
const trigger = ref<HTMLElement | null>(null)

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

function getFocusable() {
  return Array.from(dialogRef.value?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? [])
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    emit('update:isOpen', false)
    return
  }

  if (e.key !== 'Tab') return

  const focusable = getFocusable()
  if (!focusable.length) return

  const first = focusable[0]
  const last = focusable[focusable.length - 1]

  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault()
    first.focus()
  }
}

watch(() => props.isOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
  if (open) {
    trigger.value = document.activeElement as HTMLElement
    window.addEventListener('keydown', onKeydown)
    nextTick(() => (getFocusable()[0] ?? dialogRef.value)?.focus())
  } else {
    window.removeEventListener('keydown', onKeydown)
    trigger.value?.focus()
    trigger.value = null
  }
})

onUnmounted(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
.Px-dialog__container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}

.Px-dialog__overlay {
  width: 100%;
  height: 100%;
  background: var(--px-dialog-overlay);
}

.Px-dialog {
  background: var(--px-dialog-bg);
  border-radius: var(--px-border-radius);
  box-shadow: var(--px-dialog-shadow);
  min-width: 35vw;
  width: max-content;
  max-width: 50vw;
  padding: var(--px-dialog-padding);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.Px-dialog__header,
.Px-dialog__body {
  margin-bottom: var(--px-dialog-margin-bottom);
}
</style>
