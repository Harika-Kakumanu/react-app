import React from 'react'
import {SelectRegion} from './searchRegion.js';
import {SelectCountry} from './searchCountry.js';
import {Filter} from './countryStyle.js';

class CountriesFilterBar extends React.Component{
  render(){
        return(
            <Filter>
            <SelectCountry  filterCountriesBySearchText={this.props.filterCountriesBySearchText} selectedTheme='' />
            <SelectRegion  filterCountriesBySelectedRegion={this.props.filterCountriesBySelectedRegion} 
            regionOptions={this.props.regionOptions}  selectedTheme=''/>
            </Filter>
            )
    }
}

export{CountriesFilterBar}

