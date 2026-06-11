import PxRadio from '../components/PxRadio.vue';

export default {
  title: 'Radio',
  component: PxRadio,
  tags: ['autodocs'],
  argTypes: {
    default: {
      control: 'text',
      description: 'Label text for the radio button.',
    },
    modelValue: {
      control: 'text',
      description: 'The currently selected value. Bind the same modelValue across a group using the same name.',
    },
    value: {
      control: 'text',
      description: 'The value this radio represents when selected.',
    },
    name: {
      control: 'text',
      description: 'Groups radio buttons together. All radios sharing a name are mutually exclusive.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the radio button when true.',
    },
    isRequired: {
      control: 'boolean',
      description: 'Marks the radio as required.',
    },
    isInvalid: {
      control: 'boolean',
      description: 'Marks the radio as invalid for accessibility.',
    },
  },
  render: (args) => ({
    components: { PxRadio },
    setup() { return { args } },
    template: '<PxRadio v-bind="args">{{ args.default }}</PxRadio>',
  }),
  args: {
    default: 'Option one',
    modelValue: '',
    value: 'one',
    name: 'example',
    disabled: false,
    isRequired: false,
    isInvalid: false,
  },
};

export const Default = {};

export const Checked = {
  args: { modelValue: 'one' },
};

export const Disabled = {
  args: { disabled: true },
};

export const Required = {
  args: { isRequired: true },
};
