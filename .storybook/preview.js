/** @type { import('@storybook/vue3-vite').Preview } */

import '../src/styles/index.css';
import { addons } from 'storybook/preview-api';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';

// Tokens/base styles are scoped to :root.nimbus — match what src/index.js does for consumers.
document.documentElement.classList.add('nimbus');

const THEME_BG = {
  light: '#EEEEEE',
  dark: '#242424',
};

function applyTheme(isDark) {
  const theme = isDark ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  document.body.style.background = THEME_BG[theme];
}

// Update on every toggle
addons.getChannel().on(DARK_MODE_EVENT_NAME, applyTheme);

const preview = {
  decorators: [
    (story) => {
      // Read current persisted state on every story render as a reliable fallback
      const stored = JSON.parse(localStorage.getItem('sb-addon-themes-3') || '{}');
      applyTheme(stored.current === 'dark');
      return { template: '<div class="nimbus"><story /></div>' };
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
    a11y: {},
  },
};

export default preview;
