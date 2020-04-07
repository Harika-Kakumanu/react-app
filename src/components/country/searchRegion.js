import React from 'react';
class SelectRegion extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedRegion:'All',
        }
    }
  onChangeSelectedRegion=(event)=>{
      this.setState(
          {selectedRegion:event.target.value}
          )
          this.props.filterCountriesBySelectedRegion(event.target.value)
  }  
  render(){
      return(
      <div>
      <select className='search-region' value={this.state.selectedRegion} onChange={this.onChangeSelectedRegion}>
           {this.props.regionOptions}
      </select>
      </div>    
      )
  }
}
export{SelectRegion}