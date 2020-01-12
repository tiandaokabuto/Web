import React, { Component } from 'react';

import {Icon} from 'antd';

import './search_input.less'

class SearchInput extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() { 
		return (
			<div className="search-input-wrapper">
				<div className="search-input">
					<input type="text" placeholder="搜索命令" />
					<Icon type="search" className="search-icon"/>
				</div>
			</div>
		);
	}
}

export default SearchInput;