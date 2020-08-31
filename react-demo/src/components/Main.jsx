import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Main extends Component {

  state = {
    firstView: true, // 是否显示第一个界面
    loading: false, // 是否存在加载中
    users: [], // 搜索得到的用户列表
    errorMsg: '', // 请求错误提示信息
  }

  componentDidMount () {
    // 订阅消息
    PubSub.subscribe('search', (msgName, searchName) => {
      alert(searchName)
    })
  }  

  render() {
    const {firstView, loading, users, errorMsg} = this.state

    if (firstView) {
      return <h2>请输入关键字进行搜索</h2>
    } else if (loading) {
      return <h2>正在加载中...</h2>
    } else if (errorMsg) {
      return <h2>{errorMsg}</h2>
    }
    // 请求成功得到用户列表
    return (
      <div className="row">
        {
          users.map(user => (
            /* {id, name, avatar_url, url} */
            <div className="card" key={user.id}>
              <a href={user.url} target="_blank">
                <img src={user.avatar_url} style={{width: 100}} />
              </a>
            <p className="card-text">{user.name}</p>
            </div>
          ))
        }
      </div>
    )
  }
}