/*
应用根组件
*/
// rcc react class component
import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'


export default class App extends Component {

  state = {
    todos: [
      {id: 1, title: 'A', complete: false},
      {id: 2, title: 'B', complete: true},
      {id: 3, title: 'C', complete: false},
    ]
  }

  id = 4 // 用来保存最新可用的id值, 它会不断递增

  /* 
  添加todo
  */
  addTodo = (title) => {

    // 创建todo对象
    const todo = {
      id: this.id++,
      title,
      complete: false
    }
    // 向todos中添加todo

    /* 在react中不要直接更新状态数据, 而应该产生一个新的数据去setState */
    // 错误写法
    // const {todos} = this.todos
    // todos.unshift(todo)
    // 正确写法
    const todos = [todo, ...this.state.todos]
    // 更新状态
    this.setState({todos})
  }

  /* 
  删除todo
  */
  deleteTodo = (id) => {
    // 过滤掉index对应的todo, 产生一个新todos
    const todos = this.state.todos.filter(todo => todo.id!==id)
    // 更新状态
    this.setState({
      todos
    })
  }

  /* 
  切换指定改变勾选状态
  */
  toggleTodoCheck = (id) => {
    // 切换id对应的todo的complete值, 产生一个新todos
    const todos = this.state.todos.map(todo => {
      if (id===todo.id) { // 产生一个id对应的新todo
        return {...todo, complete: !todo.complete}
      } else { // 直接使用原来的
        return todo
      }
    })
    // 更新状态
    this.setState({
      todos
    })
  }

  /* 
  全选/全不选
  */
  checkAllTodos = (isCheck) => {

    // 将todos中所有todo的complete指定为isCheck, 返回新的todos
    const todos = this.state.todos.map(todo => ({...todo, complete: isCheck}))

    // 更新状态
    this.setState({
      todos
    })
  }

  /* 
  删除所有已完成的todo
  */
  clearAllCompleteTodos = () => {
    // 过滤掉todos中complete为true的所有todo, 返回新的todos
    const todos = this.state.todos.filter(todo => !todo.complete)

    // 更新状态
    this.setState({
      todos
    })
  }

  render () {
    const {todos} = this.state

    return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header addTodo={this.addTodo}/>
        <List todos={todos} deleteTodo={this.deleteTodo} toggleTodoCheck={this.toggleTodoCheck}/>
        <Footer todos={todos} checkAllTodos={this.checkAllTodos} clearAllCompleteTodos={this.clearAllCompleteTodos}/>
      </div>
    </div>
    )
  }
}