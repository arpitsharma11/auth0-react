import React, { Component } from 'react'
import auth0 from 'auth0-js';


class AuthService extends Component {

    accessToken;
    idToken;
    expiresAt;
    authResult;

    auth0 = new auth0.WebAuth({
        domain: 'dev-rx0xlk6h.auth0.com',
        clientID: 'AcpBichZZwzS4c7neUWodRoxpwpcfVFv',
        responseType: 'token id_token',
        redirectUri: 'http://localhost:3000/callback'
    });

    getAccessToken = () => {
        return this.accessToken;
    }

    getIdToken = () => {
        return this.idToken;
    }
    
    googleAuth = () => {
        this.auth0.login({
            realm: 'Username-Password-Authentication',
            username: 'arpit.sharma@zemosolabs.com',
            password: 'Test_11223',
            grant_type: 'password'
            
        });
    }

    setSession = () => {
        this.auth0.parseHash((err, authResult) => {
            console.log(authResult);
            localStorage.setItem('authResult',authResult)
        })
    }

    logout = () => {
        this.accessToken = null;
        this.idToken = null;
    }

    isAuthenticated = () => {
        console.log(this.authResult);
        if(this.accessToken && this.idToken)
            return true
        else
            return false
    }
}

export default AuthService;
