import React, { useState, useEffect } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default function Main (props) {

  const [firstView, setFirstView] = useState(true)
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [errorMsg, setErrorMsg] = useState('')


  useEffect(() => {
    // 订阅消息
    PubSub.subscribe('search',(msgName, searchName) => {
      // 使用axios发ajax请求
      getUsers_axios(searchName)
    })

    return () => {
      // 取消订阅
      PubSub.unsubscribe('search')
    }
  }, [])

  const getUsers_axios = async (searchName) => {
    // alert(searchName)
    // 更新状态(变为请求中)
    setFirstView(false)
    setLoading(true)

    // 使用axios发送ajax请求获取用户列表
    try {
      const response = await axios.get('/search/users2', {
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
      setLoading(false)
      setUsers(users)
    } catch (error) {
      // 更新状态(失败的)
      setLoading(false)
      setErrorMsg('请求出错: ' + error.message)
    }
  }

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