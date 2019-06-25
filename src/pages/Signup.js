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
import SignupProfile from '../components/SignupProfile';


const styles = theme => ({
    largeTextField: {
        width: 353
    },
    smallTextField: {
        width: 253
    }
});

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            rePassword: '',
            emailError: false,
            passwordError: false,
            rePasswordError: false,
            auth0Id: '',
            userC : false
        }
    }

    handleFieldChange = async (name, value) => {
        await this.setState({
            [name]: value,
            [name+'Error']: false
        });
        //console.log(this.state);
    }

    signup = () => {
        const { auth } = this.props;
        const { email, 
                password, 
                rePassword, 
                emailError, 
                passwordError, 
                rePasswordError } = this.state;
        console.log(this.state);
        if( email != '' && password != '' && rePassword != ''){
            if( password === rePassword )
                auth.signup(email,password).then( res => {
                    console.log(res);
                    console.log(' New id',res.Id);
                    this.setState({
                        userC : true,
                        auth0Id: res.Id
                    })
                })
                .error( err => {
                    console.log(err);
                })
            else
                this.setState({
                    rePasswordError: true
                }) 
        } else {
            if(email == '')
                this.setState({
                    emailError: true
                })
            if(password == '')
                this.setState({
                    passwordError: true
                })
            if(rePassword == '')
                this.setState({
                    rePasswordError: true
                })
            }
    }

    render() {
        const { classes, auth } = this.props;
        const { emailError, passwordError, rePasswordError, userC, auth0Id, email } = this.state;

        return (
            <MuiThemeProvider theme={theme}>
                <PageTemplate>
                    <Logo />
                    <Typography variant="subtitle1" style={{ paddingTop: 41, paddingBottom: 27 }}>
                        Get MPowered with us.
                        <span style={{ color: '#003A64' }}>Sign Up Now.</span>
                    </Typography>

                    <TextField name="email" error={emailError} textFieldClass={classes.largeTextField} label="Email Id or phone number" onFieldChange={this.handleFieldChange} />
                    <TextField name="password" error={passwordError} textFieldClass={classes.largeTextField} type="password" label="Password" onFieldChange={this.handleFieldChange} />
                    <TextField name="rePassword" error={rePasswordError} textFieldClass={classes.largeTextField} type="password" label="Confirm Password" onFieldChange={this.handleFieldChange} />
                    <span>
                        <TextField textFieldClass={classes.smallTextField} label="Referral Code" onFieldChange={this.handleFieldChange} />
                        <Button variant="text" title="Apply" color="secondary" style={{ paddingTop: 20 }} />
                    </span>
                    `<Typography variant="body1" style={{ paddingLeft: 66, paddingRight: 81, paddingTop: 35, paddingBottom: 31, textAlign: 'center' }}>
                        By Tapping Sign Up you agree on our Terms of Service and Privacy Policy
                    </Typography>
                    <Button onClick={() => this.signup() } title="Sign Up" color='primary' variant='contained' rootClass={classes.button} size="large" />
                    { userC && <SignupProfile auth0Id={auth0Id} email={email} /> }
                </PageTemplate>
            </MuiThemeProvider>
        )
    }
}
export default withStyles(styles, { withTheme: true })(Signup);
