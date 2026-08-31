<template>
  <component
    :is="url ? 'a' : 'button'"
    :class="[
      'Px-btn',
      {'Px-btn--disabled': disabled},
      {'Px-btn--ghost': variant === 'ghost'},
      {'Px-btn--full-width': fullWidth},
    ]"
    :href="url"
    :disabled="disabled && !url ? disabled : null"
    :aria-disabled="disabled && url ? disabled : null"
    :type="!url ? type : null"
  >
    <slot />
  </component>
</template>
 
<script setup lang="ts">
withDefaults(defineProps<{
  disabled?: boolean
  fullWidth?: boolean
  url?: string
  type?: 'button' | 'submit'
  variant?: 'ghost' | 'default'
}>(), {
  variant: 'default',
  type: 'button',
})
</script>

<style scoped>
.Px-btn {
  background-color: var(--px-btn-primary-bg);
  border: var(--px-btn-border, none);
  border-radius: var(--px-border-radius);
  box-shadow: var(--px-btn-shadow);
  color: var(--px-btn-primary-text);
  cursor: pointer;
  font-family: var(--px-font-family-body);
  font-size: var(--px-font-size-body);
  font-weight: var(--px-btn-font-weight);
  height: fit-content;
  width: fit-content;
  letter-spacing: .05rem;
  padding: var(--px-space-100) var(--px-space-300);
  transition:
    box-shadow var(--px-duration-state) var(--px-ease),
    background-color var(--px-duration-state) var(--px-ease),
    color var(--px-duration-state) var(--px-ease),
    transform var(--px-duration-state) var(--px-ease);

  &:hover {
    transform: var(--px-btn-transform-hover, none);
    box-shadow: var(--px-btn-shadow-hover);
  }

  &:active {
    transform: var(--px-btn-transform-hover, none);
    box-shadow: var(--px-btn-shadow-active);
  }

  &:focus-visible {
    outline: var(--px-focus-ring, none);
    outline-offset: var(--px-focus-offset);
  }
}

.Px-btn--ghost {
  position: relative;
  background: transparent;
  border: var(--px-btn-ghost-border, none);
  box-shadow: none;
  padding: var(--px-btn-ghost-padding, unset);

  &:hover {
    box-shadow: var(--px-btn-ghost-shadow-hover, none);
    transform: none;
    font-weight: var(--px-btn-ghost-font-weight-hover, var(--px-btn-font-weight));
  }

  &:active {
    box-shadow: var(--px-btn-ghost-shadow-active, none);
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 100%;
    height: var(--px-btn-ghost-underline-height, 0);
    background: var(--px-btn-ghost-underline-color, transparent);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform var(--px-duration-state) var(--px-ease);
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  &.Px-btn--disabled {
    border: none;
    font-weight: var(--px-btn-font-weight);

    &::after {
      display: none;
    }
  }
}

a.Px-btn {
  text-decoration: none;
}

.Px-btn--full-width {
  width: 100%;
}

.Px-btn--disabled {
  background: var(--px-btn-disabled-bg);
  border: var(--px-btn-disabled-border, none);
  box-shadow: none;
  color: var(--px-btn-disabled-text);
  cursor: not-allowed;

  &:hover {
    transform: none;
  }
}

a.Px-btn--disabled {
  pointer-events: none;
}
</style>
