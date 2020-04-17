//..........gridCell..............

import styled from '@emotion/styled';
import tw from 'tailwind.macro';
// import styled from 'styled-components';

const CellComponent = styled.div`${tw `flex flex-wrap w-20 h-20 m-1`}
    
    background:${(props)=>props.background};
     `;

    
export {CellComponent}


