
import {observable,action} from 'mobx';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import {getAccessToken,setAccessToken,clearUserSession} from '../../../utils/StorageUtils.js';
import {API_INITIAL,API_FAILED,API_SUCCESS,API_FETCHING} from '@ib/api-constants';

class AuthStore{
    @observable getSignInStatus
    @observable getSignInError
    authApiService;
    
    constructor(authApiService){
        this.authApiService=authApiService;
        this.init();
    }
    
    @action.bound
    init(){
       this.getSignInStatus='API_INITIAL';
       this.getSignInError=null; 
    }
    
    @action.bound
    userSignIn(){
       const authPromise=this.authApiService.signInAPI();
       return bindPromiseWithOnSuccess(authPromise)
        .to(this.setGetUserSignInAPIStatus,this.setUserSignInAPIResponse)
        .catch(this.setGetUserSignInAPIError)
    }
    
    @action.bound
    setGetUserSignInAPIStatus(apiStatus){
        this.getSignInStatus=apiStatus;
    }
    
    @action.bound
    setGetUserSignInAPIError(error){
        this.getSignInError=error;
    }
    
    @action.bound
    setUserSignInAPIResponse(signInResponse){
       return setAccessToken(signInResponse);
    }
    
    @action.bound
    userSignOut(){
        clearUserSession();
    }
}
export default AuthStore;