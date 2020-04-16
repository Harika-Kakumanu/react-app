//..........header.............

import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const TopLevelComponent=styled.p`
    ${tw `flex justify-center items-center`}`

const LevelAndTheme=styled.div`
    ${tw `w-350 flex justify-between items-center mt-4 `}`
    
const HeaderComponent=styled.div`
    ${tw `mt-4`}`    
    
const Button=styled.button`
    ${tw `border border-black rounded p-2`}`
export {TopLevelComponent,LevelAndTheme,HeaderComponent,Button}


// <button background="green"/> 
// background:${(props)=> props.background};