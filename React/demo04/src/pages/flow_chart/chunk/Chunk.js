import React, { Component } from 'react';

import './chunk.less'

class Chunk extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	render() { 
		return (
			<div className="chunk-wrapper">
				<div className="chunk-content">{this.props.name}</div>
			</div>
		);
	}
}

export default Chunk;