import React, { Component, Suspense} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import routes from '@/config/routes'

/* 
主体内容组件: 路由组件就在其中显示
3) 根据配置动态生成路由<Route>
*/
export default class Content extends Component {

  /* 
  根据配置动态生成路由<Route>的数组
  */
  renderRouteTags = () => {
    const routeTags = []

    // 先遍历外层routes
    routes.forEach(item => {
      const {path, component, children} = item
      // 添加的是一级链接对应的路由
      routeTags.push(<Route key={path} path={path} component={component} exact/>)

      // 后遍历内层children
      if (children && children.length>0) {
        children.forEach(cItem => {
          const {path, component} = cItem
          // 添加的是二级链接对应的路由
          routeTags.push(<Route key={path} path={path} component={component} exact/>)
        })
      }
    })

    // 最后添加一个重定向路由
    routeTags.push(<Redirect key={routes[0].path+'_red'} to={routes[0].path}/>)

    /* 
    请求: /welcome/frontend
      <Switch>
        <Route path='/welcome' component={Welcome}/>
        <Route path='/welcome/frontend' component={Frontend}/>
      </Switch>
    问题: 如果是默认的模糊匹配 ==> 匹配的是Welcome, 但应该要是Frontend
    解决: 使用exact配置来处理
    */

    return routeTags
  }

  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div style={{margin: '10px'}}>
          <Switch>
            <Route path="/home" render={() => <div>Home</div>} />
            {this.renderRouteTags()}
          </Switch>
        </div>
      </Suspense>
      
    )
  }
}
