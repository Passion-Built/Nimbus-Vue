import PxImage from "@/components/PxImage.vue";

export default {
  title: 'Elements/Image',
  component: PxImage,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'The image source URL.',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the image (required for accessibility).',
    },
    width: {
      control: 'text',
      description: 'The intrinsic width of the image.',
    },
    height: {
      control: 'text',
      description: 'The intrinsic height of the image.',
    },
    fit: {
      control: { type: 'select' },
      options: ['cover', 'contain', 'fill', 'none', 'scale-down'],
      description: 'How the image fills its box (`object-fit`).',
    },
    position: {
      control: 'text',
      description: 'Focal point of the image within its box (`object-position`).',
    },
    loading: {
      control: { type: 'select' },
      options: ['lazy', 'eager'],
      description: 'Native loading strategy.',
    },
    elevated: {
      control: 'boolean',
      description: 'Adds a raised neumorphic shadow.',
    },
  },
  render: (args) => ({
    components: { PxImage },
    setup() { return { args } },
    template: '<PxImage v-bind="args" />',
  }),
  args: {
    src: 'https://picsum.photos/240/160',
    alt: 'Sample image',
    width: '240',
    height: '160',
    fit: 'cover',
  },
};

export const Default = {};

export const Elevated = {
  args: { elevated: true },
};
