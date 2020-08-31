import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import MessageDetail from './MessageDetail'

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

  pushShow = (id) => {
    return () => {
      // push编程式路由导航
      /* 
      3种路由跳转携带数据的方式
        params参数
        query参数
        state  ==> 前提是必须BrowserRouter
      */
      this.props.history.push(`/home/message/detail/${id}?id2=${id}`, {name: 'tom', age: 12})
    }
  }

  replaceShow = (id) => {
    return () => {
      // push编程式路由导航
      this.props.history.replace(`/home/message/detail/${id}?id2=${id}`)
    }
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.mesages.map(m => (
              <li key={m.id}>
                <Link to={`/home/message/detail/${m.id}?id2=${m.id}`}>{m.title}</Link>
                <button onClick={this.pushShow(m.id)}>push查看</button>
                <button onClick={this.replaceShow(m.id)}>replace查看</button>
              </li>
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
