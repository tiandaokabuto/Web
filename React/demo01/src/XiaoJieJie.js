/**
 * 组件
 */
import React, { Component, Fragment } from 'react'
import XiaoJieJieItem from './XiaoJieJieItem'
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
  render () {
    return (
      <Fragment>
        {/* JSX中的注释方式 */}
        <input className='input' value={this.state.inputValue} onChange={this.inputChange}></input>
        <button onClick={this.addItem}>增加服务</button>
        <ul>
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
      </Fragment>
    )
  }
  inputChange (e) {
    // this.state.inputValue = e.target.value // 无效
    this.setState({
      inputValue: e.target.value
    })
  }
  addItem () {
    this.setState({
      inputValue: '',
      list: [...this.state.list, this.state.inputValue]
    })
  }
  deleteItem (index) {
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default XiaoJieJie