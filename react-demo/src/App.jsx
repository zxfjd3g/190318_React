/*
应用根组件
*/
import React, { Component } from 'react'
import store from './redux/store'
// import * as actions from './redux/actions'
import {increment, decrement} from './redux/actions' // 引入action creator


/* 
store对象
  getState(): 读取状态数据
  dispatch(action对象): 更新/产生新的状态数据
  subscribe(listener): 订阅state改变的监听  ==> 更新状态
*/
export default class App extends Component {


  componentDidMount () {
    // 订阅state改变的监听  ==> 更新状态
      // 返回的是解绑监视的函数
    this.unSubcribe = store.subscribe(() => { 
      this.setState({})  // 重新render
    })
  }

  componentWillUnmount () {
    // 解绑监视
    this.unSubcribe()
  }

  increment = () => {
    const number = this.refs.numberSelect.value * 1
    // 分发增加的action
    // store.dispatch({type: 'INCREMENT', data: number})
    store.dispatch(increment(number))
  }

  decrement = () => {
    const number = this.refs.numberSelect.value * 1
    // 分发减少的action
    store.dispatch(decrement(number))
  }

  incrementIfOdd = () => {
    const number = this.refs.numberSelect.value * 1
    if (store.getState() % 2 === 1) {
      // 分发增加的action
      store.dispatch(increment(number))
    }
    
  }

  incrementAsync = () => {
    const number = this.refs.numberSelect.value * 1
    setTimeout(() => {
      // 分发增加的action
      store.dispatch(increment(number))
    }, 1000);
  }

  render () {
    // 通过store得到状态数据值
    const count = store.getState()

    return (
      <div>
        <p>click {count} times</p>
        <select ref="numberSelect">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>increment if odd</button>
        <button onClick={this.incrementAsync}>increment async</button>

        <br/>
        <button onClick={() => this.unSubcribe()}>不再更新</button>
      </div>
    )
  }
}