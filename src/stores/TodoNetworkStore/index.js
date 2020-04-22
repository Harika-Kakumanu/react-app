import { observable, action,computed } from 'mobx';
import {API_INITIAL,API_FETCHING,API_SUCCESS,API_FAILED} from '@ib/api-constants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
//import TodoService from '../../services/TodoService/index.api'
import TodoModel from '../models/todoModel';

class TodoNetworkStore{
    @observable todos ;
    @observable selectedFilter;
    @observable getTodoApiStatus;
    @observable getTodoApiError;
    todoService
    
   constructor(todoService){
       this.todoService=todoService;
       this.init();
       
   }
   
   @action.bound
   init(){
       this.todos=[];
       this.selectedFilter='All';  
       this.getTodoApiStatus=API_INITIAL;
       this.getTodoApiError=null;
   }
   
   @action
   clearStore(){
       this.init();
   }
   
   @action.bound
   setTodoApiResponse(todoResponse){
       this.todos=todoResponse;
       //this.todos=todoResponse.map((todo)=>todo.title);
   }
   
   @action.bound
   setTodoApiError(error){
       this.getTodoApiError=error;
   }
   
   @action.bound
   setTodoApiStatus(apiStatus){
       this.getTodoApiStatus=apiStatus;
   }
   
   @action.bound
   getTodoApi(){
       const todoPromise=this.todoService.getTodoApi();
       return bindPromiseWithOnSuccess(todoPromise)
       .to(this.setTodoApiStatus,this.setTodoApiResponse)
       .catch(this.setTodoApiError)
   }
   
    @action.bound
    onAddTodo(title){
      const  newObject={
            id:Math.random().toString(), 
            title,
            isCompleted:false,
        }
       const todoModel=new TodoModel(newObject);
        this.todos.push(todoModel);
    }
    
   @computed get gettodos(){
        return this.todos;
    }
    
     @action.bound
     onRemoveTodo(id){
         this.todos = this.todos.filter((each) =>  each.id !== id);
     }
  
     @action.bound
     onChangeSelectedFilter(type){
      this.selectedFilter=type;
     }
     
    @action.bound 
    onClearCompleted(){
        let dupList=this.todos.slice(0);
        let newDupList =dupList.filter(each=>  each.isCompleted === false);
              this.todos=newDupList;
    }
   
    @action.bound
     @computed get ActiveTodosCount(){
          let count=this.todos.filter(each=> {return each.isCompleted=== false});
              return count.length;
      }
    
     @action.bound
     @computed get FilteredTodos(){
         if(this.selectedFilter === 'All'){
             return this.todos;
         }
         else if(this.selectedFilter === 'Active'){
             let todosActive = this.todos.filter((each)=>each.isCompleted === false);
             return todosActive;
         }
         else{
             let todosCompleted=this.todos.filter((each)=>each.isCompleted === true);
           return todosCompleted;
         }
      }
}

export default TodoNetworkStore;