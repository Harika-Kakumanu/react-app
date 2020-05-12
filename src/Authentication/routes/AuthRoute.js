import React from 'react';
import {Route} from 'react-router-dom';
import SignInRoute from './SignInRoute/';
import {E_COMMERCE_SIGN_IN_PATH} from '../constants/RouteConstants/'

const AuthRoutes=  <Route exact path={E_COMMERCE_SIGN_IN_PATH} component ={SignInRoute}/> ;

export default AuthRoutes;