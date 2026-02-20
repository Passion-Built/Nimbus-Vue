import { fn } from 'storybook/test';
import PxButton from '../components/PxButton.vue';

export default {
  title: 'Button',
  component: PxButton,
  tags: ['autodocs'],
  argTypes: {
    default: {
      control: 'text',
      description: 'The default text content of the button.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button when true.',
    },
    url: {
      control: 'text',
      description: 'If provided, the button will render as an anchor tag with this URL.',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'ghost'],
      description: 'The visual style of the button.',
    },
  },
  render: (args) => ({
    components: { PxButton },
    setup() { return { args } },
    template: '<PxButton v-bind="args">{{ args.default }}</PxButton>',
  }),
  args: { 
    default: 'Button',
    variant: 'default',
    onClick: fn(),
  },
};

export const Default = {};

export const Ghost = {
  args: { variant: 'ghost' },
};

