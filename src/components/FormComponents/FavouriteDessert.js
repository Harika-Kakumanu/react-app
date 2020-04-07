import React from 'react'
import './formcomponents.css'
class FavouriteDessert extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedDessert:'',
            favoriteDessert:'',
        }
    }
     handleUserInput=(event)=>{
         this.setState({
             selectedDessert:event.target.value,
             })
     }
    handleSubmit=(event)=>{
 event.preventDefault();
        
    }
    
    displayMessage=()=>{
        this.setState({
            favoriteDessert:`My Favourite Dessert is ${this.state.selectedDessert.toUpperCase()}`
            })
        
    }
    renderDessertOptions=(props)=>{
     return (this.props.dessertList.map((eachdessert)=>{
           return <div>
           <input type='radio' value={eachdessert} id={eachdessert} name='dessertList'/>
           <label  for={eachdessert}>{eachdessert}</label>
           </div>
       })) 
    }
    
    render(){
        console.log(this.props.dessertList)
        return(
            <div className='greetings-div'>
            <form onSubmit='this.handleSubmit'>
                <ul className='ul-class' onChange={this.handleUserInput}>
                    <li>{this.renderDessertOptions()}</li>
                </ul>
            </form>
            <button type='Submit' className='dessert-button-class' onClick={this.displayMessage}>Make YourChoice</button>
          <p>{this.state.favoriteDessert}</p>
            </div>
        )
    }
}
export {FavouriteDessert}
