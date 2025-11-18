<template>
  <h1>passion presents: nimubs</h1>
  <NuiBox>
    <NuiText as="p">testing paragraph</NuiText>
    <NuiText as="span">testing span</NuiText>
    <NuiText as="li">testing li</NuiText>
    <NuiHeading as="h1">testing h1</NuiHeading>
    <NuiHeading as="h2">testing h2</NuiHeading>
    <NuiHeading as="h3">testing h3</NuiHeading>
    <NuiHeading as="h4">testing h4</NuiHeading>
    <NuiHeading as="h5">testing h5</NuiHeading>
    <NuiHeading as="h6">testing h6</NuiHeading>
  </NuiBox>
  <NuiButton>test button</NuiButton>
  <NuiInput
    v-model="testInput"
    id="test-input"
    placeholder="Test Input"
    label="Input Label"
  />
  {{ testInput }}
  <NuiTextarea
    v-model="testTextarea"
    id="test-textarea"
    placeholder="Test Textarea"
    label="Textarea Label"
  />
  {{ testTextarea }}
  <NuiAvatar initials="JG" />
  <NuiLink url="#">Test Link</NuiLink>
  <NuiLink url="https://www.google.com" external>Test Link</NuiLink>
  <NuiIconContainer><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M32 400C32 479.5 96.5 544 176 544L480 544C550.7 544 608 486.7 608 416C608 364.4 577.5 319.9 533.5 299.7C540.2 286.6 544 271.7 544 256C544 203 501 160 448 160C430.3 160 413.8 164.8 399.6 173.1C375.5 127.3 327.4 96 272 96C192.5 96 128 160.5 128 240C128 248 128.7 255.9 129.9 263.5C73 282.7 32 336.6 32 400z"/></svg></NuiIconContainer>
  <NuiDialog :isOpen="testDialog">
    test dialog
  </NuiDialog>
  <NuiButton @click="testDialog = !testDialog">Open Dialog</NuiButton>
  <NuiSelect
    v-model="favoriteFruit"
    :options="[
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cherry', value: 'cherry' }
    ]"
    placeholder="Select a fruit"
  />
  <div style="height:50vh" />
</template>

<script setup>
import { ref } from 'vue';

const testInput = ref('')
const testTextarea = ref('')
const testDialog = ref(false)

const favoriteFruit = ref('')
</script>
