<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  as?: 'p' | 'span' | 'li' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  align?: 'left' | 'center' | 'right'
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
  italic?: boolean
}>()

const tag = computed(() => props.as ?? 'p')

const classes = computed(() => {
  const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  const isHeading = headings.includes(tag.value)

  // base type + alignment
  const list = [isHeading ? 'Px-heading' : 'Px-text', `Px-text--${props.align ?? 'left'}`]

  // weight is an explicit override; default weight comes from .Px-text / .Px-heading
  if (props.weight) list.push(`Px-text--weight-${props.weight}`)

  if (props.italic) list.push('Px-text--italic')

  return list
})
</script>

<style scoped>
.Px-heading {
  font-family: var(--px-font-family-headings);
  font-weight: var(--px-font-weight-bold);
  color: var(--px-color-text);
  margin: 0;
  width: 100%;
}

h1 { font-size: var(--px-font-size-heading-01); line-height: var(--px-line-height-heading-01); }
h2 { font-size: var(--px-font-size-heading-02); line-height: var(--px-line-height-heading-02); }
h3 { font-size: var(--px-font-size-heading-03); line-height: var(--px-line-height-heading-03); }
h4 { font-size: var(--px-font-size-heading-04); line-height: var(--px-line-height-heading-04); }
h5 { font-size: var(--px-font-size-heading-05); line-height: var(--px-line-height-heading-05); }
h6 { font-size: var(--px-font-size-heading-06); line-height: var(--px-line-height-heading-06); }

.Px-text {
  font-family: var(--px-font-family-body);
  font-weight: var(--px-font-weight-normal);
  font-size: var(--px-font-size-body);
  line-height: var(--px-line-height-body);
  letter-spacing: var(--px-text-letter-spacing);
  color: var(--px-color-text);
  margin: unset;
  width: 100%;
}

.Px-text--left { text-align: left; }
.Px-text--center { text-align: center; }
.Px-text--right { text-align: right; }

.Px-text--weight-light { font-weight: var(--px-font-weight-light); }
.Px-text--weight-normal { font-weight: var(--px-font-weight-normal); }
.Px-text--weight-medium { font-weight: var(--px-font-weight-medium); }
.Px-text--weight-semibold { font-weight: var(--px-font-weight-semibold); }
.Px-text--weight-bold { font-weight: var(--px-font-weight-bold); }

.Px-text--italic { font-style: italic; }
</style>
