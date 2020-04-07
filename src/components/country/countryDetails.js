import React from 'react'
import './countrystyle.css'
import { withRouter } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import {Header} from './Header.js';
import {NavigateToBack,EachCountryDetails,ImageVersion2,
        CountryName,BorderButton,BorderCountries} from './countryStyle.js';

class CountryDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
            countryDetails:[],
            alpha3Code:'',
            presentCountry: {}
        }
    }
    componentDidMount=()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then((response) =>response.json())
        .then(this.getCountries)
        this.setState({presentCountry: this.props.location.state});
    }
    
    getCountries=(allCountries)=>{
        this.setState({
            countryDetails:allCountries,
        })
    }

    navigateBack=()=>{
        let {history}=this.props;
        history.goBack('/country-dashboard-app/')
    }
    
    navigateToSelectedBorderCountry=(e)=>{
        let newCountry=this.state.countryDetails.filter(eachCountry=>
            eachCountry.alpha3Code === e.target.value
        );
        this.setState({
            presentCountry:newCountry[0]
        });
    }
    
    eachBorderCountryName=(eachBorder)=>{
       let borderName= this.state.countryDetails.map(eachCountry=> {
            if(eachCountry.alpha3Code===eachBorder){
                return eachCountry.name;
            }
        });
        return borderName
    }
    
    getBorders = () => {
            const { presentCountry } = this.state;
        if(Object.keys(presentCountry).length !== 0) {
        const borders = presentCountry.borders.map(eachBorder=> {
               return <BorderButton onClick={this.navigateToSelectedBorderCountry}
                        key={eachBorder} value={eachBorder} className='borders-buttons'>
                        {this.eachBorderCountryName(eachBorder)}</BorderButton>
               });
        return borders;
        }
    }
    
    currency=()=>{
         const { presentCountry } = this.state;
        if(Object.keys(presentCountry).length!==0){
          const currenciesMethod=presentCountry.currencies.map(each=>{return each.name}).join(',')
             return currenciesMethod
        }
    }
    
    languages=()=>{
        const { presentCountry } = this.state;
        if(Object.keys(presentCountry).length!==0){
            const languages=presentCountry.languages.map(each=>{return each.name}).join(',');
            return languages;
        }
    }
    
    render(){
        const { presentCountry,countryDetails}=this.state;
        const{onChangeTheme,selectedTheme}=this.props;
         
         if(
             countryDetails.length!==0){
             
        
        return(
            <div className={selectedTheme}>
            <Header  onChangeTheme={onChangeTheme} selectedTheme={selectedTheme}/>
            <NavigateToBack className='arrow-icon' onClick={this.navigateBack}><IoIosArrowRoundBack/>Back</NavigateToBack>
           
            <EachCountryDetails>
     
             <ImageVersion2 src={presentCountry.flag} alt=''/>
     
        
            <div>
              <CountryName>{presentCountry.name}</CountryName>
              <p><strong>Native Name:</strong>{presentCountry.nativeName}</p>
              <p><strong>Population:</strong>{presentCountry.population}</p>
              <p><strong>Region:</strong>{presentCountry.region}</p>
              <p><strong>Sub Region:</strong>{presentCountry.subregion}</p>
              <p><strong>Capital:</strong>{presentCountry.capital}</p>
               <BorderCountries><strong>Border Countries:</strong>{this.getBorders()}</BorderCountries>               
            </div>

            <div className='domain-currency-languages'>
              <p><strong>Top Level Domain:</strong>{presentCountry.topLevelDomain}</p>
              <p><strong>Curriences:</strong>{this.currency()}</p>
              <p><strong>Languages:</strong>{this.languages()}</p>
            </div>
           
         </EachCountryDetails>
            </div>
        );
    }
    return <h1>Loading...</h1>
    }
}
export default withRouter (CountryDetails);