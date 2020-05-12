import React from 'react';
import {observer} from 'mobx-react';
import {OuterDiv,ImageWithDetails,ImageDisplay,Title,Details,Style,Quantity} from './styledComponents'

@observer
class CartItem extends React.Component{
    
    onRemoveCartItem=()=>{
        
    }
    
    render(){
        
        const {getProductDetailsById,onRemoveCartItem,cartItem}=this.props;
        const product = getProductDetailsById(cartItem.productId);
        return(
            <OuterDiv>
            <ImageWithDetails>
               <ImageDisplay src={product.imageURL}></ImageDisplay>
                <Details>
                <Title>{product.title}</Title>
                <Style>{product.printStyle}</Style>
                <Quantity>Quantity: {0}</Quantity>
                </Details>
            </ImageWithDetails>
            </OuterDiv>
            );
    }
}

export {CartItem};
