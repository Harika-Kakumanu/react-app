import React from 'react'
import {action} from 'mobx';
import {inject} from 'mobx-react'
//import todoStore from '../../../stores/TodoStore/todoStore'

@inject('todoNetworkStore')
class TodoFooter extends React.Component{
    
     @action.bound   
    onChangeSelectedFilter(event){
        if(event.target.name==='All'){
            this.props.onChangeSelectedFilter('All')
        }
        else if(event.target.name=== 'Active'){
            this.props.onChangeSelectedFilter('Active');
        }
        else{
            this.props.onChangeSelectedFilter('Completed')
        }
    }
    
    render(){
        const {todoNetworkStore}=this.props;
        return(
            <div>
                <p>{todoNetworkStore.ActiveTodosCount} items Left</p>
                <button onClick={this.onChangeSelectedFilter} name='All'>ALL</button>
                <button onClick={this.onChangeSelectedFilter} name='Active'>ACTIVE</button>
                <button onClick={this.onChangeSelectedFilter} name='Completed'>COMPLETED</button>
            </div>
            )
    }
    
}

export {TodoFooter}

