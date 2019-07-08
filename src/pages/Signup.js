import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../utils/Theme';
import Button from '../components/Button';
import TextField from '../components/TextField';
import PageTemplate from '../components/templates/PageTemplate';
import Logo from '../components/Logo';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import gql from "graphql-tag";
import axios from 'axios';


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
    },
    referralText: {
        marginRight: '237px',
        paddingTop: '10px',
        paddingBottom: '10px',
        opacity: 0.56,
        color: '#000000',
        fontFamily: "Roboto Medium",
        fontSize: '13px',
        letterSpacing: '0.62px',
        lineHeight: '18px',
        fontWeight: 600
    },
    dontHave: {
        opacity: '0.34',
        color: '#000000',
        fontSize: '12px',
        letterSpacing: '0.47px',
        lineHeight: '16px',
        textAlign: 'center',
        paddingTop: '16px'
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
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            rePassword: '',
            firstNameError: '',
            lastNameError: '',
            emailError: false,
            passwordError: false,
            rePasswordError: false,
            auth0Id: '',
            userError: false,
            firstNameErrorMsg: '',
            lastNameErrorMsg: '',
            emailErrorMsg: '',
            passwordErrorMsg: '',
            rePasswordErrorMsg: '',
            showPassword: false,
            showPasswordRe: false
        }
    }

    firstNameValidation = () => {
        const { firstName } = this.state;
        if (firstName === '') {
            this.setState({
                firstNameError: true,
                firstNameErrorMsg: 'First Name Required'
            })
            return false
        }
        return true;
    }

    emailValidation = () => {
        const { email } = this.state;
        if (email === '') {
            this.setState({
                emailError: true,
                emailErrorMsg: 'Email Required'
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
        if (password === '') {
            this.setState({
                passwordError: true,
                passwordErrorMsg: 'Password Required'
            });
            return false;
        }
        if (password.length < 8) {
            this.setState({
                passwordError: true,
                passwordErrorMsg: 'Password lenght needs to be 8 or more than 8 characters.'
            });
            return false;
        }
        return true;
    }

    rePasswordValidation = () => {
        const { rePassword } = this.state;
        if (rePassword === '') {
            this.setState({
                rePasswordError: true,
                rePasswordErrorMsg: 'Repassword Required'
            });
            return false;
        }
        if (rePassword !== this.state.password) {
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
        let error = true;
        if (!this.firstNameValidation())
            error = false;
        if (!this.emailValidation())
            error = false;
        if (!this.passwordValidation())
            error = false;
        if (!this.rePasswordValidation())
            error = false;
        return error
    }

    singUpCall = () => {
        //console.log('post call');
        const { email, password, firstName, lastName } = this.state;
        if( this.validation() ){
            axios.post('http://localhost:8080/user/signup/',{
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "password": password
            })
            .then((response) => {
                //console.log(response);
                this.login(email,password);
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }

    login = (email, password) => {
        this.props.auth.login(email, password);
    }

    onSignUpError = () => {
        this.setState({
            userError: true
        })
    }

    showPassword = (type) => {
		this.setState({
			['showPassword' + type]: !this.state['showPassword' + type]
		});
	}

    render() {
        const { classes, auth } = this.props;
        const { 
                emailError, 
                passwordError, 
                rePasswordError, 
                firstNameError,
                lastNameError,
                userC, 
                auth0Id, 
                email, 
                userError, 
                password, 
                passwordErrorMsg, 
                emailErrorMsg, 
                rePasswordErrorMsg,
                firstNameErrorMsg,
                lastNameErrorMsg ,
                showPassword,
                showPasswordRe
            } = this.state;

        return (
            <MuiThemeProvider theme={theme}>
                <PageTemplate>
                    <Logo />
                    <Typography
                        variant="subtitle1"
                        className={classes.heading}
                    >
                        Get Mpowered with us.
                        <span className={classes.signUpTitle}> Sign Up Now.</span>
                    </Typography>
                    {userError &&
                        <Typography
                            style={{ color: 'red' }}
                            variant="body1"
                        >
                            User already exists
                        </Typography>
                    }
                    <TextField
                        name="firstName"
                        error={firstNameError}
                        errorMsg={firstNameErrorMsg}
                        textFieldClass={classes.largeTextField}
                        label="First Name"
                        onFieldChange={this.handleFieldChange}
                    />
                    <TextField
                        name="lastName"
                        //error={passwordError}
                        //errorMsg={ passwordErrorMsg }
                        textFieldClass={classes.largeTextField}
                        type="text"
                        label="Last Name"
                        onFieldChange={this.handleFieldChange}
                    //onBlur={this.passwordValidation} />
                    />
                    <TextField
                        name="email"
                        error={emailError}
                        errorMsg={emailErrorMsg}
                        textFieldClass={classes.largeTextField}
                        label="Email Id or phone number"
                        onFieldChange={this.handleFieldChange}
                        onBlur={this.emailValidation} />
                    <TextField
                        name="password"
                        error={passwordError}
                        errorMsg={passwordErrorMsg}
                        textFieldClass={classes.largeTextField}
                        type={showPassword ? 'text' : 'password'}
                        label="Password"
                        onFieldChange={this.handleFieldChange}
                        onBlur={this.passwordValidation} 
						onShowPassword={ () => this.showPassword('') }
						showPassword={true}
                    />
                    <TextField
                        name="rePassword"
                        error={rePasswordError}
                        errorMsg={rePasswordErrorMsg}
                        textFieldClass={classes.largeTextField}
                        type={showPasswordRe ? 'text' : 'password'}
                        label="Confirm password"
                        onFieldChange={this.handleFieldChange}
                        onBlur={this.rePasswordValidation}
						onShowPassword={ () => this.showPassword( 'Re' ) }
						showPassword={true}
                    />
                     <Typography variant="body1" className={classes.referralText}>
                                        Referral Code
                              </Typography>
                    <TextField textFieldClass={classes.largeTextField} label="Enter Code" onFieldChange={this.handleFieldChange} />
                    <Button variant="text" title="Apply" color="secondary"
                        style={{
                            marginTop: '-47px',
                            marginLeft: '268px'

                        }} />
                    <Typography
                        variant="body1"
                        className={classes.agreementText}
                    >
                        By tapping Sign Up you agree on our Terms of Service and Privacy Policy
                    </Typography>
                    <Button
                        onClick={() => this.singUpCall()}
                        title="Sign Up"
                        color='primary'
                        variant='contained'
                        rootClass={classes.button}
                        size="large"
                    />
                    <Typography
                        className={classes.dontHave}
                        variant="body1"
                    >
                        Already have a account?
                        <span
                            style={{ color: '#F7B500' }}
                            onClick={() => this.props.history.push('/login')}
                        >
                            Login
                        </span>
                    </Typography>
                </PageTemplate>
            </MuiThemeProvider>
        )
    }
}
export default withStyles(styles, { withTheme: true })(Signup);
