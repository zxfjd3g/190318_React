import React, { Component } from 'react'

/* 
三级路由组件
*/

const allDetails = [
  {id: 1, title: 'message001', content: 'message content001...'},
  {id: 2, title: 'message002', content: 'message content002...'},
  {id: 3, title: 'message003', content: 'message content003...'},
]

export default class MessageDetail extends Component {
  render() {
    // 取params参数
    const id = this.props.match.params.id*1
    // 取query参数
    const search = this.props.location.search
    // 取state数据
    const stateData = this.props.location.state || {}
    const {name, age} = stateData

    const detail = allDetails.find(detail => detail.id===id)

    return (
      <ul>
        <li>query参数: {search}</li>
        <li>state Data: {name}--{age}</li>
        <li>ID: {id}</li>
        <li>TITLE: {detail.title}</li>
        <li>CONTENT: {detail.content}</li>
      </ul>
    )
  }
}
