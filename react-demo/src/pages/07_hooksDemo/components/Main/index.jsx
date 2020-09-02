import React, {useState, useEffect} from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'
import './index.css'

export default function Main () {
  // useState 生成state
  const [firstView, setFirstView] = useState(true)
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [errorMsg, setErrorMsg] = useState('')

  // useEffect 执行带副作用的操作
  useEffect(() => { // componentDidMount
    // 订阅消息
    const token = PubSub.subscribe('SEARCH', (msgName, searchName) => {
      getUsers(searchName)
    })
    return () => { // componentWillUnmount
      // 取消消息订阅
      // PubSub.unsubscribe('SEARCH')
      PubSub.unsubscribe(token)
    }
  }, [])

  const getUsers = (searchName) => {
    // 更新状态(请求中)
    setFirstView(false)
    setLoading(true)

    // 发ajax请求获取用户列表数据
    axios.get('/search/users2', {params: {q: searchName}})
      .then(response => { 
        const result = response.data
        const users = result.items.map(item => ({
          id: item.id,
          name: item.login,
          url: item.html_url,
          avatarUrl: item.avatar_url
        }))
        // 成功了, 更新状态(成功)
        setLoading(false)
        setUsers(users)
      })
      .catch(error => { 
        // 失败了, 更新状态(失败)
        setLoading(false)
        setErrorMsg(error.message)
      })
  }

  if (firstView) {
    return <h2>输入关键字进行搜索</h2>
  } else if (loading) {
    return <h2>正在加载中...</h2>
  } else if (errorMsg) {
    return <h2>{errorMsg}</h2>
  }
  return (
    <div className="row">
      {
        users.map(user => (
          <div className="card" key={user.id}>
            <a href={user.url} target="_blank" rel="noopener noreferrer">
              <img src={user.avatarUrl} style={{width: 100}} alt=""/>
            </a>
          <p className="card-text">{user.name}</p>
          </div>
        ))
      }
    </div>
  )
}
