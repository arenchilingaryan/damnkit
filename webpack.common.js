const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'packages/index.tsx'),
  plugins: [],
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: '[name].[hash:8].js',
  //   sourceMapFilename: '[name].[hash:8].map',
  //   chunkFilename: '[id].[hash:8].js',
  //   publicPath: '/',
  // },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
    libraryTarget: 'commonjs2',
    library: 'ui-kit-damnkit',
    umdNamedDefine: true,
    sourceMapFilename: '[name].[hash:8].map',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
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
