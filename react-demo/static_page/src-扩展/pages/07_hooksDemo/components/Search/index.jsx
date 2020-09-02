import React, { useState, useRef } from 'react'
import PubSub from 'pubsub-js'

export default function Search () {
  // 一般把hooks的语法写在函数组件的最上面
  const [searchName, setSearchName] = useState('')
  // 创建用于保存input的ref容器
  const inputRef = useRef(null)


  const handleChange = (e) => {
    setSearchName(e.target.value.trim())
  }

  function search () {
    if (searchName) {
      // 通知Main去搜索
      PubSub.publish('SEARCH', searchName)
      // 清除输入
      setSearchName('')
    } else {
      // 提示并让输入框自动获得焦点
      alert('必须输入')
      inputRef.current.focus()
    }
  }

  return (
    <section className="jumbotron">
      <h3 className="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" 
          value={searchName} onChange={handleChange} ref={inputRef}/>
        <button onClick={search}>Search</button>
      </div>
    </section>
  )
}
