import React from 'react'
import './formcomponents.css'
class Greetings extends React.Component{
   constructor(props){
       super(props);
        this.state={
        userInputText:'',
        displayName:'',
    };
    }
    
    handleUserInput=(event)=>{
        this.setState({userInputText:event.target.value,})
    }
    handleSubmit=()=>{
          this.displayMessage();
          this.setState({
              userInputText:'',
             } )
    }
    displayMessage=()=>{
       this.setState({
           displayName:`Hello ${this.state.userInputText},Have a nice day`,
           });
       
    }
    onSubmitForm=(event)=>{
        event.preventDefault();
    }
    render(){
        return(
            <div className='greetings-div'>
            <form onSubmit={this.onSubmitForm}>
            <input value={this.state.userInputText} placeholder='Enter the Name' className='greetings' onChange={this.handleUserInput}/>
            <button className='submit-class' type='submit' onClick={this.handleSubmit}>Submit</button>
            <p value={this.state.displayName}>{this.state.displayName}</p>
            </form>
            </div>
    )}
}

export {Greetings}