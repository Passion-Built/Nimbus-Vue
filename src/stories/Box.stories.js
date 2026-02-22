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
    render: (args) => ({
      components: { PxBox },
      setup() { return { args } },
      template: '<PxBox v-bind="args">{{ args.default }}</PxBox>',
    }),
  },
  args: { 
    default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
};

export const Default = {};
