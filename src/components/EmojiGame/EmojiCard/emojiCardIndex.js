import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const EmojiCardComponent=styled.div`
     ${tw `shadow-custom w-250 mx-4 my-10 bg-white`}`

const EmojiName=styled.p`
    ${tw `text-sm text-center pb-8 font-semibold`}`

export {EmojiCardComponent,EmojiName}