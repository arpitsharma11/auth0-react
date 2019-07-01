import React, { Component } from 'react';
import Auth from '../../service/Auth';

export default OriginalComponent => {

    const auth = new Auth();

    class MixedComponent extends Component {
        async checkAuth() {
            if( localStorage.getItem('isLoggedIn') === 'true' ){
                if( !auth.isAuthenticated() ){
                    auth.renewSession()
                    .then( () => {
                        if( window.location.pathname != '/signup' || window.location.pathname != '/login' || window.location.pathname != '/' )
                            this.props.history.push('/home');
                    })
                    .catch(() => {
                        alert('lol');
                    })
                } else {
                    if( window.location.pathname != '/signup' || window.location.pathname != '/login' || window.location.pathname != '/' )
                        this.props.history.push('/home');
                }
            } else {
                if( window.location.pathname === '/callback' )
                    return;
                if (window.location.pathname != '/signup' && window.location.pathname != '/login')
                    this.props.history.push('/');
            }
        }

        componentDidMount() {
            this.checkAuth();
        }

        componentWillMount(){
        }

        render() {
            return <OriginalComponent auth={auth} {...this.props} />;
        }
    }

  return MixedComponent
};