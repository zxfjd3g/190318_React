import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import MessageDetail from './MessageDetail'
import MessageItem from '@/components/MessageItem'

/* 
二级路由组件
*/
export default class Messages extends Component {

  state = {
    mesages: [
      {id: 1, title: 'message001'},
      {id: 2, title: 'message002'},
      {id: 3, title: 'message003'},
    ]
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.mesages.map(m => (
              <MessageItem key={m.id} message={m}/>
            ))
          }
        </ul>
        <button onClick={() => this.props.history.goBack()}>返回</button>
        <hr/>
        <Route path="/home/message/detail/:id" component={MessageDetail}></Route>
      </div>
    )
  }
}
