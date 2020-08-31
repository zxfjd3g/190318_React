/*
应用根组件
*/
import React, { Component } from 'react'
import {HashRouter, BrowserRouter, Route, NavLink, Redirect, Switch} from 'react-router-dom'

import Home from './views/Home'
import About from './views/About'
import MyNavLink from '@/components/MyNavLink'

export default class App extends Component {


  render () {
    return (
      <HashRouter>
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header">
                <h2>Vue Router Demo</h2>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/* 导航路由链接 */}
                <MyNavLink className="list-group-item" to="/about">About</MyNavLink>
                <MyNavLink className="list-group-item" to="/home">Home</MyNavLink>
              </div>
            </div>
            
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/* 在此显示路由组件界面 */}
                  <Switch> {/* 只产生第一个匹配的Route组件对象(从上向下查找) */}
                    <Route path="/about" component={About}/>
                    <Route path="/home" component={Home}/>
                    {/* 写在最后 */}
                    <Redirect to="/about"/>
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HashRouter>
    )
  }
}