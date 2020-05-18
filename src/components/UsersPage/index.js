
// import React from "react";
// import { render } from "react-dom";
// import { observer } from "mobx-react";
// import { observable } from "mobx";

// class ThemeStore {
//   @observable selectedTheme = "dark";

//   onChange() {
//     console.log("onChange selectedTheme");
//     if (this.selectedTheme === "dark") {
//       this.selectedTheme = "light";
//     } else {
//       this.selectedTheme = "dark";
//     }
//   }
// }

// const themeStore = new ThemeStore();

// @observer
// class ThemeButton extends React.Component {
//   onChange() {
//     const { onChange } = this.props.themeStore;
//     onChange();
//   }

//   render() {
//     const { selectedTheme } = this.props.themeStore;
//     console.log("SelectedTheme:", selectedTheme);

//     return <button onClick={this.onChange}>Change theme</button>;
//   }
// }

// render( 
//     <ThemeButton themeStore={themeStore} />,
//   document.getElementById("root")
// );






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