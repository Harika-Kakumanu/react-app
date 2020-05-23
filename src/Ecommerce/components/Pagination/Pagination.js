import React from 'react';
import {PaginationPage,PreviousPage,NextPage,PresentPage,Between,NoOfPages} from './styledComponents.js'

class Pagination extends React.Component{
    render(){
        return(
            <PaginationPage>
                <PreviousPage onClick={''}>&lt;</PreviousPage>
                <PresentPage>{}</PresentPage>
                <Between>/</Between>
                <NoOfPages>{}</NoOfPages>
               <NextPage onClick={''}>&gt;</NextPage>
            </PaginationPage>
            );
    }
}

export {Pagination};