const path = require('path');

module.exports = {
  stories: ['../packages/**/*.stories.@(js|jsx|ts|tsx|mdx)'.replace(/\\/g, '/')],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-a11y'],
  framework: '@storybook/react',
  core: {
    builder: "@storybook/builder-webpack5"
  },
  webpackFinal: async (config) => {
    config.module.rules[0].use[0].loader = require.resolve('babel-loader');

    config.resolve.mainFields = ['browser', 'module', 'main'];
    config.resolve.extensions.push('.ts', '.tsx', 'js', 'jsx', 'mdx');

    config.resolve.modules.push(path.resolve(__dirname, '../packages'));

    config.resolve.alias = {
      ...config.resolve.alias,
      'utils': path.resolve(__dirname, "../packages/utils"),
      'hooks': path.resolve(__dirname, "../packages/hooks"),
      'config': path.resolve(__dirname, "../packages/config"),
      'components': path.resolve(__dirname, "../packages/components"),
      'types': path.resolve(__dirname, "../packages/types"),
    };

    return config;
  }
}