//...........grid memory game..............

import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const GridMemoryGameComponent=styled.div` ${tw `h-700 flex flex-col justify-center items-center`}
    background-color:${(props)=>props.theme==='Light'?'#ebf8ff':'#1a202c'};
    color:${(props)=>props.theme==='Light'?'black':'white'};
    border:${(props)=>props.theme==='Light'?'solid 1px black':'solid 1px white'}`
    
    

export {GridMemoryGameComponent}