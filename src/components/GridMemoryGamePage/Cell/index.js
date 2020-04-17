//..........gridCell..............

import styled from '@emotion/styled';
import tw from 'tailwind.macro';
// import styled from 'styled-components';

const CellComponent = styled.div`${tw `flex flex-wrap  m-1`};
    height:${(props)=>props.cellWidth}px;
    width:${(props)=>props.cellWidth}px;
    background:${(props)=>props.background}`;

    
export {CellComponent};


