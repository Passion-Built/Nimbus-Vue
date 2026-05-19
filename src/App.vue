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
    <PxText as="h1" weight="bold">Amazing Heading</PxText>
    <PxText as="p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla qui vel explicabo vitae odio dolor iusto nihil exercitationem repudiandae mollitia, molestias quidem animi, libero cumque sapiente. Optio numquam aliquid non?</PxText>
    <PxText as="p">testing paragraph</PxText>
    <PxText as="p" italic>testing paragraph</PxText>
    <PxText as="span">testing span</PxText>
    <PxText as="li">testing li</PxText>
    <PxText as="h1" align="right">testing h1</PxText>
    <PxText as="h1" align="right" italic>testing h1 italic</PxText>
    <PxText as="h1" align="right" weight="bold">testing h1 bold</PxText>
    <PxText as="h1" align="right" weight="bold" italic>testing h1 bold italic</PxText>
    <PxText as="h2" align="center">testing h2</PxText>
    <PxText as="h3">testing h3</PxText>
    <PxText as="h4">testing h4</PxText>
    <PxText as="h5">testing h5</PxText>
    <PxText as="h6">testing h6</PxText>
    <PxText as="p" align="right">Test right</PxText>
    <PxText as="p" align="left">Test left</PxText>
    <PxText as="p" align="center">Test center</PxText>
    <PxText as="p" align="center" weight="bold">Test center bold</PxText>
    <PxText as="p" align="center" weight="semibold">Test center semi bold</PxText>
    <PxText as="p" align="center" weight="bold" italic>Test center bold</PxText>
    <PxText as="p" align="center" weight="semibold" italic>Test center semi bold</PxText>
    <PxText as="p" align="center" weight="light">Test center light</PxText>
    <PxText as="p" align="center" size="medium" weight="bold">Test center bold</PxText>
    <PxText as="p" align="center" size="large" weight="semibold">Test center semi bold</PxText>
    <PxText as="p" align="center" size="small" weight="light">Test center light</PxText>
    <PxText>default text</PxText>
    <PxButton>primary button</PxButton>
    <PxButton disabled>disabled button</PxButton>
    <PxButton variant="ghost">ghost button</PxButton>
    <PxAvatar initials="JG" />
    <PxAvatar initials="JG" imageUrl="https://i.pravatar.cc/150?img=10" />
    <PxAvatar initials="JG" size="large" />
    <PxAvatar initials="JG" imageUrl="https://i.pravatar.cc/150?img=10" size="large" />
    <PxLink url="#">Test Link</PxLink>
    <PxLink url="#" navigation>Test Link</PxLink>
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
    <PxDialog v-model:isOpen="testDialog">
      <template #header>
        <PxText as="h2">Sign up for Newsletter</PxText>
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
    <PxAccordion>
      <PxAccordionItem title="What is Nimbus?" defaultOpen>
        Nimbus is a base-level UI kit built on a neumorphic design system.
      </PxAccordionItem>
      <PxAccordionItem title="How do I install it?">
        You can install Nimbus via npm or copy the components directly into your project.
      </PxAccordionItem>
      <PxAccordionItem title="Does it support dark mode?">
        Yes, dark mode is supported via the data-theme attribute on the root element.
      </PxAccordionItem>
    </PxAccordion>
    <PxCheckbox v-model="testCheckbox">I agree to the terms and conditions</PxCheckbox>
    <PxCheckbox v-model="testCheckbox" isRequired>Required checkbox</PxCheckbox>
    <PxCheckbox v-model="testCheckbox" disabled>Disabled checkbox</PxCheckbox>
    <PxRadio v-model="testRadio" name="test" value="one">Option one</PxRadio>
    <PxRadio v-model="testRadio" name="test" value="two">Option two</PxRadio>
    <PxRadio v-model="testRadio" name="test" value="three" disabled>Option three (disabled)</PxRadio>
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <PxTag>Default</PxTag>
      <PxTag shape="pill">Pill</PxTag>
      <PxTag shape="square">Square</PxTag>
    </div>
    <PxTabs v-model="activeTab" style="width: 100%;">
      <PxTab value="overview">Overview</PxTab>
      <PxTab value="details">Details</PxTab>
      <PxTab value="settings">Settings</PxTab>
    </PxTabs>
    <PxText as="p" v-show="activeTab === 'overview'">Overview content goes here.</PxText>
    <PxText as="p" v-show="activeTab === 'details'">Details content goes here.</PxText>
    <PxText as="p" v-show="activeTab === 'settings'">Settings content goes here.</PxText>
    <PxMenu>
      <template #trigger>
        <PxButton>Actions</PxButton>
      </template>
      <PxMenuItem>Edit</PxMenuItem>
      <PxMenuItem>Duplicate</PxMenuItem>
      <PxMenuItem url="#">View Details</PxMenuItem>
      <PxMenuItem>Delete</PxMenuItem>
    </PxMenu>
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
    placeholder="Test Textarea resize"
    label="Textarea Label"
    resize="horizontal"
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

  <PxDataTable
    style="width: 70vw; margin: 24px auto;"
    :columns="[
      { key: 'name', label: 'Name' },
      { key: 'role', label: 'Role' },
      { key: 'location', label: 'Location' },
      { key: 'status', label: 'Status' },
    ]"
    :rows="[
      { id: 1, name: 'Jess Goodlett', role: 'Designer', location: 'Austin, TX', status: 'Active' },
      { id: 2, name: 'Alex Rivera', role: 'Engineer', location: 'New York, NY', status: 'Active' },
      { id: 3, name: 'Sam Chen', role: 'Product', location: 'San Francisco, CA', status: 'Away' },
      { id: 4, name: 'Jordan Lee', role: 'Marketing', location: 'Chicago, IL', status: 'Inactive' },
    ]"
  />

  <div style="height: 500px" />


  <PxBox
    style="margin-bottom: 50px;
    width: 70vw;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
    justify-content: flex-start;"
  >
    <PxText as="h1" weight="bold">Heading 1</PxText>
    <PxText as="h2">Heading 2</PxText>
    <PxText as="h3">Heading 3</PxText>
    <PxText as="h4">Heading 4</PxText>
    <PxText as="h5">Heading 5</PxText>
    <PxText as="h6">Heading 6</PxText>
    <PxText as="p">Paragaph</PxText>
    <PxButton>Button</PxButton>
    <PxButton disabled>Disabled Button</PxButton>
    <PxButton variant="ghost">Ghost Button</PxButton>
    <PxAvatar initials="JG" />
    <PxAvatar initials="JG" imageUrl="https://i.pravatar.cc/150?img=10" />
    <PxAvatar initials="JG" size="large" />
    <PxAvatar initials="JG" imageUrl="https://i.pravatar.cc/150?img=10" size="large" />
    <PxLink url="#">Test Link</PxLink>
    <PxLink url="#" navigation>Test Link</PxLink>
    <PxIconContainer><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M32 400C32 479.5 96.5 544 176 544L480 544C550.7 544 608 486.7 608 416C608 364.4 577.5 319.9 533.5 299.7C540.2 286.6 544 271.7 544 256C544 203 501 160 448 160C430.3 160 413.8 164.8 399.6 173.1C375.5 127.3 327.4 96 272 96C192.5 96 128 160.5 128 240C128 248 128.7 255.9 129.9 263.5C73 282.7 32 336.6 32 400z"/></svg></PxIconContainer>
    <PxInput
      v-model="testInput"
      id="test-input"
      placeholder="type here"
      label="Text Input"
      type="text"
    />
    <PxTextarea
      v-model="testTextarea"
      id="test-textarea"
      placeholder="Test Textarea"
      label="Textarea Label"
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
  </PxBox>


  <div style="height: 500px" />


</template>

<script setup>
import { onMounted, ref } from 'vue';

const testInput = ref('')
const testInputNumber = ref('')
const testTextarea = ref('')
const testDialog = ref(false)
const testCheckbox = ref(false)
const testRadio = ref('')
const activeTab = ref('overview')

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
