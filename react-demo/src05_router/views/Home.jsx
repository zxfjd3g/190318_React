import React, { Component } from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import MyNavLink from '@/components/MyNavLink'
import Message from './Message'
import News from './News'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>

        <ul className="nav nav-tabs">
          <li>
            <MyNavLink to="/home/news">News</MyNavLink>
          </li>
          <li>
            <MyNavLink to="/home/message">Message</MyNavLink>
          </li>
        </ul>

        <Switch>
          <Route path="/home/message" component={Message}></Route>
          <Route path="/home/news" component={News}></Route>
          <Redirect to="/home/news"/>
        </Switch>
      </div>
    )
  }
}
