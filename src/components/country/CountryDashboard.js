import React from 'react'
import {Header} from './Header.js';
import {CountriesFilterBar} from './Countriesfilterbar.js';
import {Countries} from './countries.js';

import './countrystyle.css'


class CountriesDashboardApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
        countries:[],
        selectedTheme:'Light',
        searchText:'',
        selectedRegion:'All',
        filterCountries:[],
        notFound:false,
        loading:false,
        }
    }
    
    componentDidMount(){
        fetch('https://restcountries.eu/rest/v2/all')
        .then((response) =>response.json())
        .then(this.getCountries)
    }
    
    getCountries=(allCountries)=>{
        this.setState({
            countries:allCountries,
            filterCountries:allCountries,
            loading:true,
            })
    }
    
    getRegionOptions=()=>{
        const regions=['All','Africa','Americas','Asia','Europe','Oceania']
        let temp= regions.map(eachRegion=>
              <option key={eachRegion} value={eachRegion}>{eachRegion}</option>
        )
      return temp;
    }
    
    filterCountriesBySelectedRegion=(Region)=>{
       const {searchText,countries}=this.state 
        if(Region==='All'){
            if(searchText==='')
            {
            this.setState(
               {filterCountries:countries,
                   selectedRegion:'All',
               })
            }
            else{
                let selectedCountriesbyText=countries.filter(eachCountry=>{
                return eachCountry.name.toLowerCase().includes(searchText);
            })
            this.setState({
                filterCountries:selectedCountriesbyText,
                selectedRegion:Region
            })
            }
        }
        else{
            if(searchText===''){
                 let selectedCountriesRegion=countries.filter(eachCountry=>{
              return  eachCountry.region.includes(Region);
            })
            }
           else{
                          
            let selectedCountriesRegion=countries.filter(eachCountry=>{
             return eachCountry.region.includes(Region) && eachCountry.name.toLowerCase().includes(searchText)
        })
         
         this.setState({
                filterCountries:selectedCountriesRegion,
                selectedRegion:Region
            })
         
           }
            
        }
    }

    filterCountriesBySearchText=(searchTextParam=>{
       const{selectedRegion,countries}=this.state;
       // searchText=searchText.charAt(0).toUpperCase()+searchText.slice(1).toLowerCase();
        searchTextParam=searchTextParam.toLowerCase();
        if(selectedRegion==='All'){
            let selectedCountriesbyText=countries.filter(eachCountry=>{
                return eachCountry.name.toLowerCase().includes(searchTextParam);
            })
            this.setState({
                filterCountries:selectedCountriesbyText,
                searchText:searchTextParam,
                },this.notFound)
        }
        else{
            let selectedCountriesbyText=countries.filter(eachCountry=>{
             return eachCountry.name.toLowerCase().includes(searchTextParam) && eachCountry.region===selectedRegion
        })
        this.setState({
                filterCountries:selectedCountriesbyText,
                searchText:searchTextParam,
        },
                this.notFound
            )
    }} )
        
      notFound=()=>{
          const {filterCountries}=this.state;
            if(filterCountries.length===0){
                this.setState({
                    notFound:true,
                })
            }
            else{
                this.setState({
                    notFound:false,
                })
            }

        }
        
      render(){
        const{filterCountries,loading,notFound}=this.state
        const{onChangeTheme,selectedTheme}=this.props
        
        if(loading){
        return(
            <div className={selectedTheme}>
            <Header onChangeTheme={onChangeTheme} selectedTheme={selectedTheme}/>
            <CountriesFilterBar regionOptions={this.getRegionOptions()} 
            filterCountriesBySearchText={this.filterCountriesBySearchText}
            filterCountriesBySelectedRegion={this.filterCountriesBySelectedRegion} />
            {this.state.notFound?<p className='not-found'>Country Not Found</p>:''}
              <Countries countries={filterCountries}/>
            </div>
            )
            
        }
        return(
            <div className={selectedTheme}>
            <Header onChangeTheme={onChangeTheme} selectedTheme={selectedTheme}/>
            <CountriesFilterBar regionOptions={this.getRegionOptions()} 
            filterCountriesBySearchText={this.filterCountriesBySearchText}
            filterCountriesBySelectedRegion={this.filterCountriesBySelectedRegion} />
            {notFound?<p className='not-found'>Country Not Found</p>:''}
            <div >Loading...</div>
           </div>
           ) 
      }
}
export default CountriesDashboardApp;