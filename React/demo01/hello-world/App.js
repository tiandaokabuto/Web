/**
 * App组件
 */
// import React from 'react'
// const Component = React.Component

import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
    <div className='my'>Hello Kabuto {false ? 'a' : 'b'}</div>
    )
  }
}

export default App