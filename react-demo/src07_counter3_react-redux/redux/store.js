/* 
redux最核心的管理对象: store
*/
import {createStore} from 'redux'
import count from './reducer'

// 向外默认暴露store
export default createStore(count)  // 创建store对象, 立即就调用一次reducer函数得到初始状态值
