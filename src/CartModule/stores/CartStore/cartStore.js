import React from 'react';
import {observable,computed} from 'mobx';
import CartModel from '../models/CartModel/cartModel.js';

class CartStore{
    @observable cartProductList=[];
    @observable productStore;
    
    constructor(productStore){
        this.productStore=productStore;
    }
    
    onClickAddToCart=(productId)=>{
        const cartModel=new CartModel(productId);
        this.cartProductList.push(cartModel);
      // console.log('cartStore',this.cartProductList);

    }
    
    onRemoveCartItem=()=>{
        
    }
    
    clearCart=()=>{
        
    }
    
    getProductDetailsById=(productId)=>{
        return this.productStore.productList.get(productId);
    }
    
    @computed get totalCartAmount(){
        
    }
    
    @computed get noOfProductsInCart(){
        
    }
    
}
export {CartStore};