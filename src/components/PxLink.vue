<template>
  <a
    :class="['Px-link', {'Px-link--navigation': navigation}]"
    :href="url"
    :target="external ? '_blank' : ''"
    :rel="external ? 'noopener noreferrer' : undefined"
  >
    <slot />
</a>
</template>

<script setup lang="ts">
const props = defineProps<{
  url?: string
  external?: boolean
  navigation?: boolean
}>()
</script>

<style scoped>
.Px-link {
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
    outline: 2px solid var(--px-focus-outline);
    outline-offset: 3px;
  }
}

.Px-link--navigation {
  text-decoration: none;
  color: var(--px-color-text);

  &:visited {
    color: var(--px-color-text);
  }

  &:hover {
    color: var(--px-color-text-subtle-hover);
  }

  &:active {
    color: var(--px-color-link-visited);
  }
}
</style>
