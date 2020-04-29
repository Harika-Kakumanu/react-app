import styled from '@emotion/styled'; 
import tw from 'tailwind.macro';

const Cart=styled.button `${tw `absolute text-white bg-gray-800 text-5xl p-2`}`;

const CartProduct=styled.div `${tw `flex justify-center items-center relative`}`

const Count=styled.div `${tw `text-orange-500 absolute`}`

const DisplayCart=styled.div `${tw `flex bg-gray-800 flex-col h-screen w-300`}`;

const HeaderAndRemove=styled.div `${tw `flex`}`;

const RemoveButton=styled.button `${tw `text-xl`}`;

const Heading=styled.div `${tw `font-bold text-white`}`

const Content=styled.div `${tw `text-white`}`

const Footer=styled.div `${tw `flex`}`;

const Total =styled.div `${tw `text-lg text-gray-400`}`

const Price=styled.div `${tw `text-orange-500`}`;

const CheckOutButton= styled.button `${tw `py-2 px-4 text-gray-400`}`

 export {CartProduct,Cart,Count,DisplayCart,
    HeaderAndRemove,RemoveButton,Heading,Content,Footer,Total,Price,CheckOutButton}
