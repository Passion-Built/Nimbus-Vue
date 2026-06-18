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
      <div>
        <PxTabs v-model="active">
          <PxTab value="overview">Overview</PxTab>
          <PxTab value="details">Details</PxTab>
          <PxTab value="settings">Settings</PxTab>
        </PxTabs>
        <div style="padding: 1rem; font-family: var(--px-font-family-body);">
          <p v-show="active === 'overview'">Overview content goes here.</p>
          <p v-show="active === 'details'">Details content goes here.</p>
          <p v-show="active === 'settings'">Settings content goes here.</p>
        </div>
      </div>
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
      <div>
        <PxTabs v-model="active">
          <PxTab value="design">Design</PxTab>
          <PxTab value="engineering">Engineering</PxTab>
          <PxTab value="product">Product</PxTab>
          <PxTab value="marketing">Marketing</PxTab>
          <PxTab value="legal">Legal</PxTab>
        </PxTabs>
        <div style="padding: 1rem; font-family: var(--px-font-family-body);">
          <p>Active tab: {{ active }}</p>
        </div>
      </div>
    `,
  }),
};
