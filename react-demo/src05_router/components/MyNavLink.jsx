/* 
封装NavLink的组件

组件的特别prop: children
  children就是代表组件标签体内容: 组件标签体内容会自动以children属性传递给组件内容
  undefined: 空组件标签
  字符串: 组件标签体是文本
  标签对象: 组件标签体只有一个子标签
  数组: 组件标签体是多个子节点
*/

import React from 'react'
import {NavLink} from 'react-router-dom'

export default function MyNavLink(props) {
  return <NavLink activeClassName="myActive" {...props}></NavLink> /* 组件props透传 */
}
