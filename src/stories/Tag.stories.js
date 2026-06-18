import PxTag from '../components/PxTag.vue';

export default {
  title: 'Elements/Tag',
  component: PxTag,
  tags: ['autodocs'],
  argTypes: {
    default: {
      control: 'text',
      description: 'The text content of the tag.',
    },
    shape: {
      control: 'select',
      options: ['rounded', 'square', 'pill'],
      description: 'Controls the border radius of the tag.',
    },
    isDecorative: {
      control: 'boolean',
      description: 'When true, hides the tag from screen readers. Use for purely visual tags that add no semantic meaning.',
    },
  },
  render: (args) => ({
    components: { PxTag },
    setup() { return { args } },
    template: '<PxTag v-bind="args">{{ args.default }}</PxTag>',
  }),
  args: {
    default: 'Tag',
    shape: 'rounded',
    isDecorative: false,
  },
};

export const Default = {};

export const Pill = {
  args: { shape: 'pill' },
};

export const Square = {
  args: { shape: 'square' },
};
