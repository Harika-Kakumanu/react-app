
import {observable,action} from 'mobx';
import {API_INITIAL} from '@ib/api-constants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import {setAccessToken,clearUserSession} from '../../../utils/StorageUtils.js';


class AuthStore{
    authApiService;
    @observable getSignInStatus
    @observable getSignInError
    
    constructor(authApiService){
        this.authApiService=authApiService;
        this.init();
    }
    
    init(){
       this.getSignInStatus='API_INITIAL';
       this.getSignInError=null; 
    }
    
     @action.bound
    setGetUserSignInAPIStatus(apiStatus){
        //console.log('apistatus',typeof(apiStatus))
        this.getSignInStatus=apiStatus;
    }
    
        @action.bound
    setGetUserSignInAPIError(error){
        this.getSignInError=error;
    }
    
    @action.bound
    setUserSignInAPIResponse(signInResponse){
         setAccessToken(signInResponse.length > 0 && signInResponse[0].access_token);
        //setAccessToken(signInResponse);
    }
    
    @action.bound
    userSignIn(){
       const authPromise=this.authApiService.signInAPI();
       return bindPromiseWithOnSuccess(authPromise)
        .to(this.setGetUserSignInAPIStatus,this.setUserSignInAPIResponse)
       
        .catch(this.setGetUserSignInAPIError)
    }
    
    
    @action.bound
    userSignOut(){
        clearUserSession();
        this.init();
    }
}
export { AuthStore };