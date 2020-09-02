/*
应用根组件
*/
// rcc react class component
import React from 'react'
import Search from './components/Search'
import Main from './components/Main'
import './index.css'

export default function HookDemo () {
  return (
    <div>
      <div className="container">
        <Search/>
        <Main/>
      </div>
    </div>
  )
}