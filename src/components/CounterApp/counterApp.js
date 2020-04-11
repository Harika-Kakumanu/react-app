import React from "react";
import {observable} from 'mobx'
import {Provider,inject,observer} from 'mobx-react'

@inject('temp')
class A extends React.Component{
    
    render(){
        const {temp,name}=this.props;
        console.log('C temp',temp,name)
        return(
            <div>
                {temp}
             </div>
            )
    }
   
}


@inject('temp')
@observer
class B extends React.Component{
    @observable name=''
    onChange=(event)=>{
        this.name=event.target.value;
    }
    
    render(){
        const {temp}=this.props
        return(
            <div>
                <input type='text' style={{background:'green',margin:'30px'}} value={this.name} onChange={this.onChange} />
                <A name={this.name}/>
            </div>
            )
    }
}


class CounterApp extends React.Component{
    render(){
        return(
            <Provider temp={'value'}>
                <B temp={'from b'} />
            </Provider>
            )
    }
}

 export {CounterApp}


// import {observable,action,reaction} from 'mobx';
// import { observer } from 'mobx-react';

// import {CounterAppComponent,Increment,InputTag,Decrement,HeaderText,Operation} from './counterAppStyle.js'

// @observer
// class CounterApp extends React.Component{
//     @observable count=0;

// @action.bound
// onIncrement(){
//     this.count++;
// }   

//  @action.bound
// onDecrement(){
//     this.count--;
// }

// display= reaction (
//     ()=>{
//       return this.count+10
//     },
//     (value,reaction)=>{
//         console.log('count is :',value);
//         reaction.dispose();
//     }
    
//     )

// @action.bound
// onChangeCount(event){
//     this.count=Number(event.target.value);
// }

// render(){
//     return(
       
//         <CounterAppComponent>
//              <HeaderText>Counter</HeaderText>
//              <Operation>
//               <Increment onClick={this.onIncrement}>+</Increment>
//               <InputTag type='number' onChange={this.onChangeCount} value={this.count}></InputTag>
//               <Decrement onClick={this.onDecrement}>-</Decrement>
//             </Operation>
//         </CounterAppComponent>
//         )
// }
    
// }

// export {CounterApp}