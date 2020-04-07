import React from 'react'
import './formcomponents.css'
class YourState extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedState:'',
            submittedState:'',
        }
    }
    handleChangeState=(event)=>{
        this.setState({
            selectedState:event.target.value,
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault();
    }
    displayMessage=()=>{
        this.setState({
            submittedState:`I am from "${this.state.selectedState}"`
        })
    }
    render(){
        return(
            <div className='greetings-div'>
            <form onSubmit={this.handleSubmit}>
                 <select value={this.state.selectedState} onChange={this.handleChangeState}>
               {this.props.stateList.map((eachState)=>{
                    return <option value={eachState}> {eachState}</option>
                 })}
              </select>
                <button onClick={this.displayMessage}>Submit</button>
                <p>{this.state.submittedState}</p>
            </form>
            </div>
          );
    }
}
export {YourState};
