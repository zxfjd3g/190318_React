import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
/* 
列表项组件
*/
export default class Item extends Component {

  static propTypes = {
    comment: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired,
  }

  render() {

    const { comment:{id, username, content}, deleteComment } = this.props

    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="javascript:;" onClick={() => deleteComment(id)}>删除</a>
        </div>
        <p className="user"><span >{username}</span><span>说:</span></p>
        <p className="centence">{content}</p>
      </li>
    )
  }
}
