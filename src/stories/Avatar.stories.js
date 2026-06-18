import PxAvatar from "@/components/PxAvatar.vue";

export default {
  title: 'Elements/Avatar',
  component: PxAvatar,
  tags: ['autodocs'],
  argTypes: {
    initials: {
      control: 'text',
      description: 'The initials of the avatar to be used when no image is provided.',
    },
    size: {
      control: { type: 'select' },
      options: ['medium', 'large'],
      description: 'The size of the avatar.',
    },
    imageUrl: {
      control: 'text',
      description: 'The image source URL for the avatar.',
    },
    altText: {
      control: 'text',
      description: 'The alt text for the avatar image.',
    },
  },
  render: (args) => ({
    components: { PxAvatar },
    setup() { return { args } },
    template: '<PxAvatar v-bind="args" />',
  }),
  args: {
		initials: 'JG',
    size: 'medium',
  },
};

export const Default = {}

export const Large = {
	args: { size: 'large' },
}

export const Image = {
	args: { imageUrl: 'https://i.pravatar.cc/150?img=10', size: 'large' },
}
