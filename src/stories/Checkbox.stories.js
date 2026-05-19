import PxCheckbox from '../components/PxCheckbox.vue';

export default {
  title: 'Checkbox',
  component: PxCheckbox,
  tags: ['autodocs'],
  argTypes: {
    default: {
      control: 'text',
      description: 'Label text for the checkbox.',
    },
    modelValue: {
      control: 'boolean',
      description: 'The checked state. Supports boolean or array for checkbox groups.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the checkbox when true.',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Sets the checkbox to an indeterminate (mixed) state.',
    },
    isRequired: {
      control: 'boolean',
      description: 'Marks the checkbox as required.',
    },
    isInvalid: {
      control: 'boolean',
      description: 'Marks the checkbox as invalid for accessibility.',
    },
  },
  render: (args) => ({
    components: { PxCheckbox },
    setup() { return { args } },
    template: '<PxCheckbox v-bind="args">{{ args.default }}</PxCheckbox>',
  }),
  args: {
    default: 'I agree to the terms and conditions',
    modelValue: false,
    disabled: false,
    indeterminate: false,
    isRequired: false,
    isInvalid: false,
  },
};

export const Default = {};

export const Checked = {
  args: { modelValue: true },
};

export const Indeterminate = {
  args: { indeterminate: true },
};

export const Disabled = {
  args: { disabled: true },
};

export const Required = {
  args: { isRequired: true },
};
