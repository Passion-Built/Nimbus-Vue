<template>
  <div
    :class="[
      'Px-avatar',
      `Px-avatar--${size}`,
      {'Px-avatar--image' : imageUrl}
    ]"
  >
    <img v-if="imageUrl" :src="imageUrl" :alt="altText ? altText : ''">
    <span v-else class="Px-avatar__text">{{ initials }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  altText?: string
  imageUrl?: string
  initials?: string
  size?: 'medium' | 'large'
}>()

const size = props.size ?? 'medium'
</script>

<style>
:root {
  --px-avatar-bg: #eeeeee;
  --px-avatar-text: #1B1B1B;
  --px-avatar-large-font-size: var(--px-font-size-08);
  --px-avatar-shadow: inset 4px 4px 6px #CACACB, inset -4px -4px 6px #f6f6f6;
}
</style>

<style lang="scss" scoped>
.Px-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--px-space-600);
  height: var(--px-space-600);
  padding: var(--px-space-100);
  background-color: var(--px-avatar-bg);
  border-radius: 50%;
  box-shadow: var(--px-avatar-shadow);
}

.Px-avatar__text {
  color: var(--px-avatar-text);
  font-family: var(--px-font-family-body);
  font-size: var(--px-font-size-body-lg);
  letter-spacing: 1.4px;
  text-transform: uppercase;
}

.Px-avatar--image {
  background-color: transparent;
  
  > img {
    vertical-align: middle;
    width: var(--px-space-600);
    height: var(--px-space-600);
    border-radius: 50%;
  }
}
.Px-avatar--large {
  width: var(--px-space-1300);
  height: var(--px-space-1300);
  padding: var(--px-space-200);

  >.Px-avatar__text {
    font-size: var(--px-avatar-large-font-size);
  }

  > img {
    width: var(--px-space-1300);
    height: var(--px-space-1300);
  }
}
</style>
