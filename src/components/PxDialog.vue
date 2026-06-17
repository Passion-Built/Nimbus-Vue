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
import { ref, watch, toRef, onUnmounted } from 'vue'
import { useFocusTrap } from '../composables/useFocusTrap'

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits(['update:isOpen'])
const dialogRef = ref<HTMLElement | null>(null)

// Modal focus trap: focuses the dialog on open, wraps Tab, and restores focus
// to the trigger on close. Escape closes the dialog.
const { handleKeydown } = useFocusTrap(dialogRef, {
  active: toRef(props, 'isOpen'),
  onEscape: () => emit('update:isOpen', false),
  modal: true,
})

watch(() => props.isOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
  if (open) {
    window.addEventListener('keydown', handleKeydown)
  } else {
    window.removeEventListener('keydown', handleKeydown)
  }
})

onUnmounted(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', handleKeydown)
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
