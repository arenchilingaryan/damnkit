const historyApiFallback = require('connect-history-api-fallback');

module.exports = (router) => {
  router.use(
    historyApiFallback({
      verbose: true,
      index: '/iframe.html',
    }),
  );
};
