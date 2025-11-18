<template>
  <div
    :class="[
      'Px-avatar',
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
  initials?: string,

}>()
</script>

<style lang="scss" scoped>
.Px-avatar {
  background-color: pink;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Px-avatar__text {
  font-family: 'Archivo', sans-serif;
  font-size: var(--font-size-body-lg);
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #F5F5F5;
}

.Px-avatar--image {
  background-color: transparent;
  
  > img {
    vertical-align: middle;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
}
</style>
