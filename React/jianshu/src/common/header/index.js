import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem } from './style'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">Aa</NavItem>
                </Nav>
            </HeaderWrapper>
        );
    }
}
 
export default Header;