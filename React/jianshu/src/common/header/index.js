import React from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem } from './style'
import  * as actionCreator from './store/actionCreator'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'

const Header = props => {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">登录</NavItem>
                <NavItem className="right">
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        timeout={200}
                        in={props.focused}
                        classNames="slide"
                    >
                        <NavSearch onFocus={() => props.searchFocus(props.list)} onBlur={props.searchBlur}
                        className={props.focused ? 'focused' : ''}/>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
                    {getListArea(props.focused, props.list, props.page, props.mouseEnter, props.mouseLeave, props.mouseIn, props.changePage)}
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className="reg">注册</Button>
                <Button className="writting">
                    <i className="iconfont">&#xe615;</i>写文章
                </Button>
            </Addition>
        </HeaderWrapper>
    );
}

const getListArea = (focused, list, page, mouseEnter, mouseLeave, mouseIn, changePage) => {
    const jsList = list.toJS()
    const pageList = []
    if (jsList.length) {
        for(let i = (page - 1) * 10; i < page *10; i++) {
            pageList.push(
                <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
            )
        }
    }
    if (focused || mouseIn) {
        return (
            <SearchInfo onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch onClick={changePage}>换一换</SearchInfoSwitch>
                </SearchInfoTitle>
                {pageList}
            </SearchInfo>
        )
    } else {
        return null
    }
}

const mapState = state => {
    return {
        // state.header.get('focused') // state.header.focused // state.focused
        focused: state.get('header').get('focused'), // 使用了redux-immutable和immutable
        mouseIn: state.get('header').get('mouseIn'),
        list: state.get('header').get('list'),
        page: state.get('header').get('page')
    }
}
const mapDispatch = dispatch => {
    return {
        searchFocus(list) {
            console.log(list)
            if (list.size === 0) {
                dispatch(actionCreator.getList())
            }
            dispatch(actionCreator.searchFocus())
        },
        searchBlur() {
            dispatch(actionCreator.searchBlur())
        },
        mouseEnter() {
            dispatch(actionCreator.mouseEnter())
        },
        mouseLeave() {
            dispatch(actionCreator.mouseLeave())
        },
        changePage() {
            dispatch(actionCreator.changePage())
        }
    }
}

export default connect(mapState, mapDispatch)(Header);