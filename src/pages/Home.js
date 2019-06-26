import React, { Component } from 'react'
import Profile from '../components/Profile';
import {Typography} from "@material-ui/core";
import Button from "../components/Button";
import PageTemplate from "../components/templates/PageTemplate";
import theme from '../utils/Theme';
import Logo from "../components/Logo";


class Home extends Component {

    componentDidMount(){
    }

    render() {
        return (
            <div>
                <img style={{marginLeft: 22}} src={'../../src/assets/images/dashboard.png'} />
                <Profile auth0id={this.props.auth.getAuth0Id()} />
                <Button style={{backgroundColor: theme.palette.primary.hover}} onClick={() => this.props.auth.logout()} title="Logout" color='primary' variant='contained' size="large" />
            </div>
        )
    }
}

export default Home;
