// ./vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/flytest_porductlist/'
    : '/'
}