<template>
  <component :is="as" :class="getClass()">
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  as?: 'p' | 'span' | 'li' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  align?: 'left' | 'center' | 'right'
  size?: 'small' | 'medium' | 'large'
  weight?: 'normal' | 'semibold' | 'bold'
  italic?: boolean
}>()

const as = props.as ?? 'p'
const align = props.align ?? 'left'
const size = props.size ?? 'medium'
const weight = props.weight ?? 'normal'

const getClass = () => {
  const headings = ['h1','h2','h3','h4','h5','h6']
  const isHeading = headings.includes(as)

  // define base class
  const textType = isHeading ? 'Px-heading' : 'Px-text'
  
  // add base + aligntment + size, if provided
  const classes = [textType, `Px-text--${align}`, `Px-text--${weight}`]

  // only add size for paragraphs
  if (!isHeading && props.size) classes.push(`Px-text--${size}`)
  if (props.italic) classes.push('Px-text--italic')

  return classes.join(' ')
};
</script>

<style scoped>
.Px-heading {
  font-family: var(--px-font-family-headings);
  color: var(--px-color-text);
  margin: 0;
  width: 100%;

  +.Px-text--bold { font-weight: var(--px-font-weight-bold); }
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
  line-height: var(--px-line-height-body);
  letter-spacing: var(--px-text-letter-spacing);
  color: var(--px-color-text);
  margin: unset;
  width: 100%;

  &.Px-text--small { font-size: var(--px-font-size-body-sm); line-height: var(--px-line-height-body-sm); }
  &.Px-text--medium { font-size: var(--px-font-size-body); line-height: var(--px-line-height-body); }
  &.Px-text--large { font-size: var(--px-font-size-body-lg); line-height: var(--px-line-height-body-lg); }
}

.Px-text--left { text-align: left; }
.Px-text--center { text-align: center; }
.Px-text--right { text-align: right; }

.Px-text--light { font-weight: var(--px-font-weight-light); }
.Px-text--normal { font-weight: var(--px-font-weight-normal); }
.Px-text--semibold { font-weight: var(--px-font-weight-semibold); }
.Px-text--bold { font-weight: var(--px-font-weight-bold); }

.Px-text--italic { font-style: italic; }
</style>
