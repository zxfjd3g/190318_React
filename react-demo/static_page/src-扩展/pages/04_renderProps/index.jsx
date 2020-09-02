import React, { Component } from 'react'
import PropTypes from 'prop-types'
/* 
文档: https://zh-hans.reactjs.org/docs/render-props.html
### 如何向组件内部动态传入带内容的结构(标签)?
	Vue中: 
		使用slot技术, 也就是通过组件标签体传入结构  <AA><BB/></AA>
	React中:
		使用children props: 通过组件标签体传入结构
		使用render props: 通过组件标签属性传入结构, 一般用render函数属性

### children props:
	<A>
		<B></B>
	</A>
	{this.props.children}
	问题: 如果B组件需要A组件内的数据, ==> 做不到 

### render props
	<A render={(data) => <C data={data}></C>}></A>
	A组件: {this.props.render(内部state数据)}
	C组件: 读取A组件传入的数据显示 {this.props.data} 

### 应用: 
	在react-router中通过render props指定路由界面, 而不用再定义路由组件
	<Route path="/home" render={() => <div>Home</div>} />
*/
export default class RenderProps extends Component {
  render() {
    return (
      <div>
        RenderProps
      </div>
    )
  }
}

class A extends Component {
  render() {
    return (
      <div>
        <h2>A组件标题</h2>
      </div>
    )
  }
}


class B extends Component {

  render() {
    return (
      <div>
        <h3>B组件标题</h3>
      </div>
    )
  }
}

class C extends Component {

  render() {
    return (
      <div>
        <h3>C组件标题</h3>
      </div>
    )
  }
}