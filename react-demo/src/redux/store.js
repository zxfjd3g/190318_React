/* 
redux最核心的管理对象: store
*/
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk' // 引入redux的异步中间件
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './reducer'

// 向外默认暴露store
export default createStore(
  reducer, 
  process.env.NODE_ENV==='production' ? applyMiddleware(thunk)
		 : composeWithDevTools(applyMiddleware(thunk))
)  // 创建store对象, 立即就调用一次reducer函数得到初始状态值
