/*
应用根组件
*/
// rcc react class component
import React, { Component } from 'react'
import Add from './components/Add'
import List from './components/List'

export default class App extends Component {

  state = {
    comments: [
      {id: 1, username: 'Tom', content: 'React So Easy!'},
      {id: 2, username: 'Jack', content: 'React So Easy22!'},
      {id: 3, username: 'Bob', content: 'React So Easy33!'},
    ]
  }

  id = 4 // 用来保存最新可用的id值, 它会不断递增

  /* 
  添加comment
  */
  addComment = (username, content) => {

    // 创建comment对象
    const comment = {
      id: this.id++,
      username,
      content
    }
    const comments = [comment, ...this.state.comments]
    // 更新状态
    this.setState({ comments })
  }

  /* 
  删除comment
  */
  deleteComment = (id) => {
    // 过滤掉index对应的comment, 产生一个新comments
    const comments = this.state.comments.filter(comment => comment.id!==id)
    // 更新状态
    this.setState({
      comments
    })
  }

  render () {
    const { comments } = this.state

    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add addComment={this.addComment}/>
          <List comments={comments} deleteComment={this.deleteComment}/>
        </div>
      </div>
    )
  }
}