import React, { Component } from 'react';
import Auth from '../../service/Auth';

export default OriginalComponent => {

    const auth = new Auth();

    class MixedComponent extends Component {
        async checkAuth() {
            if (localStorage.getItem('isLoggedIn') === 'true' ) {
                await auth.renewSession().then( res => {
                console.log('auth',auth.isAuthenticated())
                auth.test();
                if(window.location.pathname == '/login' && window.location.pathname == '/signup' && window.location.pathname == '/')
                    if(auth.isAuthenticated())
                        this.props.history.push('/home')

                if(window.location.pathname != '/callback')
                    if(!auth.isAuthenticated())
                        this.props.history.push('/')
                }).catch( err => {

                });
            } else {
                if(window.location.pathname != '/signup' && window.location.pathname != '/login')
                    this.props.history.push('/');
            }
        }

        componentDidMount() {
            this.checkAuth();
        }

        componentWillMount(){
            //this.checkAuth();
        }

        render() {
            return <OriginalComponent auth={auth} {...this.props} />;
        }
    }

  return MixedComponent
};