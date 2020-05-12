import React from 'react';
import ProductSort from '../ProductSort/';
import {observer} from 'mobx-react';
import {ProductsHeader,ProductsCount} from './styledComponents';

@observer
class Header extends React.Component{
    render(){
        const {productsCount,onSelectSortBy} =this.props;
        return(
            <ProductsHeader>
                <ProductsCount>{productsCount} product's found</ProductsCount>
                <ProductSort onSelectSortBy={onSelectSortBy}/>
            </ProductsHeader>
            );
    }
}
export {Header};