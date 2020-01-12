import React, { Component } from 'react';
// import { Button } from 'antd';

import TopButton from './top_button/TopButton';
import SearchInput from './search_input/SearchInput';
import OrderButton from './order_button/OrderButton'
import MenuList from './menu_list/MenuList';

import './nav_menu.less';

class NavMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() { 
		return (
			<div className="nav-manu-wrapper">
				<TopButton></TopButton>
				<SearchInput></SearchInput>
				<OrderButton></OrderButton>
				<MenuList></MenuList>
			</div>
		);
	}
}

export default NavMenu;