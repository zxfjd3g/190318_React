import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom'
import Header from './layout/Header'
import Content from './layout/Content'

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Header/>
        <Content/>
      </BrowserRouter>
    )
  }
}
