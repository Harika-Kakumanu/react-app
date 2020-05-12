import styled from '@emotion/styled'; 
import tw from 'tailwind.macro';

const MainProductPage =styled.div` ${tw `flex flex-col mx-10 my-3`}`;

const MainHeader=styled.div` ${tw ` flex justify-between`}`;

const SignOutButton=styled.button`${tw `w-20 h-8 border border-black rounded p-2`}`;

const DisplaySizesAndProducts=styled.div` ${tw ` flex`}`;

const Header=styled.div`${tw `bg-orange-200`}`;

const DisplayProducts=styled.div`${tw `w-700 bg-gray-200`}`;

const Products=styled.div`${tw `bg-teal-200`}`;

const BothListAndCart=styled.div `${tw `flex`}`

export {MainProductPage,MainHeader,Header,SignOutButton,DisplaySizesAndProducts,
    DisplayProducts,Products,BothListAndCart};