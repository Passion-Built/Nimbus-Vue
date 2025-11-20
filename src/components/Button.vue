<template>
  <component 
    :is="getElement()"
    :class="[
      'Px-btn',
      {'Px-btn--disabled': disabled},
      {'Px-btn--ghost': variant === 'ghost'}
    ]"
    :href="url"
    :disabled="disabled && !url ? disabled : null"
    :aria-disabled="disabled && url ? disabled : null"
  >
    <slot />
  </component>
</template>
 
<script setup lang="ts">
interface Props {
  disabled?: boolean
  url?: string
  variant?: 'ghost' | null
}
const props = defineProps<Props>()

const getElement = () => {
  let element = 'button';
  if (props.url) element = 'a';
  return element;
};

</script>

<style>
:root {
  --px-btn-primary-bg: #eeeeee;
  --px-btn-primary-text: #1B1B1B;

  --px-btn-disabled-bg: #dfdfdf;
  --px-btn-disabled-text: #454545;

  --px-btn-border-radius: var(--px-space-200);

  --px-btn-shadow: 4px 4px 6px #CACACB, -4px -4px 6px #f6f6f6;
  --px-btn-shadow-hover: inset 4px 4px 4px #CACACB, inset -4px -4px 4px #f6f6f6;
  --px-btn-shadow-active: inset 2px 2px 2px #CACACB, inset -2px -2px 2px #f6f6f6;

  --px-btn-ghost-shadow-hover: 1px 1px 4px #CACACB, -1px -1px 4px #f6f6f6;
  --px-btn-ghost-shadow-active: 2px 2px 4px #CACACB, -2px -2px 4px #f6f6f6;
}
</style>

<style lang="scss" scoped>
.Px-btn {
  background-color: var(--px-btn-primary-bg);
  border: none;
  border-radius: var(--px-btn-border-radius);
  box-shadow: var(--px-btn-shadow);
  color: var(--px-btn-primary-text);
  cursor: pointer;
  font-family: var(--px-font-family-body);
  font-size: var(--px-font-size-body);
  height: fit-content;
  width: fit-content;
  letter-spacing: .05rem;
  padding: var(--px-space-100) var(--px-space-300);
  transition: all .25s ease-in-out;

  &:hover {
    box-shadow: var(--px-btn-shadow-active);
  }
  
  &:active {
    box-shadow: var(--px-btn-shadow-hover);
  }

  &:focus-visible {
    outline: 2px solid rgba(0, 120, 255, 0.8);
    outline-offset: 3px;
  }
}

.Px-btn--ghost {
  background: transparent;
  box-shadow: none;

  &:hover {
    box-shadow: var(--px-btn-ghost-shadow-hover);
  }

  &:active {
    box-shadow: var(--px-btn-ghost-shadow-active);
  }
}

a.Px-btn {
  text-decoration: none;
}

.Px-btn--disabled {
  background: var(--px-btn-disabled-bg);
  box-shadow: none;
  color: var(--px-btn-disabled-text);
  pointer-events: none;
}
</style>
