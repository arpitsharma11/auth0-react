import React, { Component } from 'react'

export default class Logout extends Component {

    componentWillMount(){
        this.props.auth.logout();
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}
