import PxIconContainer from "@/components/PxIconContainer.vue";

export default {
  title: 'Elements/IconContainer',
  component: PxIconContainer,
  tags: ['autodocs'],
  argTypes: {
    isClickable: {
      control: 'boolean',
      description: 'Controls whether the icon container is clickable or not.',
    },
  },
  render: (args) => ({
    components: { PxIconContainer },
    setup() { return { args } },
    template: '<PxIconContainer v-bind="args"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M32 400C32 479.5 96.5 544 176 544L480 544C550.7 544 608 486.7 608 416C608 364.4 577.5 319.9 533.5 299.7C540.2 286.6 544 271.7 544 256C544 203 501 160 448 160C430.3 160 413.8 164.8 399.6 173.1C375.5 127.3 327.4 96 272 96C192.5 96 128 160.5 128 240C128 248 128.7 255.9 129.9 263.5C73 282.7 32 336.6 32 400z"/></svg></PxIconContainer>',
  }),
  args: { 
    isClickable: false,
  },
};

export const Default = {};

export const Clickable = {
  args: { isClickable: true },
};
