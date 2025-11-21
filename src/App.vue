<template>
  <h1>passion presents: nimubs</h1>
  <NuiBox
    style="margin-bottom: 50px;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 50px;
    gap:12px">
    <NuiText as="p">testing paragraph</NuiText>
    <NuiText as="span">testing span</NuiText>
    <NuiText as="li">testing li</NuiText>
    <NuiHeading as="h1">testing h1</NuiHeading>
    <NuiHeading as="h2">testing h2</NuiHeading>
    <NuiHeading as="h3">testing h3</NuiHeading>
    <NuiHeading as="h4">testing h4</NuiHeading>
    <NuiHeading as="h5">testing h5</NuiHeading>
    <NuiHeading as="h6">testing h6</NuiHeading>
    <NuiButton>primary button</NuiButton>
    <NuiButton disabled>disabled button</NuiButton>
    <NuiButton variant="ghost">ghost button</NuiButton>
    <NuiAvatar initials="JG" />
    <NuiAvatar initials="JG" imageUrl="https://i.pravatar.cc/150?img=10" />
    <NuiAvatar initials="JG" size="large" />
    <NuiAvatar initials="JG" imageUrl="https://i.pravatar.cc/150?img=10" size="large" />
    <NuiLink url="#">Test Link</NuiLink>
    <NuiLink url="https://www.google.com" external>Test Link</NuiLink>
    <NuiIconContainer><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M32 400C32 479.5 96.5 544 176 544L480 544C550.7 544 608 486.7 608 416C608 364.4 577.5 319.9 533.5 299.7C540.2 286.6 544 271.7 544 256C544 203 501 160 448 160C430.3 160 413.8 164.8 399.6 173.1C375.5 127.3 327.4 96 272 96C192.5 96 128 160.5 128 240C128 248 128.7 255.9 129.9 263.5C73 282.7 32 336.6 32 400z"/></svg></NuiIconContainer>
    <NuiIconContainer isClickable><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M32 400C32 479.5 96.5 544 176 544L480 544C550.7 544 608 486.7 608 416C608 364.4 577.5 319.9 533.5 299.7C540.2 286.6 544 271.7 544 256C544 203 501 160 448 160C430.3 160 413.8 164.8 399.6 173.1C375.5 127.3 327.4 96 272 96C192.5 96 128 160.5 128 240C128 248 128.7 255.9 129.9 263.5C73 282.7 32 336.6 32 400z"/></svg></NuiIconContainer>
    <NuiInput
      v-model="testInput"
      id="test-input"
      placeholder="type here"
      label="Text Input"
      type="text"
    />
    <NuiInput
      disabled
      v-model="testInput"
      id="test-input"
      placeholder="type here"
      label="Disabled Input"
      type="text"
    />
    <NuiInput
      readOnly
      v-model="testInput"
      id="test-input"
      placeholder="type here"
      label="Readonly Input"
      type="text"
    />
    <NuiInput
      v-model="testInput"
      id="test-input"
      placeholder="type here"
      label="Required Input"
      isRequired
      type="text"
    />
    <NuiInput
      v-model="testInput"
      id="test-input"
      placeholder="type here"
      label="Required Input"
      isRequired
      isInvalid
      type="text"
      errorMessage="this value is empty"
    />
    <NuiInput
      leftIcon
      v-model="testInputNumber"
      id="test-input-number"
      placeholder="type here"
      label="Number Input"
      type="number"
      min="0"
      max="10"
    />
    <NuiTextarea
      v-model="testTextarea"
      id="test-textarea"
      placeholder="Test Textarea"
      label="Textarea Label"
    />
    <NuiTextarea
      v-model="testTextarea"
      id="test-textarea"
      placeholder="Required Textarea"
      label="Textarea Label"
      isRequired
    />
    <NuiTextarea
      v-model="testTextarea"
      id="test-textarea"
      placeholder="Required Textarea"
      label="Textarea Label"
      isRequired
      isInvalid
      errorMessage="please fill out this value"
    />
    <NuiTextarea
      v-model="testTextarea"
      id="test-textarea"
      placeholder="Disabled Textarea"
      label="Textarea Label"
      disabled
    />
    <NuiTextarea
      v-model="testTextarea"
      id="test-textarea"
      placeholder="Readonly Textarea"
      label="Textarea Label"
      readOnly
    />
    <NuiInput
      v-model="testInput"
      id="test-input"
      placeholder="type here"
      label="Text Input"
      type="text"
    />
    <NuiSelect
      label="Test Select"
      v-model="favoriteFruit"
      :options="[
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Cherry', value: 'cherry' }
      ]"
      placeholder="Select a fruit"
    />
    <NuiSelect
      isRequired
      label="Required Select"
      v-model="favoriteFruit"
      :options="[
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Cherry', value: 'cherry' }
      ]"
      placeholder="Select a fruit"
    />
    <NuiSelect
      isRequired
      isInvalid
      errorMessage="Please select a value"
      label="Invalid Select"
      v-model="favoriteFruit"
      :options="[
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Cherry', value: 'cherry' }
      ]"
      placeholder="Select a fruit"
    />
    <NuiSelect
      disabled
      label="Disabled Select"
      v-model="favoriteFruit"
      :options="[
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Cherry', value: 'cherry' }
      ]"
      placeholder="Select a fruit"
    />
    <NuiSelect
      readOnly
      label="Readonly Select"
      v-model="favoriteFruit"
      :options="[
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Cherry', value: 'cherry' }
      ]"
      placeholder="Select a fruit"
    />
  </NuiBox>
  <div style="display:flex; flex-direction:column; gap:12px; padding:12px;">
    <NuiButton>primary button</NuiButton>
    <NuiButton variant="ghost">ghost button</NuiButton>
    <NuiButton disabled>disabled button</NuiButton>
  </div>
  <NuiInput
    v-model="testInput"
    id="test-input"
    placeholder="Test Input"
    label="Input Label"
  />
  <NuiTextarea
    v-model="testTextarea"
    id="test-textarea"
    placeholder="Test Textarea"
    label="Textarea Label"
  />
  <NuiAvatar initials="JG" />
  <NuiAvatar initials="JG" imageUrl="https://i.pravatar.cc/150?img=10" />
  <NuiAvatar initials="JG" size="large" />
  <NuiAvatar initials="JG" imageUrl="https://i.pravatar.cc/150?img=10" size="large" />
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
    <div style="width: 100vw; height: 50vh; background-color: #edb1c0; display: flex; justify-content: center; align-items: center;">
    <NuiBox
      style="
      width: 40vw;
      height: 40vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-left: 50px;
      background: #edb1c0;
      box-shadow:  10px 10px 12px #dca5b3,
             -10px -10px 16px #febdcd;"
    >
      <NuiText as="p">pink this one for sure</NuiText>
    </NuiBox>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const testInput = ref('')
const testInputNumber = ref('')
const testTextarea = ref('')
const testDialog = ref(false)

const favoriteFruit = ref('')
</script>

<style>
html {
  background-color: #eee;
}
</style>
