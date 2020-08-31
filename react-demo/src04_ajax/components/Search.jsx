import React, { Component } from 'react'

import PubSub from 'pubsub-js'

export default class Search extends Component {
  state = {
    searchName: ''
  }

  updateSearchName = (msg) => {
    this.setState({
      searchName: this.state.searchName + msg
    })
  }

  handleClick = () => {
    const {searchName} = this.state
    if (searchName) {
      // 发布搜索的消息
      PubSub.publish('search', searchName)
      this.setState({
        searchName: ''
      })
    }
   
  }
  

  render() {
    const searchName = this.state.searchName
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" 
            value={searchName} onChange={e => this.setState({searchName: e.target.value.trim()})}/>
          <button onClick={this.handleClick}>Search</button>
        </div>
      </section>
    )
  }
}
