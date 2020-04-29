import React from 'react';
import {observable} from 'mobx'
import {observer} from 'mobx-react';
import {v4 as uuidv4} from 'uuid';

class CartModel{
    @observable quantity;
     productId;
     cartItemId;
    
    constructor(props){
        this.productId=props;
        this.quantity=0;
        this.cartItemId=uuidv4();
    }
    
    incrementQuantity(){
        
    }
    
}
export default CartModel;