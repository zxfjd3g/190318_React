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

  render () {
    const {todos} = this.state

    return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header addTodo={this.addTodo}/>
        <List todos={todos}/>
        <Footer/>
      </div>
    </div>
    )
  }
}