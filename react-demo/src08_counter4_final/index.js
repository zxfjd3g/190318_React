/* 
入口js
*/
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from '@/App'
import store from './redux/store'

ReactDOM.render((
  /* Provider向所有容器组件提供我们传给它的store */
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'))
