import React from 'react'
import {action} from 'mobx';
import {observer} from 'mobx-react';


@observer
class Todo extends React.Component{
    @action.bound
    onUpdateTodoTitle(event){
        this.props.todo.onUpdateTodoTitle(event.target.value)
    }
    
    onCheckedOrNot=()=>{
        this.props.todo.onCompleteTodo();
    }
    
    onRemoveTodo = (event)=>
    {
        this.props.onRemoveTodo(event.target.id)
    }
    
    render(){
        const {id,isCompleted}=this.props.todo;
        const {todo} = this.props;
        return(
            <div>
                  <input type='checkbox' id={id}  onChange={this.onCheckedOrNot} checked={isCompleted} />
                  <input type='text' className={isCompleted ?'strike':'not-strike'} defaultValue={todo.title}  />
                  <button id={id} onClick={this.onRemoveTodo}>X</button>
            </div>
            )
    }
}
export {Todo}