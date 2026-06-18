import { fn } from 'storybook/test';
import PxButton from '../components/PxButton.vue';

export default {
  title: 'Elements/Button',
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
    fullWidth: {
      control: 'boolean',
      description: 'Stretches the button to fill its container width.'
    },
    type: {
      control: 'select',
      options: ['button', 'submit'],
      description: 'Corresponds with native html to set the type of the button.'
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
    disabled: false,
    fullWidth: false,
    type: 'button',
    variant: 'default',
    onClick: fn(),
  },
};

export const Default = {};

export const Ghost = {
  args: { variant: 'ghost' },
};

