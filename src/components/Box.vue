<template>
  <div class="Nui-box">
    <slot />
  </div>
</template>

<style scoped>
.Nui-box {
  position: relative;
  box-sizing: border-box;
  width: fit-content;
  padding: var(--px-box-padding);
  background: var(--px-box-default-bg);
  border-radius: var(--px-border-radius);
  box-shadow: var(--px-box-shadow);
}
</style>
