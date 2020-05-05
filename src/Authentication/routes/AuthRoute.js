import React from 'react';
import {Route} from 'react-router-dom';
import SignInRoute from './SignInRoute/';

const AuthRoutes=  <Route exact path='/sign-in-auth' component ={SignInRoute}/> ;

export default AuthRoutes;