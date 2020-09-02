import React, {Component} from 'react'
/* 
文档：https://zh-hans.reactjs.org/docs/code-splitting.html

路由组件懒加载
1. 使用import()动态导入路由组件模块 ==> 路由组件会被code split(代码分割)单独打包
2. 使用React提供的lazy来包装一下 ==> 只有当第一次请求路由时才会去后台加载其对应的打包文件(xxx.js)
3. 使用Suspense组件来指定未加载得到路由打包文件前的提示界面
*/
export default class Lazyload extends Component {
  render() {
    return (
      <div>
        Lazyload组件
      </div>
    )
  }
}
