/*
应用根组件
*/
import React, { Component } from 'react'
import {Button, message} from 'antd'
// import 'antd/dist/antd.css'

export default class App extends Component {

  handleClick1 = () => {
    message.success('添加成功啦')
    message.error('删除失败')
    message.warning('小心点...')
  }

  render () {
    return (
      <div>
        <Button type="default" onClick={this.handleClick1}>默认按钮</Button>
        <Button type="primary">经典按钮</Button>
        <Button type="danger">危险按钮</Button>
      </div>
    )
  }
}