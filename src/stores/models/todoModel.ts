// import React, { Component } from 'react'
import { observable, action } from 'mobx';
//import { observer } from 'mobx-react';
//import todoStore from '../TodoStore/todoStore.js'

class TodoModel{
    @observable title;
    @observable isCompleted;
    id
    
    constructor(newObject){
        this.id=newObject.id;
        this.title=newObject.title;
        this.isCompleted=newObject.isCompleted;
    }
    
    onUpdateTodoTitle(value){
        this.title=value;
    }
    
    @action.bound
    onCompleteTodo(){
        this.isCompleted = !this.isCompleted;
    }
}

export default TodoModel;