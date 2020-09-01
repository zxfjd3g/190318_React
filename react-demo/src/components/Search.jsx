import React, { Component } from 'react'
import { connect } from 'react-redux'
import { search } from '@/redux/actions'

class Search extends Component {
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
      // 分发一个发请求的异步action
      this.props.search(searchName)
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

export default connect(
  null,
  { search }
)(Search)
