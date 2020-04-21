import React,{Component} from 'react';
import {observer,inject} from 'mobx-react';
import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure';
import NoDataView from '../common/NoDataView';
//import userStore from '../../stores/UsersStore';

//const userStore=stores.userStore
@inject('userStore')
@observer
class UsersPage extends Component{
    
    getUserStore=()=>{
       return this.props.userStore
    }
    
    componentDidMount(){
        this.doNetworkCalls();
    }
    
    doNetworkCalls=()=>{
        this.getUserStore().getUsersApi();
    }
    
    renderUserList=()=>{
        const {users}=this.getUserStore();
        if(users.length===0){
            return <NoDataView/>;
        }
        return users.map(userName=><div>{userName}</div>);
    }
    render(){
        const {getUsersApiStatus,getUsersApiError}=this.getUserStore() ;
        return(
             <LoadingWrapperWithFailure apiStatus={getUsersApiStatus} apiError={getUsersApiError}
        onRetryClick={this.doNetworkCalls} renderSuccessUI={this.renderUserList}/>
            );
    }
}

export default UsersPage;