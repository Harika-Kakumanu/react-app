import React from 'react'
import CountryCard from './countryCard.js'
import './countrystyle.css'
class Countries extends React.Component{
  renderCountries=()=>{
      const {countries}=this.props
      let temp=countries.map((eachCountry)=>
        <CountryCard countryDetails={eachCountry} key={eachCountry.name}/>)
      return temp;
  }
          
    render(){
        return(
            <div className='countries-component'>
            {this.renderCountries()}
            </div>
            
        )
    }
}
export{Countries}