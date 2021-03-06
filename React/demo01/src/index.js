/**
 * 入口文件
 */
import React from 'react'
import ReactDom from 'react-dom'
import XiaoJieJie from './XiaoJieJie'

// JSX：JavaScript + XML的结合
// 遇到 < 就解析成HTML
// 遇到 { 就解析成JavaScript
ReactDom.render(<XiaoJieJie />, document.getElementById('root'))