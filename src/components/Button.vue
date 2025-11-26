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

<style lang="scss" scoped>
.Px-btn {
  background-color: var(--px-btn-primary-bg);
  border: none;
  border-radius: var(--px-border-radius);
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
