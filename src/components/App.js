import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import auth0 from 'auth0-js';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Callback from '../pages/Callback';
import Auth from '../service/Auth';

const auth = new Auth();

function App() {
  return(
    <Router>
      <Route exact path="/" render={(props) => <Home auth={auth} {...props}  />} />
      <Route exact path="/login" render={(props) => <Login auth={auth} {...props}  />} />
      <Route exact path="/callback" render={(props) => <Callback auth={auth} {...props}  />} />
    </Router>
  )
}


export default App;
