/** @type { import('@storybook/vue3-vite').Preview } */

import '../src/styles/index.css';

const THEME_BG = {
  light: '#EEEEEE',
  dark: '#242424',
};

const preview = {
  globalTypes: {
    theme: {
      description: 'Nimbus UI theme',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [
    (story, context) => {
      const theme = context.globals.theme || 'light';
      document.documentElement.setAttribute('data-theme', theme);
      return {
        template: '<div class="nimbus"><story /></div>',
      };
    },
  ],
  parameters: {
    controls: {
      disableSaveFromUI: true,
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    backgrounds: { disable: true },

    a11y: {
    }
  },
};

export default preview;
