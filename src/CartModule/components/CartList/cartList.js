import React from 'react';
import CartItem from  '../CartItem/';
import {observer} from 'mobx-react';
import {v4 as uuidv4 } from 'uuid';

@observer
class CartList extends React.Component{
    renderCartItems = ()=>
    {
        const {productsInCart,getProductDetailsById,onRemoveCartItem}=this.props;
        
        let itemsArray = [];
        productsInCart.forEach((eachItem)=>{
                     itemsArray.push(<CartItem key={uuidv4()} cartItem={eachItem}
                     getProductDetailsById={getProductDetailsById}
                     onRemoveCartItem={onRemoveCartItem}/>);
        });
        return itemsArray;
    }
    render(){
        return(
            <div>
                {this.renderCartItems()}
            </div>
            );
    }
}
export {CartList};