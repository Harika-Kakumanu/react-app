import { observable, action,computed } from 'mobx'

import TodoModel from '../models/todoModel'

type todoObj = {
    id:string,
    title:string,
    isCompleted : boolean
}


class TodoStore{
    @observable todos : Array<TodoModel>;
    @observable selectedFilter:string;
    
   constructor(){
       this.todos=[];
       this.selectedFilter='All';  
   }
   
    @action.bound
    onAddTodo(title:string){
      const  newObject:todoObj={
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
     onRemoveTodo(id:string){
         this.todos = this.todos.filter((each) =>  each.id !== id);
     }
  
     @action.bound
     onChangeSelectedFilter(type:string){
      this.selectedFilter=type;
     }
     
    @action.bound 
    onClearCompleted():void{
        let dupList=this.todos.slice(0);
        let newDupList =dupList.filter(each=>  each.isCompleted === false);
              this.todos=newDupList;
    }
   
    @action.bound
     @computed get ActiveTodosCount():number{
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
      
     
     
    //  @action.bound
    //  checkedTodo(eachobject){
    //      let dupList=this.todos.slice(0);
    //      let index=dupList.indexOf(eachobject);
    //      if(eachobject.isCompleted){
    //          dupList[index].isCompleted=false;
    //      }
    //      else{
    //          dupList[index].isCompleted=true;
    //      }
    //      this.todos=dupList;
    //  }



      
    //   @action.bound
    //   onCheckedOrNot(eachObject){
    //      if(eachObject.isCompleted){
    //          return true;
    //      }
    //      else
    //      {
    //          return false;
    //      }
    //  }
     
     
    //             @action.bound
    //  @computed get CompletedCount(){
    //       let count=this.todos.filter(each=> {return each.isCompleted !== false})
    //           return count.length;
    //   }
     
   
   
    //  alltodos=()=>{
    //      this.selectedFilter='all';
         
    //  }
    
     
    //  active=()=>{
    //      this.selectedFilter='active';
         
    //  }
     
      
    //  completed=()=>{
    //      this.selectedFilter='completed';
         
    //  }
    
    // todosAppFooter=()=>{
    //     if(this.todos.length>0){
    //         return true;
    //     }
    // }
    
}

const todoStore=new TodoStore();
export default todoStore;