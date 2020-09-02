const {
  override,
  disableEsLint,
  addWebpackAlias,
  fixBabelImports,
  addLessLoader,
  addDecoratorsLegacy
} = require("customize-cra");
const path = require("path");

module.exports = override(
  // 禁用eslint
  disableEsLint(),

  // 配置模块路径别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src') // src的绝对路径
  }),

  // 对antd实现按需引入打包
  fixBabelImports('import', { // 使用babel-plugin-import
      libraryName: 'antd', // 只针对antd库
      libraryDirectory: 'es', // 在es目录下查找组件的js
      // style: 'css', // 自动打包组件的对应的css
      style: true, // 找对应的less文件
  }),

  addLessLoader({	// 添加less配置
    lessOptions:{
      modifyVars: { '@primary-color': '#1DA57A'}, // 修改antd中less源码中的主颜色变量的值
      javascriptEnabled: true,
    }
  }),

  // ES7的装饰器请求
  addDecoratorsLegacy()
);