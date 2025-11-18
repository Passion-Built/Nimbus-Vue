<template>
  <div class="Nui-box">
    <slot />
  </div>
</template>

<style>
:root {
  --px-box-background-default: transparent;
  --px-box-background-surface: var(--color-neutral-100);
  --px-box-background-neutral: var(--color-neutral-600);
  --px-box-padding: var(--px-space-200);
  --px-box-border-radius: var(--px-space-100);
  --px-box-shadow: 0 4px 4px 0 rgba(74, 47, 47, 0.25);
  --px-box-border: 1px solid #333333;
}
</style>

<style scoped>
.Px-box {
  position: relative;
  background: var(--px-box-background-default);
  width: fit-content;
  padding: var(--px-box-padding);
  box-sizing: border-box;
  border-radius: var(--px-box-border-radius);
  box-shadow: var(--px-box-shadow);
  border: var(--px-box-border);
}
</style>
