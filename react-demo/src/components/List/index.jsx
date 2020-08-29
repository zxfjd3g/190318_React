import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

import Item from '../Item'
/* 
列表组件
*/
export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired
  }
  

  render() {
    // 读取props中数据
    const {todos} = this.props

    return (
      <ul className="todo-main">
       {
         todos.map(todo => <Item key={todo.id} todo={todo}/>)
       }
      </ul>
    )
  }
}
