import React, { Component } from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import routes from '@/config/routes'
import './index.css'

/* 
头部组件: 路由链接就在其中显示
2) 根据配置动态生成路由链接<NavLink>
*/
@withRouter
class Header extends Component {
  /* 
  根据routes生成一级链接li的数组
  */
  renderLis = (routes) => {
    /* const lis = []
    routes.forEach(item => {
      // path: '/welcome', // 路由路径
      // component: Welcome, // 路由组件
      // name: '首页', // 对应的路由链接文本
      // children: []
     lis.push(
      <li key={item.path}>
        <NavLink to={item.path}>{item.name}</NavLink>
      </li>
     )
    }) */
    const lis = routes.map(item => (
      <li key={item.path}>
        <NavLink to={item.path}>{item.name}</NavLink>
      </li>
    ))
    return lis
  }

  /* 
  根据当前请求的路径来生成下级的路由链接
  ==> 得到当前请求的路径 
  ==> 找到对应的一级路由的配置对象的children 
  ==> 根据children数组生成包含路由链接的lis的数组
  */
  renderChildLis = () => {
    // 得到当前请求的路径 
    const path = this.props.location.pathname  // /welcome/backend
    // 找到对应的一级路由的配置对象的children 
    const routeData = routes.find(item => path.startsWith(item.path)) // 前面部分相同就可以
    if (routeData && routeData.children) {
      // 根据children数组生成包含路由链接的lis的数组
      const lis = this.renderLis(routeData.children)
      return lis
    }
  }

  render() {
    return (
      <div>
        <ul>
         {this.renderLis(routes)}
        </ul>

        <ul>
         {this.renderChildLis()}
        </ul>

      </div>
    )
  }
}

export default Header