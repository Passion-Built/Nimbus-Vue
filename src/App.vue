<template>
  <PxButton @click="toggleTheme()" style="position: fixed; top: 8px; right: 8px;">Toggle Theme</PxButton>
  <h1>passion presents: nimbus</h1>
  <PxBox
    style="margin-bottom: 50px;
    width: 500px;
    margin: 24px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:12px">
    <PxText as="p">testing paragraph</PxText>
    <PxText as="span">testing span</PxText>
    <PxText as="li">testing li</PxText>
    <PxHeading as="h1">testing h1</PxHeading>
    <PxHeading as="h2">testing h2</PxHeading>
    <PxHeading as="h3">testing h3</PxHeading>
    <PxHeading as="h4">testing h4</PxHeading>
    <PxHeading as="h5">testing h5</PxHeading>
    <PxHeading as="h6">testing h6</PxHeading>
    <PxButton>primary button</PxButton>
    <PxButton disabled>disabled button</PxButton>
    <PxButton variant="ghost">ghost button</PxButton>
    <PxAvatar initials="JG" />
    <PxAvatar initials="JG" imageUrl="https://i.pravatar.cc/150?img=10" />
    <PxAvatar initials="JG" size="large" />
    <PxAvatar initials="JG" imageUrl="https://i.pravatar.cc/150?img=10" size="large" />
    <PxLink url="#">Test Link</PxLink>
    <PxLink url="https://www.google.com" external>Test Link</PxLink>
    <PxIconContainer><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M32 400C32 479.5 96.5 544 176 544L480 544C550.7 544 608 486.7 608 416C608 364.4 577.5 319.9 533.5 299.7C540.2 286.6 544 271.7 544 256C544 203 501 160 448 160C430.3 160 413.8 164.8 399.6 173.1C375.5 127.3 327.4 96 272 96C192.5 96 128 160.5 128 240C128 248 128.7 255.9 129.9 263.5C73 282.7 32 336.6 32 400z"/></svg></PxIconContainer>
    <PxIconContainer isClickable><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M32 400C32 479.5 96.5 544 176 544L480 544C550.7 544 608 486.7 608 416C608 364.4 577.5 319.9 533.5 299.7C540.2 286.6 544 271.7 544 256C544 203 501 160 448 160C430.3 160 413.8 164.8 399.6 173.1C375.5 127.3 327.4 96 272 96C192.5 96 128 160.5 128 240C128 248 128.7 255.9 129.9 263.5C73 282.7 32 336.6 32 400z"/></svg></PxIconContainer>
    <PxInput
      v-model="testInput"
      id="test-input"
      placeholder="type here"
      label="Text Input"
      type="text"
    />
    <PxInput
      disabled
      v-model="testInput"
      id="test-input"
      placeholder="type here"
      label="Disabled Input"
      type="text"
    />
    <PxInput
      readOnly
      v-model="testInput"
      id="test-input"
      placeholder="type here"
      label="Readonly Input"
      type="text"
    />
    <PxInput
      v-model="testInput"
      id="test-input"
      placeholder="type here"
      label="Required Input"
      isRequired
      type="text"
    />
    <PxInput
      v-model="testInput"
      id="test-input"
      placeholder="type here"
      label="Required Input"
      isRequired
      isInvalid
      type="text"
      errorMessage="this value is empty"
    />
    <PxInput
      leftIcon
      v-model="testInputNumber"
      id="test-input-number"
      placeholder="type here"
      label="Number Input"
      type="number"
      min="0"
      max="10"
    />
    <PxTextarea
      v-model="testTextarea"
      id="test-textarea"
      placeholder="Test Textarea"
      label="Textarea Label"
    />
    <PxTextarea
      v-model="testTextarea"
      id="test-textarea"
      placeholder="Required Textarea"
      label="Textarea Label"
      isRequired
    />
    <PxTextarea
      v-model="testTextarea"
      id="test-textarea"
      placeholder="Required Textarea"
      label="Textarea Label"
      isRequired
      isInvalid
      errorMessage="please fill out this value"
    />
    <PxTextarea
      v-model="testTextarea"
      id="test-textarea"
      placeholder="Disabled Textarea"
      label="Textarea Label"
      disabled
    />
    <PxTextarea
      v-model="testTextarea"
      id="test-textarea"
      placeholder="Readonly Textarea"
      label="Textarea Label"
      readOnly
    />
    <PxInput
      v-model="testInput"
      id="test-input"
      placeholder="type here"
      label="Text Input"
      type="text"
    />
    <PxSelect
      label="Test Select"
      v-model="favoriteFruit"
      :options="[
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Cherry', value: 'cherry' }
      ]"
      placeholder="Select a fruit"
    />
    <PxSelect
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
    <PxSelect
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
    <PxSelect
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
    <PxSelect
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
    <PxDialog :isOpen="testDialog">
      <template #header>
        <PxHeading as="h2">Sign up for Newsletter</PxHeading>
      </template>
      <PxText as="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iste, quam minus deserunt commodi consectetur doloremque hic ut, adipisci mollitia voluptates dignissimos quidem necessitatibus! Iusto unde nesciunt distinctio repellat voluptas.</PxText>
      <template #footer>
        <div style="display: flex; justify-content: end; gap: 16px; flex-direction: row;">
          <PxButton @click="testDialog = !testDialog">Close</PxButton>
          <PxButton @click="testDialog = !testDialog">Submit</PxButton>
        </div>
      </template>
    </PxDialog>
  <PxButton @click="testDialog = !testDialog">Open Dialog</PxButton>
  </PxBox>
  <div style="display:flex; flex-direction:column; gap:12px; padding:12px;">
    <PxButton>primary button</PxButton>
    <PxButton variant="ghost">ghost button</PxButton>
    <PxButton disabled>disabled button</PxButton>
  </div>
  <PxInput
    v-model="testInput"
    id="test-input"
    placeholder="Test Input"
    label="Input Label"
  />
  <PxTextarea
    v-model="testTextarea"
    id="test-textarea"
    placeholder="Test Textarea"
    label="Textarea Label"
  />
  <PxAvatar initials="JG" />
  <PxAvatar initials="JG" imageUrl="https://i.pravatar.cc/150?img=10" />
  <PxAvatar initials="JG" size="large" />
  <PxAvatar initials="JG" imageUrl="https://i.pravatar.cc/150?img=10" size="large" />
  <PxLink url="#">Test Link</PxLink>
  <PxLink url="https://www.google.com" external>Test Link</PxLink>
  <PxIconContainer><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M32 400C32 479.5 96.5 544 176 544L480 544C550.7 544 608 486.7 608 416C608 364.4 577.5 319.9 533.5 299.7C540.2 286.6 544 271.7 544 256C544 203 501 160 448 160C430.3 160 413.8 164.8 399.6 173.1C375.5 127.3 327.4 96 272 96C192.5 96 128 160.5 128 240C128 248 128.7 255.9 129.9 263.5C73 282.7 32 336.6 32 400z"/></svg></PxIconContainer>
  <PxSelect
    v-model="favoriteFruit"
    :options="[
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cherry', value: 'cherry' }
    ]"
    placeholder="Select a fruit"
  />
</template>

<script setup>
import { onMounted, ref } from 'vue';

const testInput = ref('')
const testInputNumber = ref('')
const testTextarea = ref('')
const testDialog = ref(false)

const favoriteFruit = ref('')

onMounted(() => {
  document.documentElement.dataset.theme = "light";
})

const toggleTheme = () => {
  document.documentElement.dataset.theme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'
}
</script>

<style>
html {
  background-color: var(--px-color-surface);
}
</style>
