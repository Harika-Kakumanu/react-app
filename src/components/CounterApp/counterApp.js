import React from "react";

import {observable,action,reaction} from 'mobx';
import { observer } from 'mobx-react';

import {CounterAppComponent,Increment,InputTag,Decrement,HeaderText,Operation} from './counterAppStyle.js'

@observer
class CounterApp extends React.Component{
    @observable count=0;

@action.bound
onIncrement(){
    this.count++;
}   

 @action.bound
onDecrement(){
    this.count--;
}

display= reaction (
    ()=>{
      return this.count+10;
    },
    (value,reaction)=>{
        console.log('count is :',value);
        reaction.dispose();
    }
    
    )

@action.bound
onChangeCount(event){
    this.count=Number(event.target.value);
}

render(){
    return(
       
        <CounterAppComponent>
             <HeaderText>Counter</HeaderText>
             <Operation>
              <Increment onClick={this.onIncrement}>+</Increment>
              <InputTag type='number' onChange={this.onChangeCount} value={this.count}></InputTag>
              <Decrement onClick={this.onDecrement}>-</Decrement>
            </Operation>
        </CounterAppComponent>
        )
}
    
}

export {CounterApp}











