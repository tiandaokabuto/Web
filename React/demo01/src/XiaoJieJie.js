/**
 * 组件
 */
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import XiaoJieJieItem from './XiaoJieJieItem'
import Boss from './Boss'
import './xiaojiejie.css'

// Fragment 可以替代最外层的div
class XiaoJieJie extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['基础按摩', '精油推背']
    }
    this.addItem = this.addItem.bind(this)
    this.inputChange = this.inputChange.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }
  /**
   * setState是一个异步函数，如果需要在更新数据之后进行操作，
   * 可以使用setState的第二个参数回调函数（类似Vue.nextTick())
   */
  inputChange (e) {
    // this.state.inputValue = e.target.value // 无效
    this.setState({
      inputValue: this.input.value
    })
  }
  addItem () {
    this.setState({
      inputValue: '',
      list: [...this.state.list, this.state.inputValue]
    }, () => {
      console.log(this.ul.querySelectorAll('li').length)
    })
  }
  deleteItem (index) {
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
  /**
   * mounting
   */
  render () {
    // console.log('render——————挂载中')
    return (
      <Fragment>
        {/* JSX中的注释方式 */}
        <input
            className='input'
            value={this.state.inputValue}
            onChange={this.inputChange}
            ref={input => {this.input = input}} // 绑定DOM
        ></input>
        <button onClick={this.addItem}>增加服务</button>
        <ul ref={ul => {this.ul = ul}}>
          {
            this.state.list.map((item, index) => {
              // return ()括号里面可以换行
              return (
                // <li
                //   onClick={this.deleteItem.bind(this, index)}
                //   key={index + item}
                //   // dangerouslySetInnerHTML={{__html:item}}
                //   >
                //     {item}
                // </li>
                <XiaoJieJieItem
                content={item} key={index + item} index={index}
                deleteItem={this.deleteItem}
                ></XiaoJieJieItem>
              )
            })
          }
        </ul>
        <Boss></Boss>
      </Fragment>
    )
  }
  // componentWillMount () {
  //   console.log('componentWillMount——————将要挂载')
  // }
  componentDidMount () {
    console.log('componentDidMount——————挂载完成')
    axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
        .then(res => { console.log('axios获取成功' + JSON.stringify(res)) })
        .catch(err => { console.log('axios获取失败' + err)})
  }
  /**
   * updation---state
   */
  // shouldComponentUpdate () {
  //   console.log('shouldComponentUpdate——————组件更新前1')
  //   return true // 要返回一个布尔值
  // }
  // componentWillUpdate () {
  //   console.log('componentWillUpdate——————组件更新前2')
  //   return true
  // }
  // componentDidUpdate () {
  //   console.log('componentDidUpdate——————组件更新后(render之后)')
  // }
}

export default XiaoJieJie