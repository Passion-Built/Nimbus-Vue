<template>
  <span
    :class="['Px-tag', `Px-tag--${shape}`]"
    :aria-hidden="isDecorative || undefined"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  isDecorative?: boolean
  shape?: 'rounded' | 'square' | 'pill'
}>(), {
  shape: 'rounded',
})
</script>

<style scoped>
.Px-tag {
  background-color: var(--px-tag-bg);
  box-shadow: var(--px-tag-shadow);
  color: var(--px-tag-text);
  font-family: var(--px-font-family-body);
  font-size: var(--px-font-size-body-sm);
  padding: var(--px-tag-padding);
  border-radius: var(--px-tag-border-radius);
  width: min-content;
  height: fit-content;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.Px-tag--pill   { border-radius: var(--px-space-1500); }
.Px-tag--square { border-radius: 0; }
</style>
