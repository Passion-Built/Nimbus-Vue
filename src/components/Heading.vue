<template>
  <component
    :is="as"
    class="Nui-heading"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}>()

const as = props.as ?? 'h1'
</script>

<style scoped>
.Nui-heading {
  font-family: var(--px-font-family-headings);
  font-weight: var(--px-font-weight-semibold);
  color: var(--px-primary-text);
  margin: 0;
}

h1 { font-size: var(--px-font-size-heading-01); line-height: var(--px-line-height-heading-01); }
h2 { font-size: var(--px-font-size-heading-02); line-height: var(--px-line-height-heading-02); }
h3 { font-size: var(--px-font-size-heading-03); line-height: var(--px-line-height-heading-03); }
h4 { font-size: var(--px-font-size-heading-04); line-height: var(--px-line-height-heading-04); }
h5 { font-size: var(--px-font-size-heading-05); line-height: var(--px-line-height-heading-05); }
h6 { font-size: var(--px-font-size-heading-06); line-height: var(--px-line-height-heading-06); }
</style>
