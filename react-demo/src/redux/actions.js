/* 
包含所有用于产生action对象的action creator
同步action: {type: 'xxx', data: value}
异步action: dispatch => {}
*/
import {
  INCREMENT,
  DECREMENT
} from './action-types'

/* 
增加的同步action
*/
export const increment = (number) => ({type: INCREMENT, data: number})

/* 
减少的同步action
*/
export const decrement = (number) => ({type: DECREMENT, data: number})

/* 
增加的异步action
*/
export const incrementAsync = (number) => {
  // 返回action函数
  return dispatch => {
    // 1. 执行异步操作(比如: 启动定时器, 发ajax请求)
    setTimeout(() => {
      // 2. 完成后, 分发一个同步action
      dispatch(increment(number))
    }, 1000);
  }
}