import PxForm from "@/components/PxForm.vue";
import PxFormSection from "@/components/PxFormSection.vue";
import PxInput from "@/components/PxInput.vue";
import PxButton from "@/components/PxButton.vue";

export default {
  title: 'Forms/Form',
  component: PxForm,
  tags: ['autodocs'],
  argTypes: {
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for the form landmark.',
    },
  },
  render: (args) => ({
    components: { PxForm, PxInput, PxButton },
    setup() { return { args } },
    template: `
      <PxForm v-bind="args">
        <PxInput id="name" label="Name" placeholder="Jane Doe" />
        <PxInput id="email" label="Email" type="email" placeholder="jane@example.com" />
        <PxButton type="submit">Submit</PxButton>
      </PxForm>
    `,
  }),
  args: {
    ariaLabel: 'Example form',
  },
};

export const Default = {};

export const WithSections = {
  render: (args) => ({
    components: { PxForm, PxFormSection, PxInput, PxButton },
    setup() { return { args } },
    template: `
      <PxForm v-bind="args">
        <PxFormSection title="Personal">
          <PxInput id="name" label="Name" placeholder="Jane Doe" />
          <PxInput id="email" label="Email" placeholder="jane@example.com" />
        </PxFormSection>
        <PxFormSection title="Address">
          <PxInput id="street" label="Street" placeholder="123 Main St" />
          <PxInput id="city" label="City" placeholder="Austin" />
        </PxFormSection>
        <PxButton type="submit">Submit</PxButton>
      </PxForm>
    `,
  }),
  args: {
    ariaLabel: 'Profile form',
  },
};
