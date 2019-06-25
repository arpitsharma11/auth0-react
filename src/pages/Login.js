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

	// button:
	// {
	//   marginLeft: 20,
	//   marginRight: 20
	// }
});

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			emailError: false,
			passwordError: false
		}
	}

	handleFieldChange = (name, value) => {
		this.setState({
			[name]: value,
			[name+'Error']: false
		});
	}

	onLoginClick = () => {
		const { email, password } = this.state;
		if( email != '' && password != '' ){
			this.props.auth.login(email,password);
			//console.log("result", res);
		} else {
			if(email == '')
				this.setState({
					emailError: true
				})
			if(password == '')
				this.setState({
					passwordError: true
				})
		}
	}

	render() {
		const { classes, auth } = this.props;
		const { emailError, passwordError } = this.state;

		return (
			<MuiThemeProvider theme={theme}>
				<PageTemplate>
					<Logo />
					<Typography variant="subtitle1" style={{ paddingTop: 41 }}>
						Welcome Back!
					</Typography>
					<Typography variant="subtitle2" style={{ paddingBottom: 35 }}>
						Please Log In to continue
					</Typography>
					<TextField style={{ marginBottom: 16}} name="email" label="Email Id or phone number" error={ emailError } onFieldChange={this.handleFieldChange} />
					<TextField name="password" type="password" label="Password" error={passwordError} onFieldChange={this.handleFieldChange} />
					<Typography variant="body1" style={{ paddingTop: 31, paddingBottom: 22 }}>
						Forgot Password?
					</Typography>
					<Button onClick={() => this.onLoginClick()} title="Log In" color='primary' variant='contained' rootClass={classes.button} size="large" />
				</PageTemplate>
			</MuiThemeProvider>
		)
	}
}
export default withStyles(styles, { withTheme: true })(Login);
