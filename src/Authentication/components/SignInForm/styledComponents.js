import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const SignInPage=styled.div`    
    ${tw `flex flex-col items-center bg-white m-auto mt-12 justify-center h-300 w-300`}`;

const Heading=styled.h3`
    ${tw `text-xl font-bold`}`;

const UserName=styled.input`
    ${tw ` my-3 py-3 bg-gray-200 pl-3`}`;

const Password=styled.input`
    ${tw `bg-gray-200 mb-3 py-3 pl-3`}`;

const SignInButton=styled.button`
    ${tw `bg-black text-white text-l px-20 py-3 rounded`}`;

const DisplayErrorMessage=styled.span `${tw `text-red-500`}`;


export {SignInPage,UserName,DisplayErrorMessage,Password,SignInButton,Heading};