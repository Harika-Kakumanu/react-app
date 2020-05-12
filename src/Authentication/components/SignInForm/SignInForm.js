import React from 'react';
import {observer} from 'mobx-react';
import ReactLoading from 'react-loading';
import {API_FETCHING} from '@ib/api-constants';
import {DisplayErrorMessage,SignInPage,UserName,Password,SignInButton,Heading} from './styledComponents';

@observer
class SignInForm extends React.Component{
    render(){
        const {
            apiStatus,
            username,
            password,
            onChangePassword,
            onChangeUserName,
            onSignInClick,
            errorMessage
        }=this.props;
        
       return (
           <SignInPage>
                    <Heading>Sign in</Heading>
                     <UserName
                         type='text'
                         value={username}
                         placeholder='UserName'
                         onChange={onChangeUserName}/>
                    <Password 
                        type='password' 
                        placeholder='Password' 
                        onChange={onChangePassword} 
                        value={password}/>
                     <SignInButton  onClick={onSignInClick} 
                     label ={apiStatus === API_FETCHING?
                          "loading":'Sign In'}
                     
                     >
                     {apiStatus === API_FETCHING?
                            <ReactLoading type='spin' width='25px' height='25px' label='loading'/>
                    :'Sign In'
                     }</SignInButton>
                     
                     <DisplayErrorMessage >
                       {errorMessage}
                     </DisplayErrorMessage>
                 </SignInPage>
           );
    }}

 export { SignInForm };