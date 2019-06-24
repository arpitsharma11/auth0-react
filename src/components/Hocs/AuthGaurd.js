import React, { Component } from 'react';
import Auth from '../../service/Auth';

export default OriginalComponent => {

    const auth = new Auth();

    class MixedComponent extends Component {
        checkAuth() {
            //console.log('auth',auth.isAuthenticated())
            if(window.location.pathname == '/login')
                if(auth.isAuthenticated())
                    this.props.history.push('/')

            if(window.location.pathname != '/callback')
                if(!auth.isAuthenticated())
                    this.props.history.push('/login')
        }

        componentDidMount() {
            this.checkAuth();
        }

        render() {
            return <OriginalComponent auth={auth} {...this.props} />;
        }
    }

  return MixedComponent
};