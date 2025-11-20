<template>
  <a
    class="Nui-link"
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
:root {
  --px-link-text: #3d91e6;
  --px-link-text-hover: #1B1B1B;
  --px-link-text-active: #d4a5a5;
  --px-link-text-visited: #635a87;
}

.Nui-link {
  font-family: var(--px-font-family-body);
  font-size: var(--px-font-size-body);
  font-weight: var(--px-font-weight-normal);
  line-height: var(--px-line-height-body);
  color: var(--px-link-text);
  font-weight: 500;

  &:hover {
    text-decoration: underline;
    color: var(--px-link-text-hover);
    text-decoration: none;
  }

  &:active {
    color: var(--px-link-text-active);
  }

  &:visited {
    color: var(--px-link-text-visited);
  }

  &:focus-visible {
    outline: 2px solid rgba(0, 120, 255, 0.8);
    outline-offset: 3px;
  }
}
</style>
