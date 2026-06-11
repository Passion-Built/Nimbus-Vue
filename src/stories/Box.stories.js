import PxBox from '../components/PxBox.vue';

export default {
  title: 'Box',
  component: PxBox,
  tags: ['autodocs'],
  argTypes: {
    default: {
      control: 'text',
      description: 'The default text content of the box.',
    },
    clickable: {
      control: 'boolean',
      description: 'Applies a pointer cursor and inset shadow on hover to indicate interactivity.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Stretches the box to fill its container width.',
    },
    render: (args) => ({
      components: { PxBox },
      setup() { return { args } },
      template: '<PxBox v-bind="args">{{ args.default }}</PxBox>',
    }),
  },
  args: {
    default: 'Icing lemon drops marzipan candy apple pie lollipop. I love I love icing shortbread gummies carrot cake. Candy tiramisu cookie brownie jelly-o sweet sugar plum lollipop. Fruitcake shortbread chocolate bar pie gummi bears fruitcake icing cake caramels.',
    fullWidth: false,
    clickable: false,
  },
};

export const Default = {};
