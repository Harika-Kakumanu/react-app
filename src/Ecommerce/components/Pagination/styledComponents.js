import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const PaginationPage=styled.div `${tw `w-500 h-300`}`;

const NextPage=styled.button `${tw `p-3`}`;

const PreviousPage=styled.button `${tw `p-3 border`}`;

const NoOfPages=styled.span `${tw ``}`;

const PresentPage=styled.span `${tw ``}`;

const Between=styled.span `${tw ``}`;


export {PaginationPage,PreviousPage,NextPage,PresentPage,Between,NoOfPages};