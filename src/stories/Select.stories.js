import PxSelect from '../components/PxSelect.vue';

export default {
  title: 'Forms/Select',
  component: PxSelect,
  tags: ['autodocs'],
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 250,
      },
    },
  },
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'The two way binding value of the select field.',
    },
    id: {
      control: 'text',
      description: 'The unique identifier for the select field.',
    },
    label: {
      control: 'text',
      description: 'The label text displayed above the select field.',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed when no option is selected.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the select when true.',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message displayed below the select when there is an error.',
    },
    isRequired: {
      control: 'boolean',
      description: 'Indicates that the select is required.',
    },
    isInvalid: {
      control: 'boolean',
      description: 'Indicates that the select is in an invalid state.',
    },
    options: {
      control: 'object',
      description: 'The options to display in the select dropdown. Each option should be an object with `label` and `value` properties.',
    }
  },
  render: (args) => ({
    components: { PxSelect },
    setup() { return { args } },
    template: `
      <PxSelect
        v-bind="args"
        :options="[
          { label: 'Option 1', value: 'apple' },
          { label: 'Option 2', value: 'banana' },
          { label: 'Option 3', value: 'cherry' }
        ]"
      />
    `,
  }),
  args: { 
    modelValue: '',
    placeholder: 'Select an option',
    label: 'Select Label',
  },
};

export const Default = {};

export const Disabled = {
  args: { disabled: true },
};

export const Readonly = {
  args: { readonly: true },
};

export const Required = {
  args: { isRequired: true },
};

export const Invalid = {
  args: { 
    errorMessage: 'This field is required.',
    isInvalid: true,
    isRequired: true,
  },
};

