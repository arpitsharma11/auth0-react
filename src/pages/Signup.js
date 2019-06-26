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
    heading: {
        paddingTop: 41,
        paddingBottom: 27
    },
    largeTextField: {
        width: 329,
        paddingBottom:10
    },
    smallTextField: {
        width: 253,
        paddingBottom:10
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

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: 'Test_11223'
        }
    }

    handleFieldChange = async (name, value) => {
        await this.setState({
            [name]: value
        });
        //console.log(this.state);
    }

    render() {
        const { classes } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <PageTemplate>
                    <Logo />
                    <Typography variant="subtitle1" className={classes.heading}>
                        Get MPowered with us.
                        <span className={classes.signUpTitle}>Sign Up Now.</span>
                    </Typography>

                    <TextField textFieldClass={classes.largeTextField} label="Email Id or phone number" onFieldChange={this.handleFieldChange} />
                    <TextField textFieldClass={classes.largeTextField} type="password" label="Password" onFieldChange={this.handleFieldChange} />
                    <TextField textFieldClass={classes.largeTextField} type="password" label="Confirm Password" onFieldChange={this.handleFieldChange} />
                    <span>
                        <TextField textFieldClass={classes.smallTextField} label="Referral Code" onFieldChange={this.handleFieldChange} />
                        <Button variant="text" title="Apply" color="secondary" style={{ paddingTop: 20 }} />
                    </span>
                    `<Typography variant="body1" className={classes.agreementText}>
                        By Tapping Sign Up you agree on our Terms of Service and Privacy Policy
          </Typography>
                    <Button title="Sign Up" color='primary' variant='contained' rootClass={classes.button} size="large" />
                </PageTemplate>
            </MuiThemeProvider>
        )
    }
}
export default withStyles(styles, { withTheme: true })(Signup);
