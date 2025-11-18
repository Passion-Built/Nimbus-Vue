<template>
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
</template>

<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits(['update:isOpen'])
</script>

<style>
.Px-dialog {
  background: pink;
  border-radius: 12px;
  padding: 24px;
  max-width: 480px;
  position: relative;
  visibility: hidden;

  &.Px-dialog--open {
    visibility: visible;
  }
}
.Px-dialog__header {
  margin-bottom: 16px;
}
.Px-dialog__body {
  margin-bottom: 16px;
}
</style>
