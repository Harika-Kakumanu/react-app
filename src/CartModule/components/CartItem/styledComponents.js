import styled from '@emotion/styled'; 
import tw from 'tailwind.macro';

const OuterDiv=styled.div `${tw `flex justify-around mt-20 h-32 w-500`}`

const ImageWithDetails=styled.div `${tw `flex `}`;

const ImageDisplay=styled.img `${tw `w-16 h-16`}`

const Title=styled.p `${tw `text-white text-lg`}`;

const Style=styled.p `${tw `text-gray-300`}`

const Quantity=styled.p `${tw `text-gray-300`}`;

const Details=styled.div `${tw `flex flex-col`}`

export {OuterDiv,ImageWithDetails,ImageDisplay,Title,Style,Quantity,Details} ;