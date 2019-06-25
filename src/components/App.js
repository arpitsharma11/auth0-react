import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import AuthGaurd from './Hocs/AuthGaurd';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Callback from '../pages/Callback';
import Signup from '../pages/Signup'
import Auth from '../service/Auth';


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

console.log(client);
//const auth = new Auth();

function onStorage(data) {
	console.log("hi reload");
	window.location.reload();
}

if (window.addEventListener) {
	window.addEventListener("storage", onStorage, false);
} else {
	window.attachEvent("onstorage", onStorage);
};

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<Route exact path="/" component={AuthGaurd(Home)} />
				<Route exact path="/login" component={AuthGaurd(Login)} />
				<Route exact path="/signup" component={(Signup)} />
				<Route exact path="/callback" component={AuthGaurd(Callback)} />
			</Router>
		</ApolloProvider>
	)
}


export default App;
