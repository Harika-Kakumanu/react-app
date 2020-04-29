import styled from '@emotion/styled'; 
import tw from 'tailwind.macro';

const FreeShipping=styled.span `${tw `flex flex-end`}`;

const EachProduct=styled.div`${tw `h-400 w-200`}`;

const Image=styled.img`${tw `w-150`}`;

const ProductTitle=styled.p`${tw `text-center`}`

const ProductPrice=styled.p `${tw `text-center`}`

const CartButton=styled.button `${tw `bg-black text-white`}`;



export {EachProduct,Image,CartButton,ProductTitle,ProductPrice,FreeShipping} ;