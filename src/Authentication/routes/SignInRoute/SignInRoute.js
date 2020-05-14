import React from 'react';
import {observable,action} from  'mobx';
import {observer,inject} from 'mobx-react';
import {getAccessToken} from '../../../utils/StorageUtils.js';
import SignInForm from '../../components/SignInForm/';

import { Redirect } from "react-router-dom";

import {
  E_COMMERCE_SIGN_IN_PATH,
  E_COMMERCE_PRODUCTS_PATH
} from "../../../constants/RouteConstants.js";


@inject('authStore')
@observer
class SignInRoute extends React.Component{
    
    passwordRef=React.createRef();
   
    @observable username
    @observable password
    @observable errorMessage

    constructor(props){
        super(props);
        this.username='';
        this.password='';
        this.errorMessage='';
    }
    
    getStore=()=>{
       return this.props.authStore;
    }
    
    @action.bound
    onChangeUserName(event){
        this.username=event.target.value;
    }
    
    @action.bound
    onChangePassword(event){
        this.password=event.target.value;
    }
    
    @action.bound
   async onSignInClick(){
         const {getSignInStatus}=this.props.authStore;
        let {history}=this.props;
        if(this.username !== '' && this.password !== '')
        {
            await this.getStore().userSignIn();
            if(getAccessToken() !== ''){
                history.replace(E_COMMERCE_PRODUCTS_PATH);
            }
        }
        else if(this.username===''){
            this.errorMessage='Please enter username';
        }
        else if(this.password===''){
            this.errorMessage='Please enter password';
            this.passwordRef.current.focus();
        }
        else{
            this.errorMessage='Please enter Valid data';
        }
    }
    
    render(){
        const {getSignInStatus}=this.props.authStore;
        return(
        <SignInForm username={this.username} 
                            apiStatus={getSignInStatus}
                            password={this.password}
                            errorMessage={this.errorMessage}
                            onChangeUserName={this.onChangeUserName}
                            onChangePassword={this.onChangePassword}
                            onSignInClick={this.onSignInClick}
                            passwordRef={this.passwordRef}
        />);
    }
}
export {SignInRoute};
