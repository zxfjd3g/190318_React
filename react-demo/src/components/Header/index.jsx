import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  // 初始化状态
  state = {
    title: ''
  }

  /* 
  处理输入改变的监听回调
  */
  handleChange = (e) => {
    this.setState({
      title: e.target.value.trim()
    })
  }

  /* 
  点击enter键添加todo
  */
  addTodo = (e) => {
    // 如果不是enter键, 直接结束
    if (e.keyCode!==13) return

    // 取出title
    const {title} = this.state
    // 如果没有输入, 就直接结束
    if (!title) return

    // 调用addTodo函数添加一个todo
    this.props.addTodo(title)
    // 清除输入
    this.setState({
      title: ''
    })
  }
  

  render() {
    const {title} = this.state

    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" value={title} 
          onChange={this.handleChange} onKeyUp={this.addTodo}/>
      </div>
    )
  }
}
