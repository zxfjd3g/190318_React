/* 
用于创建同步action和异步action的action creator函数
*/
import axios from 'axios'
import {
  REQUESTING,
  REQ_SUCCESS,
  REQ_ERROR
} from './action-types'

/* 
请求中的同步action
*/
const requesting = () => ({type: REQUESTING})
/* 
请求成功的同步action
*/
const reqSuccess = (users) => ({type: REQ_SUCCESS, data: users})

/* 
请求失败的同步action
*/
const reqError = (errorMsg) => ({type: REQ_ERROR, data: errorMsg})


/* 
搜索的异步action
*/
export function search (searchName) {
  return async dispatch => { // action函数
    // 在发请求前, 分发请求中的同步action
    dispatch(requesting())
    // 执行异步ajax请求
    try {
      const response = await axios.get('/api/search/users', {
        params: {
          q: searchName
        }
      })
      const result = response.data
      const users = result.items.map(item => ({ // 需要对得到的数据进行整理操作
        id: item.id,
        name: item.login,
        avatar_url: item.avatar_url,
        url: item.html_url
      }))
      // 请求成功了, 分发成功的同步action
      dispatch(reqSuccess(users))
    } catch (error) {
      // 请求失败了, 分发失败的同步action
      dispatch(reqError('请求出错: ' + error.message))
    }
  }
}