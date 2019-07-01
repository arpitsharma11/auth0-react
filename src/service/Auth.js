import React, { Component } from 'react'
import auth0 from 'auth0-js';


class AuthService extends Component {

    accessToken;
    idToken;
    expiresAt;
    //auth0Id;

    auth0 = new auth0.WebAuth({
        domain: 'dev-rx0xlk6h.auth0.com',
        clientID: 'AcpBichZZwzS4c7neUWodRoxpwpcfVFv',
        responseType: 'token id_token',
        redirectUri: 'http://localhost:3000/callback',
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
                audience: 'http://localhost:8080/graphiql',
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
        //this.expiresAt = expiresAt;
    }

    renewSession() {
        //console.log('check Session callled');
            return new Promise( (resolve,reject) => {
                this.auth0.checkSession({
                    audience: 'http://localhost:8080/graphiql',}, (err, authResult) => {
                    if (authResult && authResult.accessToken && authResult.idToken) {
                        this.setSessionData(authResult);
                        //localStorage.setItem('isLoggedIn', 'true');
                        //window.location.replace('/home');
    
                        resolve();
                    } else if (err) {
                        this.logout();
                        console.log(err);
                        window.location.replace('/');
                        localStorage.removeItem('isLoggedIn');
                        alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
                        reject();
                    }
                });
            } )
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
        console.log(this.accessToken && this.idToken ); 
        if ( this.accessToken && this.idToken )
            return true;
        else
            return false;
    }
}

export default AuthService;
