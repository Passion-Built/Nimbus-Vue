import { ref } from 'vue';
import PxTabs from '../components/PxTabs.vue';
import PxTab from '../components/PxTab.vue';

export default {
  title: 'Layout/Tabs',
  component: PxTabs,
  tags: ['autodocs'],
};

export const Default = {
  render: () => ({
    components: { PxTabs, PxTab },
    setup() {
      const active = ref('overview');
      return { active };
    },
    template: `
      <PxTabs v-model="active">
        <PxTab value="overview">Overview</PxTab>
        <PxTab value="details">Details</PxTab>
        <PxTab value="settings">Settings</PxTab>
        <template #content>
          <p v-show="active === 'overview'">Overview content goes here.</p>
          <p v-show="active === 'details'">Details content goes here.</p>
          <p v-show="active === 'settings'">Settings content goes here.</p>
        </template>
      </PxTabs>
    `,
  }),
};

export const ManyTabs = {
  render: () => ({
    components: { PxTabs, PxTab },
    setup() {
      const active = ref('design');
      return { active };
    },
    template: `
      <PxTabs v-model="active">
        <PxTab value="design">Design</PxTab>
        <PxTab value="engineering">Engineering</PxTab>
        <PxTab value="product">Product</PxTab>
        <PxTab value="marketing">Marketing</PxTab>
        <PxTab value="legal">Legal</PxTab>
        <template #content>
          <p>Active tab: {{ active }}</p>
        </template>
      </PxTabs>
    `,
  }),
};
