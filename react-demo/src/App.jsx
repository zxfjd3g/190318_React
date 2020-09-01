/*
应用根组件
*/
// rcc react class component
import React, { Component } from 'react'
import Search from './components/Search'
import Main from './components/Main'

export default class App extends Component {

  render () {
    return (
      <div>
        <div className="container">
          <Search/>
          <Main/>
        </div>
      </div>
    )
  }
}