//..........gridCell..............

import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const CellComponent = styled.button`${tw ``}
    margin:2px;
    background:${(props)=>props.gridColor};
    height:${(props)=>props.cellWidth}px;
    width:${(props)=>props.cellWidth}px;`

    
export {CellComponent};


