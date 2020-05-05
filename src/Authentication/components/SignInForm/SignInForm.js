import React from 'react';
//import {observable,action} from  'mobx';
import {observer} from 'mobx-react';
//import {v4 as uuidv4 } from 'uuid';
//import { withRouter } from "react-router-dom";
//import LoadingWrapperWithFailure from '../../../components/common/LoadingWrapperWithFailure'; 
//import {getAccessToken} from '../../../utils/StorageUtils.js';
//import NoDataView from '../../../components/common/NoDataView';
import {DisplayErrorMessage,SignInPage,UserName,Password,SignInButton,Heading} from './styledComponents';


 @observer
class SignInForm extends React.Component{
    
    render(){
        const {
            username,
            password,
            onChangePassword,
            onChangeUserName,
            onSignInClick,
            errorMessage
            
        }=this.props;
       // console.log(typeof(onChangeUserName))
               return <SignInPage>
                    <Heading>Sign in</Heading>
                     <UserName
                         type='text'
                         placeholder='UserName'
                         value={username}
                         onChange={onChangeUserName}/>
                    <Password 
                        type='password' 
                        placeholder='Password' 
                        onChange={onChangePassword} 
                        value={password}/>
                     <SignInButton  onClick={onSignInClick}>Sign In</SignInButton>
                   
                     <DisplayErrorMessage >
                       {errorMessage}
                     </DisplayErrorMessage>

                 </SignInPage>;
    }}

 export { SignInForm };
 //{(this.errorMessage !== "") && (this.errorMessage !== undefined) ? () : null}
//     @observable username
//     @observable password
//     @observable errorMessage
    
//     constructor(props){
//         super(props);
//         this.username='';
//         this.password='';
//         this.errorMessage='';
//     }
    
//     getStore=()=>{
//       return this.props.authStore;
//     }
    
//     componentDidMount(){
//       this.doNetworkCalls();
//   }
    
//     doNetworkCalls=()=>{
//         this.getStore().userSignIn();
//     }
    
//     @action.bound
//     onChangeUserName(event){
//         this.username=event.target.value;
//     }
    
//     @action.bound
//     onChangePassword(event){
//         this.password=event.target.value;
//     }
    
//     onSignInClick=()=>{
//         let {history}=this.props;
//         if(this.username !== '' && this.password !== '')
//         {
//             this.getStore().userSignIn();
//             if(getAccessToken !== ''){
//                 history.replace('/products-path');
//             }
//         }
//         else{
//             this.errorMessage='Please enter Valid data';
//         }
       
//     }
    
//     renderList=observer(()=>{
//       return <SignInPage>
//                     <Heading>Sign in</Heading>
//                     <UserName type='text' placeholder='UserName' value={this.username} onChange={this.onChangeUserName}/>
//                     <Password type='password' placeholder='Password' onChange={this.onChangePassword}/>
//                     <SignInButton onClick={this.onSignInClick}>Sign in</SignInButton>
//                      {(this.errorMessage !== "") && (this.errorMessage !== undefined) ? (
                    
//             <DisplayErrorMessage >
//               {this.errorMessage}
//             </DisplayErrorMessage>
//           ) : null}
//                 </SignInPage>;
//     })
    
//     render(){
//         const {getSignInStatus,getSignInError}=this.getStore();
//         return(
//             <LoadingWrapperWithFailure key={uuidv4()} apiError={getSignInError} apiStatus={getSignInStatus}
//             onRetryClick={this.doNetworkCalls} renderSuccessUI={this.renderList}/> 
//         );
//     }
// }
// export { SignInForm };
