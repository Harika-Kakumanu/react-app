import React from 'react';
import {observer} from 'mobx-react';

function withPractise(WrappedComponent){
    return observer(
        class extends React.Component{
            
        }
    );
}

export {withPractise}