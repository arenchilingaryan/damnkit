const path = require('path');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'packages/index.ts'),
    hot: 'webpack/hot/dev-server.js',
    client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
  },
  plugins: [],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:8].js',
    sourceMapFilename: '[name].[hash:8].map',
    chunkFilename: '[id].[hash:8].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
};
