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
        width: '86%',
        paddingBottom: 14
    },
    smallTextField: {
        width: '43%',
        paddingBottom: 14
    },
    signUpTitle: {
        color: '#003A64'
    },
    agreementText: {
        paddingLeft: 66,
        paddingRight: 81,
        paddingTop: 39,
        paddingBottom: 15,
        textAlign: 'center'
    },
    referralText: {
        alignSelf: 'flex-start',
        marginLeft: '7%',
        paddingTop: '10px',
        paddingBottom: '10px',
        opacity: 0.56,
        color: '#000000',
        fontFamily: "Roboto Medium",
        fontSize: '13px',
        letterSpacing: '0.62px',
        lineHeight: '18px',
        fontWeight: 600
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
            userError: false
        }
    }

    handleFieldChange = async (name, value) => {
        await this.setState({
            [name]: value,
            [name + 'Error']: false
        });
        //console.log(this.state);
    }

    validation = () => {
        const { auth } = this.props;
        const { email,
            password,
            rePassword,
            emailError,
            passwordError,
            rePasswordError } = this.state;
        //console.log(this.state);
        if (email != '' && password != '' && rePassword != '' && password.length >= 8) {
            if (password === rePassword)
                return true
            else
                this.setState({
                    rePasswordError: true
                })
        } else {
            if (email == '')
                this.setState({
                    emailError: true
                })
            if (password == '' || password.length < 8)
                this.setState({
                    passwordError: true
                })
            if (rePassword == '')
                this.setState({
                    rePasswordError: true
                })
        }
        return false;
    }

    login = (email, password) => {
        this.props.auth.login(email, password);
    }

    error = () => {
        this.setState({
            userError: true,
            emailError: true
        })
    }

    render() {
        const { classes, auth } = this.props;
        const { emailError, passwordError, rePasswordError, userC, auth0Id, email, userError, password } = this.state;

        return (
            <MuiThemeProvider theme={theme}>
                <PageTemplate>
                    <Logo />
                    <Typography variant="subtitle1" className={classes.heading}>
                        Get Mpowered with us.
                        <span className={classes.signUpTitle}>Sign Up Now.</span>
                    </Typography>
                    {userError && <Typography style={{ color: 'red' }} variant="body1" >User already exists</Typography>}
                    <TextField name="email" error={emailError} textFieldClass={classes.largeTextField} label="Email Id or phone number" onFieldChange={this.handleFieldChange} />
                    <TextField name="password" error={passwordError} textFieldClass={classes.largeTextField} type="password" label="Password" onFieldChange={this.handleFieldChange} />
                    <TextField name="rePassword" error={rePasswordError} textFieldClass={classes.largeTextField} type="password" label="Confirm password" onFieldChange={this.handleFieldChange} />
                    <Typography variant="body1" className={classes.referralText}>
                        Referral Code
          </Typography>


                    <TextField textFieldClass={classes.largeTextField} label="Enter Code" onFieldChange={this.handleFieldChange} />
                    <Button variant="text" title="Apply" color="secondary"
                        style={{
                            marginTop: '-47px',
                            marginLeft: '74%'

                        }} />
                    <Typography variant="body1" className={classes.agreementText}>
                        By tapping Sign Up you agree on our Terms of Service and Privacy Policy
          </Typography>
                    <Mutation mutation={CREATE_USER}
                        onError={(error) => this.error()}
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
