//...........gamefield............

import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const GameFieldComponent=styled.div` ${tw `flex flex-wrap `};
    width:${props=>props.width.gridWidth}px`;
    
export {GameFieldComponent};