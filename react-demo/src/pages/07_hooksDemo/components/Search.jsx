import React, { useState, useRef} from 'react'

import PubSub from 'pubsub-js'

export default function Search (props) {

  const [searchName, setSearchName] = useState('')
  const inputRef = useRef(null)

  // handleClick = () => {
  function handleClick () {
    if (searchName) {
      // 发布搜索的消息
      PubSub.publish('search', searchName)
      setSearchName('')
    } else { // 如果没有输入, 输入框自动获得焦点
      inputRef.current.focus()
    }
  }

  return (
    <section className="jumbotron">
      <h3 className="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" 
          value={searchName} onChange={e => setSearchName(e.target.value.trim())} ref={inputRef}/>
        <button onClick={handleClick}>Search</button>
      </div>
    </section>
  )
}
