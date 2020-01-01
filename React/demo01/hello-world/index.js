/**
 * 入口文件
 */
import React from 'react'
import ReactDom from 'react-dom'
import App from '../hello-world/App'

// JSX：JavaScript + XML的结合
// 遇到 < 就解析成HTML
// 遇到 { 就解析成JavaScript
ReactDom.render(<App />, document.getElementById('root'))