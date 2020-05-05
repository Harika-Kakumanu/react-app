import React from 'react';
import {observable,action} from  'mobx';
import {observer,inject} from 'mobx-react';
import {v4 as uuidv4 } from 'uuid';
import { withRouter } from "react-router-dom";
import LoadingWrapperWithFailure from '../../../components/common/LoadingWrapperWithFailure'; 
import {getAccessToken} from '../../../utils/StorageUtils.js';
import NoDataView from '../../../components/common/NoDataView';
import SignInForm from '../../components/SignInForm/';

//import {DisplayErrorMessage,SignInPage,UserName,Password,SignInButton,Heading} from './styledComponents';

@inject('authStore')
@observer
class SignInRoute extends React.Component{
    
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
    
    onSignInClick=()=>{
        let {history}=this.props;
        if(this.username !== '' && this.password !== '')
        {
            this.getStore().userSignIn();
            if(getAccessToken !== ''){
                history.replace('/products-path');
            }
        }
        else if(this.username===''){
            this.errorMessage='Please enter username';
        }
        else if(this.password===''){
            this.errorMessage='Please enter password';
        }
        else{
            this.errorMessage='Please enter Valid data';
        }
    }
    
    // renderList=observer(()=>{
    //     return <SignInForm username={this.username} 
    //                         password={this.password}
    //                         errorMessage={this.errorMessage}
    //                         onChangeUserName={this.onChangeUserName}
    //                         onChangePassword={this.onChangePassword}
    //                         onSignInClick={this.onSignInClick}
    //                         />;
    // })
    
    render(){
        // const {getSignInStatus,getSignInError}=this.getStore();
        return(
        //     <LoadingWrapperWithFailure key={uuidv4()} apiError={getSignInError} apiStatus={getSignInStatus}
        //     onRetryClick={this.doNetworkCalls} renderSuccessUI={this.renderList}/> 
        //);
        <SignInForm username={this.username} 
                            password={this.password}
                            errorMessage={this.errorMessage}
                            onChangeUserName={this.onChangeUserName}
                            onChangePassword={this.onChangePassword}
                            onSignInClick={this.onSignInClick}
                            />);
    }
}


export {SignInRoute};
//export default withRouter(SignInRoute);




//  renderList=observer(()=>{
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
