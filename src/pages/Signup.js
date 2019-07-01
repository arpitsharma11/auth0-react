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
import { Mutation } from "react-apollo";
import gql from "graphql-tag";


const styles = theme => ({
    heading: {
        paddingTop: 41,
        paddingBottom: 27
    },
    largeTextField: {
        width: 329,
        paddingBottom: 10
    },
    smallTextField: {
        width: 253,
        paddingBottom: 10
    },
    signUpTitle: {
        color: '#003A64'
    },
    agreementText: {
        paddingLeft: 66,
        paddingRight: 81,
        paddingTop: 35,
        paddingBottom: 31,
        textAlign: 'center'
    }
});

const CREATE_USER = gql`
  mutation CreateUser( $email: String!,$password: String!) {
    createUser(email: $email,password: $password) {
      email
    }
  }
`;

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
            userError: false,
            emailErrorMsg: '',
            passwordErrorMsg: '',
            rePasswordErrorMsg: ''
        }
    }

    emailValidation = () => {
        const { email } = this.state;
		if( email === '' ){
			this.setState({ 
                emailError: true,
                emailErrorMsg: 'Required' 
            })
			return false
		}
		const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		if (reg.test(email) == false) {
			this.setState({ 
                emailError: true,
                emailErrorMsg: 'Invalid email ID' 
            })
			return false;
		}
		return true;
	}

    passwordValidation = () => {
        const { password } = this.state;
		if( password === '' ){
			this.setState({
                passwordError: true,
                passwordErrorMsg: 'Required' 
            });
			return false;
        }
        if( password.length < 8 ){
            this.setState({
                passwordError: true,
                passwordErrorMsg: 'Required' 
            });
            return false;
        }
		return true;
    }
    
    rePasswordValidation = () => {
        const { rePassword } = this.state;
		if( rePassword === '' ){
            this.setState({
                rePasswordError: true,
                rePasswordErrorMsg: 'Required' 
            });
			return false;
        }
        if( rePassword !== this.state.password ){
            this.setState({
                rePasswordError: true,
                rePasswordErrorMsg: 'Password does not match' 
            });
            return false;
        }
		return true;
	}

    handleFieldChange = async (name, value) => {
        await this.setState({
            [name]: value,
            [name + 'Error']: false,
            [name + 'ErrorMsg']: ''
        });
        //console.log(this.state);
    }

    validation = () => {
        const { email,
            password,
            rePassword } = this.state;
        let error = true;
        if( !this.emailValidation() )
            error = false;
        if( !this.passwordValidation() )
            error = false;
        if( !this.rePasswordValidation() )
            error = false;
        return error
    }

    login = (email, password) => {
        this.props.auth.login(email, password);
    }

    onSignUpError = () => {
        this.setState({
            userError: true
        })
    }

    render() {
        const { classes, auth } = this.props;
        const { emailError, passwordError, rePasswordError, userC, auth0Id, email, userError, password, passwordErrorMsg, emailErrorMsg, rePasswordErrorMsg } = this.state;

        return (
            <MuiThemeProvider theme={theme}>
                <PageTemplate>
                    <Logo />
                    <Typography variant="subtitle1" className={classes.heading}>
                        Get MPowered with us.
                        <span className={classes.signUpTitle}>Sign Up Now.</span>
                    </Typography>
                    {userError && <Typography style={{ color: 'red' }} variant="body1" >User already exists</Typography>}
                    <TextField 
                        name="email" 
                        error={emailError} 
                        errorMsg={ emailErrorMsg } 
                        textFieldClass={classes.largeTextField} 
                        label="Email Id or phone number" 
                        onFieldChange={this.handleFieldChange} 
                        onBlur={this.emailValidation} />
                    <TextField 
                        name="password" 
                        error={passwordError} 
                        errorMsg={ passwordErrorMsg } 
                        textFieldClass={classes.largeTextField} 
                        type="password" 
                        label="Password" 
                        onFieldChange={this.handleFieldChange} 
                        onBlur={this.passwordValidation} />
                    <TextField 
                        name="rePassword" 
                        error={rePasswordError} 
                        errorMsg={ rePasswordErrorMsg } 
                        textFieldClass={classes.largeTextField} 
                        type="password" label="Confirm password" 
                        onFieldChange={this.handleFieldChange} 
                        onBlur={this.rePasswordValidation} />
                    <span>
                        <TextField textFieldClass={classes.smallTextField} label="Referral Code" onFieldChange={this.handleFieldChange} />
                        <Button variant="text" title="Apply" color="secondary" style={{ paddingTop: 20 }} />
                    </span>
                    <Typography variant="body1" className={classes.agreementText}>
                        By Tapping Sign Up you agree on our Terms of Service and Privacy Policy
                    </Typography>
                    <Mutation mutation={CREATE_USER}
                        onError={(error) => this.onSignUpError()}
                    >
                        {(createUser, { loading, error, data }) => (
                            <div>
                                <Button onClick={() => {
                                    console.log("email", email);
                                    console.log("password", password);
                                    if (this.validation())
                                        createUser({ variables: { email: email, password: password } })
                                }} title="Sign Up" color='primary' variant='contained' rootClass={classes.button} size="large" />
                                {data && this.login(email, password)}
                            </div>
                        )}
                    </Mutation>
                </PageTemplate>
            </MuiThemeProvider>
        )
    }
}
export default withStyles(styles, { withTheme: true })(Signup);
