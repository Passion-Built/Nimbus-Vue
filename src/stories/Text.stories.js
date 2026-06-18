import PxText from "@/components/PxText.vue";

export default {
  title: 'Typography/Text',
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
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
      description: 'The text alignment.',
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
      description: 'The font weight. Headings default to bold; this overrides it.',
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
    weight: 'normal',
  },
};

export const Paragraph = {};

export const Heading = {
  args: { as: 'h1', default: 'This is a heading.' },
};

export const Medium = {
  args: { weight: 'medium', default: 'Medium weight text.' },
};

// Size comes from `as`; override font-size with the exposed tokens.
export const SizedDown = {
  render: (args) => ({
    components: { PxText },
    setup() { return { args } },
    template: `<PxText v-bind="args" :style="{ fontSize: 'var(--px-font-size-heading-04)' }">{{ args.default }}</PxText>`,
  }),
  args: { as: 'h2', default: 'Semantic h2, sized down via token.' },
};
