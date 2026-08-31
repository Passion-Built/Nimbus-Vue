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
withDefaults(defineProps<{
  altText?: string
  imageUrl?: string
  initials?: string
  size?: 'medium' | 'large'
}>(), {
  size: 'medium',
})
</script>

<style scoped>
.Px-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--px-avatar-size);
  height: var(--px-avatar-size);
  padding: var(--px-avatar-padding, unset);
  background-color: var(--px-avatar-bg);
  border: var(--px-avatar-border, none);
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
    width: var(--px-avatar-size);
    height: var(--px-avatar-size);
    border-radius: 50%;
  }
}
.Px-avatar--large {
  width: var(--px-avatar-large-size);
  height: var(--px-avatar-large-size);
  padding: var(--px-avatar-large-padding, unset);

  >.Px-avatar__text {
    font-size: var(--px-avatar-large-font-size);
  }

  > img {
    width: var(--px-avatar-large-size);
    height: var(--px-avatar-large-size);
  }
}
</style>
