
import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const HeaderStyle =styled.div`
      ${tw`bg-white flex justify-between items-center pt-10 pb-3 px-4`}`
      
const H3Tag=styled.h3`
     ${tw ` text-xl`}`
     
const Mode=styled.h3`
   ${tw `flex text-lg`}`

const Filter=styled.div`
   ${tw `flex py-10  justify-between items-center px-4 `}`
   
const SearchCountry=styled.div`
    ${tw `flex bg-white rounded-xl py-4`}`
    
const SearchIcon=styled.span`
     ${tw `px-3 pt-2 text-gray-500 `}`

const SearchInput=styled.input`
    ${tw `text-xl`}`

const CountryCardStyle=styled.div`
   ${tw `w-200 h-400 mb-4 ml-8 border  border-gray-300`}`
 
const CountryCardDetails=styled.div`
   ${tw `pl-4 flex flex-col h-150   justify-around`}`
   
const NavigateToBack=styled.button`
   ${tw `flex justify-center items-center border-0 rounded text-md 
   ml-4 mt-3 bg-white shadow border border-gray-300 p-2 `}`
   
const EachCountryDetails=styled.div`
    ${tw `flex mt-3 h-400`}`

const ImageVersion2=styled.img`
   ${tw `w-300 h-300 mr-3 border border-black`}`

const CountryDetailsMiddleDiv=styled.div`
    ${tw ` flex flex-col`}`
    
const CountryName=styled.h2`
     ${tw `font-bold text-xl`}`

const BorderCountries=styled.p`
      ${tw ``}`

const CombineDetails=styled.div`
     ${tw `w- flex`}`
const DomainCurrencyLanguages=styled.div`
     ${tw ``}`

const BorderButton=styled.button`
     ${tw `p-2 text-black text-10 m-2 border-solid border-black border rounded bg-white`}`
 export {HeaderStyle,H3Tag,Mode,Filter,SearchCountry,
       SearchIcon,SearchInput,CountryCardStyle,CountryCardDetails,
       NavigateToBack,EachCountryDetails,ImageVersion2,CountryDetailsMiddleDiv,BorderButton,CountryName,CombineDetails,BorderCountries}
       
