import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
/* 
列表项组件
*/
export default class Item extends Component {

  static propTypes = {
    todo: PropTypes.object.isRequired
  }

  /* 
  处理checkbox勾选状态发生改变的监听回调
  */
  hanleChange (e) {

  }
  

  render() {

    const {todo} = this.props

    return (
      <li>
        <label>
          <input type="checkbox" checked={todo.complete} onChange={this.hanleChange}/>
          <span>{todo.title}</span>
        </label>
        <button className="btn btn-danger" style={{display:'none'}}>删除</button>
      </li>
    )
  }
}
