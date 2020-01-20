import React, { Component } from 'react';

class List extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    completeHandle(id) {
        this.props.completeHandle(id)
    }
    showList(title){
        let renderNode
        if (this.props.title === 0) {
            renderNode = (
                <ul>
                    {
                        this.props.alls.map(item => {
                            return <li onClick={this.completeHandle.bind(this, item.id)} key={item.id}>{item.value}</li>
                        })
                    }
                </ul>
            )
        } else if (this.props.title === 1) {
            renderNode = (
                <ul>
                    {
                        this.props.alls.map(item => {
                            if(item.complete === false) {
                                return <li onClick={this.props.completeHandle.bind(this, item.id)} key={item.id}>{item.value}</li>
                            }
                        })
                    }
                </ul>
            )
        } else {
            renderNode = (
                <ul>
                    {
                        this.props.alls.map(item => {
                            if(item.complete) {
                                return <li onClick={this.props.completeHandle.bind(this, item.id)} key={item.id}>{item.value}</li>
                            }
                        })
                    }
                </ul>
            )
        }
        return renderNode
    }
    render() {
        return (
            <div>
                {this.showList(this.props.title)}
            </div>
        )
    }
}

export default List;