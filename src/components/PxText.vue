<template>
  <component :is="as" :class="getClass()">
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  as?: 'p' | 'span' | 'li' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  align?: 'left' | 'center' | 'right';
  size?: 'small' | 'medium' | 'large';
  weight?: 'normal' | 'semibold' | 'bold';
}>()

const as = props.as ?? 'p';
const align = props.align ?? 'left';

const getClass = () => {
  const headings = ['h1','h2','h3','h4','h5','h6'];
  const isHeading = headings.includes(as);

  // base class
  const textType = isHeading ? 'Nui-heading' : 'Nui-text';
  
  // add base + alignment
  const classes = [textType, `nui-text--${align}`];

  // only add size/weight for paragraphs
  if (!isHeading) {
    if (props.size) classes.push(`nui-text--${props.size}`);
    if (props.weight) classes.push(`nui-text--${props.weight}`);
  }

  return classes.join(' ');
};
</script>

<style scoped>
.Nui-heading {
  font-family: var(--px-font-family-headings);
  font-weight: var(--px-font-weight-semibold);
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

.Nui-text {
  font-family: var(--px-font-family-body);
  font-weight: var(--px-font-weight-normal);
  line-height: var(--px-line-height-body);
  color: var(--px-color-text);
  margin: unset;
  width: 100%;

  +.nui-text--small { font-size: var(--px-font-size-body-sm); line-height: var(--px-line-height-body-sm); }
  +.nui-text--medium { font-size: var(--px-font-size-body); line-height: var(--px-line-height-body); }
  +.nui-text--large { font-size: var(--px-font-size-body-lg); line-height: var(--px-line-height-body-lg); }

  +.nui-text--light { font-weight: var(--px-font-weight-light); }
  +.nui-text--normal { font-weight: var(--px-font-weight-normal); }
  +.nui-text--semibold { font-weight: var(--px-font-weight-semibold); }
  +.nui-text--bold { font-weight: var(--px-font-weight-bold); }
}

.nui-text--left { text-align: left; }
.nui-text--center { text-align: center; }
.nui-text--right { text-align: right; }
</style>
