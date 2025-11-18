<template>
  <a
    :href="url"
    :target="external ? '_blank' : ''"
  >
    <slot />
</a>
</template>

<script setup lang="ts">
const props = defineProps<{
  url?: string
  external?: boolean
}>()
</script>

<style>
.Nui-link {
  font-family: var(--px-font-family-body);
  font-size: var(--px-font-size-body);
  font-weight: var(--px-font-weight-normal);
  line-height: var(--px-line-height-body);
}
</style>
