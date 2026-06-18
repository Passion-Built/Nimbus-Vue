import PxFormSection from "@/components/PxFormSection.vue";
import PxInput from "@/components/PxInput.vue";

export default {
  title: 'Forms/Form Section',
  component: PxFormSection,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The section heading, rendered in the `<legend>` of the fieldset.',
    },
  },
  render: (args) => ({
    components: { PxFormSection, PxInput },
    setup() { return { args } },
    template: `
      <PxFormSection v-bind="args">
        <PxInput id="street" label="Street" placeholder="123 Main St" />
        <PxInput id="city" label="City" placeholder="Austin" />
      </PxFormSection>
    `,
  }),
  args: {
    title: 'Address',
  },
};

export const Default = {};
