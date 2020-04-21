import {create} from 'apisauce';
import {networkCallWithApisauce} from '../../utils/APIUtils'; //Wrapper
import {apiMethods} from '../../constants/APIConstants';
import usersResponse from '../../fixtures/getUsersResponse.json'

class UserFixtureService {
    
    getUsersApi(){
        return new Promise((resolve,reject)=>{
            resolve(usersResponse)
        })
    }
}

export default UserFixtureService;