import React, { Component } from 'react'

class XiaoJieJieItem extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this) // 把在JSX中的绑定操作转移到constructor中
  }
  render() { 
    return (
      <li onClick={this.handleClick}>{this.props.content}</li>
    )
  }
  handleClick () {
    console.log(this.props.index)
    this.props.deleteItem(this.props.index)
  }
}

export default XiaoJieJieItem;