import React, { Component } from 'react'
import {connect} from 'react-redux'

class Main extends Component {



  render() {
    const {firstView, loading, users, errorMsg} = this.props.usersInfo
    // const {firstView, loading, users, errorMsg} = this.props

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

export default connect(
  state => ({
    usersInfo: state.usersInfo,
    // firstView: state.userInfo.firstView, 
    // loading: state.userInfo.loading, 
    // users: state.userInfo.users, 
    // errorMsg: state.userInfo.errorMsg
  }),
  {}, // 不传递任何函数属性
)(Main)