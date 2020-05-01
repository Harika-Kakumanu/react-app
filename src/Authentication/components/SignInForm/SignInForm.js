import React from 'react';
import {observable,action} from  'mobx';
import {observer,inject} from 'mobx-react';
import {v4 as uuidv4 } from 'uuid';
import { withRouter } from "react-router-dom";
import LoadingWrapperWithFailure from '../../../components/common/LoadingWrapperWithFailure'; 
import {getAccessToken,clearUserSession} from '../../../utils/StorageUtils.js';
import NoDataView from '../../../components/common/NoDataView';
import {SignInPage,UserName,Password,SignInButton,Heading} from './styledComponents';

@inject('authStore')
@observer
class SignInForm extends React.Component{
    
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
    
    componentDidMount(){
      this.doNetworkCalls();
   }
    
    doNetworkCalls=()=>{
        this.getStore().userSignIn();
    }
    

    
    @action.bound
    onChangeUserName(event){
        this.username=event.target.value;
    }
    
    @action.bound
    onChangePassword(event){
        this.password=event.target.value;
    }
    
    //@action.bound
    onSignInClick=()=>{
        let {history}=this.props
        if(this.username !== '' && this.password !== '')
        {
            this.getStore().userSignIn();
            if(getAccessToken !== ''){
                history.replace('/products-path');
            }
        }
        else
        {
            this.errorMessage='Please enter Valid data';
        }
       
    }
    
    renderList=()=>{
       return <SignInPage>
                    <Heading>Sign in</Heading>
                    <UserName type='text' placeholder='UserName' onChange={this.onChangeUserName}/>
                    <Password type='password' placeholder='Password' onChange={this.onChangePassword}/>
                    <SignInButton onClick={this.onSignInClick}>Sign in</SignInButton>
                    
                     {this.errorMessage !== "" && this.errorMessage !== undefined ? (
            <span >
              {this.errorMessage}
            </span>
          ) : null}
                    
                  
                </SignInPage>
    }
    
    render(){
        const {getSignInStatus,getSignInError}=this.getStore();
        return(
            <LoadingWrapperWithFailure key={uuidv4()} apiError={getSignInError} apiStatus={getSignInStatus}
            onRetryClick={this.doNetworkCalls} renderSuccessUI={this.renderList}/> 
            )
    }
}
export { SignInForm }

// className="text-red-700 mt-2 w-48 text-sm">

//   <span>{this.errorMessage}</span>