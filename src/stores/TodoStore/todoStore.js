import { observable, action,computed } from 'mobx'

import TodoModel from '../models/todoModel'

// type todoObj = {
//     id:string,
//     title:string,
//     isCompleted : boolean
// }


class TodoStore{
    @observable todos ;
    @observable selectedFilter;
    
   constructor(){
       this.todos=[];
       this.selectedFilter='All';  
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
          let count=this.todos.filter(each=> {return each.isCompleted=== false})
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

const todoStore=new TodoStore();
export default todoStore;