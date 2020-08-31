import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Main extends Component {

  state = {
    firstView: true, // 是否显示第一个界面
    loading: false, // 是否存在加载中
    users: [], // 搜索得到的用户列表
    errorMsg: '', // 请求错误提示信息
  }

  componentDidMount () {
    // 订阅消息
    PubSub.subscribe('search',(msgName, searchName) => {
      // 使用axios发ajax请求
      // this.getUsers_axios(searchName)
      // 使用fetch发ajax请求
      this.getUsers_fetch(searchName)
    })
  }

  /* 
  在组件死亡前
  */
  componentWillUnmount () {
    // 取消订阅
    PubSub.unsubscribe('search')
  }

  getUsers_fetch = async (searchName) => {
    // alert(searchName)
    // 更新状态(变为请求中)
    this.setState({
      firstView: false,
      loading: true
    })

    // 使用fetch发送ajax请求获取用户列表
    fetch(`/api/search/users2?q=${searchName}`).then((response)=> {
      return response.json() // 返回包含成功响应体数据的promise对象
    }).then((result) => {// result就是响应体数据
      const users = result.items.map(item => ({ // 需要对得到的数据进行整理操作
        id: item.id,
        name: item.login,
        avatar_url: item.avatar_url,
        url: item.html_url
      }))
      // 更新状态(成功的)
      this.setState({
        loading: false,
        users
      })
    }).catch((e) => {
      // 更新状态(失败的)
      this.setState({
        loading: false,
        errorMsg: '请求出错: ' + error.message
      })
    })
  }

  getUsers_axios = async (searchName) => {
    // alert(searchName)
    // 更新状态(变为请求中)
    this.setState({
      firstView: false,
      loading: true
    })

    // 使用axios发送ajax请求获取用户列表
    try {
      // const response = await axios.get('http://localhost:4000/search/users2', { // 代理服务器不会处理
      // const response = await axios.get('/search/users2', {  // 适合于package.json的proxy配置
      const response = await axios.get('/api/search/users', {
        params: {
          q: searchName
        }
      })
      const result = response.data
      const users = result.items.map(item => ({ // 需要对得到的数据进行整理操作
        id: item.id,
        name: item.login,
        avatar_url: item.avatar_url,
        url: item.html_url
      }))
      // 更新状态(成功的)
      this.setState({
        loading: false,
        users
      })
    } catch (error) {
      // 更新状态(失败的)
      this.setState({
        loading: false,
        errorMsg: '请求出错: ' + error.message
      })
    }
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