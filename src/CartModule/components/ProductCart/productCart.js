import React from 'react';
import {observable} from 'mobx';
import {observer,inject} from 'mobx-react';
import { FiShoppingCart } from "react-icons/fi";
import CartList from '../CartList/'
 import {CartProduct,Cart,Count,DisplayCart,
    HeaderAndRemove,RemoveButton,Heading,Content,Footer,Total,Price,CheckOutButton} from './styledComponents.js';

@inject('cartStore')
@observer
class ProductCart extends React.Component{
    
    @observable shouldDisplayCart=false;
    
    getCartStore=()=>{
        return this.props.cartStore;
    }
    
    showCart=()=>{
        this.shouldDisplayCart=true;
    }
    
    hideCart=()=>{
        this.shouldDisplayCart=false;
    }
    
    render(){
        return(
            <CartProduct>
                <Cart onClick={this.showCart}>
                    <FiShoppingCart/>
                   </Cart>
                   <Count>0</Count>  
                
            {this.shouldDisplayCart?
                    <DisplayCart>
                        <HeaderAndRemove>
                            <RemoveButton onClick={this.hideCart}>X</RemoveButton>
                            <Heading>
                                <Cart onclick={this.showCart}>
                                      <FiShoppingCart/>
                                 </Cart> 
                                 Cart
                            <Count>0</Count> 
                            </Heading>
                        </HeaderAndRemove>
                        <Content>
                        {this.getCartStore().cartProductList.length===0
                        ?'Add some products in the Cart'
                        :<CartList productsInCart={this.getCartStore().cartProductList}
                        getProductDetailsById={this.getCartStore().getProductDetailsById}
                        onRemoveCartItem={this.getCartStore().onRemoveCartItem}></CartList>    
                        }
                            
                        </Content>
                        <Footer>
                            <Total>SUBTOTAL</Total>
                            <Price>0</Price>
                        </Footer>
                        <CheckOutButton>CheckOut</CheckOutButton>
                    </DisplayCart>
            :''   
            }
            </CartProduct>
            )}
}
export {ProductCart};