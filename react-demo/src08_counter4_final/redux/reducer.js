/* 
用来管理count数据的reducer函数
  作用: 根据老的state和指定的action来产生并返回新的state
  reducer的名称一般用要管理数据的名称来命名
*/

import {combineReducers} from 'redux'

import {
  INCREMENT,
  DECREMENT
} from './action-types'


// 指定初始状态值
const initCount = 1

/* 
管理count数据的reducer函数
*/
function count (state=initCount, action) {
  console.log('count', state, action)
  switch (action.type) {
    case INCREMENT:
      return state + action.data
    case DECREMENT:
      return state - action.data
    default: // 返回当前状态(第一次调用时就是初始状态值)
     return state
  }
}


const initUser = {
  id: 2,
  name: 'tom'
}
/* 
管理user数据的reducer函数
*/
function user (preState=initUser, action) {
  switch (action.type) {
    default:
      return preState
  }
}

// 合并多个子reducer生成一个新的总reducer函数
export default combineReducers({
  count, 
  user
})

/* 
总的state:
  {
    count: 1,   // 调用count()
    user: {}    // 调用user()
  }
*/