<template>
  <form
    class="Px-form"
    :aria-label="ariaLabel"
    novalidate
  >
    <slot />
  </form>
</template>

<script setup lang="ts">
defineProps<{
  ariaLabel?: string
}>()
</script>

<style scoped>
.Px-form {
  display: flex;
  flex-direction: column;
  gap: var(--px-form-stack-gap);
}
</style>
