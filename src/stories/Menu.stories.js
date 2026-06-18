import PxMenu from '../components/PxMenu.vue';
import PxMenuItem from '../components/PxMenuItem.vue';
import PxButton from '../components/PxButton.vue';

export default {
  title: 'Overlays/Menu',
  component: PxMenu,
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['bottom-start', 'bottom-end', 'top-start', 'top-end'],
      description: 'Placement of the menu panel relative to the trigger.',
    },
  },
};

export const Default = {
  render: (args) => ({
    components: { PxMenu, PxMenuItem, PxButton },
    setup() { return { args } },
    template: `
      <PxMenu v-bind="args">
        <template #trigger>
          <PxButton>Actions</PxButton>
        </template>
        <PxMenuItem>Edit</PxMenuItem>
        <PxMenuItem>Duplicate</PxMenuItem>
        <PxMenuItem url="#">View Details</PxMenuItem>
        <PxMenuItem>Delete</PxMenuItem>
      </PxMenu>
    `,
  }),
  args: {
    placement: 'bottom-start',
  },
};

export const TopPlacement = {
  render: (args) => ({
    components: { PxMenu, PxMenuItem, PxButton },
    setup() { return { args } },
    template: `
      <div style="padding-top: 120px;">
        <PxMenu v-bind="args">
          <template #trigger>
            <PxButton>Actions</PxButton>
          </template>
          <PxMenuItem>Edit</PxMenuItem>
          <PxMenuItem>Duplicate</PxMenuItem>
          <PxMenuItem>Delete</PxMenuItem>
        </PxMenu>
      </div>
    `,
  }),
  args: {
    placement: 'top-start',
  },
};
