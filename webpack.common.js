const path = require('path');
const webpack = require('webpack');
const filename = '[name].min.js';

const plugins = [
  new webpack.SourceMapDevToolPlugin({
    filename: `[file].map[query]`,
  }),
];

module.exports = {
  entry: {
    damnkit: path.resolve(__dirname, 'packages'),
  },
  plugins,
  output: {
    path: path.join(__dirname, 'dist'),
    filename,
    library: 'damnkit',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      utils: path.resolve(__dirname, 'packages/utils'),
      hooks: path.resolve(__dirname, 'packages/hooks'),
      config: path.resolve(__dirname, 'packages/config'),
      components: path.resolve(__dirname, 'packages/components'),
      types: path.resolve(__dirname, 'packages/types'),
    },
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
  },
};
