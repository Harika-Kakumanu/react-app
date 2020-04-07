import React from 'react'
import './formcomponents.css'
class DisableButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
             isDisableButtonChecked:false,
             showMessage:'',
             clickme:false,
        }
    }
    handleChange=()=>{
        if(this.state.isDisableButtonChecked===false)
        {
            this.setState({
               isDisableButtonChecked:true,
               showMessage:`i am Disabled`,
                clickme:true,
            })
        }
        else
        {
            this.setState({
                isDisableButtonChecked:false,
                showMessage:'',
                clickme:false
            })
        }
    }
    handleSubmit=(event)=>{
        event.preventDefault();
    }
    displayMessage=()=>{
        
            this.setState({
                showMessage:'Hi,I am an enabled'
            })
    }
    render(){
        return(
            <div className='greetings-div'>
                <form onSubmit={this.handleSubmit}>
                <input type='checkbox' checked={this.state.isDisableButtonChecked} onChange={this.handleChange} />
                <label>Disabled</label>
                <button onClick={this.displayMessage} disabled={this.state.clickme}>Click Me</button>
                <p>{this.state.showMessage}</p>
                </form>
            </div>)
    }
}
export {DisableButton}