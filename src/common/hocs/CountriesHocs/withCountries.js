import React from 'react';

function withCountries(WrappedComponent){
    return class extends React.Component{
        
        constructor(props){
            super(props);
              this.state={
                countries:[]
              };
        }
        
    componentDidMount(){
        fetch('https://restcountries.eu/rest/v2/all')
        .then((response) =>response.json())
        .then(this.getCountries);
    }
    
    getCountries=(allCountries)=>{
        this.setState({
            countries:allCountries,
            });
    }
        
    render(){
        
         if(this.state.countries.length){
             
             return <WrappedComponent countries={this.state.countries} {...this.props}/>;
         }
         else
         {
             return <div>Loading....</div>;
         }
    }
    };
}

export  {withCountries};