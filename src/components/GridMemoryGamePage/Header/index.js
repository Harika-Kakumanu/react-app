//..........header.............

import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const TopLevelComponent=styled.p`
    ${tw `flex justify-center text-xl mb-12 items-center`}`;

const LevelAndTheme=styled.div`
    ${tw `w-350 flex justify-around mb-6 items-center mt-4 `}`;
    
const HeaderComponent=styled.div`
    ${tw `mt-4`}`  ;  
    
const LevelComponent=styled.p`
    ${tw `text-xl`}`;

const Button=styled.button` ${tw `text-xl p-2 rounded`}
     background-color:${(props)=>props.theme==='Light'?'#ebf8ff':'#1a202c'};
    color:${(props)=>props.theme==='Light'?'black':'white'};
    border:${(props)=>props.theme==='Light'?'solid 1px black':'solid 1px white'}`

export {TopLevelComponent,LevelAndTheme,HeaderComponent,Button,LevelComponent}

