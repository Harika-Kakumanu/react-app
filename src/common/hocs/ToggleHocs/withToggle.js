import React from 'react';
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';

function withToggle(WrappedComponent){
    
    return observer(
        class extends React.Component{
        @observable toggleStatus=''
        
        componentDidMount(){
            this.toggleStatus=false;
        }
        
        @action.bound
        onToggle(){
            this.toggleStatus=!this.toggleStatus;
        }
        
        render(){
            return(
                <WrappedComponent onToggle={this.onToggle} toggleStatus={this.toggleStatus}/>
                );
        }
    }
        )
}

export {withToggle};