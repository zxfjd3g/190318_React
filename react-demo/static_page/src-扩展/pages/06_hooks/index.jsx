import React, { Component} from 'react'

/* 
文档: https://zh-hans.reactjs.org/docs/hooks-intro.html
工厂函数组件与ES6类组件的区别
  1. 函数组件没有this, 类组件有this (组件实例对象)
  2. 函数组件没有state/props/refs属性, 类组件对象有
    state ==> 使用hooks语法   useState()
    props ==> 函数的参数就是props
    refs ==> 通过React.forwardRef()来得到并操作函数组件内的标签对象
  3. 函数组件没有组件生命周期回调(勾子)
    componentDidMount(): 在挂载显示后执行 ==> 执行一次性异步任务
    componentDidUpdate(): 在更新显示后执行  ==> 用得少
    componentWillUnmount(): 在组件卸载前执行 ==> 做一些收尾的工作
  
    使用hooks语法 useEffect()

Hooks
  理解: react提供的一些新语法(函数)
  作用: 让函数组件也可以有自己状态以及生命周期的处理(当然不止这些)
常用语法:
  useState(): 让函数组件有状态了, 向函数组件提供状态数据的读取和更新操作
      如果是立即调用, 使用 setCount(count + 2)
      如果延迟调用, 使用: setCount(count => count + 2)
  useEffect(): 相当于componentDidMount()来执行一些带副作用的操作, 
        常用的发ajax请求/启动定时器/订阅消息
  useRef(): 2个功能, 1.标识组件中的标签, 2.保存可变属性数据的容器
  useContext(): 在函数组件中得到Context容器对象中的value数据
*/

export default class Hooks extends Component {
  render() {
    return (
      <>
        <Hooks1 />
        <br/>
        <br/>
        <Hooks2 />
      </>
    )
  }
}

function Hooks1(props) {
  return (
    <>
      <h2>Hooks11标题</h2>
      <p>name: ???</p>
      <p>点击次数: ???</p>
      <button>点击</button>
    </>
  )
}

function Hooks2(props) {
  return (
    <>
      <h2>Hooks22标题</h2>
      <input type="text" /> &nbsp;
      <button>点击插入</button>&nbsp;
      <button>点击生成一个新ID</button> 
    </>
  )
}
