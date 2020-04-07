import React from 'react'
import './todo.css'

let count=0;
let duplicateItemsOfTodo=[];
let duplicateItemsOfTodo2=[];

class Input extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todo:[],
            
        }
    }
    enteringInput=(event)=>{
        if(event.key==="Enter")
        {
            if(event.target.value===''){
                alert('enter any todo value');
            }
            else{
                count=count+1
                duplicateItemsOfTodo={
                    value:event.target.value,
                        inputId:count,
                        checked:false,
                    
                }
             duplicateItemsOfTodo2.push(duplicateItemsOfTodo);
               event.target.value='';
                this.setState({
                   todo:duplicateItemsOfTodo2,
                })
            }
        }
    }
    
    
    
    
    
     selectTheCheckbox=(event)=>{
      if(event.target.checked===true){
          this.setState({
             // todo:this.state.todo.checked=false,
          })
      }
      else{
         this.setState({
            //  todo:this.state.todo.checked=true,
          }) 
      }
    }
    
    renderList =(event)=>{
       let displayItems= this.state.todo.map((eachItem)=>
            {
            return  <Todo value={eachItem.value} key={eachItem.inputId} id={eachItem.inputId} 
            checkbox={this.selectTheCheckbox}/>
            })
            return displayItems;
    };

    
    render(){
        
        return(
            <div className="outer-div">
            <div className="inner-div>">
            <input type="text" className="input-class" placeholder="What do you want to enter?" onKeyPress={this.enteringInput}></input>
            <div>
            {this.renderList()}
            </div>
            </div>
            </div>
    )}
}

// removeTodo=(event)=>{
//               count=count-1;
//               const prevStateIds=event.target.id;
//               const prevIds=this.state.items
//               const updatedItems=prevIds.filter((eachId,id)=>{
//             return parseInt(id)!==parseInt(prevStateIds)
//         })
        
//         this.setState((state)=>({
//             items:updatedItems,
//             todo:{
//                 todoItem:updatedItems,
//             }
//           }))
// }

// isSet=()=>{
//     this.setState({
//         items:this.state.items,
//     })
// }


    
    
    
    //     checkedState:true,
        //     className:'update-todo-input-class',
        //     disabled:true,
        //     todoInput:{
        //         checkBoxState:true,
        //         todoItem:this.props.items,
        //     }
            
        //     });
        //     this.props.isSet();
        // }
        // else
        // {
        //     count=count+1;
        //     this.setState({
        //     checkedState:false,
        //     className:'todo-input-class',
        //     disabled:false,
        //                 todoInput:{
        //         checkBoxState:false,
        //         todoItem:this.props.items,
        //     }
        //     });
        //     this.props.isSet();
        





   
class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            checkedState:false,
            className:'todo-input-class',
            disabled:false,
            todoInput:this.props.todoInput,
            
        };
    }

   render(){
    const {checkedState}=this.state;
    
        return (
            <div className='todo-class' id={this.props.id}>
            <input className="checkbox-class" type="checkbox" id={this.props.id} checked={checkedState} onChange={this.props.checkbox} />
            <input type='text' className={this.state.className} defaultValue={this.props.value} disabled={this.state.disabled}></input>
            <button className='remove-button' id={this.props.id} onClick={this.props.remove} >X</button>
            </div>
            )
    }
}

// class TodoList extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
            
//         }
//     }
//     activeState=()=>{
//         this.props.todoObject={
            
//         }
//     }
//     render(){
//       //  console.log(`Todo List items ${this.props.todoListItems}`);
//       // console.log(`checked item ${this.props.checkedstate}` )
//         return(
//           <div className='footer'>
//           <p className='count'>{count} items left</p>
//           <div className='three-elements'>
//           <a href='#' onClick={this.props.todoListItems}>All</a>
//           <a href='#' onClick={this.activeState}>Active</a>
//           <a href='#'>Completed</a>
//           </div>
//           <button className='clear-completed'>ClearCompleted</button>
//           </div>
//         )
//     }
// }

//ReactDOM.render(<Input/>,document.getElementById('root'));



export{Input}

            //  (this.props.todoListItems.filter((eachitem)=>{console.log(eachitem.checked)
            // // eachitem.this.props.checkedstate===true)?:)
                  
            //   })) <TodoList todoListItems={this.state.items}/>
            //  }
            
    