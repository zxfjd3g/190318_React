import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'

/* 
当前组件是非路由组件
  没有路由组件相关的3个props (history/location/match)
  可能需要读取路由相关信息数据或控制路由跳转的功能
  解决: 使用withRouter
*/
class MessageItem extends Component {

  pushShow = (id) => {
    return () => {
      // push编程式路由导航
      /* 
      3种路由跳转携带数据的方式
        params参数
        query参数
        state  ==> 前提是必须BrowserRouter
      */
      this.props.history.push(`/home/message/detail/${id}?id2=${id}`, {name: 'tom', age: 12})
    }
  }

  replaceShow = (id) => {
    return () => {
      // push编程式路由导航
      this.props.history.replace(`/home/message/detail/${id}?id2=${id}`)
    }
  }

  render() {
    const {id, title} = this.props.message

    return (
      <li>
        <Link to={`/home/message/detail/${id}?id2=${id}`}>{title}</Link>
        <button onClick={this.pushShow(id)}>push查看</button>
        <button onClick={this.replaceShow(id)}>replace查看</button>
      </li>
    )
  }
}

// const EnhancedComponent = higherOrderComponent(WrappedComponent);

// export default withRouter(MessageItem)

const EnhancedComponent = withRouter(MessageItem);
export default EnhancedComponent


/* 
withRouter: 接收一个组件返回一个新的组件   ===> 高阶组件  ==> 是一个特别的高阶函数
  接收的参数是组件, 返回值也是组件的高阶函数才是高阶组件
  作用: 高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧
  withRouter高阶组件: 向非路由组件传入路由相关的3个prop对象

EnhancedComponent = higherOrderComponent(WrappedComponent)
  higherOrderComponent: 高阶组件函数
  EnhancedComponent: 高阶组件函数执行返回的增强组件, 向WrappedComponent传入特定的属性
  WrappedComponent: 被包裹组件, 接收EnhancedComponent传入的属性
  EnhancedComponent组件中包含WrappedComponent组件
*/