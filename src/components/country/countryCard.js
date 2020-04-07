import React from 'react'
import './countrystyle.css'
import { withRouter } from "react-router-dom";
import {CountryCardStyle,CountryCardDetails} from './countryStyle.js'

class CountryCard extends React.Component{

    navigateToCountryDetailsPage=()=>{
      let {history}=this.props
      history.push(`/country-dashboard-app/details/${this.props.countryDetails.alpha3Code}`,this.props.countryDetails)
    }
    
    render(){
        const {countryDetails}=this.props
        return(
     <CountryCardStyle onClick={this.navigateToCountryDetailsPage}>
          <img src={countryDetails.flag} alt='' className='image'/>
           <CountryCardDetails>
            <div className='country-name'>{countryDetails.name}</div>
            <div><strong>Population:</strong>{countryDetails.population}</div>
            <p><strong>Region:</strong>{countryDetails.region}</p>
            <p><strong>Capital:</strong>{countryDetails.capital}</p>
          </CountryCardDetails>
      </CountryCardStyle>
            )
    }
}
export default withRouter (CountryCard)