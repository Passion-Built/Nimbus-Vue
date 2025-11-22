<template>
  <div :class="['Px-dialog__container', {'Px-dialog--open': isOpen}]">
    <div class="Px-dialog__overlay" />
    <div
      :class="['Px-dialog', {'Px-dialog--open': isOpen}]"
      role="dialog"
      aria-modal="true"
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
</template>

<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits(['update:isOpen'])
</script>

<style>
:root {
  --px-dialog-bg: #eeeeee;
  --px-dialog-overlay:rgba(238,238,238, 85%);
  --px-dialog-shadow: 4px 4px 6px #b9b9b9, -4px -4px 6px #f6f6f6;
  --px-dialog-border-radius: var(--px-space-200);
  --px-dialog-padding: var(--px-space-300);
  --px-dialog-margin-bottom: var(--px-space-200);
}

html:has(.Px-dialog--open) {
  overflow: hidden;
}

.Px-dialog__container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  transition: all .25s ease;
  opacity: 0;
  visibility: hidden;

  &.Px-dialog--open {
    opacity: 1;
    visibility: visible;
  }
}

.Px-dialog__overlay {
  width: 100%;
  height: 100%;
  background: var(--px-dialog-overlay);
}

.Px-dialog {
  background: var(--px-dialog-bg);
  border-radius: var(--px-dialog-border-radius);
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
