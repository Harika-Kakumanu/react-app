//---------------NavBar.js----------------------

import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const NavBarComponent=styled.div`
   ${tw `flex justify-between py-8 px-3 `}`

const ScoresComponent =styled.div`
   ${tw `flex justify-around `}`

const Button = styled.button`${tw`p-3 bg-blue-600`}`
   
export{NavBarComponent,ScoresComponent,Button}