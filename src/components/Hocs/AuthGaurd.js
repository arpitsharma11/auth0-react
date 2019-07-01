import React, { Component } from 'react';
import Auth from '../../service/Auth';

export default OriginalComponent => {

    const auth = new Auth();

    class MixedComponent extends Component {
        async checkAuth() {
            if( localStorage.getItem('isLoggedIn') === 'true' ){
                console.log('11123');
                auth.renewSession();
                if( window.location.pathname != '/signup' || window.location.pathname != '/login' || window.location.pathname != '/' )
                this.props.history.push('/home');
                console.log('567');
                    // .then( () => {
                    //     // if( window.location.pathname != '/signup' || window.location.pathname != '/login' || window.location.pathname != '/' )
                    //     //     this.props.history.push('/home');
                    // })
                    // .catch(() => {
                    // })
            } else {
                if( window.location.pathname === '/callback' )
                    return;
                if (window.location.pathname != '/signup' && window.location.pathname != '/login')
                    this.props.history.push('/');
            }
        }

        componentDidMount() {
        }

        componentWillMount(){
            this.checkAuth();
        }

        render() {
            return <OriginalComponent auth={auth} {...this.props} />;
        }
    }

  return MixedComponent
};