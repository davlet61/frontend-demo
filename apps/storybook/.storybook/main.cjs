module.exports = {
  stories: ['../../../packages/ui/**/*.stories.mdx', '../../../packages/ui/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true,
  },
};
