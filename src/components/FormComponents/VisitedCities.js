import React from 'react'
import './formcomponents.css'
import {CheckboxWithLabel} from '../../common/component/CheckboxWithLabel.js'
let duplicateArray=[]
class VisitedCities extends React.Component{
    constructor(props){
        super(props);
        this.state={
            visitedCities:'',
            selectedCities:[],
            cityOptions:'',
         
        }
    }
    
    handleCheckboxClick=(event)=>{
        if(event.target.checked===true){
           duplicateArray=this.state.selectedCities;
            duplicateArray.push(event.target.value);
         //  console.log(duplicateArray);
            this.setState(()=>({
                selectedCities:duplicateArray,
            }))
        }
        else
        {
            let remove=duplicateArray.filter((city)=>{
                return city!==event.target.value
            })
            this.setState({
                  selectedCities:remove,
             })
        }
    }
    
    handleSubmit=(event)=>{
        event.preventDefault();
    }
    
     displayVisitedCitiesMessage=()=>{
         this.setState({
             visitedCities:`I have Visited these cities ${this.state.selectedCities}`
         })
     }
     renderCityOptions=()=>{
         return(
             <div>
                 {this.props.cityList.map((eachCity)=>
                        <CheckboxWithLabel label={eachCity} key={eachCity} handleCheckboxClick={this.handleCheckboxClick}/>
                 )}
             </div>
         )
     }
    render(){
       
        return(
            <div className='greetings-div'>
            <form onSubmit={this.handleSubmit}>
          {
          this.renderCityOptions()
          }
               <button className='submit-visited-class' onClick={this.displayVisitedCitiesMessage}>Make Your Choice</button>
            <p>{this.state.visitedCities}</p>
            
            </form>
         
          </div>)
        
            
    }
}
export {VisitedCities}
