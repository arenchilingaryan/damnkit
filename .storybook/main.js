const path = require('path');

module.exports = {
  stories: ['../packages/**/*.stories.mdx', '../packages/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-a11y'],
  framework: '@storybook/react',
  core: {
    builder: "@storybook/builder-webpack5"
  },
  webpackFinal: async (config) => {
    config.module.rules[0].use[0].loader = require.resolve('babel-loader');

    config.module.rules[0].use[0].options.presets = [
      require.resolve('@babel/preset-react'),
      require.resolve('@babel/preset-env'),
    ];

    config.resolve.mainFields = ['browser', 'module', 'main'];
    config.resolve.extensions.push('.ts', '.tsx', 'js', 'jsx');

    config.resolve.modules.push(path.resolve(__dirname, '../packages'));

    return config;
  }
}