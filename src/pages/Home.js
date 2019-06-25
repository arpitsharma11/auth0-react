import React, { Component } from 'react'
import Profile from '../components/Profile';
class Home extends Component {

    componentDidMount(){
    }

    render() {
        return (
            <div>
                Yo Home!

                <button onClick={() => this.props.auth.logout()}>Logout</button><br/>
            </div>
        )
    }
}

export default Home;
