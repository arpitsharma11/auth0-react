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

	largeTextField: {
		width: 329,
		paddingBottom: 10
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

function validateEmail(email) {
	const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if (reg.test(email) == false) {
		console.log('Invalid Email Address');
		return false;
	}
	return true;
}

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			emailError: false,
			passwordError: false,
			emailErrorMsg: '',
			passwordErrorMsg: '',
			error: '',
			loading: false,
			showPassword: false
		}
	}

	componentWillMount() {
		console.log(window.location.pathname);
		if (window.location.pathname === '/callback') {
			this.props.auth.setSession();
			this.setState({
				loading: true
			})
		}
	}

	handleFieldChange = (name, value) => {
		this.setState({
			[name]: value,
			[name + 'Error']: '',
			[name + 'ErrorMsg']: '',
			error: ''
		});
	}

	emailValidation = () => {
		const { email } = this.state;
		if (email === '') {
			this.setState({
				emailError: true,
				emailErrorMsg: 'Email Required'
			});
			return false
		}
		const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		if (reg.test(email) == false) {
			this.setState({
				emailError: true,
				emailErrorMsg: 'Invalid email'
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
		return true;
	}

	onLoginClick = async () => {
		const { email, password } = this.state;
		let error = true;
		if (!this.emailValidation())
			error = false;
		if (!this.passwordValidation())
			error = false;

		if (error)
			this.props.auth.login(email, password).then(res => {
				console.log(res);
			}).catch(err => {
				console.log(err);
				this.setState({
					error: err.description
				})
			})
	}

	showPassword = () => {
		this.setState({
			showPassword: !this.state.showPassword
		});
	}

	render() {
		const { classes, auth } = this.props;
		const {
			emailError,
			passwordError,
			error,
			emailErrorMsg,
			passwordErrorMsg,
			loading,
			showPassword
		} = this.state;

		return (
			<MuiThemeProvider theme={theme}>
				<PageTemplate>
					<Logo />
					<Typography
						variant="subtitle1"
						style={{ paddingTop: 41 }}
					>
						Welcome Back!
					</Typography>
					<Typography
						variant="subtitle2"
						style={{ paddingBottom: 35 }}
					>
						Please Log In to continue
					</Typography>
					{error &&
						<Typography
							style={{ color: 'red' }}
							variant="body1"
						>
							{error}
						</Typography>}
					<TextField
						//onFocus={this.handleFocus}
						onBlur={this.emailValidation}
						textFieldClass={classes.largeTextField}
						name="email" label="Email Id or phone number"
						error={emailError}
						errorMsg={emailErrorMsg}
						onFieldChange={this.handleFieldChange} />
					<TextField
						onBlur={this.passwordValidation}
						textFieldClass={classes.largeTextField}
						name="password"
						type={showPassword ? 'text' : 'password'}
						label="Password"
						error={passwordError}
						errorMsg={passwordErrorMsg}
						onFieldChange={this.handleFieldChange}
						onShowPassword={this.showPassword}
						showPassword={true}
					/>
					<Typography
						variant="body1"
						style={{ paddingTop: 10, paddingBottom: 22 }}
					>
						Forgot Password?
					</Typography>
					{loading ?
						<div>
							Loading
						</div> :
						<Button
							onClick={() => this.onLoginClick()}
							title="Log In"
							color='primary'
							variant='contained'
							rootClass={classes.button}
							size="large"
						/>
					}
					<Typography
						className={classes.dontHave}
						variant="body1"
					>
						Don’t have an account?
						<span
							style={{ color: '#F7B500' }}
							onClick={() => this.props.history.push('/signup')}
						>
							Sign up
						</span>
					</Typography>
				</PageTemplate>
			</MuiThemeProvider>
		)
	}
}
export default withStyles(styles, { withTheme: true })(Login);
