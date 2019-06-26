import React, { Component } from 'react'
import auth0 from 'auth0-js';


class AuthService extends Component {

    auth0 = new auth0.WebAuth({
        domain: 'dev-rx0xlk6h.auth0.com',
        clientID: 'AcpBichZZwzS4c7neUWodRoxpwpcfVFv',
        responseType: 'token id_token',
        redirectUri: 'http://localhost:3000/callback',
    });

    getAccessToken = () => {
        return localStorage.getItem('accessToken');
    }

    getIdToken = () => {
        return localStorage.getItem('idToken');
    }

    getAuth0Id = () => {
        const sub = localStorage.getItem('sub');
        if( sub ){
            const auth0Id = sub.split('|')[1]
            console.log(auth0Id);
            return auth0Id;
        }
        return null;
    }
    
    login = (email,password) => {
        console.log('email',email);
        console.log('password',password);
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

    signup =  (email,password) => {
        console.log(email,password);
        return new Promise( (resolve,reject) => {
            this.auth0.signup({
                connection: 'Username-Password-Authentication',
                email: email,
                password: password
            }, (err,result) => {
                if(err)
                    reject(err);
                resolve(result);
                //this.login(email,password);
            });
        })
    }

    setSession = () => {
        this.auth0.parseHash( (err, authResult) =>  {
            if(err)
                console.log(err)
            else {
                console.log(authResult);
                window.location.hash = '';
                //localStorage.setItem('authResult',authResult)
                localStorage.setItem('accessToken',authResult.accessToken);
                localStorage.setItem('idToken',authResult.idToken);
                localStorage.setItem('sub',authResult.idTokenPayload.sub);

                //this.props.history.push('/')
                window.location.replace('/')
            }
        })
        //this.props.history.push('/')
    }

    logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('idToken');
        window.location.replace('/')
    }

    isAuthenticated = () => {
        console.log('accessToken',this.getAccessToken());
        console.log('idToken',this.getIdToken());
        if( this.getAccessToken() && this.getIdToken() )
            return true;
        else
            return false;
    }
}

export default AuthService;
