import React from 'react';
import {observer} from 'mobx-react';
import {v4 as uuidv4 } from 'uuid';
import Product from '../Product/';
import {ProductListDisplay} from './styledComponents.js';

@observer
class ProductList extends React.Component
{
    
    renderList=()=>{
        const {products,onClickAddToCart}=this.props;
        return products.map((eachProduct)=>{
          return(<Product key={uuidv4()} id={uuidv4()} productItem={eachProduct}
          onClickAddToCart={onClickAddToCart}/>);
       } );
    }
    
    render(){
        return(
            <ProductListDisplay>
            {this.renderList()}
            </ProductListDisplay>
            );
            
    }
}
export {ProductList};