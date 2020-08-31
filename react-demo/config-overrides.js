const {
  override,
  disableEsLint,
  addWebpackAlias
} = require("customize-cra");
const path = require("path");

module.exports = override(
  // 禁用eslint
  disableEsLint(),

  // 配置模块路径别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src') // src的绝对路径
  })
);