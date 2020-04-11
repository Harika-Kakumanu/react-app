import React from 'react'
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';

import todoStore from '../../../stores/TodoStore/todoStore.js'

import {AddTodoStyledComponent,InputTag} from './index.js'

@observer
class AddTodo extends React.Component{
    @observable todoTitle='';
    
    @action.bound
    onAddTodo(event){
        const {onAddTodo}=this.props
        if(event.key==='Enter'){
             this.todoTitle=event.target.value;
               event.target.value=''
             onAddTodo(event)
        }
    }
    
    @action.bound
    onChangeInput(event){
        this.todoTitle=event.target.value
    }
    
    render(){
       // const {onAddTodo}=this.props
        return(
            <AddTodoStyledComponent>
                <InputTag type='text' value={this.todoTitle} onKeyPress={this.onAddTodo} onChange={this.onChangeInput}></InputTag>
            </AddTodoStyledComponent>
            )
    }
}

export {AddTodo}