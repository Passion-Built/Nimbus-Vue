import PxLink from "@/components/PxLink.vue";

export default {
  title: 'Typography/Link',
  component: PxLink,
  tags: ['autodocs'],
  argTypes: {
    default: {
      control: 'text',
      description: 'The default text content of the link.',
    },
    url: {
      control: 'text',
      description: 'The URL that the link points to.',
    },
    external: {
      control: 'boolean',
      description: 'If true, the link will open in a new tab.',
    },
    navigation: {
      control: 'boolean',
      description: 'If true, the link will be styled for navigation purposes.',
    },
    current: {
      control: 'boolean',
      description: 'Marks the active navigation link, setting `aria-current="page"`. Only applies when `navigation` is also true.'
    }
  },
  render: (args) => ({
    components: { PxLink },
    setup() { return { args } },
    template: '<PxLink v-bind="args">{{ args.default }}</PxLink>',
  }),
  args: { 
    default: 'This is a link',
    url: '#',
  },
};

export const Default = {};

export const navigation = {
  args: { navigation: true },
};
