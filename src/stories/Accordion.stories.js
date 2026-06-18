import PxAccordion from '../components/PxAccordion.vue';
import PxAccordionItem from '../components/PxAccordionItem.vue';

export default {
  title: 'Layout/Accordion',
  component: PxAccordion,
  tags: ['autodocs'],
  argTypes: {
    allowMultiple: {
      control: 'boolean',
      description: 'When true, multiple items can be open at the same time.',
    },
  },
  args: {
    allowMultiple: false,
  },
  render: (args) => ({
    components: { PxAccordion, PxAccordionItem },
    setup() { return { args } },
    template: `
      <PxAccordion v-bind="args">
        <PxAccordionItem title="What is Nimbus?" defaultOpen>
          Nimbus is a base-level UI kit built on a neumorphic design system.
        </PxAccordionItem>
        <PxAccordionItem title="How do I install it?">
          You can install Nimbus via npm or copy the components directly into your project.
        </PxAccordionItem>
        <PxAccordionItem title="Does it support dark mode?">
          Yes, dark mode is supported via the data-theme attribute on the root element.
        </PxAccordionItem>
      </PxAccordion>
    `,
  }),
};

export const Default = {};

export const AllowMultiple = {
  args: { allowMultiple: true },
};
