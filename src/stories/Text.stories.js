import PxText from "@/components/PxText.vue";

export default {
  title: 'Text',
  component: PxText,
  tags: ['autodocs'],
  argTypes: {
    default: {
      control: 'text',
      description: 'The default text content of the component.',
    },
    as: {
      control: { type: 'select' },
      options: ['p', 'span', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'The HTML tag to render the text as.',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the text for non-heading elements.',
    },
    weight: {
      control: { type: 'select' },
      options: ['normal', 'semibold', 'bold'],
      description: 'The font weight of the text.',
    },
    italic: {
      control: 'boolean',
      description: 'Whether the text should be italicized.',
    },
  },
  render: (args) => ({
    components: { PxText },
    setup() { return { args } },
    template: '<PxText v-bind="args">{{ args.default }}</PxText>',
  }),
  args: { 
    default: 'This is some text.',
    as: 'p',
    size: 'medim',
    weight: 'normal',},
};

export const Paragraph = {};

export const Heading = {
  args: { as: 'h1', default: 'This is a heading.' },
};

export const Small = {
  args: { size: 'small' },
};

export const Large = {
  args: { size: 'large' },
};
