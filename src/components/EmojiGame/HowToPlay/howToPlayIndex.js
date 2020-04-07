//-----------------howToPlayIndex.js----------

import styled from '@emotion/styled';
import tw from 'tailwind.macro';



const HowToPlayComponent=styled.div`
   ${tw `flex flex-col`}`

const HowToPlayText=styled.p`
   ${tw `text-xl font-bold `}`
   
const HowToPlayContent=styled.p`
    ${tw `text-lg  pl-5`}`
    
export {HowToPlayComponent,HowToPlayText,HowToPlayContent}