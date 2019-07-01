import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import AuthGaurd from './Hocs/AuthGaurd';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Callback from '../pages/Callback';
import LandingPage from '../pages/LandingPage';
import Signup from '../pages/Signup';
import { createHttpLink } from "apollo-link-http";
import { setContext } from 'apollo-link-context'

/*const httpLink = createHttpLink({ uri: "http://172.16.17.247:8080/graphql" });

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('accessToken');
	return {
	  	headers: {
			...headers,
			authorization: token ? `Bearer ${localStorage.getItem('accessToken')}` : ''
		}
	}
})

const client = new ApolloClient({
	link: authLink.concat(httpLink)
})*/
  

const client = new ApolloClient({
	uri: "http://172.16.17.247:8080/graphql",
	request: operation => {
		operation.setContext({
			headers: {
				authorization: "Bearer " + localStorage.getItem('accessToken')
			}
		});
	}
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<Route exact path="/home" component={AuthGaurd(Home)} />
				<Route exact path="/login" component={AuthGaurd(Login)} />
				<Route exact path="/signup" component={AuthGaurd(Signup)} />
				<Route exact path="/callback" component={AuthGaurd(Callback)} />
				<Route exact path="/" component={AuthGaurd(LandingPage)} />
			</Router>
		</ApolloProvider>
	)
}


export default App;
