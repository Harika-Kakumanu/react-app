import React from 'react';
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';

import {Todo} from '../Todo/todo.js';

import todoStore from '../../../stores/TodoStore/todoStore.js'

@observer
class TodoList extends React.Component{
    
    render(){
        
        const {todos,onRemoveTodo,onCompleteTodo}=this.props;
        return(
            <div>
            {todos.map((eachTodo)=>
                <Todo id={eachTodo.id} key={eachTodo.id} title={eachTodo.title} onRemoveTodo={onRemoveTodo}
                 isCompleted={eachTodo.isCompleted}   onCompleteTodo={onCompleteTodo} ></Todo>
            )}
                 
           </div>
           
            )
    }
}

export {TodoList}