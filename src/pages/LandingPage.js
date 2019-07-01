import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../utils/Theme';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '../components/TextField'
import PageTemplate from '../components/templates/PageTemplate';
import Logo from '../components/Logo'
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({


});

class LandingPage extends Component {

    render() {

        console.log(localStorage.getItem('inLoggedIn'));

        return (
            <MuiThemeProvider theme={theme}>
                <PageTemplate>
                    <Logo />
                    <Typography variant="subtitle1" style={{ paddingTop: 41 }}>
                        Welcome
					</Typography>
                    <Typography variant="subtitle2" style={{ paddingBottom: 35, paddingTop: 21 }}>
                        Please log in or sign up to continue
					</Typography>
                    <Button 
                        color="primary" 
                        title="Log in" 
                        variant="contained" 
                        size="large"
                        onClick = { () => this.props.history.push('/login') } />
                    <Button 
                        title="Sign up" 
                        variant="outlined" 
                        size="large" 
                        style={{ marginTop: 16, opacity: 0.34, borderColor: '#D2D2D2' }} 
                        onClick = { () => this.props.history.push('/signup') }/>
                </PageTemplate>
            </MuiThemeProvider>
        )
    }
}
export default withStyles(styles, { withTheme: true })(LandingPage);