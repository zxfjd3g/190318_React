import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
/* 
底部组件
*/
export default class Footer extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    checkAllTodos: PropTypes.func.isRequired,
    clearAllCompleteTodos: PropTypes.func.isRequired,
  }

  /* 
  处理全选与全不选
  */
  handleChange = (e) => {
    this.props.checkAllTodos(e.target.checked)
  }
  

  render() {

    const {todos} = this.props
    // 计算完成的数量
    const completeSize = todos.reduce((pre, todo) => pre + (todo.complete ? 1 : 0), 0)
    // 计算是否勾选全选
    const isCheck = completeSize===todos.length && completeSize>0

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={isCheck} onChange={this.handleChange}/>
        </label>
        <span>
          <span>已完成{completeSize}</span> / 全部{todos.length}
        </span>
        {completeSize>0 && <button className="btn btn-danger" onClick={this.props.clearAllCompleteTodos}>清除已完成任务</button>}
      </div>
    )
  }
}
