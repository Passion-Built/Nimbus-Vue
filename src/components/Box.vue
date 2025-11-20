<template>
  <div class="Nui-box">
    <slot />
  </div>
</template>

<style>
:root {
  --px-box-default-bg: #eeeeee;
  --px-box-padding: var(--px-space-200);
  --px-box-border-radius: var(--px-space-200);
  --px-box-shadow: 4px 4px 6px #b9b9b9, -4px -4px 6px #f6f6f6;
}
</style>

<style scoped>
.Nui-box {
  background: var(--px-box-default-bg);
  border-radius: var(--px-box-border-radius);
  box-shadow: var(--px-box-shadow);
  box-sizing: border-box;
  padding: var(--px-box-padding);
  position: relative;
  width: fit-content;
}
</style>
