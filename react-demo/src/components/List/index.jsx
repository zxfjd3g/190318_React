import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

import Item from '../Item'
/* 
列表组件
*/
export default class List extends Component {
  
  static propTypes = {
    comments: PropTypes.array.isRequired,
    deleteComment: PropTypes.func.isRequired,
  }
  

  render() {
    // 读取props中数据
    const { comments, deleteComment } = this.props
    const display = comments.length===0 ? 'block' : 'none'
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            comments.map(comment => <Item key={comment.id} comment={comment} deleteComment={deleteComment} />)
          }
        </ul>
      </div>
    )
  }
}
