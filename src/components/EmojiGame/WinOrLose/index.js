import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const WinOrLoseComponent=styled.div`
    ${tw `flex flex-col justify-center items-center`}`
    
const ScoreComponent=styled.p`
    ${tw `text-gray-600 text-lg font-bold`}`

const GameStateComponent=styled.p`
    ${tw `text-red-400 text-lg font-bold`}`

const PlayAgainButton=styled.button`
    ${tw `border bg-blue-400 text-white`}`
    
export {WinOrLoseComponent,ScoreComponent,GameStateComponent,PlayAgainButton} 