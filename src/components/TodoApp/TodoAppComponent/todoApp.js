import React from 'react';
import {observable,action,computed} from 'mobx';
import {observer} from 'mobx-react';

import todoStore from '../../../stores/TodoStore/todoStore.js'
 import {TodoModel} from '../../../stores/models/todoModel.js';
 
import {Todo} from '../Todo/todo.js';

//import {AddTodo} from '../AddTodo/addTodo.js';
//import {TodoList} from '../TodoList/todoList.js'
import {TodoFooter} from '../TodoFooter/todoFooter.js'

import {TodoAppStyledComponent} from './index.js'

@observer
class TodoApp extends React.Component{
    @action.bound
    onAddTodo(event){
         if(event.key==='Enter' && event.target.value !=''){
             //todoStore.onChangeSelectedFilter('all');
             todoStore.onAddTodo(event.target.value)
              event.target.value=''
         }
    }
    
     @action.bound
     onRemoveTodo(id){
         console.log(id);
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
         return todoStore.FilteredTodos.map(eachTodo =>
                 <Todo key={eachTodo.id} id={eachTodo.id} todo={eachTodo} isCompleted={eachTodo.isCompleted} onRemoveTodo={this.onRemoveTodo}></Todo>
         )
     }
     
       
      @action.bound
      onClearCompleted(){
          
      }
    
    //  onClearCompleted=()=>{
         
    //      todoStore.onClearCompleted();
    //  }
     
    //  todosAppFooter=()=>{
    //      if(todoStore.todosAppFooter()){
    //           <TodoFooter alltodos={this.alltodos} active={this.active} completed={this.completed} 
    //           onClearCompleted={this.onClearCompleted}></TodoFooter>
    //      }
    //  }
    
    

    //  alltodos=()=>{
    //      todoStore.alltodos();
    //  }
     
    //  active=()=>{
    //      todoStore.active();
         
    //  }
     
    //  completed=()=>{
    //      todoStore.completed();
    //  }
 
    

      
    //   @action.bound
    //  @computed getActiveTodosCount(){
    //       let count=todoStore.todos.filter(each=>
    //           each.isCompleted=== false)
    //           return count.length;
    //   }
      
    //   @action.bound
    //  @computed getFilteredTodos(){
    //      if(todoStore.selectedFilter === 'ALL'){
    //          return todoStore.todos;
    //      }
    //      else if(todoStore.selectedFilter === 'ACTIVE'){
    //          let todosActive = todoStore.todos.filter((each)=>each.isCompleted === false);
    //          return todosActive;
    //      }
    //      else{
    //          let todosCompleted=todoStore.todos.filter((each)=>each.isCompleted === true);
             
    //          return todosCompleted;
    //      }
         
          
    //   }
    render(){
        return(
        <div>
            <h1>Todos</h1>
             <input type='text' value={this.todoTitle} onKeyPress={this.onAddTodo} placeholder="What need to write"
             onChange={this.onChangeInput}/>
           
            {this.renderTodoList()}
          
            <TodoFooter onChangeSelectedFilter={this.onChangeSelectedFilter}/>
        </div>
        
         )
    }
}

export {TodoApp}