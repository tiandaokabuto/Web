import React, { Component } from 'react';

import Chunk from '../chunk/Chunk'
import Arrows from '../arrows/Arrows'

import './panel.less';

class Panel extends Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}
	render() { 
		return (
			<div className="panel-wrapper">
				<div className="chunk-area-wrapper">
					<Chunk name="模块1"></Chunk>
					<Chunk name="模块2"></Chunk>
					<Chunk name="模块3"></Chunk>
				</div>
				<div className="flow-chart-area-wrapper">
					<Arrows showFrame={false}></Arrows>
				</div>
			</div>
		);
	}
}

export default Panel;