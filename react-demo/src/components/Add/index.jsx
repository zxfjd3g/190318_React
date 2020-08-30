import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Add extends Component {

  static propTypes = {
    addComment: PropTypes.func.isRequired
  }

  // 初始化状态
  state = {
    username: '',
    content: ''
  }

  /* 
  处理输入改变的监听回调
  */
  handleChange = (propName) => {
    return (e) => {
      this.setState({
        [propName]: e.target.value.trim()
      })
    }
  }

  /* 
  提交添加comment
  */
  submit = () => {

    // 取出username和content
    const {username, content} = this.state
    // 如果没有输入, 就直接结束
    if (!username || !content) return

    // 添加comment
    this.props.addComment(username, content)
    // 清除输入
    this.setState({
      username: '',
      content: ''
    })
  }
  

  render() {
    const { username, content } = this.state

    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" 
              value={username} onChange={this.handleChange('username')}/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容"
              value={content} onChange={this.handleChange('content')}></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.submit}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
