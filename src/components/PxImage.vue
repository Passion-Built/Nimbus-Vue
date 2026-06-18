<template>
  <img
    :class="['Px-image', { 'Px-image--elevated': elevated }]"
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :loading="loading"
    :style="{
      objectFit: fit,
      objectPosition: position,
    }"
  />
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  src: string
  alt: string
  width?: string | number
  height?: string | number
  fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  position?: string
  loading?: 'lazy' | 'eager'
  elevated?: boolean
}>(), {
  loading: 'lazy',
})
</script>

<style scoped>
.Px-image {
  display: block;
  max-width: 100%;
  border-radius: var(--px-image-radius);
}

.Px-image--elevated {
  box-shadow: var(--px-image-shadow);
}
</style>
