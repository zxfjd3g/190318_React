import React, { Component } from 'react'

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <h2>404页面</h2>
        <button onClick={() => this.props.history.replace('/home')}>返回首页</button>
      </div>
    )
  }
}
