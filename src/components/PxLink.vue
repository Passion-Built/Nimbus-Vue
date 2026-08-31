<template>
  <a
    :class="[
      'Px-link',
      {'Px-link--navigation': navigation},
    ]"
    :href="url"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :aria-current="navigation && current ? 'page' : undefined"
  >
    <slot />
</a>
</template>

<script setup lang="ts">
const props = defineProps<{
  url?: string
  external?: boolean
  navigation?: boolean
  current?: boolean
}>()
</script>

<style scoped>
.Px-link {
  font-family: var(--px-font-family-body);
  font-size: var(--px-font-size-body);
  font-weight: var(--px-font-weight-normal);
  line-height: var(--px-line-height-body);
  color: var(--px-link-text);
  text-decoration: var(--px-link-decoration, none);

  &:hover {
    text-decoration: var(--px-link-decoration-hover, var(--px-link-decoration, none));
    color: var(--px-link-text-hover);
  }

  &:active {
    color: var(--px-link-text-active);
  }

  &:visited {
    color: var(--px-link-text-visited);
  }

  &:focus-visible {
    outline: var(--px-focus-ring, none);
    outline-offset: var(--px-focus-offset);
  }
}

.Px-link--navigation[aria-current="page"] {
  font-weight: var(--px-font-weight-semibold);
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
