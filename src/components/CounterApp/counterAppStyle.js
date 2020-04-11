import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const CounterAppComponent=styled.div `
    ${tw `flex flex-col justify-center items-center h-screen`}`

const HeaderText=styled.h1`${tw `text-5xl font-bold`}`

const Operation=styled.div`
    ${tw `flex mt-4 `}`

const Increment=styled.button`${tw `bg-blue-700 text-3xl font-semibold text-white rounded px-6`}`

const InputTag=styled.input`${tw `py-4  w-40 mx-3 border border-orange-400 font-semibold 
                        text-center text-2xl`}`

const Decrement=styled.button`${tw `bg-blue-700 text-3xl font-semibold text-white rounded px-6`}`



export {CounterAppComponent,Increment,InputTag,Decrement,Operation,HeaderText}