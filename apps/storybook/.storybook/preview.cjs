import '../styles/globals.css';

import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  darkMode: {
    current: 'dark',
    dark: { ...themes.dark, appBg: 'black' },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
