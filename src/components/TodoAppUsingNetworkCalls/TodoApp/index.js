
import React from 'react';
import {action} from 'mobx';
import {observer,inject} from 'mobx-react';
import LoadingWrapperWithFailure from '../../common/LoadingWrapperWithFailure'; 

import NoDataView from '../../common/NoDataView';
import {Todo} from '../Todo/';
import {TodoFooter} from '../TodoFooter/'

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
    
   
   // getTodos=(allTodos)=>{
   //  const {todoNetworkStore}=this.props
   //     const fetchedTodos=allTodos;
   //     todoNetworkStore.todos=fetchedTodos.map(each=>{
   //       //console.log(each);
   //   })
   // }
 
    @action.bound
    onAddTodo(event){
         if(event.key==='Enter' && event.target.value !==''){
             this.getTodosFromStore().onAddTodo(event.target.value,false)
              event.target.value=''
         }
    }
    
     @action.bound
     onRemoveTodo(id){
         this.getTodosFromStore().onRemoveTodo(id);
     }
     
      @action.bound
      onChangeSelectedFilter(type){
          this.getTodosFromStore().onChangeSelectedFilter(type);
      }
    
      @action.bound
      onUpdateTodoTitle(){
          
      }
      
    //@action
     renderTodoList=()=>{
      const {todos}=this.getTodosFromStore();
      if(todos.length===0)
        return <NoDataView/>
        else{
          this.onAddTodo();
        }
      return(
          <div>
            <h1>Todos</h1>
             <input type='text' onKeyPress={this.onAddTodo} placeholder="What need to write"/>
            {this.getTodosFromStore().FilteredTodos.map(eachTodo =>
             <Todo key={eachTodo.id} id={eachTodo.id} todo={eachTodo} isCompleted={eachTodo.isCompleted}
             onRemoveTodo={this.onRemoveTodo}></Todo>)}
             <TodoFooter onChangeSelectedFilter={this.onChangeSelectedFilter}/>
           </div>
         )
     }
     
      @action.bound
      onClearCompleted(){
          
      }
    
    render(){
     
     const {getTodoApiError,getTodoApiStatus}=this.getTodosFromStore();
        console.log("originalTodo---->",getTodoApiStatus,getTodoApiError)
        return(
         <div>
           <LoadingWrapperWithFailure apiError={getTodoApiError} apiStatus={getTodoApiStatus}
            onRetryClick={this.doNetworkCalls} renderSuccessUI={this.renderTodoList}/> 
            
         </div>
         )
    }
}

export {TodoAppNetwork}



// 
  //