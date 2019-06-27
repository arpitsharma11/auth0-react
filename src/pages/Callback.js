import React, { Component } from 'react'

class Callback extends Component {

    componentDidMount(){
        this.props.auth.setSession();
    }

    render() {
        return (
            <div>
                Loading....
            </div>
        )
    }
}

export default Callback;
