/* 
入口js
*/
import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/App'
import './index.css'

import './setupProxy' // 加载代理的配置

ReactDOM.render(<App />, document.getElementById('root'))
