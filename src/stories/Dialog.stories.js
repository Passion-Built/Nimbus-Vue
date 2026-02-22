import PxDialog from "@/components/PxDialog.vue";
import PxButton from "@/components/PxButton.vue";
import PxText from "@/components/PxText.vue";

export default {
  title: 'Dialog',
  component: PxDialog,
  tags: ['autodocs'],
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 400,
      },
    },
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls whether the dialog is open or closed.', 
    },
  },
  render: (args) => ({
    components: { PxDialog, PxButton, PxText },
    setup() { return { args } },
    template: `
      <PxDialog v-bind="args">
        <template #header>
          <PxText as="h2">Sign up for Newsletter</PxText>
        </template>
        <PxText as="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iste, quam minus deserunt commodi consectetur doloremque hic ut, adipisci mollitia voluptates dignissimos quidem necessitatibus! Iusto unde nesciunt distinctio repellat voluptas.</PxText>
        <template #footer>
          <div style="display: flex; justify-content: end; gap: 16px; flex-direction: row;">
            <PxButton @click="args.isOpen = !args.isOpen">Close</PxButton>
            <PxButton @click="args.isOpen = !args.isOpen">Submit</PxButton>
          </div>
        </template>
      </PxDialog>
      <PxButton @click="args.isOpen = !args.isOpen">Open Dialog</PxButton>
    `,
  }),
  args: { 
    default: 'This is a dialog. You can put any content here.',
    isOpen: false,
  },
};

export const Default = {};