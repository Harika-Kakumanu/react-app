import React from 'react';
import {observer,inject} from 'mobx';
import {observable,action} from 'mobx-react';
import {ProductsPage} from '../../components/ProductsPage/';

    
@inject('productStore')
@observer
class ProductsRoute extends React.Component{
    @observable displayCart='';
    
    
    render(){
        
    }
}
export {ProductsRoute};