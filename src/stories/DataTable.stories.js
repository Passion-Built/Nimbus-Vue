import PxDataTable from '../components/PxDataTable.vue';

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' },
  { key: 'location', label: 'Location' },
  { key: 'status', label: 'Status' },
];

const rows = [
  { id: 1, name: 'Jess Goodlett', role: 'Designer', location: 'Austin, TX', status: 'Active' },
  { id: 2, name: 'Alex Rivera', role: 'Engineer', location: 'New York, NY', status: 'Active' },
  { id: 3, name: 'Sam Chen', role: 'Product', location: 'San Francisco, CA', status: 'Away' },
  { id: 4, name: 'Jordan Lee', role: 'Marketing', location: 'Chicago, IL', status: 'Inactive' },
];

export default {
  title: 'Layout/DataTable',
  component: PxDataTable,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      description: 'Array of column definitions. Each column requires a `key` and `label`. Optionally provide a `type` (Vue component) for custom cell rendering.',
    },
    rows: {
      description: 'Array of row data objects. Each row requires an `id` and keys matching the column definitions.',
    },
  },
  render: (args) => ({
    components: { PxDataTable },
    setup() { return { args } },
    template: '<PxDataTable v-bind="args" />',
  }),
  args: { columns, rows },
};

export const Default = {};
