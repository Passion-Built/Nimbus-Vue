<template>
  <fieldset class="Px-form-section">
    <legend class="Px-form-section__title">{{ title }}</legend>
    <div class="Px-form-section__fields">
      <slot />
    </div>
  </fieldset>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style scoped>
.Px-form-section {
  border: none;
  margin: 0;
  min-width: 0;
  padding: 0;
}

.Px-form-section__title {
  color: var(--px-form-text);
  font-family: var(--px-font-family-body);
  font-size: var(--px-font-size-body-sm);
  font-weight: var(--px-font-weight-semibold);
  margin-bottom: var(--px-form-section-title-margin);
  padding: 0;
}

.Px-form-section__fields {
  display: flex;
  flex-direction: column;
  gap: var(--px-form-stack-gap);
}
</style>
