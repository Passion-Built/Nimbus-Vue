import PxTextarea from "@/components/PxTextarea.vue";

export default {
  title: 'Textarea',
  component: PxTextarea,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'The two way binding value of the textarea field.',
    },
    id: {
      control: 'text',
      description: 'The unique identifier for the textarea field.',
    },
    label: {
      control: 'text',
      description: 'The label text displayed above the textarea field.',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed when the textarea is empty.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the textarea when true.',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message displayed below the textarea when there is an error.',
    },
    helperMessage: {
      control: 'text',
      description: 'Hint text shown below the input when there is no error.'
    },
    isRequired: {
      control: 'boolean',
      description: 'Indicates that the textarea is required.',
    },
    isInvalid: {
      control: 'boolean',
      description: 'Indicates that the textarea is in an invalid state.',
    },
    resize: {
      control: 'select',
      options: ['vertical', 'horizontal', 'both', 'auto'],
      description: 'Controls resize behavior. auto grows the textarea height to fit its content.',
    },
  },
  render: (args) => ({
    components: { PxTextarea },
    setup() { return { args } },
    template: '<PxTextarea v-bind="args" />',
  }),
  args: { 
    modelValue: '',
    label: 'Label',
    placeholder: 'Enter text here...',
  },
};

export const Default = {};

export const Disabled = {
  args: { disabled: true },
};

export const WithError = {
  args: { errorMessage: 'This field is required.', isInvalid: true },
};

export const Required = {
  args: { isRequired: true },
};
