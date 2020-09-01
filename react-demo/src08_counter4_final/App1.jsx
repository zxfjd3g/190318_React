/*
应用根组件
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment, decrement} from './redux/actions' // 引入action creator


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
    setTimeout(() => {
      this.props.increment(number)
    }, 1000);
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

/* 
用于确定非函数属性的回调函数
state: store中管理的状态值
*/
const mapStateToProps = (state) => {
  return { // 返回对象的所有属性都会传给UI组件
    count: state
  }
}

/* 
用于确定函数属性的回调函数
dispatch: 分发action函数
*/
const mapDispatchToProps = (dispatch) => {
  return {
    increment: (number) => dispatch(increment(number)),
    decrement: (number) => dispatch(decrement(number)),
  }
}

// 当前返回就是connect产生的容器组件
export default connect(
  mapStateToProps,  // 用来指定向UI组件传入的非函数属性  count
  mapDispatchToProps // 用来指定向UI组件传入的函数属性  increment/decrement
)(App)