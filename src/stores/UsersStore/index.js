import {observable,action} from 'mobx';
import {API_INITIAL,API_FAILED,API_SUCCESS,API_FETCHING} from '@ib/api-constants' ;
//import {create} from 'apisauce'
//import {networkCallWithApisauce} from '../../utils/APIUtils' //Wrapper
//import {apiMethods} from '../../constants/APIConstants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
//import UserService from '../../services/UserService/index.fixture'


class UserStore
{
    @observable getUsersApiStatus;
    @observable getUsersApiError
    @observable users
    userService
    
    constructor(userService){
        this.userService=userService
        this.init()
    }
    
    @action.bound
    init(){
        this.getUsersApiError=null;
        this.getUsersApiStatus=API_INITIAL;
        this.users=[]
    }
    
    @action
    clearStore(){
        this.init()
    }
    
    @action.bound
    setUsersApiResponse(usersResponse){
        this.users=usersResponse.map((user)=>user.name)
         //this.getUsersApiStatus=API_SUCCESS;
    }
    
    @action.bound
    setUsersApiError(error){
        this.getUsersApiError=error;
        // this.getUsersApiStatus=API_FAILED;
    }

    @action.bound
    setUsersApiStatus(apiStatus){
        this.getUsersApiStatus=apiStatus
    }
    
    @action.bound
    getUsersApi(){
        const usersPromise=this.userService.getUsersApi()
        // const api=create({
        //     baseURL:'https://jsonplaceholder.typicode.com/'
        // })
        // const usersPromise=networkCallWithApisauce(
        //     api,
        //     '/users/',
        //     {},
        //     apiMethods.get
        //     )
        return bindPromiseWithOnSuccess(usersPromise)
        .to(this.setUsersApiStatus,this.setUsersApiResponse)
        .catch(this.setUsersApiError);
        
      //  this.getUsersApiStatus=API_FETCHING;
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then((res)=>res.json())
        // .then(this.setUsersApiResponse )
        // .catch(this.setUsersApiError)
    }
}

// const userService =new UserService()  //creation of service



// const userStore=new UserStore(userService)

export default UserStore;