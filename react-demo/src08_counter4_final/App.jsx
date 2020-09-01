/*
应用根组件
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment, decrement, incrementAsync} from './redux/actions' // 引入action creator


/* 
UI组件: 不使用任何redux相关的语法
*/
class App extends Component {

  static propTypes = {
    // 非函数属性
    count: PropTypes.number.isRequired,
    // 函数属性
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
  }
  

  increment = () => {
    const number = this.refs.numberSelect.value * 1
    this.props.increment(number)
  }

  decrement = () => {
    const number = this.refs.numberSelect.value * 1
    this.props.decrement(number)
  }

  incrementIfOdd = () => {
    const number = this.refs.numberSelect.value * 1
    if (this.props.count % 2 === 1) {
      this.props.increment(number)
    }
    
  }

  incrementAsync = () => {
    const number = this.refs.numberSelect.value * 1
    this.props.incrementAsync(number)
  }

  render () {
    // 通过store得到状态数据值
    const count = this.props.count

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
      </div>
    )
  }
}

export default connect(
  state => ({count: state.count}),  // 指定count属性
  {
    increment, 
    decrement,
    incrementAsync
  } // 指定increment/decrement函数属性
)(App)

/* 
{
  increment: increment, 
  decrement: decrement
}
传递给UI组件的属性值
  increment: (...args) => dispatch(increment(...args))
  decrement: (...args) => dispatch(decrement(...args))
*/

// function fn (...args) { // ... args为数组, 数组的值[1, 2]
//   fn2(...args) // 拆解数组中所有元素依次传递进fn2
// }

// fn(1, 2)