import React, { Component } from 'react'
import PropTypes from 'prop-types'

class XiaoJieJieItem extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this) // 把在JSX中的绑定操作转移到constructor中
  }
  render() {
    return (
      <li onClick={this.handleClick}>
        {this.props.avname}-{this.props.content}
      </li>
    )
  }
  handleClick () {
    console.log(this.props.index)
    this.props.deleteItem(this.props.index)
  }
  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.content === this.props.content ? true : false
  }
  /**
   * updation---props
   */
  // componentWillReceiveProps () {
  //   // 首次加载不执行，再次加载被传入pros才执行
  //   console.log('child——————componentWillReceiveProps')
  // }
  /**
   * unmouting
   */
  componentWillUnmount () {
    console.log('child——————componentWillUnmount——————组件被删除之前')
  }
}

// 注意propTypes和PropTypes
XiaoJieJieItem.propTypes = {
  avname: PropTypes.string.isRequired, // 不传值会报错
  content: PropTypes.string, // 传值的类型
  deleteItem: PropTypes.func,
  index: PropTypes.number
}
// 设置默认值
XiaoJieJieItem.defaultProps = {
  avname: '桃井老师'
}

export default XiaoJieJieItem;