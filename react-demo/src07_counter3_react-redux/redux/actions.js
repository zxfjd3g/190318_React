/* 
包含所有用于产生action对象的action creator
*/
import {
  INCREMENT,
  DECREMENT
} from './action-types'

/* 
增加的action
*/
export const increment = (number) => ({type: INCREMENT, data: number})

/* 
减少的action
*/
export const decrement = (number) => ({type: DECREMENT, data: number})

export const incrementAsync = (number) => {
  setTimeout(() => {
    return ({type: INCREMENT, data: number})
  }, 1000);
}