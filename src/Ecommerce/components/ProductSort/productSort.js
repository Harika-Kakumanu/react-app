import React from 'react';
import {ProductSortSelect} from './styledComponents';
import {action} from 'mobx'
import {observer} from 'mobx-react';

@observer
class ProductSort extends React.Component{
    
    
    onSelectSortBy=(event)=>{
        const {onSelectSortBy}=this.props;
        onSelectSortBy(event.target.value);
    }
    
    render(){
        return(
       <label> Sort Price by:
       <select onChange={this.onSelectSortBy}>
       <option>Select</option>
       <option>Lowest to highest</option>
       <option>Highest to lowest</option>
       </select>
       </label>
            );
    }
}
export {ProductSort};