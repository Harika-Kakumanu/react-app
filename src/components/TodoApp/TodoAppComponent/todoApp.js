import React from 'react';
import {action} from 'mobx';
import {observer} from 'mobx-react';

import todoStore from '../../../stores/TodoStore/todoStore'
 
import {Todo} from '../Todo/todo';
import {TodoFooter} from '../TodoFooter/todoFooter'

// type todoAppProps={
//   id:string,
//   isCompleted:boolean
//   onChangeSelectedFilter:Function
  
// }

@observer
class TodoApp extends React.Component{
 
   componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response)=>response.json())
    .then(this.getTodos)
   }
   
   getTodos=(allTodos)=>{
       const fetchedTodos=allTodos;
       todoStore.todos=fetchedTodos.map(each=>{
         console.log(each);
     })
   }
 
    @action.bound
    onAddTodo(event){
         if(event.key==='Enter' && event.target.value !==''){
             todoStore.onAddTodo(event.target.value)
              event.target.value=''
         }
    }
    
     @action.bound
     onRemoveTodo(id){
         todoStore.onRemoveTodo(id);
     }
     
      @action.bound
      onChangeSelectedFilter(type){
          todoStore.onChangeSelectedFilter(type);
      }
    
      @action.bound
      onUpdateTodoTitle(){
          
      }
    
     renderTodoList =()=>{
      //if(todoStore.FilteredTodos.len)
      console.log(todoStore.FilteredTodos)
         return todoStore.FilteredTodos.map(eachTodo =>
             <Todo key={eachTodo.id} id={eachTodo.id} todo={eachTodo} isCompleted={eachTodo.isCompleted} onRemoveTodo={this.onRemoveTodo}></Todo>
         )
     }
     
      @action.bound
      onClearCompleted(){
          
      }
    
    render(){

        return(
        <div>
              
            <h1>Todos</h1>
             <input type='text' onKeyPress={this.onAddTodo} placeholder="What need to write"/>
           
            {this.renderTodoList()}
          
            <TodoFooter onChangeSelectedFilter={this.onChangeSelectedFilter}/>
        </div>
        
         )
    }
}

export {TodoApp}