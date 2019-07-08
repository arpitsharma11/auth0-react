import React, { Component } from 'react'
import auth0 from 'auth0-js';
import { AUTH_CONFIG } from '../../config/auth0_variables';
import axios from 'axios';

class AuthService extends Component {

    accessToken;
    idToken;
    expiresAt;
    name;
    auth0Id;
    //auth0Id;

    auth0 = new auth0.WebAuth({
        domain: AUTH_CONFIG.domain,
        clientID: AUTH_CONFIG.clientID,
        responseType: 'token id_token',
        redirectUri: 'http://52.13.107.85/callback',
        scope: AUTH_CONFIG.scope,
    });

    getAccessToken = () => {
        return this.accessToken;
    }

    getIdToken = () => {
        return this.idToken;
    }

    getExpireIn = () => {
        return this.expiresAt;
    }

    getName = () => {
        return this.name;
    }

    /*getAuth0Id = () => {
        const sub = localStorage.getItem('sub');
        if( sub ){
            const auth0Id = sub.split('|')[1]
            //console.log(auth0Id);
            return auth0Id;
        }
        return null;
    }*/
    
    login = (email,password) => {
        //console.log('email',email);
        //console.log('password',password);
        return new Promise( (resolve,reject) => {
            this.auth0.login({
                realm: 'Username-Password-Authentication',
                username: email,
                password: password,
                grant_type: 'password',
                //audience: AUTH_CONFIG.audience,
                scope: AUTH_CONFIG.scope,
                //prompt: 'none'
            }, (err,result) => {
                if(err){
                    console.log(err);
                    reject(err);
                }
                resolve(result);
            });
        })
    }

    setSession = () => {
        this.auth0.parseHash( (err, authResult) =>  {
            if (authResult && authResult.accessToken && authResult.idToken) {
                localStorage.setItem('isLoggedIn', 'true');
                this.setSessionData(authResult);
                const auth0Manage = new auth0.Management({
                    domain: AUTH_CONFIG.domain,
                    token: authResult.idToken,
                });
                const a = authResult.idTokenPayload['https://mpower.userinfo.com/usermetadata'];
                
                localStorage.setItem('name',a.firstName );
                //alert('kk');
                window.location.replace('/home');
                //resolve();
            } else if (err) {
                this.logout();
                console.log(err);
                alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
                //reject();
            }
        })
    }

    setSessionData = (authResult) => {
        console.log('Session Data Set Called');
        //alert('1');
        console.log(authResult);
        //let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
       // console.log("Auth Check", new Date().getTime() < expiresAt);
        this.accessToken = authResult.accessToken;
        this.idToken = authResult.idToken;
        this.name = authResult.idTokenPayload.name;
        console.log('name',authResult.idTokenPayload.name);
        //this.expiresAt = expiresAt;
    }

    renewSession() {
        //console.log('check Session callled');
        this.auth0.checkSession({
            audience: AUTH_CONFIG.audience,
            scope: AUTH_CONFIG.scope,
        }, (err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                console.log('hi');
                this.setSessionData(authResult);
            } else if (err) {
                this.logout();
                console.log(err);
                window.location.replace('/');
                localStorage.removeItem('isLoggedIn');
                //alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
            }
        });
    }

    logout = () => {
        this.accessToken = null;
        this.idToken = null;
        this.expiresAt = 0;
        this.auth0.logout();
        localStorage.removeItem('isLoggedIn');
        window.location.replace('/');
    }

    isAuthenticated = () => {
        // let expiresAt = this.expiresAt;
        // console.log("Auth Check", new Date().getTime() < expiresAt);
        // return new Date().getTime() < expiresAt;
        console.log(this.accessToken, this.idToken ); 
        if ( this.accessToken && this.idToken )
            return true;
        else
            return false;
    }
}

export default AuthService;
