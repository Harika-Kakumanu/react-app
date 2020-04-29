import React from 'react';
import {observer} from 'mobx-react';
import {EachProduct,Image,CartButton,ProductTitle,ProductPrice,FreeShipping} from './styledComponents.js'

@observer
class Product extends React.Component{
    render(){
        const {productItem,onClickAddToCart}=this.props;
        return(
            <EachProduct>
                <FreeShipping>{productItem.isFreeShipping?'FreeShipping':''}</FreeShipping>
                <Image src={productItem.imageURL}/>
                <ProductTitle>{productItem.title}</ProductTitle>
                <ProductPrice>{productItem.price}</ProductPrice>
                <CartButton onClick={()=>onClickAddToCart(productItem.productId)}>Add To Cart</CartButton>
            </EachProduct>
            );
    }
}

export {Product}