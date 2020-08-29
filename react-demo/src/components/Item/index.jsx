import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
/* 
列表项组件
*/
export default class Item extends Component {

  static propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleTodoCheck: PropTypes.func.isRequired,
  }

  state = {
    bgColor: '#ffffff', // 背景颜色
    isShow: false, // 是否显示按钮
  }

  /* 
  处理checkbox勾选状态发生改变的监听回调
  */
  hanleChange = (e) => {
    this.props.toggleTodoCheck(this.props.todo.id)
  }

  /* 
  处理鼠标移入移出的回调
  */
  handleEnter = (isEnter) => {
    return () => {
      if (isEnter) {
        this.setState({
          bgColor: '#cccccc',
          isShow: true
        })
      } else {
        this.setState({
          bgColor: '#ffffff',
          isShow: false
        })
      }
    }
  }

  /* 
  删除当前todo
  */
  deleteTodo = () => {
    // 显示确定框
    if (window.confirm('确定删除吗?')) {
      this.props.deleteTodo(this.props.todo.id)

      // const {deleteTodo, todo:{id}} = this.props
      // deleteTodo(id)
    }
  }
  

  render() {

    const {todo} = this.props
    const {bgColor, isShow} = this.state
    // 确定button的display
    const display = isShow ? 'block' : 'none'

    return (
      <li style={{background: bgColor}} onMouseEnter={this.handleEnter(true)} 
          onMouseLeave={this.handleEnter(false)}>
        <label>
          <input type="checkbox" checked={todo.complete} onChange={this.hanleChange}/>
          <span>{todo.title}</span>
        </label>
        <button className="btn btn-danger" style={{display}} onClick={this.deleteTodo}>删除</button>
      </li>
    )
  }
}
