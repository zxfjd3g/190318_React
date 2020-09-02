/* 
入口js
*/
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import store from './redux/store'
import App from '@/App'
import './index.css'

import './setupProxy' // 加载代理的配置

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'))
