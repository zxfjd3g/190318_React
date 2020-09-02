import React, { Component, PureComponent } from 'react'

/* 
组件优化
Component组件的2个问题
  1. 只要执行setState(), 即使没有改变state数据, 组件也会更新执行render()
  2. 组件重新执行render(), 就让子组件也重新执行render()
  ===> 后果: 效率低
理想(高效)的做法:
  只有state或者props数据发生改变, 才重新执行render()
原因: 
  Component中的shouldComponentUpdate()方法总是返回true 
    ==> 只要当前组件或父组件setState(), 都会重新render()  说明: 产生新的虚拟DOM树, 但界面可能不用更新
解决:
  办法1:
    重写shouldComponentUpdate()
    比较新旧state和props数据, 如果有变化才返回true, 否则返回false
  办法2:
    使用PureComponent  ==> 开发中使用
    原理:
      内部重写shouldComponentUpdate()
      函数内部比较新旧state和props数据, 如果有变化才返回true, 否则返回false
*/
export default class Optimize extends Component {

  state = {
    m1: {
      count: 1
    },
    m3: 123
  }
  // 假更新: 只是调用setState(), 不指定新的状态数据
  handleClick = () => {
    this.setState({})  // 新的状态对象就是原状态对象与当前指定对象合并后的对象
  }
  
  render() {
    console.log('---Optimize render()')
    const {m1} = this.state
    return (
      <div>
        <h2>父组件: m1.count: {m1.count}</h2>
        <button onClick={this.handleClick}>假更新</button>
        <br/>
        <br/>
        <Child m1={m1}></Child>
      </div>
    )
  }
}

class Child extends PureComponent {
// class Child extends Component {

  state = {
    m2: {
      count2: 2
    }
  }

  // 假更新: 只是调用setState(), 不指定新的状态数据
  handleClick1 = () => {
    this.setState({})
  }

  // 正确更新: 调用setState()指定新的状态数据
  handleClick2 = () => {
    this.setState({
      m2: {count2: this.state.m2.count2 + 1}
    })
  }

  // 错误更新: 直接更新状态数据, 再调用setState()
  handleClick3 = () => {
    const {m2} = this.state
    m2.count2 = m2.count2 + 1  // 直接修改状态数据 ==> 可能会导致不会重新render()
    // react/redux更新state的基本原则: 不要直接更新状态数据, 要指定一个新的状态数据
    this.setState({
      m2
    })
  }

  // 重写shouldComponentUpdate()
  /* 
  nextProps: 新的props对象
  nextState: 新的state对象
  */
  /* shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate()')
    // 比较新旧state和props数据, 如果有变化才返回true, 否则返回false
    // 数据比较进行的是浅比较: 只比较了引用地址值, 而不比较引用对象内部的数据
    if (nextState.m2===this.state.m2 && nextProps.m1===this.props.m1) {
      return false // 数据没变, 返回false ===> 不会重新render
    }
    return true // 数据有变化, 返回true ==> 会重新render
  } */

  render() {
    console.log('+++Child render()')

    const {m1} = this.props
    const {m2} = this.state
    return (
      <div>
        <h3>子组件: m2.count2: {m2.count2}</h3>
        <h3>m1.count: {m1.count}</h3>
        
        <button onClick={this.handleClick1}>假更新</button> &nbsp;
        <button onClick={this.handleClick2}>正确更新</button> &nbsp;
        <button onClick={this.handleClick3}>错误更新</button> &nbsp;
      </div>
    )
  }
}