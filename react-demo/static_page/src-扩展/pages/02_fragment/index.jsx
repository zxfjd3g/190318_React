import React, { Component, Fragment } from 'react'

/* 
文档: https://zh-hans.reactjs.org/docs/fragments.html
### 使用
	<Fragment><Fragment>
	<></>

### 作用
	1) 可以不用必须有一个真实的DOM根标签了
	2) 可以对多个标签进行统一的控制(比如: 显示/隐藏)
	功能类似于vue中的<template>
*/
export default class FragmentTest extends Component {

  state = {
    isShow: true
  }

  render() {
    const {isShow} = this.state
    return (
      <div>
        <button onClick={() => this.setState({isShow: !isShow})}>切换</button>
        {
          isShow && (
            <div>
              <h3>aaaa</h3>
              <h3>bbb</h3>
            </div>
          )
        }
      </div>
    )
  }
}