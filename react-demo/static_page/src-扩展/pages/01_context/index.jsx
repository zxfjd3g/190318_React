import React, { Component } from 'react'

/* 
文档: https://zh-hans.reactjs.org/docs/context.html
理解
  组件间通信方式, 常用用于祖孙组件间相互通信
使用:
	1) 创建Context容器对象
		const xxxContext = React.createContext(defaultValue)  
		// defaultValue只有没指定Provider时才有效果, 可以不用指定
	2) 在最外层包上Provider, 并指定要传递给后代组件的数据(任意类型)
		<xxxContext.Provider value={数据}>子组件</xxxContext.Provider>
	3) 任意后代组件, 读取数据
		方式一: 只能用在类组件 
		  static contextType = xxxContext  // 声明接收context
		  this.context // 读取context中的value数据
		方式二: 可以用在函数组件和类型组件
		  <xxxContext.Consumer>
		    {
		      value => ( // value就是context中的value数据
		        要显示的界面
		      )
		    }
      </xxxContext.Consumer>

应用:
	react-redux就是利用context来向后代容器组件提供store的
	react-router利用context向路由提供路由相关对象

注意: 
	在应用开发中一般不用context, 一般都它的封装react插件
*/

// 	1) 创建Context容器对象

export default class ContextTest extends Component {

  state = {
    num: 2
  }

  render() {
    const {num} = this.state
    return (
      <div>
        <h1 onClick={() => this.setState({num: num + 1})}>祖组件: {num}</h1>
          <Child />
      </div>
    )
  }
}

class Child extends Component {

  render () {
    return (
      <div>
        <h2>子组件</h2>
        <GrandChild1/>
        <GrandChild2/>
      </div>
    )
  }
}

// 孙组件(类)

class GrandChild1 extends Component {
  render () {

    return (
      <div>
        <h3>GrandChild1 孙组件(类): ???</h3>
      </div>
    )
  }
}

// 孙组件(函数)
function GrandChild2 (props){
  return (
    <div>
      <h3>GrandChild2 孙组件(类): ???</h3>
    </div>
  )
}