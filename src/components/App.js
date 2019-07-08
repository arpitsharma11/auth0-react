import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Provider } from 'react-redux';

import AuthGaurd from './Hocs/AuthGaurd';
import Logout from '../pages/Logout';
import HomeDashboard from '../pages/HomeDashboard'
import Login from '../pages/Login';
import Callback from '../pages/Callback';
import LandingPage from '../pages/LandingPage';
import Signup from '../pages/Signup';
import HeaderFooterView from '../components/HeaderFooterView';
import ServicesDashboard from '../pages/ServicesDashboard';
import store from '../store';
import Test from '../pages/Test'
// import { createHttpLink } from "apollo-link-http";
// import { setContext } from 'apollo-link-context'

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

if (window.addEventListener) {
	window.addEventListener("storage", onStorage, false);
} else {
	window.attachEvent("onstorage", onStorage);
};

function onStorage(data) {
	window.location.reload();
}


const client = new ApolloClient({
	uri: "http://54.70.201.62:8080/graphql",
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
		<Provider store={store} >
			<ApolloProvider client={client}>
				<Router>
					<Route exact path="/home" component={(HomeDashboard)} />
					<Route exact path="/login" component={AuthGaurd(Login)} />
					<Route exact path="/logout" component={AuthGaurd(Logout)} />
					<Route exact path="/signup" component={AuthGaurd(Signup)} />
					<Route exact path="/callback" component={AuthGaurd(Callback)} />
					<Route exact path="/" component={AuthGaurd(LandingPage)} />
					{/* <HeaderFooterView> */}
					<Route exact path="/services" component={ServicesDashboard} />
					<Route exact path="/dashboard" component={Test} />
					{/* </HeaderFooterView> */}
				</Router>
			</ApolloProvider>
		</Provider>
	)
}


export default App;
