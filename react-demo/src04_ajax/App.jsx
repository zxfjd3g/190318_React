/*
应用根组件
*/
// rcc react class component
import React, { Component } from 'react'
import Search from './components/Search'
import Main from './components/Main'

export default class App extends Component {

  searchRef = React.createRef()

  updateChild = () => {
    // 得到子组件对象
    const search = this.searchRef.current
    // 调用子组件对象的方法更新子组件的状态
    search.updateSearchName('--')
  }

  render () {
    return (
      <div>
        <div className="container">
          <button onClick={this.updateChild}>更新子组件数据</button>
          <Search ref={this.searchRef}/>
          <Main/>
        </div>
      </div>
    )
  }
}