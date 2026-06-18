import PxInput from "@/components/PxInput.vue";
import { readonly } from "vue";

export default {
  title: 'Forms/Input',
  component: PxInput,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'The two way binding value of the input field.',
    },
    id: {
      control: 'text',
      description: 'The unique identifier for the input field.',
    },
    label: {
      control: 'text',
      description: 'The label text displayed above the input field.',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed when the input is empty.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input when true.',
    },
    readonly: {
      control: 'boolean',
      description: 'Makes the input read-only when true.',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message displayed below the input when there is an error.',
    },
    helperMessage: {
      control: 'text',
      description: 'Hint text shown below the input when there is no error..'
    },
    isRequired: {
      control: 'boolean',
      description: 'Indicates that the input is required.',
    },
    isInvalid: {
      control: 'boolean',
      description: 'Indicates that the input is in an invalid state.',
    },

  },
  render: (args) => ({
    components: { PxInput },
    setup() { return { args } },
    template: '<PxInput v-bind="args" />',
  }),
  args: { 
    modelValue: '',
    placeholder: 'Placeholder',
    label: 'Input Label',
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
