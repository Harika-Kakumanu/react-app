import React from 'react';
import {GoSearch} from "react-icons/go";
import {SearchCountry,SearchIcon,SearchInput} from './countryStyle.js';


class SelectCountry extends React.Component{

submit=(event)=>{
    this.props.filterCountriesBySearchText(event.target.value)
}
  render(){
      return (
          <SearchCountry  onChange={this.submit} >
              <SearchIcon><GoSearch/></SearchIcon>
             <SearchInput type='text' placeholder='Search for a country'/>
          </SearchCountry>
          )
  }
}
export{SelectCountry}