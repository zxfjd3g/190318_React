/* 
redux最核心的管理对象: store
*/
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from './reducers'

// 向外默认暴露store对象
export default createStore(
  reducers, 
  process.env.NODE_ENV==='production' ? applyMiddleware(thunk) : composeWithDevTools(applyMiddleware(thunk))  
)

