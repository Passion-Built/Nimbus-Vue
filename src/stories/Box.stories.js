import PxBox from '../components/PxBox.vue';
import PxText from '../components/PxText.vue';

export default {
  title: 'Layout/Box',
  component: PxBox,
  tags: ['autodocs'],
  argTypes: {
    default: {
      control: 'text',
      description: 'The default text content of the box.',
    },
    as: {
      control: { type: 'select' },
      options: ['div', 'section', 'article', 'aside', 'nav', 'main', 'header', 'footer'],
      description: 'The semantic HTML element to render as. Defaults to `div`.',
    },
    isClickable: {
      control: 'boolean',
      description: 'Applies a pointer cursor and shadow on hover to indicate interactivity.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Stretches the box to fill its container width.',
    },
  },
  render: (args) => ({
    components: { PxBox, PxText},
    setup() {
      const { default: slotContent, ...rest } = args
      return { args: rest, slotContent }
    },
    template: '<PxBox v-bind="args"><PxText as="p">{{ slotContent }}</PxText></PxBox>',
  }),
  args: {
    default: 'Icing lemon drops marzipan candy apple pie lollipop. I love I love icing shortbread gummies carrot cake. Candy tiramisu cookie brownie jelly-o sweet sugar plum lollipop. Fruitcake shortbread chocolate bar pie gummi bears fruitcake icing cake caramels.',
    fullWidth: false,
    isClickable: false,
  },
};

export const Default = {};
