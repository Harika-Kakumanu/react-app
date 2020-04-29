
import React from 'react';
import {observer,inject} from 'mobx-react';
import LoadingWrapperWithFailure from '../../common/LoadingWrapperWithFailure'; 

import NoDataView from '../../common/NoDataView';
import {Todo} from '../Todo/';
import {TodoFooter} from '../TodoFooter/'
import {v4 as uuidv4 } from 'uuid';

@inject('todoNetworkStore')
@observer
class TodoAppNetwork extends React.Component{
 
      getTodosFromStore=()=>{
         return this.props.todoNetworkStore
      }
    componentDidMount(){
      this.doNetworkCalls();
   }
   
   doNetworkCalls=()=>{
    this.getTodosFromStore().getTodoApi();
   }
    
 
      
      
    onAddTodo=(event)=>{
         if(event.charCode===13 && event.target.value !==''){
          
             this.getTodosFromStore().onAddTodo(event.target.value,false)
              event.target.value=''
              
         }
    }
    
     onRemoveTodo=(id)=>{
      
         this.getTodosFromStore().onRemoveTodo(id);
     }
     
      onChangeSelectedFilter=(type)=>{
          this.getTodosFromStore().onChangeSelectedFilter(type);
      }
    
      onUpdateTodoTitle(){
          
      }
      
       renderTodoList=observer(()=>{
      const {todos}=this.getTodosFromStore();
    //  console.log("in index",this.getTodosFromStore().FilteredTodos,todos);
      // if(todos.length===0)
      //   return <NoDataView/>
      return(
          <div>
            <h1>Todos</h1>
             <input type='text' onKeyPress={this.onAddTodo} placeholder="What need to write"/>
             {todos.length===0
             ?<NoDataView/>
             :(this.getTodosFromStore().FilteredTodos.map(eachTodo =>
             <Todo key={eachTodo.id} id={eachTodo.id} todo={eachTodo} isCompleted={eachTodo.isCompleted}
             onRemoveTodo={this.onRemoveTodo}></Todo>))}
             
             <TodoFooter onChangeSelectedFilter={this.onChangeSelectedFilter}/>
           </div>
         )
     })
     
     
      onClearCompleted(){
          
      }
    
    render(){
     
     const {getTodoApiError,getTodoApiStatus}=this.getTodosFromStore();
        return(
           <LoadingWrapperWithFailure key={uuidv4()} apiError={getTodoApiError} apiStatus={getTodoApiStatus}
            onRetryClick={this.doNetworkCalls} renderSuccessUI={this.renderTodoList}/> 
         
         )
    }
}

export {TodoAppNetwork}
