/* 
管理状态数据的reducer函数
*/
import {combineReducers} from 'redux'

import {
  REQUESTING,
  REQ_SUCCESS,
  REQ_ERROR
} from './action-types'

// 初始化状态数据
const initUsers = {
  firstView: true, // 是否显示第一个界面
  loading: false, // 是否存在加载中
  users: [], // 搜索得到的用户列表
  errorMsg: '', // 请求错误提示信息
}

function usersInfo (preState=initUsers, action) {
  switch (action.type) {
    case REQUESTING:
      return {
        ...preState,
        firstView: false,
        loading: true
      }
    case REQ_SUCCESS:
      const users = action.data
      return {
        ...preState,
        loading: false,
        users
      }
    case REQ_ERROR:
      const errorMsg = action.data
      return {
        ...preState,
        loading: false,
        errorMsg
      }
    default:
      return preState
  }
}

// 向外暴露合并产生的reducer
export default combineReducers({
  usersInfo
})

// 总state的结构: { usersInfo: {} }