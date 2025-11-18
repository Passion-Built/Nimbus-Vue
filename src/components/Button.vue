<template>
  <component 
    :is="getElement()"
    :class="[
      'Px-btn',
      `Px-btn--${props.appearance}`,
      {'Px-btn--disabled': disabled},
      {'Px-btn--outlined': variant === 'outlined'},
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
  appearance?: 'primary' | 'secondary'
  disabled?: boolean
  url?: string
  variant?: 'outlined' | 'ghost'
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
  --px-color-button-primary: var(--color-primary-600);
  --px-color-button-text: #F5F5F5;
  --px-color-button-primary-hover: var(--color-primary-700);
  --px-color-button-primary-ghost: var(--color-primary-200);

  --px-color-button-secondary: var(--color-secondary-600);
  --px-color-button-secondary-hover: var(--color-secondary-700);
  --px-color-button-secondary-ghost: var(--color-secondary-200);

  --px-color-button-tertiary: var(--color-tertiary-600);
  --px-color-button-tertiary-hover: var(--color-tertiary-700);
  --px-color-button-tertiary-ghost: var(--color-tertiary-200);

  --px-color-button-success: var(--color-success-600);
  --px-color-button-success-hover: var(--color-success-700);
  
  --px-color-button-danger: var(--color-danger-600);
  --px-color-button-danger-hover: var(--color-danger-700);
  
  --px-color-button-warning: var(--color-warning-600);
  --px-color-button-warning-hover: var(--color-warning-700);
  --px-color-button-warning-text: #0C1B2D;

  --px-color-button-disabled: #C6C6C6;
  --px-color-button-disabled-text: #8d8d8d;
}
</style>

<style lang="scss" scoped>
@use "sass:map";
$colors: (
  primary: (
    base: pink,
    hover: var(--px-color-button-primary-hover),
    ghost-bg: var(--px-color-button-primary-ghost),
    text: var(--px-color-button-text)
  ),
  secondary: (
    base: var(--px-color-button-secondary),
    hover: var(--px-color-button-secondary-hover),
    ghost-bg: var(--px-color-button-secondary-ghost),
    text: var(--px-color-button-text)
  )
);

.Px-btn {
  border: none;
  border-radius: 25px;
  color: black;
  cursor: pointer;
  font-family: var(--px-font-family-body);
  font-size: var(--px-font-size-body);
  font-weight: 500;
  height: fit-content;
  width: fit-content;
  letter-spacing: .05rem;
  padding: 8px 24px;
  text-transform: uppercase;
  transition: all .25s ease-in-out;
}

a.Px-btn {
  text-decoration: none;
}

@each $name, $values in $colors {
  $base: map.get($values, base);
  $hover: map.get($values, hover);
  $ghost-bg: map.get($values, ghost-bg);
  $text: map.get($values, text);

  .Px-btn--#{$name} {
    background-color: $base;
    color: $text;

    &:hover,
    &:focus {
      background-color: $hover;
      color: $text;
    }

    &.Px-btn--outlined {
      background: transparent;
      border: 1px solid currentColor;
      color: $base;

      &:hover,
      &:focus {
        background: $hover;
        border-color: $hover;
        color: var(--px-color-button-text);
      }
    }

    @if $ghost-bg {
      &.Px-btn--ghost {
        background: transparent;
        color: $base;

        &:hover,
        &:focus {
          background: $ghost-bg;
          color: $base;
        }
      }
    }
  }
}

.Px-btn--ghost {
  background: transparent;
  text-decoration: underline;
}

.Px-btn--outlined {
  background: transparent;
  border: 1px solid currentColor;
}

.Px-btn--full-width {
  background-color: map.get(map.get($colors, primary), base);
  width: 100%;
}

.Px-btn--disabled {
  background: var(--px-color-button-disabled);
  color: var(--px-color-button-disabled-text);
  cursor: not-allowed;
  pointer-events: none;
}
</style>
