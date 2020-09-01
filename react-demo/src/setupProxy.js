const proxy = require('http-proxy-middleware');
/* 
配置多个代理
*/
module.exports = function (app) {
  app.use('/api', proxy({
    target: ' http://localhost:4000',
    pathRewrite: {
      '^/api': ''
    },
    changeOrigin: true,
  }))

  app.use('/5000', proxy({
    target: ' http://localhost:5000',
    pathRewrite: {
      '^/5000': ''
    },
    changeOrigin: true,
  }))
};

console.log('setupProxy...')