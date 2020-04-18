const urls = {
  dev: '/',
  production: process.env.VUE_APP_BASE_URL,
};

const VueConfig = {
  publicPath: process.env.NODE_ENV === 'development' ? urls.dev : urls.production,
};

module.exports = VueConfig;
