import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const GameResultComponent =styled.div`
    ${tw `flex flex-col justify-center items-center`}`
    
const GameResultLevel=styled.p`
    ${tw `text-center text-2xl font-bold`}`
const GreetingsComponent=styled.p`
    ${tw `text-center text-green-400 my-5 text-2xl font-bold`}`

const Button =styled.button`
    ${tw `text-xl bg-blue-500 rounded p-3 text-white`}`
export {Button,GreetingsComponent,GameResultComponent,GameResultLevel}